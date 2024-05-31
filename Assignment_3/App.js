import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SquareContainer from './Components/SquareContainer';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello, Devs</Text>
      <StatusBar style="auto" />
      <SquareContainer 
      label="Test"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f0e8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
