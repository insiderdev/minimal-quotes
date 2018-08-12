import { connect } from 'react-redux';
import Realm from 'realm';
import {
  compose, lifecycle, withState, withHandlers,
} from 'recompose';

import { QuoteSchema } from '../quotes/QuotesState';

import BookmarksView from './BookmarksView';

export default compose(
  connect(
    state => ({
      isDarkBg: state.quotes.isDarkBg,
    }),
  ),
  withState('isBookmarksLoaded', 'setBookmarksLoaded', false),
  withState('bookmarksList', 'setBookmarksList', []),
  withHandlers({
    updateBookmarks: props => () => {
      props.setBookmarksLoaded(false);
      Realm.open({ schema: [QuoteSchema] })
        .then((realm) => {
          const bookmarks = realm.objects('Quote').filtered('bookmarked = true');

          const bookmarksJSed = JSON.parse(JSON.stringify(bookmarks));
          const bookmarksArray = [];
          Object.keys(bookmarksJSed).forEach(index => bookmarksArray.push(bookmarksJSed[index]));

          props.setBookmarksList(bookmarksArray);
          props.setBookmarksLoaded(true);
          realm.close();
        });
    },
  }),
  lifecycle({
    componentDidMount() {
      this.props.updateBookmarks();
    },
  }),
)(BookmarksView);
