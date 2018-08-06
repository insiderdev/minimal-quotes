import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Animated,
  TouchableOpacity,
} from 'react-native';
import SideMenu from 'react-native-side-menu';

import {
  AnimatedTextSwitch,
  AnimatedBackgroundSwitch,
  AnimatedIconSwitch,
} from '../../components';

import styles from './styles';

export default function QuotesView({
  currentQuote,
  newQuote,
  isDarkBg,
  toggleBookmark,
}) {
  const Sidebar = () => (
    <AnimatedBackgroundSwitch
      isDark={isDarkBg}
      style={styles.container}
    />
  );

  console.log(currentQuote);

  return (
    <SideMenu
      menu={<Sidebar />}
      bounceBackOnOverdraw={false}
      animationFunction={(prop, value) => Animated.timing(prop, {
        toValue: value,
        friction: 8,
      })}
    >
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

          <View style={styles.footer}>
            <AnimatedTextSwitch
              style={{
                ...styles.footerHelpText,
              }}
            >
              tap for more
            </AnimatedTextSwitch>

            <View style={styles.footerIcons}>
              <TouchableOpacity onPress={() => toggleBookmark(currentQuote)}>
                <View>
                  <AnimatedIconSwitch
                    source={currentQuote && currentQuote.bookmarked ?
                      require('../../../assets/icons/bookmark-filled.png') :
                      require('../../../assets/icons/bookmark.png')
                    }
                    style={{
                      ...styles.footerIcon,
                      ...isDarkBg ? styles.footerIconLight : {},
                    }}
                  />
                </View>
              </TouchableOpacity>

              <AnimatedIconSwitch
                source={require('../../../assets/icons/share.png')}
                style={{
                  ...styles.footerIcon,
                  ...isDarkBg ? styles.footerIconLight : {},
                }}
              />
            </View>
          </View>
        </AnimatedBackgroundSwitch>
      </TouchableWithoutFeedback>
    </SideMenu>
  );
}
