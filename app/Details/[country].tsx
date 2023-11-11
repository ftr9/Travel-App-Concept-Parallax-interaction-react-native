import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

const FullImageDisplay = () => {
  const { country, city, imageUrl } = useLocalSearchParams<{
    imageUrl: string;
    country: string;
    city: string;
  }>();

  return (
    <View
      style={{
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        source={{
          uri: imageUrl,
        }}
        resizeMode="cover"
        style={{
          height: '100%',
          width: '100%',
          zIndex: -1,
        }}
      />
      <View
        style={{
          position: 'absolute',
          bottom: '16%',
        }}
      >
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 32,
            fontWeight: '800',
          }}
        >
          {city}
        </Text>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>
          {country}
        </Text>
      </View>
    </View>
  );
};

export default FullImageDisplay;

const styles = StyleSheet.create({});
