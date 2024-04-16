// WaterIntakeComponent.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Switch, TextInput, Keyboard, Alert } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Icon, Button, Overlay, Input } from '@rneui/themed';
import { LineChart } from 'react-native-chart-kit';
import PushNotification from 'react-native-push-notification';

const WaterIntakeComponent = ({ initialTargetGlasses = 8, monthlyWaterIntakeData = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] }) => {
 const [targetGlasses, setTargetGlasses] = useState(initialTargetGlasses);
 const [drankGlasses, setDrankGlasses] = useState(3);
 const [monthlyWaterIntake, setMonthlyWaterIntake] = useState(monthlyWaterIntakeData);
 const [notificationEnabled, setNotificationEnabled] = useState(false);
 const [showTargetOverlay, setShowTargetOverlay] = useState(false);
 const [newTargetGlasses, setNewTargetGlasses] = useState('');

 const calculatePercentage = () => {
    return (drankGlasses / targetGlasses) * 100;
 };

 const toggleNotification = () => {
    setNotificationEnabled(!notificationEnabled);
    if (notificationEnabled) {
      PushNotification.cancelLocalNotifications({ id: 'waterReminder' });
    } else {
      PushNotification.localNotificationSchedule({
        id: 'waterReminder',
        message: 'Time to drink water!',
        date: new Date(Date.now() + 5 * 1000)
      });
    }
 };

 const handleSubmitTargetGlasses = () => {
    if (isNaN(newTargetGlasses) || newTargetGlasses === '') {
      Alert.alert('Invalid Input', 'Please enter a valid number.');
    } else {
      setTargetGlasses(parseInt(newTargetGlasses));
      setShowTargetOverlay(false);
      Keyboard.dismiss();
    }
 };

 return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Water Intake Container */}
        <View style={styles.waterContainer}>
          {/* Icon */}
          <Icon 
            name="water-drop"
            type="material"
            style={styles.icon} />
          {/* Water Text */}
          <Text style={styles.waterText}>Water Intake</Text>
          {/* Circular Progress */}
          <View style={styles.circularProgress}>
            <AnimatedCircularProgress
              size={175}
              width={13}
              fill={calculatePercentage()}
              tintColor="#29426B"
              backgroundColor="white"
              rotation={180}
              lineCap="round"
            >
              {(fill) => (
                <View style={styles.progressContainer}>
                 <Text style={styles.drankGlasses}>{drankGlasses}</Text>
                 <Text style={styles.targetGlasses}>/{targetGlasses} glasses</Text>
                </View>
              )}
            </AnimatedCircularProgress>
          </View>
          {/* Drank Button */}
          <Button title="Drank" buttonStyle={styles.button} onPress={() => setDrankGlasses(drankGlasses + 1)} />
        </View>

        {/* Switch Button for Notification */}
        <View style={styles.switchtargetContainer}>
          <Text style={styles.notificationText}>Water intake reminder</Text>
          <Switch
            trackColor={{ false: 'grey', true: 'black' }}
            thumbColor={notificationEnabled ? 'grey' : '#29426B'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleNotification}
            value={notificationEnabled}
          />
          {/* Display Target Glasses and Set Target Button */}
          <TouchableOpacity style={styles.targetContainer} onPress={() => setShowTargetOverlay(true)}>
            <Text style={styles.targetText}>Target: {targetGlasses} glasses</Text>
          </TouchableOpacity>
        </View>

        {/* Overlay for setting target glasses */}
        <Overlay isVisible={showTargetOverlay} onBackdropPress={() => setShowTargetOverlay(false)}>
          <View style={styles.overlayContent}>
            <Text style={styles.overlayTitle}>Set Target Glasses</Text>
            <Input
              placeholder="Enter target"
              value={newTargetGlasses}
              onChangeText={setNewTargetGlasses}
              keyboardType="numeric"
              style={styles.overlayInput}
            />
            <Button
              title="Set"
              onPress={handleSubmitTargetGlasses}
              buttonStyle={styles.overlayButton}
            />
          </View>
        </Overlay>

        {/* Monthly Water Intake Container */}
        <View style={styles.monthlyWaterContainer}>
          <Text style={styles.monthlyWaterText}>Monthly Water Intake</Text>
          <LineChart
            data={{
              labels: Array.from({ length: monthlyWaterIntake.length }, (_, i) => (i + 1).toString()),
              datasets: [
                {
                 data: monthlyWaterIntake,
                },
              ],
            }}
            width={350}
            height={220}
            yAxisSuffix="glasses"
            chartConfig={{
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              decimalPlaces: 0,
              color: () => '#29426B',
              labelColor: () => '#29426B',
              propsForDots: {
                r: '4',
                strokeWidth: '2',
                stroke: '#29426B',
              },
            }}
            bezier
          />
        </View>
      </ScrollView>
    </SafeAreaView>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  waterContainer: {
    backgroundColor: '#EEF0F2',
    height: '35%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderRadius: 32,
    paddingHorizontal: 20,
    marginTop: '-10%'
  },
  icon: {
    marginRight: 10,
    marginTop: "2%",
    marginRight: 'auto'
  },
  waterText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft:'7%',
    marginTop:'-6%',
  },
  circularProgress: {
    alignItems: 'center',
    marginTop: '6%'
  },
  progressContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  drankGlasses: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  targetGlasses: {
    fontSize: 16,
  },
  button: {
    backgroundColor: 'rgba(39, 39, 39, 1)',
    borderRadius: 23,
    paddingHorizontal:'7%',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: '6%'
  },
  switchtargetContainer: {
    backgroundColor: '#EEF0F2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '7%',
    paddingHorizontal: '7%',
    paddingVertical: '2%',
    borderRadius: 15,
    
  },
  notificationText: {
    fontSize: 18,
    marginRight: 10,
    fontWeight: 'bold',
  },
  targetText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  overlayContent: {
    padding: 20,
    alignItems: 'center',
  },
  overlayTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  overlayInput: {
    marginBottom: 20,
    width: '100%',
  },
  overlayButton: {
    backgroundColor: 'rgba(39, 39, 39, 1)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  monthlyWaterContainer: {
    backgroundColor: '#EEF0F2',
    marginTop: '7%',
    width: '100%',
    height:'43%',
    borderRadius: 32,
    alignItems: 'center',
  },
  monthlyWaterText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  bottomNav: {
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
    left: '5%',
    right: '5%',
  },
});

export default WaterIntakeComponent;


