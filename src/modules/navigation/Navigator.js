import {
  createSwitchNavigator,
} from 'react-navigation';

import Quotes from '../quotes/QuotesViewContainer';

export default createSwitchNavigator({
  Quotes,
}, {
  headerMode: 'none',
  initialRouteName: 'Quotes',
});
