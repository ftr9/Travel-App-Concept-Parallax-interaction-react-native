import { FlatList } from 'react-native';
import React from 'react';

import { recommendations } from './data';
import RecommendationCard from './RecomCard';

const RecommendationRenderrer = () => {
  return (
    <FlatList
      data={recommendations}
      keyExtractor={item => item.city}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <RecommendationCard {...item} />}
    />
  );
};

export default RecommendationRenderrer;
