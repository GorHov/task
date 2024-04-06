import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../components/ProductItem';
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import banner1 from '../assets/banner/banner1.jpg';
import banner2 from '../assets/banner/banner2.jpg';
import banner3 from '../assets/banner/banner3.jpg';
import { fetchHomeScreenCategories } from '../redux/actions/appAction';
import SearchBar from '../components/SearchBar';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const homeScreenCategories = useSelector(state => state.app.homeScreenCategories);

  useEffect(() => {
    dispatch(fetchHomeScreenCategories());
  }, []);

  const navigateToProductDetail = (product) => {
    navigation.navigate('ProductDetail', { product });
  };

  const [showAllMap, setShowAllMap] = useState({});

  const toggleShowAll = (categoryName) => {
    setShowAllMap(prevState => ({
      ...prevState,
      [categoryName]: !prevState[categoryName]
    }));
    navigation.navigate('CategoryProducts', { category: categoryName });
  };

  return (
    <>
    <SearchBar navigation={navigation}/>
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.bannerContainer}>
        <Swiper style={styles.wrapper} autoplay={false} dotColor="#FFFFFF" activeDotColor="#000000">
          <Image source={banner1} style={styles.bannerImage} />
          <Image source={banner2} style={styles.bannerImage} />
          <Image source={banner3} style={styles.bannerImage} />
        </Swiper>
      </View>
      
      {homeScreenCategories?.map((category, index) => (
        <View key={index}>
          <View style={styles.categoryHeader}>
          <Text style={styles.categoryTitle}>{category.name}</Text>
          {!showAllMap[category.name] && category.details.products?.length > 4 && (
            <TouchableOpacity onPress={() => toggleShowAll(category.name)}>
              <Text style={styles.seeAllButton}>See All</Text>
            </TouchableOpacity>
          )}
          </View>
          <View style={styles.productContainer}>
            {showAllMap[category.name]
              ? category.details.products?.map((item, index) => (
                  <ProductItem key={index} item={item} onPress={navigateToProductDetail} />
                ))
              : category.details.products?.slice(0, 4).map((item, index) => (
                  <ProductItem key={index} item={item} onPress={navigateToProductDetail} />
                ))}
          </View>
        </View>
      ))}
    </ScrollView>
    </>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 2,
    padding: 10,
  },
  bannerContainer: {
    height: 200,
    marginBottom: 20,
  },
  wrapper: {},
  bannerImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 10
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
    textTransform: 'uppercase'
  },
  categoryHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%'
  },
  productContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  seeAllButton: {
    color: 'blue',
    textAlign: 'center',
    marginBottom: 10,
    textTransform: 'uppercase'
  },
});

export default HomeScreen;
