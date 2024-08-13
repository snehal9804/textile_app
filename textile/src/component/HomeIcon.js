import React from 'react'
import { View ,Text,  ImageBackground} from 'react-native';

const HomeIcon = () => {
  return (
   <View style={{justifyContent:'center',alignItems:'center'}}>
   <ImageBackground
   style={{width:120,height:90}}
   source={require('../assets/mainIcon.jpg')}> 
   </ImageBackground>
  
   </View>
  )
}

export default HomeIcon;
