import { compose, withHandlers, withState } from 'recompose';
import Realm from 'realm';
import { Alert } from 'react-native';
import { captureRef } from 'react-native-view-shot';
import Share from 'react-native-share';

import QuoteView from './QuoteView';
import { QuoteSchema } from '../quotes/QuotesState';

export default compose(
  withState('isSharing', 'setIsSharing', false),
  withState('isBookmarked', 'setIsBookmarked', true),
  withHandlers(() => {
    // Reference to container element
    let _containerRef = null;
    return {
      updateContainerRef: () => (ref) => {
        _containerRef = ref;
      },
      shareQuote: props => async () => {
        // isSharing prop hides components before making a screen shot
        props.setIsSharing(true);

        // setTimeout to ensure that component will be re-rendered
        setTimeout(async () => {
          if (_containerRef) {
            try {
              // Capturing screenshot of the view by ref
              const uri = await captureRef(_containerRef, {
                format: 'jpg',
                quality: 1,
              });

              // Sharing captured screenshot
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
      toggleBookmark: props => () => {
        props.setIsBookmarked(!props.isBookmarked);

        const { quote } = props.navigation.state.params;

        // Updating the quote inside database
        Realm.open({ schema: [QuoteSchema] })
          .then((realm) => {
            const realmQuote = realm.objects('Quote').filtered(`id = ${quote.id}`)[0];
            realm.write(() => {
              realmQuote.bookmarked = !realmQuote.bookmarked;
            });
            realm.close();
          });
      },
    };
  }),
)(QuoteView);
