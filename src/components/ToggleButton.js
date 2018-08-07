import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  Text,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { colors, fonts } from '../config';

export default function ToggleButton(props) {
  const { selected, children } = props;

  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.button,
        selected && styles.buttonSelected,
        props.style,
      ]}
    >
      <Text
        style={[
          styles.caption,
          selected && styles.captionSelected,
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
    backgroundColor: colors.lightGray,
  },
  buttonSelected: {
    backgroundColor: colors.darkGray,
  },
  caption: {
    fontFamily: fonts.primaryLight,
    fontSize: '0.8rem',
    fontWeight: '300',
    color: colors.gray,
  },
  captionSelected: {
    color: colors.light,
  },
});
