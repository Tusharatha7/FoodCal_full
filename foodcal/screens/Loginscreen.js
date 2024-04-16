import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Image } from 'react-native';
import { Button, Text, Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { axiosInstance } from '../api/axios';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const loginUser = async () => {
        console.log(email, password)
        console.log("brrrrrrrrrrrrrr")
        // Logic to handle login
         axiosInstance.post('http://127.0.0.1:8000/user/token/', {
            email, password
        }).then((res)=>{
                console.log(res)
            }).catch(err=>console.log(err))
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container}>
                <Image source={require('C:/Users/ASUS/Documents/FYP/foodcal/assets/logo.png')} style={styles.logo} />
                <View style={styles.fieldbox}>
                    <Text style={[styles.title, { fontSize: 24 }]}>Login to your Account</Text>
                    <Text style={styles.subtitle}>Email Address</Text>
                    <TextInput
                        placeholder="Enter your email"
                        value={email}
                        onChangeText={setEmail}
                        style={styles.input}
                    />
                    <Text style={styles.subtitle}>Password</Text>
                    <TextInput
                        placeholder="Enter your password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        style={styles.input}
                    />
                    <View style={styles.rememberMe}>
                        <TouchableOpacity onPress={() => setRememberMe(!rememberMe)} style={styles.rememberMeIcon}>
                            {rememberMe ? (
                                <Icon
                                    name="check-circle-fill"
                                    type="octicon"
                                    color="black"
                                    size={25}
                                />
                            ) : (
                                <Icon
                                    name="checkbox-blank-circle-outline"
                                    type="material-community"
                                    color="black"
                                    size={25}
                                />
                            )}
                        </TouchableOpacity>
                        <Text style={styles.rememberMeText}>Remember Me</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                            <Text style={styles.forgotPassword}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <Button title="Login" buttonStyle={styles.Button} onPress={loginUser} />
                    <View style={styles.signUpContainer}>
                        <Text style={styles.signUpText}>Don't have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                            <Text style={styles.signUpLink}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#FFFFFF',
    },
    fieldbox: {
        paddingBottom: 300,
        justifyContent: 'center',
        width: '100%',
    },
    logo: {
        marginTop:'25%',
        width: '100%',
        height: '28%',
    },
    title: {
        textAlign: 'center',
        color: 'grey',
        marginBottom: 65,
    },
    subtitle: {
        textAlign: 'left',
        marginBottom: 15,
        fontSize: 17,
    },
    input: {
        width: '100%',
        height: 60,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 25,
        fontSize: 17,
    },
    rememberMe: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    rememberMeIcon: {
        marginRight: 10,
    },
    rememberMeText: {
        flex: 1,
        fontSize: 17,
    },
    forgotPassword: {
        marginLeft: 'auto',
        color: 'black',
        fontSize: 17,
    },
    signUpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 35,
    },
    signUpText: {
        color: 'black',
        fontSize: 17,
    },
    signUpLink: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
    },
    Button: {
        backgroundColor: 'rgba(39, 39, 39, 1)',
        marginTop: 40,
        padding: 20,
        borderRadius: 10,
    },
});

export default LoginScreen;
