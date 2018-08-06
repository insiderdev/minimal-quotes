import { Provider } from 'react-redux';
import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './src/redux/store';

import Navigator from './src/modules/navigation/Navigator';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={(
          <View style={styles.container}>
            <ActivityIndicator />
          </View>
        )}
        persistor={persistor}
      >
        <Navigator />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
