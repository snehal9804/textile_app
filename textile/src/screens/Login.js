
import React, { useState } from 'react';
import { View, Text, SafeAreaView, StatusBar, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { myColors } from '../utilities/MyColors';
import HomeIcon from '../component/HomeIcon';

const Login = () => {
  const nav = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      if (userData !== null) {
        const { email: storedEmail, password: storedPassword } = JSON.parse(userData);
        if (email === storedEmail && password === storedPassword) {
          console.log('Login successful');
          nav.navigate('Orderplaced');
        } else {
          console.log('Invalid credentials');
        }
      } else {
        console.log('No user data found');
      }
    } catch (error) {
      console.error('Error reading data', error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle='light-content' />
      {/* <ImageBackground
        source={require('../assets/bb2.jpeg')}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        imageStyle={{  }}
      > */}
        <View style={{backgroundColor:'#262323',flex:1,justifyContent:'center'}}>
          <HomeIcon/>
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingHorizontal: 20 }}>
          <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)', padding: 20, borderRadius: 10, elevation: 5}}>
            <Text style={{ color:'black', fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>
              Login to Thread Tales
            </Text>
            <Text style={{ fontSize: 16, fontWeight: '400', color: '#3A393A', textAlign: 'center', marginBottom: 20 }}>
              Enter your email and password to continue
            </Text>

            <Text style={{ fontSize: 16, fontWeight: '500', color:'black', marginTop: 20 }}>
              MAIL ID:
            </Text>
            <TextInput
              keyboardType='email-address'
              style={{
                borderColor: 'black',
                borderBottomWidth: 1,
                fontSize: 16,
                marginTop: 10,
                paddingBottom: 5,
                color:'black',
              }}
              placeholder="Enter your email"
              placeholderTextColor="#3A393A"
              value={email}
              onChangeText={setEmail}
            />

            <Text style={{ fontSize: 16, fontWeight: '500', color:'black', marginTop: 30 }}>
              PASSWORD
            </Text>
            <View style={{ borderColor: 'black', borderBottomWidth: 1, marginTop: 10 }}>
              <TextInput
                secureTextEntry={true}
                maxLength={20}
                keyboardType='ascii-capable'
                style={{
                  fontSize: 17,
                  paddingBottom: 5,
                  color:'black',
                }}
                placeholder="Enter your password"
                placeholderTextColor="#3A393A"
                value={password}
                onChangeText={setPassword}
              />
            </View>

            <TouchableOpacity
              onPress={handleLogin}
              style={{
                backgroundColor: myColors.primary,
                marginTop: 30,
                height: 50,
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={{
                fontSize: 18,
                color: 'white',
                fontWeight: '600',
              }}>
                Login
              </Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
              <Text style={{ color:'black', fontSize: 12 }}>
                Your gateway to the finest Textiles!!.
              </Text>
              <TouchableOpacity onPress={() => nav.navigate('SignUp')}>
                <Text style={{ fontSize: 14, color: myColors.primary, fontWeight: '600', marginLeft: 5 }}>
                  Haven't Sign up ?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Login;
