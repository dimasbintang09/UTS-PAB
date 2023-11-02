import React, { useState } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeScreen from "./screens/home";
import InspirationScreen from "./screens/inspiration";
import SavedScreen from "./screens/saved";
import SettingScreen from "./screens/setting";

const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

const Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
       screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = "home-outline";
              break;
            case "Inspiration":
              iconName = "bulb-outline";
              break;
            case "Saved":
              iconName = "bookmark-outline";
              break;
            case "Setting":
              iconName = "settings-outline";
              break;
          }
          return (
            <Ionicons
              name={iconName}
              size={28}
              color={focused ? "black" : color}
            />
          );
        },
        tabBarIconStyle: { marginTop: 5 },
        tabBarStyle: {
          height: 70,
          borderTopWidth: 0,
        },
        tabBarLabel: ({ children, color, focused }) => {
          return (
            <Text color={focused ? "black" : color} mb={2}>
              {children}
            </Text>
          );
        },
      })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Inspiration" component={InspirationScreen} />
        <Tab.Screen name="Saved" component={SavedScreen} />
        <Tab.Screen name="Setting" component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Tabs;