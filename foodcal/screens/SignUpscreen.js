import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Input, Button, Icon } from '@rneui/themed';

const SignUpScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('');

  const handleSignUp = () => {
    // Logic to handle sign up
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>Create account</Text>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputTitle}>First name</Text>
          <Input
            style={styles.inputField}
            value={firstName}
            onChangeText={setFirstName}
            placeholder="Eg. John"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputTitle}>Last name</Text>
          <Input
            style={styles.inputField}
            value={lastName}
            onChangeText={setLastName}
            placeholder="Eg. Brook"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputTitle}>Username</Text>
          <Input
            style={styles.inputField}
            value={username}
            onChangeText={setUsername}
            placeholder="Username"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputTitle}>Email</Text>
          <Input
            style={styles.inputField}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputTitle}>Password</Text>
          <Input
            style={styles.inputField}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputTitle}>Confirm Password</Text>
          <Input
            style={styles.inputField}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirm Password"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputTitle}>Gender</Text>
          <View style={styles.genderContainer}>
          <TouchableOpacity style={styles.genderOption} onPress={() => setGender('male')}>
              <Icon
                  name={gender === 'male' ? 'check-circle-fill' : 'checkbox-blank-circle-outline'}
                  type={gender === 'male' ? 'octicon' : 'material-community'}
                  color="black"
                  size={25}
              />
              <Text>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.genderOption} onPress={() => setGender('female')}>
              <Icon
                  name={gender === 'female' ? 'check-circle-fill' : 'checkbox-blank-circle-outline'}
                  type={gender === 'female' ? 'octicon' : 'material-community'}
                  color="black"
                  size={25}
              />
              <Text>Female</Text>
</TouchableOpacity> 
          </View>
        </View>
        <Button
          title="Create"
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonText}
          onPress={handleSignUp}
        />
        <View style={styles.bottomTextWrapper}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.bottomText}>Log in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  scrollView: {
    flexGrow: 1,
    padding: '5%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: '5%',
    textAlign: 'center',
  },
  inputWrapper: {
    marginBottom: '1%',
  },
  inputTitle: {
    fontSize: 18,
    marginLeft: '3%',
  },
  inputField: {
    paddingHorizontal: 10,
    height: 45,
    marginTop: '1%',
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '-5%',
    marginLeft: '35%',
  },
  genderOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: '15%',
  },
  button: {
    backgroundColor: 'rgba(39, 39, 39, 1)',
    borderRadius: 15,
    padding:15
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  },
  bottomTextWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bottomText: {
    fontWeight: 'bold',
    color: 'black',
  },
});

export default SignUpScreen;
