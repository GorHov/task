import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getProductData } from "../redux/actions/appAction";
import { useNavigation } from '@react-navigation/native';
import star from '../assets/icons/star.png';
import GoBackButton from "./GoBackButton";

const ProductDetail = ({ route }) => {
  const { productId } = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const productData = useSelector((state) => state.app.productData);

  useEffect(() => {
    dispatch(getProductData(productId));
  }, [dispatch, productId]);

  const handleAddToCart = () => {
    console.log("Product added to cart");
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <GoBackButton navigation={navigation}/>
      <Image source={{ uri: productData?.thumbnail }} style={styles.image} />
      <Text style={styles.title}>{productData?.title}</Text>
      <Text style={styles.price}>{productData?.price}$</Text>
      <Text style={styles.details}>
        Rating: <Image source={star} style={styles.starIcon} />{" "}
        {productData?.rating}
      </Text>
      <Text style={styles.details}>ID: {productData?.id}</Text>
      <Text style={styles.details}>Brand: {productData?.brand}</Text>
      <Text style={styles.details}>Category: {productData?.category}</Text>

      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>{productData?.description}</Text>
      </View>
     <View style={styles.bottomContainer}>
      <View style={styles.totalMoneyContainer}>
        <Text style={styles.totalMoneyText}>Total </Text>
        <Text style={styles.totalMoneyTextMoney}>{productData?.price}$</Text>
      </View>
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={handleAddToCart}
      >
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
     </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    padding: 20,
    justifyContent: 'space-between',
  },
  image: {
    width: "95%",
    height: "45%",
    resizeMode: "cover",
    marginBottom: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 5,
    textTransform: "uppercase",
  },
  price: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "500",
  },
  details: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "400",
  },
  descriptionContainer: {
    width: "100%",
    padding: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#8F8F8F',
  },
  descriptionText: {
    color: '#8F8F8F',
    fontWeight: '300',
    fontSize: 14,
    lineHeight: 24,
  },
  addToCartButton: {
    backgroundColor: "#7867BE",
    width: '150',
    width: '44',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
    textTransform: 'uppercase'
  },
  bottomContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  addToCartButtonText: {
    color: "white",
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '400',
  },
  totalMoneyContainer: {
    alignSelf: 'flex-start',
  },
  totalMoneyText: {
    color: '#777777',
    fontSize: 10,
    lineHeight: 16,
  },
  totalMoneyTextMoney: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
  }
});


export default ProductDetail;
