import React from 'react';
import {
  Animated,
  Easing,
} from 'react-native';
import config from '../config';

class AnimatedIconSwitch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      iconOpacity: new Animated.Value(1),
      tintColor: props.style.tintColor,
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.style.tintColor !== this.state.tintColor) {
      Animated.timing(
        this.state.iconOpacity,
        {
          toValue: 0,
          duration: config.defaultAnimationDuration,
          easing: Easing.in(Easing.sin),
        },
      ).start(() => {
        this.setState({
          tintColor: newProps.style.tintColor,
        }, () => {
          Animated.timing(
            this.state.iconOpacity,
            {
              toValue: 1,
              duration: config.defaultAnimationDuration,
              easing: Easing.in(Easing.sin),
            },
          ).start();
        });
      });
    }
  }

  render() {
    return (
      <Animated.Image
        resizeMode="contain"
        {...this.props}
        style={{
          ...this.props.style,
          opacity: this.state.iconOpacity,
          tintColor: this.state.tintColor,
        }}
      />
    );
  }
}

export default AnimatedIconSwitch;
