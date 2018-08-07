import React from 'react';
import {
  Animated,
  Easing,
} from 'react-native';
import config from '../config';

/**
 * Component to animate TextChange with opacity effect.
 * It fades the previous text to opacity 0, changes text and animates opacity to 1 then.
 */
class AnimatedTextSwitch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      previousText: props.children,
      textOpacity: new Animated.Value(1),
      textColor: props.style.color,
    };
  }

  componentWillReceiveProps(newProps) {
    const newText = newProps.children;
    if (newText !== this.state.previousText ||
        this.state.textColor !== newProps.style.color
    ) {
      Animated.timing(
        this.state.textOpacity,
        {
          toValue: 0,
          duration: config.defaultAnimationDuration,
          easing: Easing.in(Easing.sin),
        },
      ).start(() => {
        this.setState({
          previousText: newText,
          textColor: newProps.style.color,
        }, () => {
          Animated.timing(
            this.state.textOpacity,
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
      <Animated.Text
        {...this.props}
        style={{
          ...this.props.style,
          opacity: this.state.textOpacity,
          color: this.state.textColor,
        }}
      >
        {this.state.previousText}
      </Animated.Text>
    );
  }
}

export default AnimatedTextSwitch;
