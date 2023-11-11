import { StyleSheet, View } from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { countryListData, CARD_WIDTH } from './data';

import CountryCard from './CountryCard';

const SPACING_BETWEEN_CARD = 10;

const generateSnapOffsets = (dataSize: number) => {
  return new Array(dataSize)
    .fill('a')
    .map((_, index) => CARD_WIDTH * index + SPACING_BETWEEN_CARD * index);
};

const CountryListRenderer = () => {
  const scrollXOffsetSharedValue = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(e => {
    scrollXOffsetSharedValue.value = e.contentOffset.x;
  });

  return (
    <Animated.FlatList
      data={countryListData}
      keyExtractor={country => country.city}
      decelerationRate={0.85}
      onScroll={scrollHandler}
      snapToOffsets={generateSnapOffsets(countryListData.length)}
      horizontal
      showsHorizontalScrollIndicator={false}
      ListHeaderComponent={() => {
        //this is needed just to add blank space in first element
        return (
          <View
            style={{
              width: SPACING_BETWEEN_CARD,
            }}
          ></View>
        );
      }}
      renderItem={({ item, index }) => {
        return (
          <CountryCard
            inputRange={[
              CARD_WIDTH * (index - 1),
              CARD_WIDTH * index,
              CARD_WIDTH * (index + 1),
            ]}
            {...item}
            scrollXOffsetSharedValue={scrollXOffsetSharedValue}
          />
        );
      }}
    />
  );
};

export default CountryListRenderer;

const styles = StyleSheet.create({});
