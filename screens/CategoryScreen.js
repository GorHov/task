import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import GoBackButton from '../components/GoBackButton';

const categoryImages = {
  'furniture': require('../assets/categories/furniture.jpg'),
  'automotive': require('../assets/categories/automotive.jpg'),
  'laptops': require('../assets/categories/laptops.jpg'),
  'lighting': require('../assets/categories/lighting.jpg'),
  'groceries': require('../assets/categories/groceries.jpg'),
  'mens-shirts': require('../assets/categories/mens-shirts.jpg'),
  'mens-shoes': require('../assets/categories/mens-shoes.jpg'),
  'motorcycle': require('../assets/categories/motorcycle.jpg'),
  'smartphones': require('../assets/categories/smartphones.jpg'),
  'sunglasses': require('../assets/categories/sunglasses.jpg'),
  'tops': require('../assets/categories/tops.jpg'),
  'womens-dresses': require('../assets/categories/womens-dresses.jpg'),
  'womens-watches': require('../assets/categories/womens-watches.jpg'),
  'mens-watches': require('../assets/categories/mens-watches.jpg'),
  'womens-jewellery': require('../assets/categories/womens-jewellery.jpg'),
  'fragrances': require('../assets/categories/fragrances.jpg'),
  'skincare': require('../assets/categories/skincare.jpg'),
  'womens-shoes': require('../assets/categories/womens-shoes.jpg'),
  'home-decoration': require('../assets/categories/home-decoration.jpg'),
  'womens-bags': require('../assets/categories/womens-bags.jpg'),
};
const CategoryItem = ({ item, navigation }) => {
  const categoryImage = categoryImages[item];

  return (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => navigation.navigate('CategoryDetails', { category: item })}
    >
      <Image source={categoryImage} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{item}</Text>
    </TouchableOpacity>
  );
};

const CategoryScreen = ({ navigation }) => {
  const categories = useSelector(state => state.app.categories);

  return (
    <View style={styles.container}>
      <GoBackButton navigation={navigation}/>
      <Text style={styles.text}>CATEGORIES</Text>
      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryItem item={item} navigation={navigation} />}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  categoryItem: {
    width: '100%',
    margin: 5,
    alignItems: 'center',
  },
  categoryImage: {
    width: '90%',
    height: 150,
    borderRadius: 10,
  },
  categoryName: {
    position: 'absolute',
    bottom: 20,
    left: 40,
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    textTransform: 'uppercase'
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    textTransform: "uppercase",
    textAlign: "center",
    bottom: 30
  },
});

export default CategoryScreen;