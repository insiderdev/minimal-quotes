/* eslint-disable no-case-declarations,no-confusing-arrow */
import _ from 'lodash';

const quotesData = require('./data');

export const BG_TYPES = {
  BG_WHITE: 'BG_WHITE',
  BG_BLACK: 'BG_BLACK',
  BG_RANDOM: 'BG_RANDOM',
};

const initialState = {
  quotesList: [], // All quotes in the app
  filteredQuotes: [], // Quotes with applied filters
  quotesLoaded: false,
  currentQuote: null,
  isDarkBg: false,
  bgType: BG_TYPES.BG_RANDOM,
  showFavorites: false,
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
export const TOGGLE_FAVORITES = 'QuotesState/TOGGLE_FAVORITES';
export const SELECT_ALL_CATEGORIES = 'QuotesState/SELECT_ALL_CATEGORIES';

/**
 * Initial quotes loading into the redux store
 * @returns {Function} Dispatches LOAD_QUOTES action with new quotes
 */
export function loadQuotes() {
  return (dispatch) => {
    // Modifying quotes array to add index and displayedTimes
    const modifiedQuotes = quotesData
      .quotes
      .map((quote, index) => ({
        ...quote,
        displayedTimes: 0,
        bookmarked: false,
        id: index,
      }));

    dispatch({
      type: LOAD_QUOTES,
      payload: _.shuffle(modifiedQuotes),
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
    const allQuotes = state.quotes.quotesList;

    let nextQuoteIndex = _.findIndex(allQuotes, (q) => {
      if (state.quotes.showFavorites) {
        return state.quotes.categories[q.category] && q.bookmarked;
      }
      return state.quotes.categories[q.category];
    });
    if (nextQuoteIndex < 0) nextQuoteIndex = 0;
    // As quotes sorted by displayedTimes, quote with index 0 would be
    // the quote with less views
    const nextQuote = allQuotes[nextQuoteIndex];
    nextQuote.displayedTimes += 1;

    dispatch({
      type: NEXT_QUOTE,
      payload: {
        nextQuote,
        index: nextQuoteIndex,
      },
    });
  };
}

export function changeBgType(newBgType) {
  return {
    type: CHANGE_BG_TYPE,
    payload: newBgType,
  };
}

export function toggleBookmark() {
  return {
    type: TOGGLE_BOOKMARK,
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

export function toggleFavorites() {
  return {
    type: TOGGLE_FAVORITES,
  };
}

export default function QuotesReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_QUOTES:
      return {
        ...state,
        quotesList: action.payload,
        quotesLoaded: true,
      };
    case NEXT_QUOTE:
      // TODO: Don't mutate this shit here
      _.pullAt(state.quotesList, action.payload.index);
      return {
        ...state,
        currentQuote: action.payload.nextQuote,
        quotesList: [
          ...state.quotesList,
          action.payload.nextQuote,
        ],
        isDarkBg: state.bgType === BG_TYPES.BG_RANDOM ? !!_.random(0, 1) : state.isDarkBg,
      };
    case TOGGLE_BOOKMARK:
      return {
        ...state,
        quotesList: [
          ..._.initial(state.quotesList),
          {
            ...state.currentQuote,
            bookmarked: !state.currentQuote.bookmarked,
          },
        ],
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
      return {
        ...state,
        categories: {
          ...state.categories,
          [action.payload]: !state.categories[action.payload],
        },
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
    case TOGGLE_FAVORITES:
      return {
        ...state,
        showFavorites: !state.showFavorites,
      };
    default:
      return state;
  }
}
