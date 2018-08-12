import {
  createStackNavigator,
} from 'react-navigation';

import Quotes from '../quotes/QuotesViewContainer';
import Bookmarks from '../bookmarks/BookmarksViewContainer';
import Quote from '../quote/QuoteViewContainer';

export default createStackNavigator({
  Quotes,
  Bookmarks,
  Quote,
}, {
  headerMode: 'none',
  initialRouteName: 'Quotes',
});
