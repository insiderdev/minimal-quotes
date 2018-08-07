import EStyleSheet from 'react-native-extended-stylesheet';

import { colors, fonts } from '../../config';

export default EStyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: '2rem',
    backgroundColor: colors.light,
  },
  section: {
    marginBottom: '2rem',
  },
  sectionHeader: {
    fontFamily: fonts.primaryRegular,
    fontSize: '1rem',
    fontWeight: '200',
    color: colors.dark,
    marginBottom: '0.7rem',
  },
  sectionHeaderLight: {
    color: colors.light,
  },
  sectionRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  sectionToggle: {
    marginRight: '0.5rem',
    marginVertical: '0.3rem',
  },
});
