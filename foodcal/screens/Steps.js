import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Icon, Button } from '@rneui/themed';

const Steps = () => {
  const [targetSteps, setTargetSteps] = useState(5000); // Default target steps
  const [stepsTaken, setStepsTaken] = useState(3245); // Default steps taken
  const [newTargetSteps, setNewTargetSteps] = useState(''); // State for new target steps
  const [monthlySteps, setMonthlySteps] = useState([
    2000, 2300, 2500, 2200, 2400, 2600, 2800, 2700, 2900, 3000, 3200, 3100 // Sample monthly steps
  ]);

  // Function to calculate percentage of steps taken
  const calculatePercentage = () => {
    return (stepsTaken / targetSteps) * 100;
  };

  // Function to handle setting new target steps
  const handleSetTargetSteps = () => {
    if (!isNaN(parseInt(newTargetSteps))) {
      setTargetSteps(parseInt(newTargetSteps));
      setNewTargetSteps('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Today's Steps Container */}
        <View style={styles.stepsContainer}>
          {/* Icon */}
          <Icon 
            name="footsteps"
            type="ionicon"
            style={styles.icon} />
          {/* Today Text */}
          <Text style={styles.todaytext}>Today</Text>
          {/* Circular Progress */}
          <View style={styles.circularProgress}>
            <AnimatedCircularProgress
              size={175}
              width={13}
              fill={calculatePercentage()}
              tintColor="#29426B"
              backgroundColor="white"
              rotation={180}
              lineCap='round'>
              {(fill) => (
                <View style={styles.progressContainer}>
                  <Text style={styles.stepstaken}>{stepsTaken}</Text>
                  <Text style={styles.targetsteps}>/{targetSteps} steps</Text>
                </View>
              )}
            </AnimatedCircularProgress>
          </View>
        </View>

        {/* Set Target Steps Container */}
        <View style={styles.setTargetStepsContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter target steps"
            keyboardType="numeric"
            value={newTargetSteps}
            onChangeText={text => setNewTargetSteps(text)}
          />
          <Button title="Set Target" buttonStyle={styles.button} onPress={handleSetTargetSteps} />
        </View>

        {/* Monthly Steps Container */}
        <View style={styles.monthlyStepsContainer}>
          <Text style={styles.monthlysteps}>Monthly Steps</Text>
          {/* Add your content for monthly steps here */}
          <View style={styles.monthlyStepsContent}>
            {monthlySteps.map((steps, index) => (
              <Text key={index} style={styles.monthlyStepsText}>Month {index + 1}: {steps}</Text>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => handleNavigate('Community')}>
          <Icon name="heart-fill" type="octicon"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigate('Camera')}>
          <Icon name="camera" type="fontisto" size={38}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigate('Profile')}>
          <Icon name="person" type="ionicon" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const stepsTaken = 3245;
const targetSteps = 5000;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollViewContent: {
    flexGrow: 1,
    marginTop:'-20%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepsContainer: {
    backgroundColor: '#EEF0F2',
    height: '35%',
    width: '100%',
    flexDirection: 'row', // Arrange icon and text horizontally
    justifyContent: 'flex-start', // Align icon and text to the left
    alignItems: 'flex-start', // Align icon and text to the top
    marginBottom: 20,
    borderRadius: 32,
  },
  icon: {
    padding: '6%',
    marginTop: "7%",
  },
  todaytext: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: "2%",
    marginLeft: "-3%"
  },
  circularProgress: {
    alignSelf: 'center',
    margin: '5%'
  },
  stepstaken: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: '2%'
  },
  setTargetStepsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left'
  },
  progressText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  targetsteps: {
    fontSize: 16
  },
  input: {
    flex: 1,
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 5,
    marginBottom: 5,
    marginRight: 20
  },
  button: {
    backgroundColor: 'rgba(39, 39, 39, 1)',
    borderRadius: 10,
  },
  monthlyStepsContainer: {
    backgroundColor: '#EEF0F2',
    marginTop: 20,
    height: '37%',
    width: '100%',
    borderRadius: 32,
  },
  monthlyStepsContent: {
    marginTop: 10,
    alignItems: 'center',
  },
  monthlysteps: {
    fontSize: 20,
    paddingTop: '2%',
    paddingLeft: '6%',
    fontWeight: 'bold'
  },
  monthlyStepsText: {
    fontSize: 16,
    marginBottom: 5,
  },
  bottomNav: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor:'#fafaff',
    padding:15,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 7,
    borderRadius:12,
    position: 'absolute',
    bottom: '1.5%',
    left: '5%',
    right: '5%',
  },
});

export default Steps;
export { stepsTaken, targetSteps };
