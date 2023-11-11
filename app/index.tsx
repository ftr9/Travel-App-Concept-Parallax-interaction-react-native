import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import NavBar from '../components/NavBar';
import CountryListRenderer from '../components/CountryListRenderer';
import RecommendationRenderrer from '../components/RecommendationRenderer';
const MainPage = () => {
  return (
    <ScrollView>
      <NavBar />
      <View
        style={{
          paddingHorizontal: 10,
          marginVertical: 20,
        }}
      >
        <Text style={styles.primaryTxt}>Where do you want to travel ?</Text>
      </View>
      <CountryListRenderer />
      <View style={{ paddingHorizontal: 10, marginTop: 20, marginBottom: 10 }}>
        <Text style={styles.secondaryTxt}>Recommendations For You</Text>
      </View>
      <RecommendationRenderrer />
    </ScrollView>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  primaryTxt: {
    fontSize: 28,
    fontWeight: '600',
  },
  secondaryTxt: {
    fontWeight: '500',
    fontSize: 18,
  },
});
