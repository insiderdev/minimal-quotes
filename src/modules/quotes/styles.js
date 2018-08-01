import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  quoteContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  quoteText: {
    fontFamily: 'System',
    fontSize: '2.5rem',
    fontWeight: '200',
  },
  quoteAuthor: {
    fontFamily: 'System',
    color: 'gray',
    fontSize: '1.5rem',
    fontWeight: '100',
    marginTop: '0.5rem',
  },
});
