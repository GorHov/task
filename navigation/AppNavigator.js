import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import WishlistScreen from "../screens/WishlistScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CategoryScreen from "../screens/CategoryScreen";
import { useSelector } from "react-redux";
import { Image } from "react-native";
import homeFilledIcon from "../assets/icons/home_filled.png";
import homeOutlineIcon from "../assets/icons/home_outline.png";
import categoryFilledIcon from "../assets/icons/category_filled.png";
import categoryOutlineIcon from "../assets/icons/category_outline.png";
import wishlistFilledIcon from "../assets/icons/wishlist_filled.png";
import wishlistOutlineIcon from "../assets/icons/wishlist_outline.png";
import profileFilledIcon from "../assets/icons/profile_filled.png";
import profileOutlineIcon from "../assets/icons/profile_outline.png";
import CategoryProducts from "../screens/CategoryProducts";
import ProductDetail from "../components/ProductDetail";
import ProductsSearch from "../screens/ProductsSearch";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? homeOutlineIcon : homeFilledIcon;
          } else if (route.name === "Category") {
            iconName = focused ? categoryOutlineIcon : categoryFilledIcon;
          } else if (route.name === "Wishlist") {
            iconName = focused ? wishlistOutlineIcon : wishlistFilledIcon;
          } else if (route.name === "Profile") {
            iconName = focused ? profileOutlineIcon : profileFilledIcon;
          }

          return (
            <Image source={iconName} style={{ width: size, height: size }} />
          );
        },
      })}
    >
      <Tab.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
      <Tab.Screen name="Category" options={{ headerShown: false }} component={CategoryScreen} />
      <Tab.Screen name="Wishlist" options={{ headerShown: false }} component={WishlistScreen} />
      <Tab.Screen name="Profile" options={{ headerShown: false }} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  const userToken = useSelector((state) => state.auth.token);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userToken == null ? (
          <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
        ) : (
          <>
            <Stack.Screen name="Main" options={{ headerShown: false }} component={TabNavigator} />
            <Stack.Screen
              name="CategoryDetails"
              component={CategoryProducts}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CategoryProducts"
              component={CategoryProducts}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductDetail"
              component={ProductDetail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductsSearch"
              component={ProductsSearch}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
