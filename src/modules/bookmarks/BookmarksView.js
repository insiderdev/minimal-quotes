import React from 'react';
import PropTypes from 'prop-types';
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
  } = props;

  console.log(bookmarksList);

  return (
    <View
      style={[
        styles.container,
        isDarkBg && styles.containerDark,
      ]}
    >
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
      />
    </View>
  );
}

BookmarksView.propTypes = {
  isBookmarksLoaded: PropTypes.bool.isRequired,
  bookmarksList: PropTypes.arrayOf(PropTypes.shape({
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  })).isRequired,
};
