import { IRecommendation } from './types';
import { Text, Image, View, StyleSheet } from 'react-native';
import { CARD_HEIGHT, CARD_WIDTH } from './data';

const RecommendationCard = ({ city, image, price }: IRecommendation) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>
        {city}
      </Text>
      <Text style={{ color: '#4dabf7', fontWeight: '500' }}>for ${price}</Text>
      <Image
        resizeMode="cover"
        source={{
          uri: image,
        }}
        style={styles.backgroundImg}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  backgroundImg: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: -1,
  },
});

export default RecommendationCard;
