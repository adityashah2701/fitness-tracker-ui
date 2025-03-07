import { View, Text, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Activity, TrendingUp, Flame, Timer, Calendar, Award, ChevronRight } from 'lucide-react-native';
import Animated, { FadeInUp, FadeInRight } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

export default function Dashboard() {
  const weeklyData = [
    { day: 'Mon', steps: 8234, active: 45, calories: 420 },
    { day: 'Tue', steps: 10123, active: 60, calories: 550 },
    { day: 'Wed', steps: 7890, active: 40, calories: 380 },
    { day: 'Thu', steps: 9456, active: 55, calories: 480 },
    { day: 'Fri', steps: 11234, active: 65, calories: 590 },
    { day: 'Sat', steps: 6789, active: 35, calories: 320 },
    { day: 'Sun', steps: 9876, active: 50, calories: 460 },
  ];

  const maxSteps = Math.max(...weeklyData.map(d => d.steps));
  
  const getBarColor = (steps: number) => {
    if (steps >= 10000) return ['#00E676', '#00B0FF'];
    if (steps >= 8000) return ['#29B6F6', '#1E88E5'];
    return ['#5C6BC0', '#3949AB'];
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={['#1a237e', '#283593', '#3949ab']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.title}>Weekly Progress</Text>
            <Text style={styles.subtitle}>Keep pushing your limits!</Text>
          </View>
          <View style={styles.dateChip}>
            <Calendar size={14} color="#fff" />
            <Text style={styles.dateText}>Mar 1 - Mar 7</Text>
          </View>
        </View>
        
        <View style={styles.quickStats}>
          <View style={styles.quickStat}>
            <Text style={styles.quickStatValue}>63.6k</Text>
            <Text style={styles.quickStatLabel}>Steps</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.quickStat}>
            <Text style={styles.quickStatValue}>350</Text>
            <Text style={styles.quickStatLabel}>Minutes</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.quickStat}>
            <Text style={styles.quickStatValue}>3.2k</Text>
            <Text style={styles.quickStatLabel}>Calories</Text>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.content}>
        <Animated.View 
          entering={FadeInUp.duration(600)}
          style={styles.cardContainer}
        >
          <View style={styles.cardHeader}>
            <Text style={styles.sectionTitle}>Steps Overview</Text>
            <TouchableOpacity style={styles.moreButton}>
              <Text style={styles.moreButtonText}>Details</Text>
              <ChevronRight size={16} color="#7986CB" />
            </TouchableOpacity>
          </View>
          
          <View style={styles.graph}>
            {weeklyData.map((data, index) => {
              const barColors = getBarColor(data.steps);
              return (
                <Animated.View 
                  key={data.day}
                  entering={FadeInUp.delay(index * 70).duration(500)}
                  style={styles.barContainer}
                >
                  <View style={styles.barValues}>
                    <Text style={styles.barValue}>{(data.steps / 1000).toFixed(1)}k</Text>
                  </View>
                  <View style={styles.barWrapper}>
                    <LinearGradient
                      colors={barColors}
                      style={[
                        styles.bar, 
                        { height: `${(data.steps / maxSteps) * 100}%` }
                      ]}
                    />
                  </View>
                  <Text style={styles.barLabel}>{data.day}</Text>
                </Animated.View>
              );
            })}
          </View>
        </Animated.View>

        <View style={styles.summaryCardsContainer}>
          <View style={styles.summaryRow}>
            <Animated.View 
              entering={FadeInRight.delay(100).duration(500)}
              style={styles.summaryCard}
            >
              <View style={[styles.iconContainer, { backgroundColor: '#7E57C220' }]}>
                <Activity size={22} color="#7E57C2" />
              </View>
              <View style={styles.summaryContent}>
                <Text style={styles.summaryValue}>63,602</Text>
                <Text style={styles.summaryLabel}>Weekly Steps</Text>
              </View>
              <View style={styles.changeContainer}>
                <TrendingUp size={14} color="#4CAF50" />
                <Text style={styles.changeText}>+12%</Text>
              </View>
            </Animated.View>
            
            <Animated.View 
              entering={FadeInRight.delay(200).duration(500)}
              style={styles.summaryCard}
            >
              <View style={[styles.iconContainer, { backgroundColor: '#26A69A20' }]}>
                <Timer size={22} color="#26A69A" />
              </View>
              <View style={styles.summaryContent}>
                <Text style={styles.summaryValue}>350</Text>
                <Text style={styles.summaryLabel}>Active Minutes</Text>
              </View>
              <View style={styles.changeContainer}>
                <TrendingUp size={14} color="#4CAF50" />
                <Text style={styles.changeText}>+8%</Text>
              </View>
            </Animated.View>
          </View>
          
          <View style={styles.summaryRow}>
            <Animated.View 
              entering={FadeInRight.delay(300).duration(500)}
              style={styles.summaryCard}
            >
              <View style={[styles.iconContainer, { backgroundColor: '#EF535020' }]}>
                <Flame size={22} color="#EF5350" />
              </View>
              <View style={styles.summaryContent}>
                <Text style={styles.summaryValue}>3,200</Text>
                <Text style={styles.summaryLabel}>Calories Burned</Text>
              </View>
              <View style={styles.changeContainer}>
                <TrendingUp size={14} color="#4CAF50" />
                <Text style={styles.changeText}>+15%</Text>
              </View>
            </Animated.View>
            
            <Animated.View 
              entering={FadeInRight.delay(400).duration(500)}
              style={styles.summaryCard}
            >
              <View style={[styles.iconContainer, { backgroundColor: '#FFB30020' }]}>
                <Award size={22} color="#FFB300" />
              </View>
              <View style={styles.summaryContent}>
                <Text style={styles.summaryValue}>3/5</Text>
                <Text style={styles.summaryLabel}>Goals Achieved</Text>
              </View>
            </Animated.View>
          </View>
        </View>

        <Animated.View 
          entering={FadeInUp.delay(300).duration(500)}
          style={styles.goalsSection}
        >
          <View style={styles.cardHeader}>
            <Text style={styles.sectionTitle}>Weekly Goals</Text>
            <TouchableOpacity style={styles.moreButton}>
              <Text style={styles.moreButtonText}>All Goals</Text>
              <ChevronRight size={16} color="#7986CB" />
            </TouchableOpacity>
          </View>
          
          {[
            { label: 'Steps Goal', current: 63602, target: 70000, icon: Activity, color: '#5C6BC0' },
            { label: 'Active Minutes', current: 350, target: 420, icon: Timer, color: '#26A69A' },
            { label: 'Calories', current: 3200, target: 3500, icon: Flame, color: '#EF5350' },
          ].map((goal, index) => {
            const progress = goal.current / goal.target;
            return (
              <Animated.View 
                key={goal.label}
                entering={FadeInUp.delay(400 + index * 100).duration(500)}
                style={styles.goalCard}
              >
                <View style={styles.goalHeader}>
                  <View style={styles.goalLeft}>
                    <View style={[styles.goalIconContainer, { backgroundColor: `${goal.color}20` }]}>
                      <goal.icon size={18} color={goal.color} />
                    </View>
                    <Text style={styles.goalLabel}>{goal.label}</Text>
                  </View>
                  <Text style={[styles.goalProgress, { color: goal.color }]}>
                    {Math.round(progress * 100)}%
                  </Text>
                </View>
                <View style={styles.progressBar}>
                  <LinearGradient
                    colors={progress >= 0.9 ? ['#00E676', '#00B0FF'] : [goal.color, `${goal.color}80`]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={[
                      styles.progressFill,
                      { width: `${progress * 100}%` }
                    ]} 
                  />
                </View>
                <View style={styles.goalValues}>
                  <Text style={styles.goalCurrent}>{goal.current.toLocaleString()}</Text>
                  <Text style={styles.goalTarget}>{goal.target.toLocaleString()}</Text>
                </View>
              </Animated.View>
            );
          })}
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
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#E0E0E0',
    marginTop: 4,
  },
  dateChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  dateText: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 4,
  },
  quickStats: {
    flexDirection: 'row',
    marginTop: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 16,
    padding: 16,
  },
  quickStat: {
    flex: 1,
    alignItems: 'center',
  },
  quickStatValue: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  quickStatLabel: {
    color: '#E0E0E0',
    fontSize: 12,
    marginTop: 4,
  },
  statDivider: {
    width: 1,
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  content: {
    padding: 24,
  },
  cardContainer: {
    backgroundColor: '#141A38',
    borderRadius: 24,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  cardHeader: {
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
  graph: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 220,
  },
  barContainer: {
    alignItems: 'center',
    width: (width - 88) / 7,
  },
  barValues: {
    marginBottom: 8,
    height: 20,
  },
  barWrapper: {
    height: 150,
    width: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  bar: {
    width: '100%',
    borderRadius: 8,
  },
  barLabel: {
    color: '#9E9E9E',
    marginTop: 8,
    fontSize: 12,
  },
  barValue: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  // Updated summary cards styles
  summaryCardsContainer: {
    marginBottom: 24,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  summaryCard: {
    backgroundColor: '#141A38',
    borderRadius: 20,
    padding: 16,
    width: '48%',
    flexDirection: 'column',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    height: 120,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  summaryContent: {
    flex: 1,
  },
  summaryValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  summaryLabel: {
    fontSize: 12,
    color: '#9E9E9E',
    marginTop: 2,
  },
  changeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 16,
    right: 16,
  },
  changeText: {
    fontSize: 10,
    color: '#4CAF50',
    marginLeft: 2,
  },
  goalsSection: {
    backgroundColor: '#141A38',
    borderRadius: 24,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  goalCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  goalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  goalLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  goalIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  goalLabel: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  goalProgress: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressBar: {
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  goalValues: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  goalCurrent: {
    fontSize: 14,
    color: '#E0E0E0',
  },
  goalTarget: {
    fontSize: 14,
    color: '#9E9E9E',
  },
});