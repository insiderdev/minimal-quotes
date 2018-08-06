import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
} from 'react-native';

import {
  AnimatedTextSwitch,
  AnimatedBackgroundSwitch,
} from '../../components';

import styles from './styles';

export default function QuotesView({
  currentQuote,
  newQuote,
  isDarkBg,
}) {
  return (
    <TouchableWithoutFeedback
      onPress={newQuote}
    >
      <AnimatedBackgroundSwitch
        isDark={isDarkBg}
        style={{
          ...styles.container,
        }}
      >
        { currentQuote && (
          <View style={styles.quoteContainer}>
            <AnimatedTextSwitch
              style={{
                ...styles.quoteText,
                ...isDarkBg ? styles.quoteTextLight : {},
              }}
            >
              {currentQuote && currentQuote.quote}
            </AnimatedTextSwitch>
            <AnimatedTextSwitch
              style={{
                ...styles.quoteAuthor,
                ...isDarkBg ? styles.quoteAuthorLight : {},
              }}
            >
              {currentQuote && currentQuote.author}
            </AnimatedTextSwitch>
          </View>
        )}
      </AnimatedBackgroundSwitch>
    </TouchableWithoutFeedback>
  );
}
