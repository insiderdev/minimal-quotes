import EStyleSheet from 'react-native-extended-stylesheet';

import { colors } from '../../config';

export default EStyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.light,
  },
  containerDark: {
    backgroundColor: colors.dark,
  },
  quoteContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  quoteText: {
    fontFamily: 'System',
    fontSize: '1.5rem',
    fontWeight: '200',
    color: colors.dark,
    lineHeight: '2.2rem',
  },
  quoteTextLight: {
    color: colors.light,
  },
  quoteAuthor: {
    fontFamily: 'System',
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
    fontFamily: 'System',
    color: 'gray',
    fontSize: '1.2rem',
    fontWeight: '100',
  },
  footerIcons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
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
