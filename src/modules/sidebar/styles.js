import EStyleSheet from 'react-native-extended-stylesheet';

import { colors, fonts } from '../../config';

export default EStyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: '2rem',
    backgroundColor: colors.dark,
  },
  containerDark: {
    backgroundColor: colors.light,
  },
  section: {
    marginBottom: '2rem',
  },
  sectionLink: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionLinkIcon: {
    height: '1rem',
    tintColor: colors.light,
  },
  sectionLinkIconDark: {
    tintColor: colors.dark,
  },
  sectionHeader: {
    fontFamily: fonts.primaryRegular,
    fontSize: '1rem',
    fontWeight: '200',
    color: colors.light,
    marginBottom: '0.7rem',
  },
  sectionHeaderDark: {
    color: colors.dark,
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
