import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Settings, Edit, ChevronRight, User, Mail, Phone, MapPin, Calendar, Globe, Shield, HelpCircle, Info, LogOut, Home, BarChart2, Bell } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { router } from 'expo-router';

export default function Profile() {
  const userDetails = {
    name: "Tanmay Mirgal",
    email: "tanmaymirgal26@gmail.com",
    phone: "+91 1234567890",
    location: "Mumbai, India",
    dateJoined: "08 March 2025",
    language: "English",
    membershipType: "Premium"
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <LinearGradient
          colors={['#283593', '#1a237e']}
          style={styles.header}
        >
          <View style={styles.headerActions}>
            <View style={{ width: 24 }} /> {/* Empty view for balance */}
            <Text style={styles.headerTitle}>Profile</Text>
            <TouchableOpacity>
              <Settings size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          <View style={styles.profileSection}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400' }}
              style={styles.profileImage}
            />
            <TouchableOpacity style={styles.editButton}>
              <Edit size={16} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.profileName}>{userDetails.name}</Text>
            <Text style={styles.membershipBadge}>{userDetails.membershipType}</Text>
          </View>
        </LinearGradient>

        <View style={styles.content}>
          <View style={styles.infoCard}>
            <Text style={styles.sectionTitle}>Personal Information</Text>
            
            <View style={styles.infoItem}>
              <User size={20} color="#8c9eff" />
              <View style={styles.infoContent}>
                <Text style={styles.infoLabel}>Full Name</Text>
                <Text style={styles.infoValue}>{userDetails.name}</Text>
              </View>
            </View>
            
            <View style={styles.infoItem}>
              <Mail size={20} color="#8c9eff" />
              <View style={styles.infoContent}>
                <Text style={styles.infoLabel}>Email</Text>
                <Text style={styles.infoValue}>{userDetails.email}</Text>
              </View>
            </View>
            
            <View style={styles.infoItem}>
              <Phone size={20} color="#8c9eff" />
              <View style={styles.infoContent}>
                <Text style={styles.infoLabel}>Phone</Text>
                <Text style={styles.infoValue}>{userDetails.phone}</Text>
              </View>
            </View>
            
            <View style={styles.infoItem}>
              <MapPin size={20} color="#8c9eff" />
              <View style={styles.infoContent}>
                <Text style={styles.infoLabel}>Location</Text>
                <Text style={styles.infoValue}>{userDetails.location}</Text>
              </View>
            </View>
            
            <View style={styles.infoItem}>
              <Calendar size={20} color="#8c9eff" />
              <View style={styles.infoContent}>
                <Text style={styles.infoLabel}>Member Since</Text>
                <Text style={styles.infoValue}>{userDetails.dateJoined}</Text>
              </View>
            </View>
            
            <View style={styles.infoItem}>
              <Globe size={20} color="#8c9eff" />
              <View style={styles.infoContent}>
                <Text style={styles.infoLabel}>Language</Text>
                <Text style={styles.infoValue}>{userDetails.language}</Text>
              </View>
            </View>
            
            <TouchableOpacity style={styles.editProfileButton}  onPress={() => router.push('/')}>
              <Text style={styles.editProfileText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>

          <Animated.View entering={FadeIn.delay(100)}>
            <Text style={styles.sectionHeaderText}>Account Settings</Text>
            <View style={styles.settingsContainer}>
              <TouchableOpacity style={styles.settingItem}  onPress={() => router.push('/')}>
                <View style={styles.settingLeft}>
                  <View style={[styles.iconCircle, {backgroundColor: 'rgba(0, 230, 118, 0.2)'}]}>
                    <Edit size={18} color="#00e676" />
                  </View>
                  <Text style={styles.settingText}>Account Details</Text>
                </View>
                <ChevronRight size={20} color="#8c9eff" />
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.settingItem}  onPress={() => router.push('/(tabs)/notifications')}>
                <View style={styles.settingLeft}>
                  <View style={[styles.iconCircle, {backgroundColor: 'rgba(41, 182, 246, 0.2)'}]}>
                    <Bell size={18} color="#29b6f6" />
                  </View>
                  <Text style={styles.settingText}>Notifications</Text>
                </View>
                <ChevronRight size={20} color="#8c9eff" />
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.settingItem}  onPress={() => router.push('/')}>
                <View style={styles.settingLeft}>
                  <View style={[styles.iconCircle, {backgroundColor: 'rgba(156, 39, 176, 0.2)'}]}>
                    <Shield size={18} color="#9c27b0" />
                  </View>
                  <Text style={styles.settingText}>Privacy & Security</Text>
                </View>
                <ChevronRight size={20} color="#8c9eff" />
              </TouchableOpacity>
            </View>
          </Animated.View>

          <Animated.View entering={FadeIn.delay(200)}>
            <Text style={styles.sectionHeaderText}>More</Text>
            <View style={styles.settingsContainer}>
              <TouchableOpacity style={styles.settingItem}  onPress={() => router.push('/')}>
                <View style={styles.settingLeft}>
                  <View style={[styles.iconCircle, {backgroundColor: 'rgba(255, 160, 0, 0.2)'}]}>
                    <HelpCircle size={18} color="#ffa000" />
                  </View>
                  <Text style={styles.settingText}>Help & Support</Text>
                </View>
                <ChevronRight size={20} color="#8c9eff" />
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.settingItem}  onPress={() => router.push('/screens/about')}>
                <View style={styles.settingLeft}>
                  <View style={[styles.iconCircle, {backgroundColor: 'rgba(66, 165, 245, 0.2)'}]}>
                    <Info size={18} color="#42a5f5" />
                  </View>
                  <Text style={styles.settingText}>About</Text>
                </View>
                <ChevronRight size={20} color="#8c9eff" />
              </TouchableOpacity>
              
              <TouchableOpacity style={[styles.settingItem, {borderBottomWidth: 0}]}  onPress={() => router.push('/(auth)/login')}>
                <View style={styles.settingLeft}>
                  <View style={[styles.iconCircle, {backgroundColor: 'rgba(239, 83, 80, 0.2)'}]}>
                    <LogOut size={18} color="#ef5350" />
                  </View>
                  <Text style={[styles.settingText, {color: '#ef5350'}]}>Log Out</Text>
                </View>
                <ChevronRight size={20} color="#8c9eff" />
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollContainer: {
    flex: 1,
  },
  header: {
    padding: 24,
    paddingTop: 40,
    paddingBottom: 40,
  },
  headerActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileSection: {
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#8c9eff',
  },
  editButton: {
    position: 'absolute',
    right: '40%',
    top: 70,
    backgroundColor: '#00e676',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 16,
  },
  membershipBadge: {
    fontSize: 14,
    color: '#fff',
    backgroundColor: 'rgba(0, 230, 118, 0.7)',
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 16,
    marginTop: 8,
  },
  content: {
    padding: 16,
  },
  infoCard: {
    backgroundColor: 'rgba(30, 30, 50, 0.8)',
    borderRadius: 24,
    padding: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  infoContent: {
    marginLeft: 16,
    flex: 1,
  },
  infoLabel: {
    fontSize: 12,
    color: '#bdbdbd',
  },
  infoValue: {
    fontSize: 16,
    color: '#fff',
    marginTop: 2,
  },
  editProfileButton: {
    backgroundColor: '#3949ab',
    borderRadius: 16,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  editProfileText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
    marginTop: 8,
  },
  settingsContainer: {
    backgroundColor: 'rgba(30, 30, 50, 0.8)',
    borderRadius: 24,
    marginBottom: 24,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  settingText: {
    fontSize: 16,
    color: '#fff',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1a1a2e',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#9e9e9e',
    marginTop: 4,
  },
  navTextActive: {
    fontSize: 12,
    color: '#00e676',
    marginTop: 4,
  }
});