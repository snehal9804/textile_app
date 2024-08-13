import React, { useEffect } from 'react';
import { View,Text, StatusBar,Image,SafeAreaView} from 'react-native';
import { myColors } from '../utilities/MyColors';
import { useNavigation } from '@react-navigation/native';
const Splash=()=>{
  const nav=useNavigation()
  useEffect(()=>{
    setTimeout(()=>{
      nav.replace('Tabs')
    },3000);
  },[]);

  return (
   <View style={{backgroundColor:'#262323',flex:1,justifyContent:'center'}}>
    <StatusBar style='light'/>
    <View style={{
      flexDirection:"row",
      alignItems:'center',
      justifyContent:'center',
      gap:15
    }}>
      <SafeAreaView>
     <View>
      <Image style={{width:650,height:400}} source={require('../assets/mainIcon.jpg')}></Image>
      <View>
        {/* <Text style={{fontSize:60,color:myColors.secondary}}>Thread Tales</Text>
        <Text style={{color:myColors.secondary,fontSize:25,textAlign:'center',letterSpacing:5,top:-15}}>Unveiling Elegance,One Thread at One Time.</Text> */}
     </View>
     </View>
     </SafeAreaView>
    </View>
   </View>
  );
};

export default Splash;