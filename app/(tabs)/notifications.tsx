import { View, Text, ScrollView, StyleSheet, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Bell, Trophy, Calendar, Heart, Star, MoreVertical, Trash2 } from 'lucide-react-native';
import Animated, { FadeInRight, FadeInUp } from 'react-native-reanimated';
import { useState } from 'react';

export default function Notifications() {
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'achievement', title: 'New Achievement Unlocked!', message: 'Congratulations! You have completed 10,000 steps today.', time: '2h ago', icon: Trophy, color: '#FFD700' },
    { id: 2, type: 'reminder', title: 'Workout Reminder', message: 'Time for your evening yoga session.', time: '3h ago', icon: Calendar, color: '#4CAF50' },
    { id: 3, type: 'health', title: 'Health Update', message: 'Great job! Your active minutes have increased by 20% this week.', time: '5h ago', icon: Heart, color: '#FF4081' },
    { id: 4, type: 'challenge', title: 'New Challenge Available', message: 'Join the 30-day morning workout challenge.', time: '1d ago', icon: Star, color: '#FFA726' },
  ]);

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const confirmDelete = (id) => {
    Alert.alert(
      'Delete Notification',
      'Are you sure you want to delete this notification?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', onPress: () => deleteNotification(id), style: 'destructive' }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <LinearGradient colors={['#253095', '#1c2670']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.header}>
        <Animated.View style={styles.headerContent} entering={FadeInUp.delay(100).duration(500)}>
          <Text style={styles.title}>Notifications</Text>
        </Animated.View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {notifications.map((notification, index) => {
          const Icon = notification.icon;
          return (
            <Animated.View key={notification.id} entering={FadeInRight.delay(index * 120).duration(400)}>
              <TouchableOpacity style={styles.notificationCard} activeOpacity={0.8}>
                <View style={[styles.iconContainer, { backgroundColor: `${notification.color}20` }]}> 
                  <Icon size={22} color={notification.color} />
                </View>
                <View style={styles.notificationContent}>
                  <View style={styles.notificationHeader}>
                    <Text style={styles.notificationTitle}>{notification.title}</Text>
                    <Text style={styles.notificationTime}>{notification.time}</Text>
                  </View>
                  <Text style={styles.notificationMessage}>{notification.message}</Text>
                </View>
                <TouchableOpacity style={styles.moreButton} onPress={() => confirmDelete(notification.id)}>
                  <Trash2 size={18} color="#FF5252" />
                </TouchableOpacity>
              </TouchableOpacity>
            </Animated.View>
          );
        })}
        <View style={styles.footer} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#101638' },
  header: { padding: 24, paddingTop: 60, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 },
  headerContent: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 32, fontWeight: 'bold', color: '#fff', letterSpacing: 0.5 },
  content: { padding: 20 },
  notificationCard: { backgroundColor: '#1a2156', borderRadius: 16, padding: 16, marginBottom: 16, flexDirection: 'row', alignItems: 'center', elevation: 2 },
  iconContainer: { width: 48, height: 48, borderRadius: 24, justifyContent: 'center', alignItems: 'center', marginRight: 16 },
  notificationContent: { flex: 1 },
  notificationHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 },
  notificationTitle: { fontSize: 16, fontWeight: '700', color: '#fff' },
  notificationTime: { fontSize: 12, color: '#8B93C8', fontWeight: '500' },
  notificationMessage: { fontSize: 14, color: '#bbc1e1', lineHeight: 20 },
  moreButton: { padding: 4 },
  footer: { height: 20 },
});
