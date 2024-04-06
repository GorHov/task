import React, { useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchOneCategorie } from "../redux/actions/appAction";
import { useNavigation } from "@react-navigation/native";
import ProductItem from "../components/ProductItem";
import GoBackButton from "../components/GoBackButton";

const CategoryProducts = ({ route }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { category } = route.params;
  const products = useSelector((state) => state.app.selectedCategory);
  
  useEffect(() => {
    dispatch(fetchOneCategorie(category));
  }, [category]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <GoBackButton navigation={navigation} />
      <Text style={styles.text}>{category}</Text>
      <View style={styles.productContainer}>
        {products?.map((item, index) => (
          <ProductItem key={index} item={item} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 2,
    padding: 10,
  },
  productContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 20,
    bottom: 30
  },
});

export default CategoryProducts;
