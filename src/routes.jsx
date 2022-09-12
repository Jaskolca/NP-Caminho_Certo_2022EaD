import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/home';
import Contacts from './pages/contactList';

const Stack = createNativeStackNavigator();

const headerStyle = {
  headerStyle: {
    backgroundColor: '#25CCB0',
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={headerStyle}>
        <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="contacts" component={Contacts} options={{ title: 'Lista de contatos SOS' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
