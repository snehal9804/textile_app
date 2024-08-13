import React, { useState }  from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Dropdown } from '../utilities/description';
import Icon from 'react-native-vector-icons/Ionicons';

const DropBox = () => {
    const [myIndex, setmyIndex] = useState();
    const[toggle,settoggle]=useState(false);
    return (
        <View style={{ marginTop: 20 }}>
            <FlatList
                data={Dropdown}
                renderItem={({ item, index }) => (
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                setmyIndex(index);
                                settoggle(!toggle);
                            }}
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                borderBottomColor: '#222322',
                                borderBottomWidth: 2,
                                marginBottom: 10,
                                paddingVertical: 15
                            }}>
                            <Text style={{fontSize:20}}>{item.title}</Text>
                            <Icon name={myIndex==index && toggle ? 'chevron-down':'chevron-back'} size={28} color='black' />
                        </TouchableOpacity>
                        {myIndex == index && toggle ? <Text style={{backgroundColor:'#F7F6B1',fontSize:15}}>{item.content}</Text>:null
                        }
                    </View>
                )} />
        </View>
    )
}

export default DropBox;