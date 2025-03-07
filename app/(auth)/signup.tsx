import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Mail, Lock, User } from 'lucide-react-native';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LinearGradient
      colors={['#1a2151', '#2d3436']}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Start your fitness journey today</Text>

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <User size={20} color="#fff" />
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor="#999"
              value={name}
              onChangeText={setName}
            />
          </View>

          <View style={styles.inputContainer}>
            <Mail size={20} color="#fff" />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <Lock size={20} color="#fff" />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#999"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <Link href="/(tabs)" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/login" style={styles.loginLink}>
            <Text style={styles.loginText}>
              Already have an account? <Text style={styles.loginBold}>Sign In</Text>
            </Text>
          </Link>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 48,
  },
  form: {
    gap: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
    gap: 12,
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginLink: {
    marginTop: 24,
    alignItems: 'center',
  },
  loginText: {
    color: '#ccc',
    fontSize: 14,
  },
  loginBold: {
    color: '#fff',
    fontWeight: 'bold',
  },
});