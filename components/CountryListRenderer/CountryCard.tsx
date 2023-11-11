import { ICountry } from './types';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  interpolate,
} from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import { CARD_HEIGHT, CARD_WIDTH } from './data';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

interface ICountryCard extends ICountry {
  scrollXOffsetSharedValue: SharedValue<number>;
  inputRange: number[];
}

const CountryCard = ({
  country,
  city,
  image,
  inputRange,
  scrollXOffsetSharedValue,
}: ICountryCard) => {
  const router = useRouter();

  const animatedTranslationStyle = useAnimatedStyle(() => {
    const interpolatedX = interpolate(
      scrollXOffsetSharedValue.value,
      inputRange,
      [-150, -12, 150]
    );
    return {
      transform: [{ translateX: interpolatedX }],
    };
  });

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        router.push(`/Details/${country}?city=${city}&imageUrl=${image}`);
      }}
      style={styles.cardContainer}
    >
      <View style={styles.cardContent}>
        <Text style={{ color: 'white', fontWeight: '600', fontSize: 24 }}>
          {city}
        </Text>
        <Text style={{ color: 'white' }}>{country}</Text>
      </View>
      <Animated.Image
        source={{
          uri: image,
        }}
        alt="city image"
        resizeMode="cover"
        style={[
          {
            height: CARD_HEIGHT,
            width: CARD_WIDTH * 1.5,
          },
          animatedTranslationStyle,
        ]}
      />
    </TouchableOpacity>
  );
};

export default CountryCard;

const styles = StyleSheet.create({
  cardContainer: {
    overflow: 'hidden',
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 10,
    position: 'relative',
    justifyContent: 'center',
    display: 'flex',
    marginRight: 10,
  },
  cardContent: {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    zIndex: 10,
  },
});
