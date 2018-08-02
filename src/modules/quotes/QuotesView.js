import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

import styles from './styles';

export default function QuotesView({ currentQuote, newQuote }) {
  return (
    <TouchableWithoutFeedback
      onPress={newQuote}
    >
      <View style={styles.container}>
        { currentQuote && (
          <View style={styles.quoteContainer}>
            <Text style={styles.quoteText}>{currentQuote && currentQuote.quote}</Text>
            <Text style={styles.quoteAuthor}>{currentQuote && currentQuote.author}</Text>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}
