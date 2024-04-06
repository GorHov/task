import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import wishlistFilled from '../assets/icons/wishlist_filled.png';
import favorite from '../assets/icons/favorit.png';
import star from '../assets/icons/star.png';
import { addToWishlist, removeFromWishlist } from '../redux/reducers/appReducer';

const ProductItem = ({ item , style }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.app.wishlist);

  const navigateToProductDetail = () => {
    navigation.navigate('ProductDetail', { productId: item.id });
  };

  const toggleWishlist = () => {
    const isItemInWishlist = wishlist.some(wishlistItem => wishlistItem.id === item.id);
    if (isItemInWishlist) {
      dispatch(removeFromWishlist(item.id));
    } else {
      dispatch(addToWishlist(item));
    }
  };

  const isItemInWishlist = wishlist.some(wishlistItem => wishlistItem.id === item.id);

  return (
    <TouchableOpacity style={style ? style: styles.container} onPress={navigateToProductDetail}>
      <Image source={{ uri: item?.thumbnail }} style={styles.image} />
      <View style={styles.topRightIcons}>
        <TouchableOpacity onPress={toggleWishlist}>
          <Image source={isItemInWishlist ? favorite : wishlistFilled} style={styles.wishlistIcon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{item?.title}</Text>
      <View style={styles.priceRatingContainer}>
        <View style={styles.ratingContainer}>
          <Image source={star} style={styles.starIcon} />
          <Text style={styles.rating}>{item?.rating}</Text>
        </View>
        <Text style={styles.price}>{item?.price}$</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '48%',
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  image: {
    width: '90%',
    height: 150,
    marginBottom: 5,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  topRightIcons: {
    position: 'absolute',
    top: 5,
    right: 5,
    flexDirection: 'row',
  },
  wishlistIcon: {
    width: 20,
    height: 20,
    marginRight: 20,
  },
  title: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14.4,
    color: '#1E1D1D',
    textTransform: 'uppercase',
    marginBottom: 5,
  },
  priceRatingContainer: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  price: {
    fontSize: 14,
    color: '#1E1D1D',
    fontWeight: 'bold',
    lineHeight: 16.8,
  },
  ratingContainer : {
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  rating: {
    fontSize: 12,
    color: '#1E1D1D',
    lineHeight: 14.4,
  },
  starIcon: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
});

export default ProductItem;
