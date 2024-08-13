import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/screens/Splash';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Details from './src/screens/Details';
import Cart from './src/screens/Cart';
import Profile from './src/screens/Profile';
import Tabs from './src/screens/Tabs';
import {Store } from './Redux/Store';
import {Provider} from 'react-redux'
import Home from './src/screens/Home';
import Orderplaced from './src/screens/Orderplaced';
import Settings from './src/screens/Settings';
import EditProfile from './src/screens/EditProfile';
import Favourites from './src/screens/Favourites';
import AboutUs from './src/screens/AboutUs';
const Stack = createStackNavigator();
export default function App () {
  return (
  
      <Provider store={Store}>
          <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Splash'
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'black' },
        }}>
        <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Tabs' component={Tabs}/>
        <Stack.Screen name='Details' component={Details}/>
        <Stack.Screen name='Cart' component={Cart}/>
        <Stack.Screen name='Profile' component={Profile}/>
        <Stack.Screen name='Orderplaced' component={Orderplaced}/>
        <Stack.Screen name='Settings' component={Settings}/>
        <Stack.Screen name='EditProfile' component={EditProfile}/>
        <Stack.Screen name='Favourites' component={Favourites}/>
        <Stack.Screen name='AboutUs' component={AboutUs}/>
       
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};