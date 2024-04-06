import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/actions/userAction';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async () => {
    dispatch(loginUser({ username, password }));
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.title}>Log in</Text>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
        />
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 80,
    paddingBottom: 50,
    width: '90%'
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 28.8,
    textAlign: 'center',
    color: '#1E1D1D',
    marginBottom: 20,
    textTransform: 'uppercase'
  },
  inputGroup: {
    width: '100%',
  },
  label: {
    marginBottom: 5,
    color: '#1E1D1D',
    fontWeight: '400',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#7867BE',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    textTransform: 'uppercase'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
