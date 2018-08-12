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
            } catch (error) {
              Alert.alert('Something went wrong', 'We are so sorry, but something unexpected happened :(');
            } finally {
              props.setIsSharing(false);
            }
          }
        });
      },
      toggleBookmark: props => () => {
        props.setIsBookmarked(!props.isBookmarked);

        const { quote } = props.navigation.state.params;

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
