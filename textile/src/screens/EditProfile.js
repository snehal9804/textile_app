
import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Image, StyleSheet, StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { myColors } from '../utilities/MyColors';
import * as ImagePicker from 'expo-image-picker';

const EditProfile = () => {
  const nav = useNavigation();
  const route = useRoute();
  const { user, setUser } = route.params;

  const [username, setUsername] = useState(user.username);
  const [useradd, setUseradd] = useState(user.useradd);
  const [usermob, setUsermob] = useState(user.usermob);
  const [email, setEmail] = useState(user.email);
  const [profilePicture, setProfilePicture] = useState(user.profilePicture);

  const handleChoosePhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfilePicture({ uri: result.uri });
    }
  };

  const handleSaveChanges = () => {
    setUser({ username, email, profilePicture ,useradd,usermob});
    nav.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='dark-content' />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <TouchableOpacity style={styles.profileImageContainer} onPress={handleChoosePhoto}>
          <Image source={profilePicture} style={styles.profileImage} />
          <Text style={styles.changePhotoText}>Change Photo</Text>
        </TouchableOpacity>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username:</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>User Phone No.:</Text>
          <TextInput
            style={styles.input}
            value={usermob}
            onChangeText={setUsermob}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>User Address:</Text>
          <TextInput
            style={styles.input}
            value={useradd}
            onChangeText={setUseradd}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email Id:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
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
    padding: 20,
    alignItems: 'center',
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: myColors.primary,
  },
  changePhotoText: {
    color: myColors.primary,
    fontWeight: 'bold',
    marginTop: -5,
    fontSize: 20
  },
  changePhotoContainer:{
borderColor:myColors.secondary,
padding:10,
borderRadius:20
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 22,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    borderColor:'#949090',
    borderTopWidth: 2,
    borderStartWidth:2,
    borderBottomWidth: 1.5,
    padding: 10,
    fontSize: 22,
    backgroundColor: '#fff',
    color: '#333',
  },
  saveButton: {
    backgroundColor: myColors.primary,
    borderRadius: 25,
    borderColor:'black',
    borderTopWidth: 2,
    borderStartWidth:2,
    borderRadius:10,
    borderBottomWidth: 1.5,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EditProfile;