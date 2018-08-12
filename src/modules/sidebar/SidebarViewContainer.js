import { connect } from 'react-redux';
import { Linking } from 'react-native';
import { compose, withHandlers } from 'recompose';

import { credentialsLink } from '../../config';
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
      isDarkBg: state.quotes.isDarkBg,
    }),
    dispatch => ({
      changeBgType: bgType => dispatch(changeBgType(bgType)),
      toggleCategory: category => dispatch(toggleCategory(category)),
      selectAllCategories: () => dispatch(selectAllCategories()),
      toggleFavorites: () => dispatch(toggleFavorites()),
    }),
  ),
  withHandlers({
    openCredits: () => () => {
      Linking.canOpenURL(credentialsLink).then((supported) => {
        if (supported) {
          Linking.openURL(credentialsLink);
        }
      });
    },
  }),
)(SidebarView);
