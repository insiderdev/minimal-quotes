import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import styles from './styles';

import {
  ToggleButton,
  AnimatedBackgroundSwitch,
} from '../../components';

import {
  BG_TYPES,
} from '../quotes/QuotesState';

export default function Sidebar(props) {
  const {
    categories,
    bgType,
    changeBgType,
    toggleCategory,
    selectAllCategories,
    showFavorites,
    toggleFavorites,
    isDarkBg,
  } = props;

  const hasUnselectedCategory = Object.keys(categories).filter(c => !categories[c]).length > 0;

  return (
    <AnimatedBackgroundSwitch
      style={styles.container}
      isDark={!isDarkBg}
    >
      <View style={styles.section}>
        <Text
          style={[
            styles.sectionHeader,
            isDarkBg && styles.sectionHeaderDark,
          ]}
        >
          Background Color
        </Text>

        <View style={styles.sectionRow}>
          <ToggleButton
            isDark={isDarkBg}
            style={styles.sectionToggle}
            selected={bgType === BG_TYPES.BG_WHITE}
            onPress={() => changeBgType(BG_TYPES.BG_WHITE)}
          >
            White
          </ToggleButton>
          <ToggleButton
            isDark={isDarkBg}
            style={styles.sectionToggle}
            selected={bgType === BG_TYPES.BG_BLACK}
            onPress={() => changeBgType(BG_TYPES.BG_BLACK)}
          >
            Black
          </ToggleButton>
          <ToggleButton
            isDark={isDarkBg}
            style={styles.sectionToggle}
            selected={bgType === BG_TYPES.BG_RANDOM}
            onPress={() => changeBgType(BG_TYPES.BG_RANDOM)}
          >
            Random
          </ToggleButton>
        </View>
      </View>

      <View style={styles.section}>
        <Text
          style={[
            styles.sectionHeader,
            isDarkBg && styles.sectionHeaderDark,
          ]}
        >
          Categories
        </Text>

        <View style={styles.sectionRow}>
          <ToggleButton
            isDark={isDarkBg}
            style={styles.sectionToggle}
            selected={!hasUnselectedCategory}
            onPress={selectAllCategories}
          >
            All Categories
          </ToggleButton>
          { Object.keys(categories).sort().map(category => (
            <ToggleButton
              isDark={isDarkBg}
              key={category}
              style={styles.sectionToggle}
              selected={hasUnselectedCategory && categories[category]}
              onPress={() => toggleCategory(category)}
            >
              {category}
            </ToggleButton>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text
          style={[
            styles.sectionHeader,
            isDarkBg && styles.sectionHeaderDark,
          ]}
        >
          Your quotes
        </Text>

        <View style={styles.sectionRow}>
          <ToggleButton
            isDark={isDarkBg}
            style={styles.sectionToggle}
            selected={!showFavorites}
            onPress={toggleFavorites}
          >
            Show all
          </ToggleButton>
          <ToggleButton
            isDark={isDarkBg}
            style={styles.sectionToggle}
            selected={showFavorites}
            onPress={toggleFavorites}
          >
            Show favorites
          </ToggleButton>
        </View>
      </View>
    </AnimatedBackgroundSwitch>
  );
}
