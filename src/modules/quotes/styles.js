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
    fontSize: '2.5rem',
    fontWeight: '200',
    color: colors.dark,
  },
  quoteTextLight: {
    color: colors.light,
  },
  quoteAuthor: {
    fontFamily: 'System',
    color: 'gray',
    fontSize: '1.5rem',
    fontWeight: '100',
    marginTop: '0.5rem',
  },
  quoteAuthorLight: {
    color: colors.light,
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
    height: '1rem',
    width: '1rem',
    marginHorizontal: '0.5rem',
    tintColor: colors.dark,
  },
  footerIconLight: {
    tintColor: colors.light,
  },
});
