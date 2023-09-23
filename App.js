import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddUserScreen from './src/screens/AddUserScreen';
import AddUserSuccessScreen from './src/screens/AddUserSuccessScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* 홈화면 */}
        <Stack.Screen name="HomeScreen" component={HomeScreen} />

        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="AddUserScreen" component={AddUserScreen} />
        <Stack.Screen name="AddUserSuccess" component={AddUserSuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
