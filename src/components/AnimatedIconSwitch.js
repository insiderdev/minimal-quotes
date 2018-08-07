import React from 'react';
import {
  Animated,
  Easing,
} from 'react-native';
import config from '../config';

/**
 * This component animates icon switch. It could animate opacity, tintColor and icon source.
 */
class AnimatedIconSwitch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      iconOpacity: new Animated.Value(1),
      tintColor: props.style.tintColor,
      source: props.source,
    };
  }

  componentWillReceiveProps(newProps) {
    const isTintColorChanging = newProps.style.tintColor !== this.state.tintColor;
    const isSourceChanging = this.state.source !== newProps.source;

    if (isTintColorChanging || isSourceChanging) {
      Animated.timing(
        this.state.iconOpacity,
        {
          toValue: 0,
          duration: config.defaultAnimationDuration / (isTintColorChanging ? 1 : 3),
          easing: Easing.in(Easing.sin),
        },
      ).start(() => {
        this.setState({
          tintColor: newProps.style.tintColor,
          source: newProps.source,
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
        source={this.state.source}
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
