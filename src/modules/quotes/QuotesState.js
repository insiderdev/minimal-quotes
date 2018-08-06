/* eslint-disable no-case-declarations,no-confusing-arrow */
import _ from 'lodash';

const quotesData = require('./data');

const initialState = {
  quotesList: [],
  quotesLoaded: false,
  currentQuote: null,
  isDarkBg: false,
  categories: [
    { id: 0, name: 'inspire', selected: true },
    { id: 1, name: 'management', selected: true },
    { id: 2, name: 'sports', selected: true },
    { id: 3, name: 'life', selected: true },
    { id: 4, name: 'funny', selected: true },
    { id: 5, name: 'love', selected: true },
    { id: 6, name: 'art', selected: true },
    { id: 7, name: 'students', selected: true },
  ],
};

export const LOAD_QUOTES = 'QuotesState/LOAD_QUOTES';
export const NEXT_QUOTE = 'QuotesState/NEXT_QUOTE';
export const TOGGLE_BOOKMARK = 'QuotesState/TOGGLE_BOOKMARK';

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
      payload: modifiedQuotes,
    });
  };
}

/**
 * Choosing the next quote for displaying.
 * An algorithm for picking the next quote:
 *   - choose all quotes with minimum displayedTimes value
 *   - pick a random quote from this set
 * @returns {Function} Dispatches NEXT_QUOTE action with the new quote
 */
export function newQuote() {
  return (dispatch, getState) => {
    const allQuotes = getState().quotes.quotesList;

    // Step 1: Get random quote from quotes with minimum displayed times
    const notPopularQuotes = _.filter(
      allQuotes,
      quote => quote.displayedTimes === allQuotes[0].displayedTimes,
    );

    // Step 2: Choose a random quote
    const randomQuote = notPopularQuotes[_.random(0, notPopularQuotes.length - 1)];
    randomQuote.displayedTimes += 1;

    dispatch({
      type: NEXT_QUOTE,
      payload: {
        nextQuote: randomQuote,
      },
    });
  };
}

export function toggleBookmark(quote) {
  return {
    type: TOGGLE_BOOKMARK,
    quote,
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
      // Get an array of quotes without the new quote
      const quotesWithoutNew = _.filter(state.quotesList, q => q.id !== action.payload.nextQuote.id);
      // Get an index of a new quote in the sorted array by displayedTimes
      const index = _.sortedIndexBy(quotesWithoutNew, action.payload.nextQuote, 'displayedTimes');
      // Insert a new quote into sorted array
      quotesWithoutNew.splice(index, 0, action.payload.nextQuote);

      return {
        ...state,
        currentQuote: action.payload.nextQuote,
        quotesList: [
          ...quotesWithoutNew,
        ],
        isDarkBg: !!_.random(0, 1),
      };
    case TOGGLE_BOOKMARK:
      return {
        ...state,
        quotesList: state.quotesList.map(q => q.id === action.quote.id ?
          {
            ...q,
            bookmarked: !action.quote.bookmarked,
          } : q,
        ),
        currentQuote: {
          ...state.currentQuote,
          bookmarked: !state.currentQuote.bookmarked,
        },
      };
    default:
      return state;
  }
}
