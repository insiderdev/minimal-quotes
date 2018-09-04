import { connect } from 'react-redux';
import { StatusBar, Alert } from 'react-native';
import { captureRef } from 'react-native-view-shot';
import Share from 'react-native-share';
import {
  compose,
  lifecycle,
  withHandlers,
  withState,
} from 'recompose';

import QuotesView from './QuotesView';
import {
  loadQuotes,
  newQuote,
  toggleBookmark,
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
      toggleBookmark: quote => dispatch(toggleBookmark(quote)),
    }),
  ),
  withState('isSharing', 'setIsSharing', false),
  withState('isMenuOpened', 'setIsMenuOpened', false),
  withHandlers(() => {
    let _containerRef = null;
    return {
      updateContainerRef: () => (ref) => {
        _containerRef = ref;
      },
      shareQuote: props => async () => {
        props.setIsSharing(true);

        setTimeout(async () => {
          if (_containerRef) {
            try {
              const uri = await captureRef(_containerRef, {
                format: 'jpg',
                quality: 1,
              });

              await Share.open({
                url: uri,
              });
            } catch (e) {
              if (e.error !== 'User did not share') {
                Alert.alert('Something went wrong', 'We are so sorry, but something unexpected happened :(');
              }
            } finally {
              props.setIsSharing(false);
            }
          }
        });
      },
    };
  }),
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
