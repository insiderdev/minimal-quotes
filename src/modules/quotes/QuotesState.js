/* eslint-disable no-case-declarations */
import _ from 'lodash';

const quotesData = require('./data');

const initialState = {
  quotesList: [],
  quotesLoaded: false,
  currentQuote: null,
};

const LOAD_QUOTES = 'QuotesState/LOAD_QUOTES';
const NEXT_QUOTE = 'QuotesState/NEXT_QUOTE';

// Load quotes from the json database into Redux store
export function loadQuotes() {
  return (dispatch) => {
    const modifiedQuotes = quotesData
      .quotes
      .map((quote, index) => ({
        ...quote,
        displayedTimes: 0,
        id: index,
      }),
      );

    dispatch({
      type: LOAD_QUOTES,
      payload: modifiedQuotes,
    });
  };
}

export function newQuote() {
  return (dispatch, getState) => {
    const allQuotes = getState().quotes.quotesList;

    // Step 1: Get random quote from quotes with minimum displayed times
    const notPopularQuotes = _.filter(
      allQuotes,
      quote => quote.displayedTimes === allQuotes[0].displayedTimes,
    );

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

export default function QuotesReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_QUOTES:
      return {
        ...state,
        quotesList: action.payload,
        quotesLoaded: true,
      };
    case NEXT_QUOTE:
      const quotesWithoutNew = _.filter(state.quotesList, q => q.id !== action.payload.nextQuote.id);
      const index = _.sortedIndexBy(quotesWithoutNew, action.payload.nextQuote, 'displayedTimes');
      quotesWithoutNew.splice(index, 0, action.payload.nextQuote);

      return {
        ...state,
        currentQuote: action.payload.nextQuote,
        quotesList: {
          ...quotesWithoutNew,
        },
      };
    default:
      return state;
  }
}
