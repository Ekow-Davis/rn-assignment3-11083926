import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const RectangularContainer = ({ label }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      width: 400,  // Width of the square container
      height: 300, // Height of the square container
      backgroundColor: '#ffffff', // White background for the square container
      justifyContent: 'center',
      
      elevation: 5, // Optional: for shadow effect on Android
      borderRadius: 16,
      margin: 8,
    },
  
    label: {
      position: 'absolute',
      top: 20,
      left: 10,
      backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent background for readability
      paddingHorizontal: 5,
      paddingVertical: 2,
      borderRadius: 3,
      fontSize: 14,
      fontWeight: 'bold',
      color: '#333', // Text color
    }

});

export default RectangularContainer;