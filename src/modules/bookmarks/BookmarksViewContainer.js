import { connect } from 'react-redux';

import BookmarksView from './BookmarksView';

export default connect(
  state => ({
    favoriteQuotes: state.quotes.favoriteQuotes,
  }),
)(BookmarksView);
