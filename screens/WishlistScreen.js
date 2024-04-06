import React from 'react';
import { FlatList, Text, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import ProductItem from '../components/ProductItem';

const WishlistScreen = () => {
  const wishlist = useSelector(state => state.app.wishlist);

  const renderProductItem = ({ item }) => (
    <ProductItem item={item} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wishlist</Text>
      {wishlist.length > 0 ? (
        <FlatList
          data={wishlist}
          renderItem={renderProductItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.productList}
        />
      ) : (
        <Text style={styles.emptyText}>Your wishlist is empty</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    textTransform: "uppercase",
    textAlign: "center",
    paddingTop: 10,
    marginBottom: 20
  },
  productList: {
    flexGrow: 1,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 18,
    paddingTop:50
  },
});

export default WishlistScreen;
