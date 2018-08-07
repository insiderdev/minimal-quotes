import { connect } from 'react-redux';
import { compose } from 'recompose';

import SidebarView from './SidebarView';

import {
  changeBgType,
  toggleCategory,
  selectAllCategories,
  toggleFavorites,
} from '../quotes/QuotesState';

export default compose(
  connect(
    state => ({
      categories: state.quotes.categories,
      bgType: state.quotes.bgType,
      showFavorites: state.quotes.showFavorites,
    }),
    dispatch => ({
      changeBgType: bgType => dispatch(changeBgType(bgType)),
      toggleCategory: category => dispatch(toggleCategory(category)),
      selectAllCategories: () => dispatch(selectAllCategories()),
      toggleFavorites: () => dispatch(toggleFavorites()),
    }),
  ),
)(SidebarView);
