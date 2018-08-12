import { connect } from 'react-redux';
import Realm from 'realm';
import {
  compose, withState, withHandlers,
} from 'recompose';

import { QuoteSchema } from '../quotes/QuotesState';

import BookmarksView from './BookmarksView';

export default compose(
  connect(
    state => ({
      isDarkBg: state.quotes.isDarkBg,
    }),
  ),
  withState('bookmarksList', 'setBookmarksList', []),
  withHandlers({
    updateBookmarks: props => () => {
      Realm.open({ schema: [QuoteSchema] })
        .then((realm) => {
          // Selecting all bookmarked quotes
          const bookmarks = realm.objects('Quote').filtered('bookmarked = true');

          // Need to convert Realm object to JS TODO: Find better solution
          const bookmarksJSed = JSON.parse(JSON.stringify(bookmarks));
          const bookmarksArray = [];
          Object.keys(bookmarksJSed).forEach(index => bookmarksArray.push(bookmarksJSed[index]));

          props.setBookmarksList(bookmarksArray);
          realm.close();
        });
    },
  }),
  withHandlers({
    // Handler that fires when the user navigate on the screen
    onWillFocus: props => () => {
      props.updateBookmarks();
    },
  }),
)(BookmarksView);
