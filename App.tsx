import 'react-native-reanimated';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import HomeScreen from './Screens/HomeScreen';
import DetailScreen from './Screens/DetailScreen';
import { Profile } from './type/Profile';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { SafeAreaView, StatusBar } from 'react-native';
import CounterScreen from './Screens/CounterScreen';
import LoginScreen from './Screens/LoginScreen';
import SignUpScreen from './Screens/SignUpScreen'; 
import DashboardScreen from './Screens/Dashboard'; 
import Outflow from './Screens/OutlowScreen';
import AddUsercreen from './Screens/AddUserScreen';
import AllUsersScreen from './Screens/AllUsers';
import AsyncListScreen from './Screens/AsyncListScreen';
import BottomSheetScreen from './Screens/BottomSheetScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
     <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login Screen" screenOptions={{headerShown:false}} >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
          <Stack.Screen name ="Login Screen" component={LoginScreen} />
          <Stack.Screen name ="Signup Screen" component={SignUpScreen} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="OutFlows" component={Outflow} />
            <Stack.Screen name="AddUser" component={AddUsercreen} />
             <Stack.Screen name="AllUsers" component={AllUsersScreen} />
               <Stack.Screen name="AsyncList" component={AsyncListScreen} />
                <Stack.Screen name="Bottomsheet" component={BottomSheetScreen} />

      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>

    
  );
}
