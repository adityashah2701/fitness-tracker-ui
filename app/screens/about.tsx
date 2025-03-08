import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CheckSquare, Square, ArrowRight } from 'lucide-react-native';
import Animated, { FadeIn, FadeInUp } from 'react-native-reanimated';
import { router } from 'expo-router';

const About = () => {
  const [checked, setChecked] = useState(false);
  
  return (
    <LinearGradient
      colors={['#0a1535', '#111c42', '#162450']}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      
      {/* About */}
      <Animated.View entering={FadeIn.delay(300).duration(1000)} style={styles.header}>
        <Text style={styles.title}>Welcome to Astra</Text>
        <Text style={styles.subtitle}>Your AI-powered fitness companion</Text>
      </Animated.View>
      
      <Animated.View entering={FadeInUp.delay(600).duration(1000)} style={styles.content}>
        <Text style={styles.description}>
          Astra helps you achieve your fitness goals with personalized plans, real-time progress tracking, and AI-driven insights.
        </Text>
        
        <Text style={styles.description}>
          Whether you're looking to build strength, improve endurance, or stay active, Astra is here to guide you every step of the way.
        </Text>
        
        <TouchableOpacity 
          style={styles.checkboxContainer} 
          onPress={() => setChecked(!checked)}
        >
          {checked ? 
            <CheckSquare size={24} color="#00df9a" /> : 
            <Square size={24} color="#a8b3cf" />
          }
          <Text style={styles.checkboxText}>I commit to my fitness journey</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.button, !checked && styles.buttonDisabled]} 
          disabled={!checked}
          onPress={() => {router.push('/(tabs)')}}
        >
          <Text style={styles.buttonText}>Get Started</Text>
          <ArrowRight size={20} color="#fff" />
        </TouchableOpacity>
      </Animated.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 16,
    color: '#a8b3cf',
    marginTop: 6,
  },
  content: {
    width: '100%',
    alignItems: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#e5e7eb',
    lineHeight: 24,
    marginBottom: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  checkboxText: {
    fontSize: 16,
    color: '#ffffff',
    marginLeft: 10,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#00df9a',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  buttonDisabled: {
    backgroundColor: '#4a5568',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 10,
  },
});

export default About;