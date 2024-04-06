import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

const GoBackButton = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()} >
      <Image
        source={require('../assets/icons/back.png')}
        style={styles.searchIcon}
      />
    </TouchableOpacity>
  );
};

const styles = {
  
};

export default GoBackButton;
