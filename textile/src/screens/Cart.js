import React from 'react'
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { AntDesign } from 'react-native-vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeFromCart } from '../../Redux/CartSlice';
import { FlatList } from 'react-native';
import { myColors } from '../utilities/MyColors';
import { useNavigation } from '@react-navigation/native';
const Cart = () => {
    const nav = useNavigation()
    const dispatch = useDispatch();
    const storeData = useSelector((state) => state.CartSlice);
    let amount = 0
    storeData.forEach(element => {
        amount += element.price
    })

    return (
        <SafeAreaView
            style={{
                flex: 1,
                paddingHorizontal: 15,
                backgroundColor: 'white',
                gap: 15
            }}>
            <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: '500' }}>My Cart</Text>
            <View style={{
                flex: 0.93
            }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={{}}
                    data={storeData}
                    renderItem={({ item, index }) => (
                        <View
                            style={{
                                height: responsiveHeight(18),
                                borderBottomColor: '#E3E3E3',
                                borderBottomWidth: 2,
                                flexDirection: 'row',

                            }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 0.35 }}>
                                <Image
                                    style={{ height: 120, width:200, resizeMode: 'contain' }}
                                    source={{ uri: item.img }} />
                            </View>
                            <View style={{

                                flex: 0.7,
                                paddingHorizontal: 10,
                                paddingVertical: 20
                            }}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignContent: 'center',
                                        justifyContent: 'space-between',

                                    }}>
                                    <Text style={{ fontSize: 20, fontWeight: '600' }}>{item.name}</Text>
                                    <AntDesign
                                        name='close'
                                        size={25}
                                        color='grey'
                                        onPress={() => {
                                            dispatch(removeFromCart(item));
                                        }} />
                                </View>
                                <Text style={{
                                    fontSize: 16,
                                    color: 'grey',
                                    marginTop: 5
                                }}>Quantity</Text>
                                <View
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        flexDirection: 'row',
                                        marginTop: 10
                                    }}>
                                    {/* quantity cont */}
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            gap: 10,

                                        }}>
                                        <AntDesign name='minuscircleo' size={28} color='#53b175'
                                            onPress={() => {
                                                dispatch(decrementQuantity(item))
                                            }} />
                                        <Text style={{ fontSize: 17 }}>{item.quantity}</Text>
                                        <AntDesign name='pluscircleo' size={28} color='#53b175'
                                            onPress={() => {
                                                if (item.quantity == 70) {

                                                } else {
                                                    dispatch(incrementQuantity(item));
                                                }
                                            }} />

                                    </View>
                                    {/* quantity cont */}
                                    <Text style={{
                                        fontSize: 19,
                                        fontWeight: '600',
                                    }}>₹{item.quantity * item.price}</Text>
                                </View>
                            </View>

                        </View>

                    )} />

            </View>
            <View
            >
                <TouchableOpacity
                    onPress={() => {
                        nav.navigate('Login')
                    }}
                    activeOpacity={0.8}
                    style={{
                        backgroundColor: '#53b175',
                        borderRadius: 10,
                        height: 70,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 30 }}>
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>Go to checkout</Text>
                        {/* <Text style={{ fontSize: 15, fontWeight: '500', color: 'white' }}>₹{amount}</Text> */}
                    </View>
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    );
};

export default Cart;

