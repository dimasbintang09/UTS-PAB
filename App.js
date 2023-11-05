import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './screens/tabs/_layout';

const Stack = createNativeStackNavigator();
const noHead = { headerShown: false };

function StackLayout() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Tabs" component={Tabs} options={noHead} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackLayout;