import React from 'react';
import PropTypes from 'prop-types';
import { NavigationEvents } from 'react-navigation';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import styles from './styles';

export default function BookmarksView(props) {
  const {
    isDarkBg,
    navigation,
    bookmarksList,
    onWillFocus,
  } = props;

  return (
    <View
      style={[
        styles.container,
        isDarkBg && styles.containerDark,
      ]}
    >
      {/** To update bookmarks list when the user navigate to the screen */}
      <NavigationEvents
        onWillFocus={onWillFocus}
      />

      <View
        style={styles.header}
      >
        <TouchableOpacity
          onPress={() => navigation.pop()}
        >
          <Image
            source={require('../../../assets/icons/arrow-left.png')}
            style={[
              styles.headerButton,
              styles.headerIcon,
              isDarkBg && styles.headerIconDark,
            ]}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <Text
          style={[
            styles.headerTitle,
            isDarkBg && styles.headerTitleDark,
          ]}
        >
          My Favorites
        </Text>

        <View style={styles.headerButton} />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.body}
        data={bookmarksList}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.quote}
            onPress={() => navigation.navigate('Quote', { quote: item })}
          >
            <Text
              style={[
                styles.quoteText,
                isDarkBg && styles.quoteTextDark,
              ]}
            >
              {item.quote}
            </Text>
            <Text style={styles.quoteAuthor}>{item.author}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={(
          <View style={styles.emptyContainer}>
            <Text
              style={[
                styles.emptyText,
                isDarkBg && styles.emptyTextDark,
              ]}
            >
              You have no favorite quotes yet
            </Text>
          </View>
        )}
      />
    </View>
  );
}

BookmarksView.propTypes = {
  isDarkBg: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({
    pop: PropTypes.func.isRequired,
  }).isRequired,
  bookmarksList: PropTypes.arrayOf(PropTypes.shape({
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  })).isRequired,
  onWillFocus: PropTypes.func.isRequired,
};
