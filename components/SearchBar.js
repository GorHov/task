import React, { useState } from "react";
import { View, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import ProductsSearch from "../screens/ProductsSearch";

const SearchBar = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    navigation.navigate('ProductsSearch', { ProductsSearch });
  };

  return (
    <TouchableOpacity onPress={handleSearch}>
    <View style={styles.container}>
      <Image
        source={require("../assets/logo-search.png")}
        style={styles.logo}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor="#999"
          value={searchText}
          onChangeText={setSearchText}
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
        />
        {searchText.length > 0 && (
          <View style={styles.indicator} />
        )}
      </View>
        <Image
          source={require("../assets/icons/search.png")}
          style={styles.searchIcon}
        />
    </View>
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
    elevation: 3,
  },
  logo: {
    width: 43,
    height: 26,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 0,
    fontSize: 16,
    color: "#000",
  },
  indicator: {
    width: 2,
    height: 18,
    backgroundColor: "#999",
    marginRight: 10,
  },
  searchIcon: {
    width: 18,
    height: 18,
  },
});

export default SearchBar;
