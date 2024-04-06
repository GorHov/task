import React, { useEffect, useState } from 'react';
import { View, TextInput, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../redux/actions/appAction';
import ProductItem from '../components/ProductItem';

const ProductsSearch = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const allProducts = useSelector(state => state.app.allProducts);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const handleSearch = () => {
    const filteredProducts = allProducts.filter(product =>
      product?.title?.toLowerCase().includes(searchText.toLowerCase())
    );
    return filteredProducts;
  };

  const navigateToProduct = (product) => {
    navigation.navigate('ProductDetail', { product });
  };

  const renderProductItem = ({ item }) => (
    <TouchableOpacity style={styles.productItem} onPress={() => navigateToProduct(item)}>
      <ProductItem item={item} style={{width: '100%'}}/>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image
          source={require('../assets/icons/back.png')}
          style={styles.searchIcon}
        />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#D1D1D1"
          value={searchText}
          onChangeText={setSearchText}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <FlatList
        data={handleSearch()}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  backButton: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 10,
  },
  productItem: {
    flex: 1,
    margin: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    padding: 10,
  },
  flatListContent: {
    justifyContent: 'space-between',
  },
});

export default ProductsSearch;
