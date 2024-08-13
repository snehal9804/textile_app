
import React from 'react'
import { View ,Text, FlatList, TouchableOpacity} from 'react-native';
import { fabrics } from '../utilities/description';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { myColors } from '../utilities/MyColors';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../Redux/CartSlice';
import { Ionicons } from 'react-native-vector-icons';
const Product = ({data}) => {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.CartSlice);
  const nav=useNavigation()
  return (
   <View>
  <FlatList
  horizontal
  showsHorizontalScrollIndicator={false}
   data={data}
  renderItem={({item,index})=>(
    <TouchableOpacity
    onPress={()=>{
      nav.navigate('Details',{
        main:item
      });
    }}
    activeOpacity={0.7}
    style={{
      height:responsiveHeight(28),
    borderWidth:2,
    borderColor:'#222322',
      width:responsiveWidth(45),
      marginRight:15,
      borderRadius:10,
    }}>
      <Image 
      style={{height:125,width:150,alignSelf:'center',resizeMode:'contain'}}
      source={{uri:item.img}}/>
      <View style={{paddingHorizontal:10 }}>
        <Text style={{fontSize:18,fontWeight:'600'}}>{item.name}</Text>
        <View style={{
          flexDirection:'row',alignItems:'center',
          justifyContent:'space-between'
        }}>
          <Text style={{fontSize:20,fontWeight:'bold'}}>₹{item.price}</Text>
          {
            storeData.some((value)=>value.name==item.name)?
            <Ionicons name='heart' size={28} color='red'
          onPress={()=>{
           dispatch(removeFromCart(item))
           nav.navigate('Favourites')
          }}/>:
          <Ionicons name='heart-outline' size={28} color='black'
          onPress={()=>{
           dispatch(addToCart(item))
           nav.navigate('Favourites')
          }}/>
          }
          
        </View>
      </View>
    </TouchableOpacity>
  )}/>
   </View>
  )
}
export default Product;