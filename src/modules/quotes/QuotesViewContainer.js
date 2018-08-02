import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import QuotesView from './QuotesView';
import {
  loadQuotes,
  newQuote,
} from './QuotesState';

export default compose(
  connect(
    state => ({
      quotes: state.quotes.quotesList,
      quotesLoaded: state.quotes.quotesLoaded,
      currentQuote: state.quotes.currentQuote,
    }),
    dispatch => ({
      loadQuotes: () => dispatch(loadQuotes()),
      newQuote: () => dispatch(newQuote()),
    }),
  ),
  lifecycle({
    componentDidMount() {
      if (!this.props.quotesLoaded) {
        this.props.loadQuotes();
      }
    },
    componentDidUpdate() {
      if (this.props.quotesLoaded && !this.props.currentQuote) {
        this.props.newQuote();
      }
    },
  }),
)(QuotesView);
