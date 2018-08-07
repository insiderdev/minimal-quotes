import { connect } from 'react-redux';
import { compose } from 'recompose';

import SidebarView from './SidebarView';

import {
  changeBgType,
  toggleCategory,
  selectAllCategories,
} from '../quotes/QuotesState';

export default compose(
  connect(
    state => ({
      categories: state.quotes.categories,
      bgType: state.quotes.bgType,
    }),
    dispatch => ({
      changeBgType: bgType => dispatch(changeBgType(bgType)),
      toggleCategory: category => dispatch(toggleCategory(category)),
      selectAllCategories: () => dispatch(selectAllCategories()),
    }),
  ),
)(SidebarView);
