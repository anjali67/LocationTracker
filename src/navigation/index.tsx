import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LocationMap from '../screen/LocationMap';

const Stack = createNativeStackNavigator();

export default function  Navigation() {
  return (
    <NavigationContainer>
     <Stack.Navigator  screenOptions={{headerShown:false}}>
      <Stack.Screen name="LocationMap" component={LocationMap} />
    </Stack.Navigator>
    </NavigationContainer>
   
  );
}

