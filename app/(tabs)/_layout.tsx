import { Tabs } from 'expo-router';
import { Chrome as Home, ChartBar as BarChart2, User, Bell } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1a2151',
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          height: 60,
          paddingBottom: 8,
        },
        tabBarActiveTintColor: '#4CAF50',
        tabBarInactiveTintColor: '#999',
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Animated.View entering={FadeIn}>
              <Home size={size} color={color} />
            </Animated.View>
          ),
        }}
      />
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <Animated.View entering={FadeIn}>
              <BarChart2 size={size} color={color} />
            </Animated.View>
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notifications',
          tabBarIcon: ({ color, size }) => (
            <Animated.View entering={FadeIn}>
              <Bell size={size} color={color} />
            </Animated.View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Animated.View entering={FadeIn}>
              <User size={size} color={color} />
            </Animated.View>
          ),
        }}
      />
    </Tabs>
  );
}