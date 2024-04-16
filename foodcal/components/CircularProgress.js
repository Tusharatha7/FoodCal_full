// CircularProgress.js
import React from 'react';
import { View, Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const CircularProgress = ({ size, fill, tintColor, backgroundColor, rotation, lineCap, stepsTaken, targetSteps }) => {
 const calculatePercentage = () => {
    return (stepsTaken / targetSteps) * 100;
 };

 return (
    <View style={{ alignSelf: 'center', margin: '5%' }}>
      <AnimatedCircularProgress
        size={size}
        width={13}
        fill={fill || calculatePercentage()}
        tintColor={tintColor || "#29426B"}
        backgroundColor={backgroundColor || "white"}
        rotation={rotation || 180}
        lineCap={lineCap || 'round'}>
        {(fill) => (
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: '2%' }}>{stepsTaken}</Text>
            <Text style={{ fontSize: 16 }}>/{targetSteps} steps</Text>
          </View>
        )}
      </AnimatedCircularProgress>
    </View>
 );
};

export default CircularProgress;
