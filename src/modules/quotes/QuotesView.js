import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import styles from './styles';

export default function QuotesView({ quotes }) {
  return (
    <View style={styles.container}>
      <Text>{quotes[0]}</Text>
    </View>
  );
}
