
import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { myColors } from '../utilities/MyColors';

const Profile = () => {
  const nav = useNavigation();
  const [user, setUser] = useState({
    username: '  Shruti Nayak         ',
    email: '        abcd@gmail.com  ',
    profilePicture: require('../assets/illu2.jpg'), 
    useradd:'        ',
    usermob:' 1234567890   '
  });
  
  const handleEditProfile = () => {  
    nav.navigate('EditProfile', { user, setUser });
  };

  const handleLogout = () => {
    console.log('Logout');
    nav.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='light-content' />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.header}>
          <Image source={user.profilePicture} style={styles.profileImage} />
          <TouchableOpacity style={styles.editProfileButton} onPress={handleEditProfile}>
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.infoSection}>
          <Text style={styles.username}>{user.username}</Text>
          <Text style={styles.add}>{user.useradd}</Text>
          <Text style={styles.email}>{user.email}</Text>
          <Text style={styles.mob}>{user.usermob}</Text>
        </View>

        <View style={styles.buttonsSection}>
          <TouchableOpacity style={styles.button} onPress={() => nav.navigate('AboutUs')}>
            <Text style={styles.buttonText}> ABOUT US</Text>
          </TouchableOpacity>
         
          <TouchableOpacity style={[styles.button]} onPress={() => nav.navigate('Settings')}>
            <Text style={styles.buttonText}>ORDERS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button]} onPress={handleLogout}>
            <Text style={styles.buttonText}> COUPONS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button]} onPress={() => nav.navigate('Favourites')}>
            <Text style={styles.buttonText}>WISHLIST</Text>
          </TouchableOpacity>
           {/* <TouchableOpacity style={[styles.button]} onPress={handleLogout}>
            <Text style={styles.buttonText}>ABOUT TEAM</Text>
          </TouchableOpacity>  */}
          <TouchableOpacity style={[styles.button,styles.logoutButton]} onPress={handleLogout}>
            <Text style={styles.buttonText}>LOG OUT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: myColors.background,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor:''
    
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  
  },
  profileImage: {
    width: 180,
    height: 180,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: myColors.primary,
  },
  editProfileButton: {
    backgroundColor: myColors.secondary,
    borderRadius: 20,
    padding: 10,
    marginTop: -20,
    borderColor:'black',
    borderWidth: 1.5
   
  },
  editProfileText: {
    color: 'black',
    fontWeight: 'bold',
   
   
  },
  infoSection: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    borderStartWidth:2,
    borderColor:'#969191',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 30,
  },
  username: {
    marginLeft:10,
    fontSize: 28,
    fontWeight: 'bold',
    color: myColors.primary,
    marginBottom: 10,
  },
  email: {
    marginLeft:10,
    fontSize: 22,
    color: 'black',
    marginBottom: 5,
  },
  add: {
    marginLeft:10,
    fontSize: 22,
    color: 'black',
    marginBottom: 5,
  },
  mob: {
    marginLeft:10,
    fontSize: 22,
    color: 'black',
    marginBottom: 5,
  },
  buttonsSection: {
    width: '100%',
  },
  button: {
    backgroundColor: 'white',
    borderColor:'#969191',
    borderTopWidth: 2,
    borderStartWidth:1,
    borderRadius:10,
    borderBottomWidth: 1.5,
    padding: 15,
    alignItems: 'center',
    marginBottom: 15,
    
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  logoutButton: {
    backgroundColor: '#F32F31',
    borderColor:'grey',
    
    
  },
  buttonText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Profile;