import React from 'react';
import {
  Animated,
  Easing,
} from 'react-native';

import config from '../config';

class AnimatedBackgroundSwitch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bgColor: new Animated.Value(props.isDark ? 0 : 1),
      isDark: props.isDark,
    };
  }

  componentWillReceiveProps(newProps) {
    if (this.state.isDark !== newProps.isDark) {
      Animated.timing(
        this.state.bgColor,
        {
          toValue: this.state.isDark ? 1 : 0,
          duration: config.defaultAnimationDuration * 2,
          easing: Easing.in(Easing.sin),
        },
      ).start(() => {
        this.setState({
          isDark: newProps.isDark,
        });
      });
    }
  }

  render() {
    const color = this.state.bgColor.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgba(0, 0, 0, 1.0)', 'rgba(255, 255, 255, 1.0)'],
    });

    return (
      <Animated.View
        {...this.props}
        style={{
          ...this.props.style,
          backgroundColor: color,
        }}
      />
    );
  }
}

export default AnimatedBackgroundSwitch;
