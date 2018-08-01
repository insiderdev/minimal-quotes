import { connect } from 'react-redux';
import { compose } from 'recompose';

import QuotesView from './QuotesView';

export default compose(
  connect(
    state => ({
      quotes: state.quotes.quotes,
    }),
  ),
)(QuotesView);
