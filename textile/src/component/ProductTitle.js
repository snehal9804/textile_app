import React from 'react'
import { View ,Text} from 'react-native';

const ProductTitle = ({title}) => {
  return (
    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={{fontSize:20,fontWeight:'600'}}>{title}</Text>
    </View>
  )
}

export default ProductTitle;
