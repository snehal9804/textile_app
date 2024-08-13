import React from 'react'
import { View,Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Cart from './Cart';
import Profile from './Profile';
import {Entypo} from 'react-native-vector-icons';
import{FontAwesome} from 'react-native-vector-icons'
import{Ionicons} from 'react-native-vector-icons';
import Settings from './Settings';
import Favourites from './Favourites';
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
    screenOptions={{
        tabBarShowLabel:false,
        headerShown:false

    }}>
      <Tab.Screen
       name="Home"
        component={Home}
      options={{
        tabBarIcon:({focused})=>
            focused ?(
                <View
                style={{
                    backgroundColor:'black',
                    width:40,
                    height:40,
                    borderRadius:30,
                    justifyContent:'center',
                    alignItems:'center'
                }}>
            <Entypo name='home' size={24} color='white'/></View>
        ):(
            <Entypo name='home' size={24} color='grey'/>
        ),
      }} />
      <Tab.Screen
       name="Cart"
        component={Cart}
      options={{
        tabBarIcon:({focused})=>
            focused ?(
                <View
                style={{
                    backgroundColor:'black',
                    width:40,
                    height:40,
                    borderRadius:30,
                    justifyContent:'center',
                    alignItems:'center'
                }}>
            <FontAwesome name='shopping-cart' size={24} color='white'/>
                </View>
        ):(
            <FontAwesome name='shopping-cart' size={24} color='grey'/>
        ),
      }} />
      <Tab.Screen
       name="Profile"
        component={Profile}
      options={{
        tabBarIcon:({focused})=>
            focused ?(
                <View
                style={{
                    backgroundColor:'black',
                    width:40,
                    height:40,
                    borderRadius:30,
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <Ionicons name='person' size={24} color='white'/>
                </View>          
        ):(
            <Ionicons name='person' size={24} color='grey'/>
        )
      }} />

<Tab.Screen
       name="Favourites"
        component={Favourites}
      options={{
        tabBarIcon:({focused})=>
            focused ?(
                <View
                style={{
                    backgroundColor:'black',
                    width:40,
                    height:40,
                    borderRadius:30,
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <Ionicons name='heart' size={24} color='white'/>
                </View>          
        ):(
            <Ionicons name='heart' size={24} color='grey'/>
        )
      }} />
      


  

    </Tab.Navigator>
  )
}

export default Tabs;
