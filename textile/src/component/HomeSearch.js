import React from 'react'
import { View, Text, TextInput } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
const HomeSearch = () => {
    return (
        <View
            style={{
                backgroundColor: '#E3E3E3',
                height: responsiveHeight(6.5),
                borderRadius: 10,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 20,
                gap: 10
            }}>
            <Icon name="search" size={29} color='black' />
            <TextInput
            style={{flex:1,fontSize:29}}
            placeholder='Search Here'></TextInput>
        </View>
    )
}

export default HomeSearch;
