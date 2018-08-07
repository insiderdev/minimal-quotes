import { connect } from 'react-redux';
import { compose } from 'recompose';

import SidebarView from './SidebarView';

import {
  changeBgType,
} from '../quotes/QuotesState';

export default compose(
  connect(
    state => ({
      categories: state.quotes.categories,
      bgType: state.quotes.bgType,
    }),
    dispatch => ({
      changeBgType: bgType => dispatch(changeBgType(bgType)),
    }),
  ),
)(SidebarView);
