import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, SafeAreaView, Image, StatusBar, TouchableOpacity, ScrollView } from "react-native";
import { addToCart } from "../../Redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import Icon from 'react-native-vector-icons/Ionicons';
import DropBox from "../component/DropBox";
const Details = ({ route }) => {
    const storeData = useSelector((state) => state.CartSlice);
    const dispatch = useDispatch()
    const productData = route.params.main;
    const { name, price, img } = productData;

    const nav = useNavigation()
    return (
        <SafeAreaView style={{ flex: 1, gap: 20, backgroundColor: 'white' }}>
            <StatusBar backgroundColor='white' />
            <ScrollView
                showsVerticalScrollIndicator={false}>


                <Image
                    resizeMode="cover"
                    style={{ height: 400, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}
                    source={{ uri: img, }} />
                <View style={{
                    flexDirection: 'row',

                    justifyContent: 'space-between',
                    position: 'absolute',
                    width: '100%',
                    paddingHorizontal: 15,
                    alignItems: 'center'
                }}>
                    <Icon
                        onPress={() => {
                            nav.goBack();
                        }}
                        name="chevron-back" size={28} color='white' />
                    <Icon name="share" size={28} color='white' />
                </View>

                <View style={{ paddingHorizontal: 15, backgroundColor: 'white', flex: 1 }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Text style={{ fontSize: 25, color: 'black', fontWeight: '600' }}>{name}</Text>
                        <Icon name="heart-outline" size={30} color='black' />
                    </View>
                    <Text style={{ marginTop: 5, fontSize: 20, color: 'grey' }}>Price:</Text>
                    <Text style={{ marginTop: 5, fontSize: 25, color: 'black', fontWeight: 'bold' }}>₹{price}</Text>
                    <Text style={{ marginTop: 5, fontSize: 20, color: 'grey' }}>₹100 Delivery Charges Pan India</Text>
                    <DropBox />

                    <View style={{
                        flex: 0.9,
                        justifyContent: 'flex-end'
                    }}>
                        {
                            storeData.some((value) => value.name == productData.name) ? (

                                <TouchableOpacity
                                    disabled={true}
                                    activeOpacity={0.8}
                                    style={{
                                        backgroundColor: 'grey',
                                        borderRadius: 10,
                                        height: 70,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                    <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>Added to Cart</Text>
                                </TouchableOpacity>) : (
                                <TouchableOpacity
                                    onPress={() => {
                                        dispatch(addToCart(productData));
                                        nav.navigate("Cart");
                                    }}
                                    activeOpacity={0.8}
                                    style={{
                                        backgroundColor: '#53b175',
                                        borderRadius: 10,
                                        height: 70,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                    <Text style={{ color: 'white', fontSize: 25, fontWeight: '700' }}>Add to Cart</Text>
                                </TouchableOpacity>)
                        }
                    </View>

                </View>
            </ScrollView>

        </SafeAreaView>
    )
};
export default Details;