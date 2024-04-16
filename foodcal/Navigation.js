import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/Loginscreen';
import ForgotPasswordScreen from './screens/ForgotPasswordscreen'; 
import SignupScreen from './screens/SignUpscreen'; 
// import StartScreen from './screens/Startscreen';
import HomeScreen from './screens/Homescreen';
import Community from './screens/Community';
import ProfileScreen from './screens/Profilescreen';
import Steps from './screens/Steps';
import Water from './screens/Water';
import Challenges from './screens/Challenges';
import FoodPredictionScreen from './screens/FoodPredictionScreen';
import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider,
  gql 
  } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://tarnobrzeg.stepzen.net/api/orbiting-lemur/__graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization:
    'apikey tarnobrzeg::stepzen.io+1000::fc8ee951143d70fc4cb19421e0c67f8c412bebe7cc04fd82ae63405d5e8fd99d'
  },
});

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <ApolloProvider client={client}><NavigationContainer>
      <Stack.Navigator
        initialRouteName="FoodPredict"
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
        }}
      >
        {/* <Stack.Screen name="StartScreen" component={StartScreen} /> */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Community" component={Community} />
        <Stack.Screen name="Steps" component={Steps} />
        <Stack.Screen name="Water" component={Water} />
        <Stack.Screen name="Challenges" component={Challenges} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="FoodPredict" component={FoodPredictionScreen} />
      </Stack.Navigator>
    </NavigationContainer></ApolloProvider>
  );
};

export default Navigation;
