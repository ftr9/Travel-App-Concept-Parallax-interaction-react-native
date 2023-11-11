import { StyleSheet, View, TextInput } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const NavBar = () => {
  return (
    <View style={styles.navBarContainer}>
      <Ionicons name="grid-outline" size={24} />
      <TextInput
        selectionColor={'black'}
        style={styles.searchInput}
        placeholder="Search"
      />
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  navBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  searchInput: {
    borderWidth: 0.5,
    borderRadius: 100,
    marginLeft: 12,
    borderColor: 'white',
    backgroundColor: '#f1f3f5',
    flex: 1,
    fontSize: 14,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
});
