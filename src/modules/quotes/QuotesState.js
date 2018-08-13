/* eslint-disable no-case-declarations,no-confusing-arrow */
import _ from 'lodash';
import Realm from 'realm';

const quotesData = require('./data');

export const BG_TYPES = {
  BG_WHITE: 'BG_WHITE',
  BG_BLACK: 'BG_BLACK',
  BG_RANDOM: 'BG_RANDOM',
};


// Realm schema of the quote
export const QuoteSchema = {
  name: 'Quote',
  primaryKey: 'id',
  properties: {
    quote: 'string',
    author: 'string',
    displayedTimes: { type: 'int', default: 0 },
    bookmarked: { type: 'bool', default: false },
    id: 'int',
    category: 'string',
    bgType: { type: 'string', optional: true, default: BG_TYPES.BG_WHITE },
  },
};

const initialState = {
  quotesLoaded: false,
  currentQuote: null,
  isDarkBg: false,
  bgType: BG_TYPES.BG_RANDOM,
  showFavorites: false,
  // TODO: Put it inside Realm db
  categories: {
    inspire: true,
    management: false,
    sports: false,
    life: false,
    funny: false,
    love: false,
    art: false,
    students: false,
  },
};

export const LOAD_QUOTES = 'QuotesState/LOAD_QUOTES';
export const NEXT_QUOTE = 'QuotesState/NEXT_QUOTE';
export const TOGGLE_BOOKMARK = 'QuotesState/TOGGLE_BOOKMARK';
export const CHANGE_BG_TYPE = 'QuotesState/CHANGE_BG_TYPE';
export const TOGGLE_CATEGORY = 'QuotesState/TOGGLE_CATEGORY';
export const SELECT_ALL_CATEGORIES = 'QuotesState/SELECT_ALL_CATEGORIES';

/**
 * Initial quotes loading into the redux store and fill Realm DB
 * @returns {Function} Dispatches LOAD_QUOTES action with new quotes
 */
export function loadQuotes() {
  return (dispatch) => {
    Realm.open({ schema: [QuoteSchema] })
      .then((realm) => {
        realm.write(() => {
          quotesData.quotes.forEach((quote, index) => {
            realm.create('Quote', {
              ...quote,
              author: quote.author || 'Unknown',
              displayedTimes: 0,
              bookmarked: false,
              id: index,
            });
          });
        });

        dispatch({
          type: LOAD_QUOTES,
        });
      });
  };
}

/**
 * Choosing the next quote for displaying.
 * @returns {Function} Dispatches NEXT_QUOTE action with the new quote
 */
export function newQuote() {
  return (dispatch, getState) => {
    const state = getState();

    Realm.open({ schema: [QuoteSchema] })
      .then((realm) => {
        // Get all quotes
        const quotes = realm.objects('Quote');

        // Create realm query with selected categories
        const filterExpression = Object.keys(state.quotes.categories)
          .reduce((accumulator, currentValue) => {
            if (state.quotes.categories[currentValue]) {
              if (accumulator.length === 0) {
                return `category = "${currentValue}"`;
              }
              return `${accumulator} OR category = "${currentValue}"`;
            }
            return accumulator;
          }, '');

        // Pick the next quote sorted by displayed times
        const nextQuote = quotes.filtered(filterExpression).sorted('displayedTimes')[0];

        realm.write(() => {
          nextQuote.displayedTimes += 1;

          dispatch({
            type: NEXT_QUOTE,
            payload: {
              nextQuote: JSON.parse(JSON.stringify(nextQuote)),
              index: nextQuote.id,
            },
          });
        });

        realm.close();
      });
  };
}

export function changeBgType(newBgType) {
  return {
    type: CHANGE_BG_TYPE,
    payload: newBgType,
  };
}

export function toggleBookmark(quoteToBookmark) {
  return (dispatch, getState) => {
    const state = getState();
    dispatch({
      type: TOGGLE_BOOKMARK,
    });
    Realm.open({ schema: [QuoteSchema] })
      .then((realm) => {
        const quote = realm.objects('Quote').filtered(`id = ${quoteToBookmark.id}`)[0];
        realm.write(() => {
          quote.bookmarked = !quote.bookmarked;
          quote.bgType = state.quotes.isDarkBg ? BG_TYPES.BG_BLACK : BG_TYPES.BG_WHITE;
        });

        realm.close();
      });
  };
}

export function toggleCategory(category) {
  return {
    type: TOGGLE_CATEGORY,
    payload: category,
  };
}

export function selectAllCategories() {
  return {
    type: SELECT_ALL_CATEGORIES,
  };
}

export default function QuotesReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_QUOTES:
      return {
        ...state,
        quotesLoaded: true,
      };
    case NEXT_QUOTE:
      return {
        ...state,
        currentQuote: action.payload.nextQuote,
        isDarkBg: state.bgType === BG_TYPES.BG_RANDOM ? !!_.random(0, 1) : state.isDarkBg,
      };
    case TOGGLE_BOOKMARK:
      return {
        ...state,
        currentQuote: {
          ...state.currentQuote,
          bookmarked: !state.currentQuote.bookmarked,
        },
      };
    case CHANGE_BG_TYPE:
      return {
        ...state,
        bgType: action.payload,
        // eslint-disable-next-line no-nested-ternary
        isDarkBg: action.payload === BG_TYPES.BG_WHITE ? false :
          (action.payload === BG_TYPES.BG_RANDOM ? state.isDarkBg : true),
      };
    case TOGGLE_CATEGORY:
      const isAllCategoriesSelected =
        // All categories
        Object.keys(state.categories)
          // Filtered by unselected
          .filter(c => !state.categories[c])
          // Length is greater than 0
          .length === 0;

      return {
        ...state,
        categories:
          // If all categories selected
          isAllCategoriesSelected ?
            {
              // Mark all as unselected
              ...Object.keys(state.categories).reduce((a, c) => ({ ...a, [c]: false }), {}),
              // Except this one
              [action.payload]: true,
            } :
            {
              ...state.categories,
              [action.payload]: !state.categories[action.payload],
            }
        ,
      };
    case SELECT_ALL_CATEGORIES:
      return {
        ...state,
        categories: {
          inspire: true,
          management: true,
          sports: true,
          life: true,
          funny: true,
          love: true,
          art: true,
          students: true,
        },
      };
    default:
      return state;
  }
}
