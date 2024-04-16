import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon, Avatar } from '@rneui/themed';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Steps, { stepsTaken, targetSteps } from './Steps';

const HomeScreen = () => {
 const navigation = useNavigation();
 const [modalVisible, setModalVisible] = useState(false);
 const [selectedBox, setSelectedBox] = useState(null);

 const handleNavigate = (screenName) => {
    navigation.navigate(screenName);
 };

 const handleBoxPress = (screenName) => {
    setSelectedBox(screenName);
    setModalVisible(true);
 };

 // Function to generate random calorie data
 const generateRandomCalorieData = () => {
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    return days.map(day => ({
      dayInitial: day,
      calories: Math.floor(Math.random() * (3000 - 2000 + 1) + 2000),
    }));
 };

 // Generate the random calorie data
 const data = generateRandomCalorieData();

 return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Profile Section */}
        <TouchableOpacity onPress={() => handleNavigate('Profile')}>
          <View style={styles.profileSection}>
            <Avatar
              rounded
              size="large"
              source={{ uri: 'https://w.forfun.com/fetch/c1/c10c301b50a6d9f50f1a49dbbc0ab69b.jpeg' }}
            />
            <View style={styles.profileInfo}>
              <Text style={styles.welcomeText}>Welcome, </Text>
              <Text style={styles.username}>Wolverine</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Calorie Intake Box */}
        <TouchableOpacity style={styles.calorieIntakeBox} onPress={() => {}}>
          <View style={styles.calorieIntakeContent}>
            <View style={styles.calorieText}>
              <Text>Daily Calorie Intake</Text>
            </View>
            <View style={styles.weeklyBars}>
              {data.map((item, index) => (
                <View key={index} style={styles.barContainer}>
                 <Text style={styles.dayInitial}>{item.dayInitial}</Text>
                 <View style={styles.bar}>
                    <View style={[styles.barFill, { height: `${item.calories}%` }]} />
                 </View>
                 <Text style={styles.caloriesText}>{item.calories} cal</Text>
                </View>
              ))}
            </View>
          </View>
        </TouchableOpacity>

        {/* Health Stats Section */}
        <View style={styles.healthStatsSection}>
          {/* Steps Box */}
          <TouchableOpacity style={styles.stepsBox} onPress={() => navigation.navigate('Steps')}>
            <View style={styles.stepsContent}>
              <View style={styles.boxheading}>
                <Text style={styles.boxtitle}>Steps </Text>
                <Icon name="footsteps" type="ionicon" style={styles.icon} />
              </View>
              <View style={styles.circularProgress}>
                <AnimatedCircularProgress
                 size={155}
                 width={11}
                 fill={(stepsTaken / targetSteps) * 100}
                 tintColor="#29426B"
                 backgroundColor="white"
                 rotation={180}
                 lineCap="round"
                >
                 {(fill) => (
                    <View style={styles.progressContainer}>
                      <Text style={styles.stepsText}>{stepsTaken}</Text>
                      <Text style={styles.targetText}>/{targetSteps} steps</Text>
                    </View>
                 )}
                </AnimatedCircularProgress>
              </View>
            </View>
          </TouchableOpacity>

          {/* Water Box */}
          <TouchableOpacity style={styles.waterBox} onPress={() => navigation.navigate('Water')}>
            <View style={styles.waterContent}>
              <View style={styles.boxheading}>
                <Text style={styles.boxtitle}>Water </Text>
                <Icon name="water-drop" type="material" style={styles.icon} />
              </View>
              <View style={styles.circularProgress}>
                <AnimatedCircularProgress
                 size={155}
                 width={11}
                 fill={25/100}
                 tintColor="#29426B"
                 backgroundColor="white"
                 rotation={180}
                 lineCap="round"
                >
                 {(fill) => (
                    <View style={styles.progressContainer}>
                      <Text style={styles.stepsText}>{stepsTaken}</Text>
                      <Text style={styles.targetText}>/{targetSteps} steps</Text>
                    </View>
                 )}
                </AnimatedCircularProgress>
              </View>
            </View>
          </TouchableOpacity>

          {/* Challenges Box */}
          <TouchableOpacity style={styles.challengesBox} onPress={() => navigation.navigate('Challenges')}>
            <View style={styles.challengesContent}>
              <View style={styles.boxheading}>
                <Text style={styles.boxtitle}>Challenges </Text>
                <Icon name="calendar" type="entypo" style={styles.icon} />
              </View>
            </View>
          </TouchableOpacity>

          {/* Achievements Box */}
          <TouchableOpacity style={styles.achievementsBox} onPress={() => navigation.navigate('Achievements')}>
            <View style={styles.achievementContent}>
              <View style={styles.boxheading}>
                <Text style={styles.boxtitle}>Achievements </Text>
                <Icon name="trophy-sharp" type="ionicon" style={styles.icon} />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Modal for displaying information */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text>Information for {selectedBox}</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
          <TouchableOpacity onPress={() => handleNavigate('Community')}>
            <Icon name="heart-fill" type="octicon" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavigate('Camera')}>
            <Icon name="camera" type="fontisto" size={38} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavigate('Profile')}>
            <Icon name="person" type="ionicon" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
 },
 scrollViewContent: {
    flexGrow: 1,
 },
 profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
 },
 profileInfo: {
    flexDirection: 'row',
    marginLeft: 10,
 },
 welcomeText: {
    fontSize: 16,
 },
 username: {
    fontSize: 18,
    fontWeight: 'bold',
 },
 calorieIntakeBox: {
    width: '100%',
    height: '23%',
    backgroundColor: '#EEF0F2',
    borderRadius: 29,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
 },
 calorieIntakeContent: {
    justifyContent: 'center',
    alignItems: 'center',
 },
 calorieText: {
    marginBottom: 10,
 },
 weeklyBars: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
 },
 barContainer: {
    alignItems: 'center',
    width: '14%',
 },
 dayInitial: {
    fontSize: 12,
    marginBottom: 5,
 },
 bar: {
    width: 10,
    height: '100%',
    backgroundColor: '#EEF0F2',
    borderRadius: 5,
 },
 barFill: {
    backgroundColor: '#29426B',
    borderRadius: 5,
 },
 caloriesText: {
   fontSize: 10,
   marginTop: 5,
},
healthStatsSection: {
   flexDirection: 'row',
   flexWrap: 'wrap',
   justifyContent: 'space-between',
},
stepsBox: {
   width: '47.5%',
   height: '41%',
   backgroundColor: '#EEF0F2',
   justifyContent: 'center',
   alignItems: 'center',
   borderRadius: 25,
   marginTop: 15,
},
stepsContent: {
   width: '80%',
   height: '80%',
},
boxheading: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   marginTop: "-8%",
},
circularProgress: {
   alignSelf: 'center',
   margin: '5%',
},
progressContainer: {
   justifyContent: 'center',
   alignItems: 'center',
},
stepsText: {
   fontSize: 18,
   fontWeight: 'bold',
   marginBottom: 5,
},
targetText: {
   fontSize: 14,
},
waterBox: {
   width: '47.5%',
   height: '41%',
   backgroundColor: '#EEF0F2',
   justifyContent: 'center',
   alignItems: 'center',
   borderRadius: 25,
   marginTop: 15,
},
challengesBox: {
   width: '47.5%',
   height: '41%',
   backgroundColor: '#EEF0F2',
   justifyContent: 'center',
   alignItems: 'center',
   borderRadius: 25,
   marginTop: 20,
},
achievementsBox: {
   width: '47.5%',
   height: '41%',
   backgroundColor: '#EEF0F2',
   justifyContent: 'center',
   alignItems: 'center',
   borderRadius: 25,
   marginTop: 20,
},
bottomNav: {
   position: 'absolute',
   flexDirection: 'row',
   justifyContent: 'space-around',
   alignItems: 'center',
   backgroundColor: '#fafaff',
   padding: 15,
   shadowColor: 'black',
   shadowOffset: {
       width: 0,
       height: 3,
   },
   shadowOpacity: 0.25,
   shadowRadius: 3.84,
   elevation: 7,
   borderRadius: 12,
   position: 'absolute',
   bottom: '1.5%',
   left: '1%',
   right: '1%',
},
modalContainer: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
},
modalContent: {
   backgroundColor: '#fff',
   padding: 20,
   borderRadius: 10,
   elevation: 5,
},
});

export default HomeScreen;

