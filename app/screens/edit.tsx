import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const EditProfile = ({ navigation }) => {
  const [form, setForm] = useState({
    name: "Tanmay Mirgal",
    email: "tanmaymirgal26@gmail.com",
    phone: "+91 1234567890",
    location: "Mumbai, India",
    language: "English",
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/(tabs)/profile')}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
        <TouchableOpacity onPress={() => router.push('/(tabs)/profile')}>
          <Text style={styles.saveButton}>Save</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Name</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="person" size={20} color="#8C9EFF" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              value={form.name}
              placeholder="Enter your name"
              placeholderTextColor="#6B7BB0"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="mail" size={20} color="#8C9EFF" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              value={form.email}
              placeholder="Enter your email"
              placeholderTextColor="#6B7BB0"
              keyboardType="email-address"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Phone</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="call" size={20} color="#8C9EFF" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              value={form.phone}
              placeholder="Enter your phone number"
              placeholderTextColor="#6B7BB0"
              keyboardType="phone-pad"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Location</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="location" size={20} color="#8C9EFF" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              value={form.location}
              placeholder="Enter your location"
              placeholderTextColor="#6B7BB0"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Language</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="language" size={20} color="#8C9EFF" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              value={form.language}
              placeholder="Enter your preferred language"
              placeholderTextColor="#6B7BB0"
            />
          </View>
        </View>
        
        <View style={styles.infoCard}>
          <Ionicons name="information-circle" size={24} color="#FFD700" style={{marginRight: 10}} />
          <Text style={styles.infoText}>
            Some account details like membership type and join date cannot be changed. Please contact support for assistance.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A1232',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#1A2652',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  saveButton: {
    color: '#4CAF50',
    fontSize: 16,
    fontWeight: 'bold',
  },
  form: {
    padding: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#8C9EFF',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A2652',
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#fff',
    height: 50,
    fontSize: 16,
  },
  infoCard: {
    flexDirection: 'row',
    backgroundColor: '#1A2652',
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
    marginBottom: 40,
    alignItems: 'center',
  },
  infoText: {
    color: '#fff',
    fontSize: 14,
    flex: 1,
  },
});

export default EditProfile;