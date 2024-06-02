import { View, Image, Text, StyleSheet } from 'react-native';

const SquareContainer = ({ imageUrl, label, minilabel }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.minilabel}>{minilabel}</Text>
      <Image
        source={imageUrl}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,  
    height: 200, 
    backgroundColor: '#ffffff', 
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginHorizontal: 10,
    elevation: 5, 
    borderRadius: 16,
    margin: 3,
  },

  label: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
    fontSize: 14,
    fontWeight: 'bold', 
    color: '#333', 
  },

  minilabel: {
    position: 'absolute',
    top: 28,
    left: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
    fontSize: 8,
    color: '#333', 
  },

  image: {
    width: '70%', 
    height: '75%', 
    resizeMode: 'cover',
  },
});

export default SquareContainer;
