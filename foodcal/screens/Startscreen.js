import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Image, Button } from '@rneui/themed';
// import logo from './assets/logo.png';

const StartScreen = () => {
 const navigation = useNavigation();

 const handleGetStarted = () => {
    navigation.navigate('Login');
 };

 return (
    <View style={styles.container}>
      {/* <Image source={require('../assets/logo.png')} style={styles.logo} /> */}
      <Text style={styles.text}>Explore the app</Text> {/* Corrected closing tag */}
      <Button title="Get Started" buttonStyle={styles.button} onPress={handleGetStarted} />
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
 },
 text: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20, 
 },
 button: {
    backgroundColor: 'rgba(39, 39, 39, 1)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20, 
 },
//  logo: {
//     width: 200, 
//     height: 100, 
//     marginBottom: 20,
//  },
});

export default StartScreen;
