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
      width: 350,  
      height: 120, 
      backgroundColor: '#ffffff',
      justifyContent: 'center',
      marginVertical: 10,      
      borderRadius: 16, 
      margin: 8,
      marginLeft: 10,
      borderWidth: 1,
      borderColor: '#E8D1BA',
    },
  
    label: {
      position: 'absolute',
      top: 50,
      left: 10,
      backgroundColor: 'rgba(255, 255, 255, 0.7)', 
      paddingHorizontal: 5,
      paddingVertical: 2,
      borderRadius: 3,
      fontSize: 14,
      fontWeight: 'bold',
      color: '#333',
    }

});

export default RectangularContainer;