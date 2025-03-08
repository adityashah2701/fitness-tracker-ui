import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ChevronDown, ChevronUp, Mail, Headphones } from 'lucide-react-native';
import Animated, { FadeIn, FadeInUp } from 'react-native-reanimated';

const HelpSupport = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs = [
    { id: 1, question: "How do I track my workouts?", answer: "Go to the 'Workouts' tab and log your exercises to track your progress." },
    { id: 2, question: "Can I customize my fitness plan?", answer: "Yes! Astra offers personalized plans based on your goals and progress." },
    { id: 3, question: "How do I contact support?", answer: "You can email us at support@astra.com or use the in-app chat for quick help." },
    { id: 4, question: "Is Astra free to use?", answer: "Astra offers a free version with basic features and a premium plan for advanced tracking & analytics." },
    { id: 5, question: "Can I sync Astra with my smartwatch?", answer: "Yes! Astra supports integration with Apple Watch, Fitbit, and Google Fit." },
    { id: 6, question: "How do I reset my progress?", answer: "Go to 'Settings' > 'Account' and select 'Reset Progress' to start fresh." },
    { id: 7, question: "Does Astra provide nutrition guidance?", answer: "Absolutely! We offer meal plans and nutrition tips based on your fitness goals." },
  ];

  return (
    <LinearGradient colors={['#1A2045', '#141A38']} style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Animated.View entering={FadeInUp.duration(500)} style={styles.header}>
        <Text style={styles.title}>Help & Support</Text>
        <Text style={styles.subtitle}>We're here to assist you!</Text>
      </Animated.View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        <Animated.View entering={FadeIn.delay(200).duration(600)}>
          <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>

          {faqs.map((faq) => (
            <TouchableOpacity
              key={faq.id}
              style={styles.faqItem}
              onPress={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
            >
              <View style={styles.faqHeader}>
                <Text style={styles.faqQuestion}>{faq.question}</Text>
                {expandedFAQ === faq.id ? <ChevronUp size={20} color="#00df9a" /> : <ChevronDown size={20} color="#ffffff" />}
              </View>
              {expandedFAQ === faq.id && (
                <Animated.Text entering={FadeInUp.duration(300)} style={styles.faqAnswer}>
                  {faq.answer}
                </Animated.Text>
              )}
            </TouchableOpacity>
          ))}

          <Text style={styles.sectionTitle}>Need More Help?</Text>

          <TouchableOpacity style={styles.supportButton}>
            <Mail size={24} color="#fff" />
            <Text style={styles.supportText}>Email Support</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.supportButton}>
            <Headphones size={24} color="#fff" />
            <Text style={styles.supportText}>Live Chat</Text>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
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
    marginTop: 27,
  },
  subtitle: {
    fontSize: 16,
    color: '#a8b3cf',
    marginTop: 6,
  },
  content: {
    width: '100%',
  },
  sectionTitle: {
    fontSize: 18,
    color: '#00df9a',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  faqItem: {
    backgroundColor: '#212A5B',
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
  },
  faqHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  faqQuestion: {
    fontSize: 16,
    color: '#ffffff',
  },
  faqAnswer: {
    fontSize: 14,
    color: '#a8b3cf',
    marginTop: 6,
  },
  supportButton: {
    flexDirection: 'row',
    backgroundColor: '#00df9a',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  supportText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default HelpSupport;
