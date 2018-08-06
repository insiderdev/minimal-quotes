import EStyleSheet from 'react-native-extended-stylesheet';

const colors = {
  light: '#FFFFFF',
  dark: '#000000',
};

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
});
