import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Activity, Clock, Dumbbell, Star, Zap, ChevronRight, Calendar, Bell } from 'lucide-react-native';
import Animated, { FadeInUp, FadeInRight } from 'react-native-reanimated';

export default function Home() {
  const workouts = [
    {
      id: 1,
      title: 'Full Body Workout',
      duration: '45 mins',
      level: 'Intermediate',
      instructor: 'Mike',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800',
      rating: 4.8
    }
  ];
  
  const classes = [
    { id: 1, time: '10:00 AM', name: 'Yoga Basics', instructor: 'Sarah', color: '#7E57C2' },
    { id: 2, time: '2:00 PM', name: 'HIIT Training', instructor: 'Jason', color: '#26A69A' },
    { id: 3, time: '5:30 PM', name: 'Pilates Flow', instructor: 'Emma', color: '#EF5350' }
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={['#1a237e', '#283593', '#3949ab']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.greeting}>Good Morning, John!</Text>
            <Text style={styles.date}>Monday, January 15</Text>
          </View>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.iconButton}>
              <Calendar size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Bell size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        
        <Animated.View 
          entering={FadeInUp.duration(600)}
          style={styles.statsContainer}
        >
          <View style={styles.statCard}>
            <View style={styles.statIconContainer}>
              <Activity size={22} color="#7E57C2" />
            </View>
            <Text style={styles.statValue}>7,234</Text>
            <Text style={styles.statLabel}>Steps</Text>
          </View>

          <View style={styles.statCard}>
            <View style={[styles.statIconContainer, { backgroundColor: 'rgba(38, 166, 154, 0.15)' }]}>
              <Clock size={22} color="#26A69A" />
            </View>
            <Text style={styles.statValue}>45</Text>
            <Text style={styles.statLabel}>Active Min</Text>
          </View>

          <View style={styles.statCard}>
            <View style={[styles.statIconContainer, { backgroundColor: 'rgba(239, 83, 80, 0.15)' }]}>
              <Dumbbell size={22} color="#EF5350" />
            </View>
            <Text style={styles.statValue}>320</Text>
            <Text style={styles.statLabel}>Calories</Text>
          </View>
        </Animated.View>
      </LinearGradient>

      <View style={styles.content}>
        <Animated.View 
          entering={FadeInUp.delay(200).duration(500)}
          style={styles.sectionContainer}
        >
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Today's Workout</Text>
            <TouchableOpacity style={styles.moreButton}>
              <Text style={styles.moreButtonText}>More</Text>
              <ChevronRight size={16} color="#7986CB" />
            </TouchableOpacity>
          </View>
          
          {workouts.map((workout, index) => (
            <TouchableOpacity key={workout.id} activeOpacity={0.9}>
              <Animated.View 
                entering={FadeInUp.delay(300 + index * 100).duration(500)}
                style={styles.workoutCard}
              >
                <Image
                  source={{ uri: workout.image }}
                  style={styles.workoutImage}
                />
                <LinearGradient
                  colors={['transparent', 'rgba(0,0,0,0.8)']}
                  style={styles.workoutGradient}
                />
                <View style={styles.workoutContent}>
                  <View style={styles.workoutBadge}>
                    <Zap size={12} color="#FFD700" />
                    <Text style={styles.workoutBadgeText}>Recommended</Text>
                  </View>
                  <Text style={styles.workoutTitle}>{workout.title}</Text>
                  <View style={styles.workoutMeta}>
                    <Text style={styles.workoutDuration}>
                      {workout.duration} • {workout.level}
                    </Text>
                    <View style={styles.workoutRating}>
                      <Star size={14} color="#FFD700" />
                      <Text style={styles.workoutRatingText}>{workout.rating}</Text>
                    </View>
                  </View>
                  <View style={styles.workoutInstructor}>
                    <View style={styles.instructorAvatar}>
                      <Text style={styles.instructorAvatarText}>
                        {workout.instructor.charAt(0)}
                      </Text>
                    </View>
                    <Text style={styles.instructorName}>Coach {workout.instructor}</Text>
                  </View>
                  <TouchableOpacity style={styles.startButton}>
                    <Text style={styles.startButtonText}>Start Workout</Text>
                  </TouchableOpacity>
                </View>
              </Animated.View>
            </TouchableOpacity>
          ))}
        </Animated.View>

        <Animated.View
          entering={FadeInUp.delay(400).duration(500)}
          style={styles.sectionContainer}
        >
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Upcoming Classes</Text>
            <TouchableOpacity style={styles.moreButton}>
              <Text style={styles.moreButtonText}>View All</Text>
              <ChevronRight size={16} color="#7986CB" />
            </TouchableOpacity>
          </View>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            style={styles.classesContainer}
          >
            {classes.map((classItem, index) => (
              <Animated.View 
                key={classItem.id}
                entering={FadeInRight.delay(500 + index * 100).duration(500)}
                style={styles.classCard}
              >
                <View 
                  style={[
                    styles.classColorStrip, 
                    { backgroundColor: classItem.color }
                  ]} 
                />
                <Text style={styles.classTime}>{classItem.time}</Text>
                <Text style={styles.className}>{classItem.name}</Text>
                <View style={styles.classInstructorContainer}>
                  <View 
                    style={[
                      styles.classInstructorAvatar, 
                      { backgroundColor: `${classItem.color}40` }
                    ]}
                  >
                    <Text style={[styles.classInstructorInitial, { color: classItem.color }]}>
                      {classItem.instructor.charAt(0)}
                    </Text>
                  </View>
                  <Text style={styles.classInstructor}>with {classItem.instructor}</Text>
                </View>
                <TouchableOpacity 
                  style={[styles.joinButton, { backgroundColor: `${classItem.color}20` }]}
                >
                  <Text style={[styles.joinButtonText, { color: classItem.color }]}>Join</Text>
                </TouchableOpacity>
              </Animated.View>
            ))}
          </ScrollView>
        </Animated.View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0F2C',
  },
  header: {
    padding: 24,
    paddingTop: 60,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerActions: {
    flexDirection: 'row',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  date: {
    fontSize: 16,
    color: '#E0E0E0',
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  statCard: {
   
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    width: '31%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  statIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: 'rgba(126, 87, 194, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  statLabel: {
    fontSize: 12,
    color: '#E0E0E0',
    marginTop: 2,
  },
  content: {
    padding: 24,
  },
  sectionContainer: {
    marginBottom: 28,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  moreButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moreButtonText: {
    fontSize: 14,
    color: '#7986CB',
    marginRight: 4,
  },
  workoutCard: {
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: '#141A38',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
  },
  workoutImage: {
    width: '100%',
    height: 200,
  },
  workoutGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '70%',
    borderRadius: 24,
  },
  workoutContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
  },
  workoutBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 215, 0, 0.2)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  workoutBadgeText: {
    color: '#FFD700',
    fontSize: 12,
    marginLeft: 4,
    fontWeight: '600',
  },
  workoutTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  workoutMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  workoutDuration: {
    fontSize: 14,
    color: '#E0E0E0',
  },
  workoutRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  workoutRatingText: {
    color: '#FFD700',
    fontSize: 14,
    marginLeft: 4,
    fontWeight: '600',
  },
  workoutInstructor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  instructorAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  instructorAvatarText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  instructorName: {
    color: '#E0E0E0',
    fontSize: 14,
  },
  startButton: {
    backgroundColor: '#3949AB',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  startButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  classesContainer: {
    marginBottom: 16,
  },
  classCard: {
    backgroundColor: '#141A38',
    padding: 16,
    borderRadius: 20,
    marginRight: 16,
    width: 200,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    position: 'relative',
    overflow: 'hidden',
  },
  classColorStrip: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 6,
    height: '100%',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  classTime: {
    fontSize: 14,
    color: '#7986CB',
    marginBottom: 8,
    fontWeight: '600',
  },
  className: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  classInstructorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  classInstructorAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  classInstructorInitial: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  classInstructor: {
    fontSize: 14,
    color: '#9E9E9E',
  },
  joinButton: {
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
  },
  joinButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
});