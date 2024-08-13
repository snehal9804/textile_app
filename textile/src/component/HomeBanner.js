import React from 'react'
import { Image, ImageBackground } from 'react-native';
import { View,Text} from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const HomeBanner = () => {
  return (
    <View>
       <ImageBackground 
       style={{height:responsiveHeight(15),
        width:responsiveWidth(100),
    flexDirection:'row'}}
       source={require('../assets/banner.jpg')}><Text
       style={{
         fontSize: 22, fontWeight: '500',color:'black', paddingHorizontal: 60, marginTop: 38
       }}>
       ~ONE SIZE FITS ALL~
     </Text></ImageBackground>
    </View>
  )
}

export default HomeBanner;
