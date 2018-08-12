import {
  createStackNavigator,
} from 'react-navigation';

import Quotes from '../quotes/QuotesViewContainer';
import Bookmarks from '../bookmarks/BookmarksViewContainer';

export default createStackNavigator({
  Quotes,
  Bookmarks,
}, {
  headerMode: 'none',
  initialRouteName: 'Quotes',
});
