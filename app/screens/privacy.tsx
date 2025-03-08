import { StyleSheet, Text, View, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { ChevronLeft, Shield, Eye, Lock, Server, Bell, Info } from 'lucide-react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { router } from 'expo-router';

const Privacy = () => {
  // State for tracking which sections are expanded
  const [expandedSections, setExpandedSections] = useState({
    dataCollection: true,
    dataUsage: false,
    dataSharing: false,
    userRights: false,
    security: false
  });

  // Toggle expanded sections
  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // State for consent toggles
  const [consentToggles, setConsentToggles] = useState({
    analyticsConsent: true,
    marketingConsent: false,
    thirdPartyConsent: true
  });

  // Toggle consent
  const toggleConsent = (consentType: string) => {
    setConsentToggles(prev => ({
      ...prev,
      [consentType]: !prev[consentType]
    }));
  };

  // Navigation function
  const goBack = () => {
    router.back();
  };

  // Last updated date
  const lastUpdated = "March 8, 2025";

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Header */}
      <LinearGradient
        colors={['#1a237e', '#283593', '#3949ab']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={goBack} style={styles.backButton}>
            <ChevronLeft size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Privacy Policy</Text>
          <View style={styles.placeholderView} />
        </View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Animated.View entering={FadeInUp.duration(500)} style={styles.introSection}>
          <View style={styles.iconContainer}>
            <Shield size={40} color="#3949AB" />
          </View>
          <Text style={styles.introTitle}>Your Privacy Matters</Text>
          <Text style={styles.introText}>
            We're committed to protecting your personal information and being transparent 
            about how we use your data. This policy explains our data practices and your rights.
          </Text>
          <Text style={styles.lastUpdated}>Last Updated: {lastUpdated}</Text>
        </Animated.View>

        {/* Data Collection Section */}
        <Animated.View entering={FadeInUp.delay(100).duration(500)}>
          <TouchableOpacity 
            style={styles.sectionHeader} 
            onPress={() => toggleSection('dataCollection')}
            activeOpacity={0.7}
          >
            <View style={styles.sectionHeaderContent}>
              <View style={[styles.sectionIcon, { backgroundColor: 'rgba(126, 87, 194, 0.15)' }]}>
                <Eye size={22} color="#7E57C2" />
              </View>
              <Text style={styles.sectionTitle}>Information We Collect</Text>
            </View>
            <ChevronLeft 
              size={20} 
              color="#7986CB" 
              style={[
                styles.sectionChevron, 
                expandedSections.dataCollection && styles.sectionChevronExpanded
              ]} 
            />
          </TouchableOpacity>
          
          {expandedSections.dataCollection && (
            <View style={styles.sectionContent}>
              <Text style={styles.sectionText}>
                When you use our fitness application, we collect the following types of information:
              </Text>
              
              <Text style={styles.subsectionTitle}>Personal Information</Text>
              <Text style={styles.sectionText}>
                • Name, email address, and basic profile information{'\n'}
                • Age, height, weight, and fitness goals{'\n'}
                • Profile pictures and account preferences
              </Text>
              
              <Text style={styles.subsectionTitle}>Fitness Data</Text>
              <Text style={styles.sectionText}>
                • Workout history and activity logs{'\n'}
                • Steps, active minutes, and calories burned{'\n'}
                • Sleep data (if you choose to track it){'\n'}
                • Health metrics like heart rate (if connected to wearable devices)
              </Text>
              
              <Text style={styles.subsectionTitle}>Device Information</Text>
              <Text style={styles.sectionText}>
                • Device type, operating system, and version{'\n'}
                • IP address and approximate location{'\n'}
                • App usage statistics and interaction data
              </Text>
              
              {/* Consent Toggle Section */}
              <View style={styles.consentContainer}>
                <View style={styles.consentRow}>
                  <Text style={styles.consentText}>Analytics data collection</Text>
                  <TouchableOpacity 
                    style={[
                      styles.toggleButton, 
                      consentToggles.analyticsConsent ? styles.toggleActive : styles.toggleInactive
                    ]}
                    onPress={() => toggleConsent('analyticsConsent')}
                  >
                    <View style={[
                      styles.toggleCircle, 
                      consentToggles.analyticsConsent ? styles.toggleCircleActive : styles.toggleCircleInactive
                    ]} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </Animated.View>

        {/* Data Usage Section */}
        <Animated.View entering={FadeInUp.delay(200).duration(500)}>
          <TouchableOpacity 
            style={styles.sectionHeader} 
            onPress={() => toggleSection('dataUsage')}
            activeOpacity={0.7}
          >
            <View style={styles.sectionHeaderContent}>
              <View style={[styles.sectionIcon, { backgroundColor: 'rgba(38, 166, 154, 0.15)' }]}>
                <Server size={22} color="#26A69A" />
              </View>
              <Text style={styles.sectionTitle}>How We Use Your Data</Text>
            </View>
            <ChevronLeft 
              size={20} 
              color="#7986CB" 
              style={[
                styles.sectionChevron, 
                expandedSections.dataUsage && styles.sectionChevronExpanded
              ]} 
            />
          </TouchableOpacity>
          
          {expandedSections.dataUsage && (
            <View style={styles.sectionContent}>
              <Text style={styles.sectionText}>
                We use your information to provide personalized fitness services and improve your experience:
              </Text>
              
              <Text style={styles.sectionText}>
                • To deliver personalized workout recommendations{'\n'}
                • To track your fitness progress and achievements{'\n'}
                • To connect you with instructors and fitness classes{'\n'}
                • To analyze app usage and improve our features{'\n'}
                • To send important notifications about your account
              </Text>
              
              {/* Consent Toggle */}
              <View style={styles.consentContainer}>
                <View style={styles.consentRow}>
                  <Text style={styles.consentText}>Marketing communications</Text>
                  <TouchableOpacity 
                    style={[
                      styles.toggleButton, 
                      consentToggles.marketingConsent ? styles.toggleActive : styles.toggleInactive
                    ]}
                    onPress={() => toggleConsent('marketingConsent')}
                  >
                    <View style={[
                      styles.toggleCircle, 
                      consentToggles.marketingConsent ? styles.toggleCircleActive : styles.toggleCircleInactive
                    ]} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </Animated.View>

        {/* Data Sharing Section */}
        <Animated.View entering={FadeInUp.delay(300).duration(500)}>
          <TouchableOpacity 
            style={styles.sectionHeader} 
            onPress={() => toggleSection('dataSharing')}
            activeOpacity={0.7}
          >
            <View style={styles.sectionHeaderContent}>
              <View style={[styles.sectionIcon, { backgroundColor: 'rgba(239, 83, 80, 0.15)' }]}>
                <Bell size={22} color="#EF5350" />
              </View>
              <Text style={styles.sectionTitle}>Sharing Your Information</Text>
            </View>
            <ChevronLeft 
              size={20} 
              color="#7986CB" 
              style={[
                styles.sectionChevron, 
                expandedSections.dataSharing && styles.sectionChevronExpanded
              ]} 
            />
          </TouchableOpacity>
          
          {expandedSections.dataSharing && (
            <View style={styles.sectionContent}>
              <Text style={styles.sectionText}>
                We share your information in the following limited circumstances:
              </Text>
              
              <Text style={styles.sectionText}>
                • With fitness instructors for classes you join{'\n'}
                • With third-party services that help us operate our app{'\n'}
                • With other users, if you choose to share your activity{'\n'}
                • When required by law or to protect our rights
              </Text>
              
              <Text style={styles.sectionText}>
                We never sell your personal information to advertisers or data brokers.
              </Text>
              
              {/* Consent Toggle */}
              <View style={styles.consentContainer}>
                <View style={styles.consentRow}>
                  <Text style={styles.consentText}>Third-party data sharing</Text>
                  <TouchableOpacity 
                    style={[
                      styles.toggleButton, 
                      consentToggles.thirdPartyConsent ? styles.toggleActive : styles.toggleInactive
                    ]}
                    onPress={() => toggleConsent('thirdPartyConsent')}
                  >
                    <View style={[
                      styles.toggleCircle, 
                      consentToggles.thirdPartyConsent ? styles.toggleCircleActive : styles.toggleCircleInactive
                    ]} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </Animated.View>

        {/* User Rights Section */}
        <Animated.View entering={FadeInUp.delay(400).duration(500)}>
          <TouchableOpacity 
            style={styles.sectionHeader} 
            onPress={() => toggleSection('userRights')}
            activeOpacity={0.7}
          >
            <View style={styles.sectionHeaderContent}>
              <View style={[styles.sectionIcon, { backgroundColor: 'rgba(255, 193, 7, 0.15)' }]}>
                <Info size={22} color="#FFC107" />
              </View>
              <Text style={styles.sectionTitle}>Your Privacy Rights</Text>
            </View>
            <ChevronLeft 
              size={20} 
              color="#7986CB" 
              style={[
                styles.sectionChevron, 
                expandedSections.userRights && styles.sectionChevronExpanded
              ]} 
            />
          </TouchableOpacity>
          
          {expandedSections.userRights && (
            <View style={styles.sectionContent}>
              <Text style={styles.sectionText}>
                Depending on your location, you may have certain rights regarding your personal information:
              </Text>
              
              <Text style={styles.sectionText}>
                • Access and download your personal data{'\n'}
                • Correct inaccurate or incomplete information{'\n'}
                • Delete your account and personal information{'\n'}
                • Restrict certain types of data processing{'\n'}
                • Object to processing of your information
              </Text>
              
              <Text style={styles.sectionText}>
                To exercise these rights, go to Settings{' > '}Account{' > '}Privacy Options or contact our support team.
              </Text>
            </View>
          )}
        </Animated.View>

        {/* Security Section */}
        <Animated.View entering={FadeInUp.delay(500).duration(500)}>
          <TouchableOpacity 
            style={styles.sectionHeader} 
            onPress={() => toggleSection('security')}
            activeOpacity={0.7}
          >
            <View style={styles.sectionHeaderContent}>
              <View style={[styles.sectionIcon, { backgroundColor: 'rgba(3, 169, 244, 0.15)' }]}>
                <Lock size={22} color="#03A9F4" />
              </View>
              <Text style={styles.sectionTitle}>Data Security</Text>
            </View>
            <ChevronLeft 
              size={20} 
              color="#7986CB" 
              style={[
                styles.sectionChevron, 
                expandedSections.security && styles.sectionChevronExpanded
              ]} 
            />
          </TouchableOpacity>
          
          {expandedSections.security && (
            <View style={styles.sectionContent}>
              <Text style={styles.sectionText}>
                We take the security of your information seriously and implement various safeguards:
              </Text>
              
              <Text style={styles.sectionText}>
                • Encryption of data in transit and at rest{'\n'}
                • Regular security assessments and updates{'\n'}
                • Access controls and authentication measures{'\n'}
                • Employee training on data protection
              </Text>
              
              <Text style={styles.sectionText}>
                While we strive to protect your data, no security system is impenetrable. We continuously improve our security practices to keep your information safe.
              </Text>
            </View>
          )}
        </Animated.View>

        {/* Contact Section */}
        <Animated.View entering={FadeInUp.delay(600).duration(500)} style={styles.contactSection}>
          <Text style={styles.contactTitle}>Questions About Privacy?</Text>
          <Text style={styles.contactText}>
            If you have any questions or concerns about our privacy practices, please contact us at:
          </Text>
          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactButtonText}>privacy@fitnessapp.com</Text>
          </TouchableOpacity>
        </Animated.View>

        {/* Save Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.saveButton}
            onPress={goBack}
          >
            <Text style={styles.saveButtonText}>Save Preferences</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Privacy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0F2C',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 24,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  placeholderView: {
    width: 40,
  },
  content: {
    flex: 1,
    padding: 24,
  },
  introSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(57, 73, 171, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  introTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  introText: {
    fontSize: 15,
    color: '#E0E0E0',
    textAlign: 'center',
    lineHeight: 22,
  },
  lastUpdated: {
    fontSize: 14,
    color: '#7986CB',
    marginTop: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#141A38',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
  },
  sectionHeaderContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },
  sectionChevron: {
    transform: [{ rotate: '270deg' }],
  },
  sectionChevronExpanded: {
    transform: [{ rotate: '90deg' }],
  },
  sectionContent: {
    backgroundColor: '#141A3880',
    borderRadius: 12,
    padding: 16,
    marginTop: -8,
    marginBottom: 20,
    marginLeft: 8,
    marginRight: 8,
  },
  sectionText: {
    fontSize: 15,
    color: '#E0E0E0',
    lineHeight: 22,
    marginBottom: 12,
  },
  subsectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
    marginTop: 4,
  },
  consentContainer: {
    marginTop: 16,
    marginBottom: 8,
    borderTopWidth: 1,
    borderTopColor: '#2A3256',
    paddingTop: 16,
  },
  consentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  consentText: {
    fontSize: 15,
    color: '#fff',
  },
  toggleButton: {
    width: 50,
    height: 28,
    borderRadius: 14,
    padding: 2,
  },
  toggleActive: {
    backgroundColor: '#3949AB',
  },
  toggleInactive: {
    backgroundColor: '#2A3256',
  },
  toggleCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  toggleCircleActive: {
    backgroundColor: '#fff',
    transform: [{ translateX: 22 }],
  },
  toggleCircleInactive: {
    backgroundColor: '#9E9E9E',
    transform: [{ translateX: 0 }],
  },
  contactSection: {
    backgroundColor: '#141A38',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginVertical: 16,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  contactText: {
    fontSize: 15,
    color: '#E0E0E0',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 22,
  },
  contactButton: {
    backgroundColor: 'rgba(57, 73, 171, 0.2)',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  contactButtonText: {
    color: '#7986CB',
    fontSize: 15,
    fontWeight: '600',
  },
  buttonContainer: {
    marginVertical: 24,
    paddingBottom: 40,
  },
  saveButton: {
    backgroundColor: '#3949AB',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});