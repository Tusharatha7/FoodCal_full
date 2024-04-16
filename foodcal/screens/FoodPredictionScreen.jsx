import React, { useState, useEffect } from 'react';
import { View, Text, Image, Alert, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import { Icon, Button } from '@rneui/themed';

const FoodPredictionScreen = ({ navigation }) => {
 const [prediction, setPrediction] = useState('');
 const [imageUri, setImageUri] = useState(null);

 useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
 }, []);

 useEffect(() => {
    console.log('Image URI state updated:', imageUri);
 }, [imageUri]);

 const selectImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [6, 5],
        quality: 1,
      });

      if (!result.cancelled) {
        setImageUri(result.assets[0].uri);
        console.log('Selected Image URI:', result.assets[0].uri); // Corrected line
      }
    } catch (error) {
      console.error('Error selecting image:', error);
    }
 };

 const takePicture = async () => {
    try {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [6, 5],
        quality: 1,
      });

      if (!result.cancelled) {
        setImageUri(result.assets[0].uri);
        console.log('Taken Photo URI:', result.assets[0].uri); // Corrected line
      }
    } catch (error) {
      console.error('Error taking picture:', error);
    }
 };

 const predictFood = async () => {
    if (!imageUri) {
      Alert.alert('Please select an image first.');
      return;
    }

    const getMimeType = (uri) => {
      const extension = uri.split('.').pop();
      switch (extension) {
        case 'jpg':
        case 'jpeg':
          return 'image/jpeg';
        case 'png':
          return 'image/png';
        default:
          return 'image/jpeg'; // Default to JPEG if unknown
      }
    };

    const mimeType = getMimeType(imageUri);

    const formData = new FormData();
    formData.append('image', {
      uri: imageUri,
      type: mimeType, // Use the inferred MIME type
      name: 'test.' + mimeType.split('/')[1], // Adjust the file name based on the MIME type
    });

    try {
      console.log('Sending request to:', 'http://192.168.0.2:8000/predict-calories/');
      console.log('Request data:', formData);

      const response = await axios.post('http://192.168.0.2:8000/predict-calories/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Response:', response.data);
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error predicting food. Please try again.');
    }
 };

 return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button title="Upload an Image" buttonStyle={styles.button} onPress={selectImage} />
        <Button title="Take a Photo" buttonStyle={styles.button} onPress={takePicture} />
      </View>
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      <Button title="Predict" buttonStyle={styles.button} onPress={predictFood} disabled={!imageUri} />
      {prediction && <Text style={styles.predictionText}>Predicted Food: {prediction}</Text>}

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Community')}>
          <Icon name="heart-fill" type="octicon"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('FoodPrediction')}>
          <Icon name="camera" type="fontisto" size={38}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icon name="person" type="ionicon" />
        </TouchableOpacity>
      </View>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafaff',
    marginTop:"-25%"
 },
 image: {
    width: 340,
    height: 340,
    margin: 20,
 },
 predictionText: {
    fontSize: 18,
    marginTop: 20,
 },
 button: {
    backgroundColor: 'rgba(39, 39, 39, 1)',
    borderRadius: 10,
    margin: 15,
 },
 buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    bottom: '1.5%',
    left: '5%',
    right: '5%',
 },
});

export default FoodPredictionScreen;
