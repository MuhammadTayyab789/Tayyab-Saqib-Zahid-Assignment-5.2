import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import DetailScreen from './Screens/DetailScreen';
import { Profile } from './type/Profile';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { SafeAreaView, StatusBar } from 'react-native';
import CounterScreen from './Screens/CounterScreen';
import LoginScreen from './Screens/LoginScreen';





const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login Screen" screenOptions={{headerShown:false}} >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
          <Stack.Screen name ="Login Screen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>

    
  );
}
