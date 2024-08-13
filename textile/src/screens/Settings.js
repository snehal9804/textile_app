
import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Switch, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { myColors } from '../utilities/MyColors';

const Settings = () => {
  const nav = useNavigation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const toggleDarkMode = () => setIsDarkMode(previousState => !previousState);
  const toggleNotifications = () => setNotificationsEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.sectionTitle}>Profile</Text>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Edit Profile</Text>
          <TouchableOpacity onPress={() => nav.navigate('EditProfile')}>
            <Text style={styles.settingAction}></Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Preferences</Text>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Dark Mode</Text>
          <Switch
            value={isDarkMode}
            onValueChange={toggleDarkMode}
            thumbColor={isDarkMode ? myColors.primary : '#f4f3f4'}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
          />
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Enable Notifications</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={toggleNotifications}
            thumbColor={notificationsEnabled ? myColors.primary : '#f4f3f4'}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
          />
        </View>

        <Text style={styles.sectionTitle}>Account</Text>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Change Password</Text>
          <TouchableOpacity onPress={() => nav.navigate('ChangePassword')}>
            <Text style={styles.settingAction}></Text>
          </TouchableOpacity>
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel} styles={{ color: 'red' }}>Delete Account</Text>
          <TouchableOpacity onPress={() => console.log('Delete Account')}>
            <Text style={styles.settingAction}></Text>
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
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: myColors.primary,
    marginBottom: 15,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  settingLabel: {
    fontSize: 18,
    color: '#333',
  },
  settingAction: {
    fontSize: 18,
    color: myColors.primary,
  },
});

export default Settings;