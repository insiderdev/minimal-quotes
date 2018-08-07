import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Animated,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import SideMenu from 'react-native-side-menu';

import Sidebar from '../sidebar/SidebarViewContainer';

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
  updateContainerRef,
  shareQuote,
  isSharing,
  isMenuOpened,
  setIsMenuOpened,
}) {
  return (
    <SideMenu
      openMenuOffset={Dimensions.get('window').width / 5 * 4}
      isOpen={isMenuOpened}
      onChange={setIsMenuOpened}
      menuPosition="right"
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
          ref={ref => updateContainerRef(ref)}
          isDark={isDarkBg}
          style={{
            ...styles.container,
          }}
        >
          <View style={styles.header}>
            <AnimatedIconSwitch
              source={require('../../../assets/icons/quote.png')}
              style={{
                ...styles.headerIcon,
                ...isDarkBg ? styles.footerIconLight : {},
              }}
            />

            { !isSharing && (
              <TouchableOpacity
                onPress={() => setIsMenuOpened(true)}
              >
                <View>
                  <AnimatedIconSwitch
                    source={require('../../../assets/icons/menu.png')}
                    style={{
                      ...styles.headerIcon,
                      ...styles.headerIconMenu,
                      ...isDarkBg ? styles.footerIconLight : {},
                    }}
                  />
                </View>
              </TouchableOpacity>
            )}
          </View>

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

          { !isSharing && (
            <View style={styles.footer}>
              <AnimatedTextSwitch
                style={{
                  ...styles.footerHelpText,
                }}
              >
                tap for more
              </AnimatedTextSwitch>

              <View style={styles.footerIcons}>
                <TouchableWithoutFeedback onPress={() => toggleBookmark(currentQuote)}>
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
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => shareQuote()}>
                  <View>
                    <AnimatedIconSwitch
                      source={require('../../../assets/icons/share.png')}
                      style={{
                        ...styles.footerIcon,
                        ...isDarkBg ? styles.footerIconLight : {},
                      }}
                    />
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
          )}
        </AnimatedBackgroundSwitch>
      </TouchableWithoutFeedback>
    </SideMenu>
  );
}
