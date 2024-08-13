import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { View ,Text, StatusBar} from 'react-native';
import {MaterialIcons} from 'react-native-vector-icons';

const Orderplaced = () => {
    const nav=useNavigation();
    useEffect(()=>{
        setTimeout(()=>{  
            nav.navigate('Home'); 
        },2000);
    },[]);
  return (
   <View style={{
    flex:1,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center'
   }}>
    <StatusBar backgroundColor='white'/>
    <MaterialIcons name='verified' size={90} color='green'/>
    <Text style={{fontSize:18,textAlign:'center'}}>Order placed successfully</Text>
   </View>
  )
}

export default Orderplaced;