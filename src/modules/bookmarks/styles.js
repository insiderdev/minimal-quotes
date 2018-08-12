import EStyleSheet from 'react-native-extended-stylesheet';

import { colors, fonts } from '../../config';

export default EStyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: '2rem',
    backgroundColor: colors.light,
  },
  containerDark: {
    backgroundColor: colors.dark,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: '1rem',
  },
  headerButton: {
    width: '1.5rem',
  },
  headerIcon: {
    tintColor: colors.dark,
    height: '1rem',
  },
  headerIconDark: {
    tintColor: colors.light,
  },
  headerTitle: {
    fontSize: '1rem',
    fontWeight: '200',
    fontFamily: fonts.primaryLight,
    color: colors.dark,
  },
  headerTitleDark: {
    color: colors.light,
  },
  quote: {
    paddingVertical: '1.5rem',
  },
  body: {},
  quoteText: {
    fontFamily: fonts.primaryLight,
    fontWeight: '200',
    fontSize: '1.3rem',
    color: colors.dark,
  },
  quoteTextDark: {
    color: colors.light,
  },
  quoteAuthor: {
    fontFamily: fonts.primaryLight,
    fontWeight: '200',
    fontSize: '0.8rem',
    color: colors.gray,
    marginTop: '0.8rem',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  },
  emptyText: {
    fontFamily: fonts.primaryLight,
    fontWeight: '200',
    fontSize: '0.8rem',
    color: colors.dark,
    textAlign: 'center',
  },
  emptyTextDark: {
    color: colors.light,
  },
});
