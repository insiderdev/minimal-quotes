import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import styles from './styles';

import {
  ToggleButton,
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
  } = props;

  const hasUnselectedCategory = Object.keys(categories).filter(c => !categories[c]).length > 0;

  return (
    <View
      style={styles.container}
    >
      <View style={styles.section}>
        <Text
          style={styles.sectionHeader}
        >
          Background Color
        </Text>

        <View style={styles.sectionRow}>
          <ToggleButton
            style={styles.sectionToggle}
            selected={bgType === BG_TYPES.BG_WHITE}
            onPress={() => changeBgType(BG_TYPES.BG_WHITE)}
          >
            White
          </ToggleButton>
          <ToggleButton
            style={styles.sectionToggle}
            selected={bgType === BG_TYPES.BG_BLACK}
            onPress={() => changeBgType(BG_TYPES.BG_BLACK)}
          >
            Black
          </ToggleButton>
          <ToggleButton
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
          style={styles.sectionHeader}
        >
          Categories
        </Text>

        <View style={styles.sectionRow}>
          <ToggleButton
            style={styles.sectionToggle}
            selected={!hasUnselectedCategory}
            onPress={selectAllCategories}
          >
            All Categories
          </ToggleButton>
          { Object.keys(categories).map(category => (
            <ToggleButton
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
          style={styles.sectionHeader}
        >
          Your quotes
        </Text>

        <View style={styles.sectionRow}>
          <ToggleButton
            style={styles.sectionToggle}
          >
            Show all
          </ToggleButton>
          <ToggleButton
            style={styles.sectionToggle}
          >
            Show favorites
          </ToggleButton>
        </View>
      </View>
    </View>
  );
}
