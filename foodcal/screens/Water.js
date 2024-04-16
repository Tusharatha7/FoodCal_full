// WaterScreen.js
import React from 'react';
import { SafeAreaView } from 'react-native';
import WaterIntakeComponent from '../components/WaterIntakeComponent'; // Adjust the path according to your project structure

const WaterScreen = () => {
  // You can pass any initial data or configurations as props to WaterIntakeComponent
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WaterIntakeComponent initialTargetGlasses={8} monthlyWaterIntakeData={[5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]} />
      {/* Additional UI elements or components specific to WaterScreen can be added here */}
    </SafeAreaView>
  );
};

export default WaterScreen;
