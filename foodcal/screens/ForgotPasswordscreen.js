import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleSendButtonPress = () => {
    // Logic to handle sending password reset email
    console.log('Sending password reset email to:', email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password?</Text>
      <Text style={styles.subtitle}>Please enter the email associated with your account.</Text>
      <View style={styles.inputContainer}>
      <Text style={styles.emailtext}>Email address</Text>
        <TextInput        
          style={styles.input}
          placeholder="Enter your email address"
          value={email}
          onChangeText={setEmail}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendButtonPress}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>Remember password?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={[styles.bottomText, styles.loginText]}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'left',
    paddingHorizontal: '5%',
    marginTop:'-45%'
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    marginBottom: '3%',
  },
  subtitle: {
    fontSize: 20,
  },
  emailtext: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: '3%',
  },
  inputContainer: {
    width: '100%',
    marginTop: '10%',
  },
  input: {
    height: '18%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: '5%',
    fontSize: 17
  },
  sendButton: {
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  bottomContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: '1%',
    width: '100%',
    marginLeft:'5%',
  },
  bottomText: {
    marginLeft:5,
    marginBottom: 10,
    color: 'black',
    fontSize: 16
  },
  loginText: {
    fontWeight: 'bold',
  },
});

export default ForgotPasswordScreen;
