import React, { useState, useRef, useEffect } from 'react';
import { View, Text, SafeAreaView, StatusBar, ScrollView, TextInput, TouchableOpacity, ImageBackground, Animated, ActivityIndicator, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { myColors } from '../utilities/MyColors';
import HomeIcon from '../component/HomeIcon';

const SignUp = () => {
  const nav = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const slideAnim = useRef(new Animated.Value(50)).current; // Initial value for translateY: 50
  const slideOutAnim = useRef(new Animated.Value(0)).current; // Initial value for translateX: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, slideAnim]);

  const handleSignUp = async () => {
    if (!username || !email || !password) {
      console.log('Please fill all fields');
      return;
    }

    setIsLoading(true); // Show loading indicator

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      console.log('Invalid email format');
      setIsLoading(false);
      return;
    }

    try {
      await AsyncStorage.setItem('userData', JSON.stringify({ username, email, password }));
      console.log('User data saved');

      // Slide the form out to the right
      Animated.timing(slideOutAnim, {
        toValue: Dimensions.get('window').width,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setIsLoading(false);
        nav.navigate('Login'); // Navigate to the login screen after animation
      });

    } catch (error) {
      console.error('Error saving data', error);
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle='light-content' />
      {/* <ImageBackground
        source={require('../assets/mainIcon.jpg')}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        imageStyle={{ opacity: 0.8 }}
      > */}
       <View style={{backgroundColor:'#262323',flex:1,justifyContent:'center'}}>
        <HomeIcon/>
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingHorizontal: 20 }}>
          <Animated.View style={{
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }, { translateX: slideOutAnim }],
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            padding: 20,
            borderRadius: 10,
            elevation: 5
          }}>
            <Text style={{ color:'black', fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>
              Join us today & Weave your style!
            </Text>
            <Text style={{ fontSize: 16, fontWeight: '400', color: 'black', marginBottom: 10, textAlign: 'center' }}>
              Enter your credentials to continue
            </Text>

            <Text style={{ fontSize: 16, fontWeight: '500', color:'black', marginTop: 20 }}>
              NAME:
            </Text>
            <TextInput
              maxLength={15}
              keyboardType='default'
              style={{
                borderColor: 'black',
                borderBottomWidth: 1,
                fontSize: 16,
                marginTop: 10,
                paddingBottom: 5,
                color: myColors.secondary,
              }}
              placeholder="Enter your username"
              placeholderTextColor="#464749"
              value={username}
              onChangeText={setUsername}
            />

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
                color: myColors.secondary,
              }}
              placeholder="Enter your email"
              placeholderTextColor="#464749"
              value={email}
              onChangeText={setEmail}
            />

            <Text style={{ fontSize: 16, fontWeight: '500', color:'black', marginTop: 20 }}>
               PASSWORD:
            </Text>
            <TextInput
              secureTextEntry={true}
              maxLength={20}
              style={{
                borderColor: 'black',
                borderBottomWidth: 1,
                fontSize: 16,
                marginTop: 10,
                paddingBottom: 5,
                color: myColors.secondary,
              }}
              placeholder="Enter your password"
              placeholderTextColor="#464749"
              value={password}
              onChangeText={setPassword}
            />

            <Text numberOfLines={2} style={{ fontSize: 14, fontWeight: '400', color: '#6A6E72', marginTop: 15, textAlign: 'center', lineHeight: 20 }}>
              By continuing you agree to our Terms of Services and Privacy policy.
            </Text>

            <TouchableOpacity
              onPress={handleSignUp}
              style={{
                backgroundColor: myColors.primary,
                marginTop: 30,
                height: 50,
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={{ fontSize: 18, color: 'white', fontWeight: '600' }}>
                  Sign Up
                </Text>
              )}
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
              <Text style={{ color: 'black', fontSize: 16 }}>Already have an account?</Text>
              <TouchableOpacity onPress={() => nav.navigate('Orderplaced')}>
                <Text style={{ fontSize: 16, color: myColors.primary, fontWeight: '600', marginLeft: 5 }}>
                  Complete Order
                </Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;