import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  Text,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { colors, fonts } from '../config';

export default function ToggleButton(props) {
  const { selected, children, isDark } = props;

  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.button,
        isDark && styles.buttonDark,
        selected && styles.buttonSelected,
        selected && isDark && styles.buttonSelectedDark,
        props.style,
      ]}
    >
      <Text
        style={[
          styles.caption,
          selected && styles.captionSelected,
          selected && isDark && styles.captionSelectedDark,
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}

ToggleButton.propTypes = {
  selected: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

ToggleButton.defaultProps = {
  selected: false,
};

const styles = EStyleSheet.create({
  button: {
    paddingHorizontal: '0.8rem',
    paddingVertical: '0.6rem',
    borderRadius: '1.5rem',
    backgroundColor: colors.flatDarkGray,
  },
  buttonDark: {
    backgroundColor: colors.lightGray,
  },
  buttonSelected: {
    backgroundColor: colors.light,
  },
  buttonSelectedDark: {
    backgroundColor: colors.darkGray,
  },
  caption: {
    fontFamily: fonts.primaryLight,
    fontSize: '0.8rem',
    fontWeight: '300',
    color: colors.gray,
  },
  captionSelected: {
    color: colors.darkGray,
  },
  captionSelectedDark: {
    color: colors.light,
  },
});
