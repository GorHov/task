import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../redux/actions/userAction";
import { logout } from "../redux/reducers/userReducer";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth.userInfo);
  const token = useSelector((state) => state.auth.token);

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    dispatch(getMe(token));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
      </View>
      <View style={styles.userInfoContainer}>
        <Image source={{ uri: userInfo?.image }} style={styles.avatar} />
        <View style={styles.userInfo}>
          <Text style={styles.info}>
            {userInfo?.firstName} {userInfo?.lastName}
          </Text>
          <Text style={styles.gender}>{userInfo?.gender}</Text>
        </View>
      </View>
      <View style={styles.logoutContainer}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Image
            source={require("../assets/icons/logout.png")}
            style={styles.searchIcon}
          />
          <Text style={styles.buttonText}>Log Out</Text>
          <Image
            source={require("../assets/icons/arrow-back.png")}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  header: {
    width: '100%',
    textAlign: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    textTransform: "uppercase",
    textAlign: "center",
    marginTop: 20,
    bottom: 30
  },
  userInfoContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#E6E6E6",
    paddingBottom: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20,
    borderBottomWidth: 1,
    borderColor: "#E6E6E6",
  },
  userInfo: {
    flex: 1,
    justifyContent: "center",
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '400'
  },
  gender: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '300',
    color: '#ADADAD'
  },
  logoutContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    width: "100%",
    paddingTop: 10,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#E6E6E6",
  },
  logoutButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    width: "90%",
    marginHorizontal: "5%",
  },
  logoutIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  buttonText: {
    color: "#1E1D1D",
    fontSize: 16,
    fontWeight: "bold",
    fontWeight: "300",
    right: 100,
  },
});

export default ProfileScreen;
