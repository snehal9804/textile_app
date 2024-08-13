import React from 'react';
import { View, Text,Button, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {useDispatch, useSelector } from 'react-redux';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import { addToCart, removeFromCart } from '../../Redux/CartSlice';
import { Ionicons } from 'react-native-vector-icons';
const Favourites = () => {
  const favorites = useSelector((state) => state.CartSlice);
  const dispatch = useDispatch();

  const nav = useNavigation();

  return (
    <View style={{ flex: 1, padding: 10 }}>
      {favorites.length === 0 ? (
        <Text style={styles.emptyMessage}>No favorites added yet.</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                nav.navigate('Details', {
                  main: item,
                });
              }}
              style={styles.container}
            >
              <Image style={styles.image} source={{ uri: item.img }} />
              <View style={styles.textContainer}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.priceText}>₹{item.price}</Text>
                <Button style={styles.but} title="Remove"  onPress={()=>{
           dispatch(removeFromCart(item))
           nav.navigate('Favourites')
          }}/>
           {/* <Ionicons   style={styles.but} name='close' size={24} color='black' onPress={()=>{
           dispatch(removeFromCart(item))
           nav.navigate('Favourites')
          }}/> */}
                <Button style={styles.but} title="Move to Cart" onPress={() => {
                 dispatch(addToCart(item));
                nav.navigate("Cart") }}/>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  emptyMessage: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 38,
    color: '#63137A',
  },
  container: {
    height: responsiveHeight(40),
    width: responsiveWidth(100),
    marginRight: 15,
    marginBottom:30, 
    backgroundColor:'white',
    borderColor:'#969191',
    borderTopWidth: 3,
    borderStartWidth:1,
    borderRadius:10,
    borderBottomWidth: 1.5,
    padding: 15,
    
   
  },
  but:  {
    // flexDirection:'row',
    // alignItems:'flex-end'
    height:40,
    width:100,
    margin:10,
    borderColor:'#969191',
    borderTopWidth:1.5,
    borderStartWidth:0.5,
    borderRadius:10,
    borderBottomWidth: 2,
    

  },
  image: {
    height: 130,
    width:responsiveWidth(100),
    // alignSelf: 'center',
    resizeMode: 'cover',
    borderColor:'#969191',
  
  },
  textContainer: {
    paddingHorizontal: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: '600',
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Favourites;
