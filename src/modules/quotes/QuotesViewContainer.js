import { connect } from 'react-redux';
import { StatusBar } from 'react-native';
import {
  compose,
  lifecycle,
} from 'recompose';

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
      isDarkBg: state.quotes.isDarkBg,
    }),
    dispatch => ({
      loadQuotes: () => dispatch(loadQuotes()),
      newQuote: () => dispatch(newQuote()),
    }),
  ),
  lifecycle({
    componentDidMount() {
      StatusBar.setHidden(true);
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
