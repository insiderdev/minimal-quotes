import EStyleSheet from 'react-native-extended-stylesheet';

import { colors, fonts } from '../../config';

export default EStyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.light,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.dark,
  },
  containerDark: {
    backgroundColor: colors.dark,
  },
  quoteContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  quoteText: {
    fontFamily: fonts.primaryLight,
    fontSize: '1.5rem',
    fontWeight: '200',
    color: colors.dark,
    lineHeight: '2.2rem',
  },
  quoteTextLight: {
    color: colors.light,
  },
  quoteAuthor: {
    fontFamily: fonts.primaryLight,
    color: colors.gray,
    fontSize: '1rem',
    fontWeight: '100',
    marginTop: '1.2rem',
  },
  quoteAuthorLight: {
    color: colors.gray,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerIcon: {
    width: '1rem',
    tintColor: colors.dark,
  },
  headerIconMenu: {
    width: '1.3rem',
  },
  headerIconLight: {
    tintColor: colors.light,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerHelpText: {
    flex: 1,
    fontFamily: fonts.primaryLight,
    color: 'gray',
    fontSize: '1.2rem',
    fontWeight: '100',
    paddingVertical: '0.5rem',
  },
  footerIcons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  footerIconContainer: {
    paddingVertical: '0.5rem',
    paddingHorizontal: '0.3rem',
  },
  footerIcon: {
    height: '1.2rem',
    width: '1.2rem',
    marginHorizontal: '0.5rem',
    tintColor: colors.dark,
  },
  footerIconLight: {
    tintColor: colors.light,
  },
});
