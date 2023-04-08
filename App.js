import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Pages/Login';
import Cadastro from './src/Pages/Login/cadastro';
import Home from './src/Pages/Home';
import CardMenu from './src/Pages/Card';
import CardMembros from './src/Pages/Card/Membros';
import CardGamificacao from './src/Pages/Card/Gamificacao';
import CardSocial from './src/Pages/Card/Social';
import CardChat from './src/Pages/Card/Chat';
import CardEnquetes from './src/Pages/Card/Enquetes';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Cadastro'
          component={Cadastro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='CardMenu'
          component={CardMenu}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='CardMembros'
          component={CardMembros}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='CardGamificacao'
          component={CardGamificacao}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='CardSocial'
          component={CardSocial}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='CardChat'
          component={CardChat}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='CardEnquetes'
          component={CardEnquetes}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}