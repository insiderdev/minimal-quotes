import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import styles from './styles';

export default function QuotesView({ quotes }) {
  return (
    <View style={styles.container}>
      <View style={styles.quoteContainer}>
        <Text style={styles.quoteText}>creativity is just connecting things</Text>
        <Text style={styles.quoteAuthor}>steve jobs</Text>
      </View>
    </View>
  );
}
