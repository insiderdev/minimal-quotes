import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
} from 'react-native';

import {
  AnimatedTextSwitch,
  AnimatedBackgroundSwitch,
  AnimatedIconSwitch,
} from '../../components';

import styles from '../quotes/styles';
import { BG_TYPES } from '../quotes/QuotesState';

export default function QuoteView(props) {
  const {
    navigation,
    updateContainerRef,
    shareQuote,
    isSharing,
    isBookmarked,
    toggleBookmark,
  } = props;
  const { quote } = navigation.state.params;

  const isDarkBg = quote.bgType === BG_TYPES.BG_BLACK;

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.pop()}
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
        </View>

        { quote && (
          <View style={styles.quoteContainer}>
            <AnimatedTextSwitch
              style={{
                ...styles.quoteText,
                ...isDarkBg ? styles.quoteTextLight : {},
              }}
            >
              {quote.quote}
            </AnimatedTextSwitch>
            <AnimatedTextSwitch
              style={{
                ...styles.quoteAuthor,
                ...isDarkBg ? styles.quoteAuthorLight : {},
              }}
            >
              {quote.author}
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
              tap to go back
            </AnimatedTextSwitch>

            <View style={styles.footerIcons}>
              <TouchableWithoutFeedback onPress={() => toggleBookmark()}>
                <View>
                  <AnimatedIconSwitch
                    source={isBookmarked ?
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
  );
}
