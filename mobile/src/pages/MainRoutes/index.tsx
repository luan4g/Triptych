import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

import Home from '../Home';
import Account from '../Account';
import Settings from '../Settings';
import Chats from '../Chats';

const Tab = createBottomTabNavigator();
const tab = createMaterialBottomTabNavigator()

function MainRoutes() {
  return (
    <tab.Navigator
      initialRouteName="Home"
      backBehavior="initialRoute"
      sceneAnimationEnabled
      shifting
      screenOptions={{
        tabBarColor: '#fff'
      }}
    >
      <tab.Screen 
        name="Account" 
        component={Account} 
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="user-alt" color="#4e4e4e" size={24} />
          )
        }} 
      />
      <tab.Screen 
        name="Home" 
        component={Home}
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="circle-notch" color="#4e4e4e" size={24} />
          )
        }}
      />
      <tab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="comments" color="#4e4e4e" size={24} />
          )
        }}
      />
      <tab.Screen 
        name="Settings" 
        component={Settings}
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="cog" color="#4e4e4e" size={24} />
          )
        }}
      />
    </tab.Navigator>
  )
}

export default MainRoutes;