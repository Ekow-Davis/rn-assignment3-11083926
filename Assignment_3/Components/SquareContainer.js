import { View, Image, Text, StyleSheet } from 'react-native';

const SquareContainer = ({ imageUrl, label }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,  // Width of the square container
    height: 200, // Height of the square container
    backgroundColor: '#ffffff', // White background for the square container
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000", // Optional: for shadow effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, // Optional: for shadow effect on Android
  },

  label: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent background for readability
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333', // Text color
  },
  
  image: {
    width: '100%', // Ensures the image fills the container
    height: '100%', // Ensures the image fills the container
    resizeMode: 'cover', // Adjusts how the image fits into the container
  },
});

export default SquareContainer;
