import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import SquareContainer from './Components/SquareContainer';

export default function App() {
  return (
    <>
    <View style={styles.container}>
    <View>
      <Text style={{fontSize: 16, fontWeight: 'bold',}}>Hello, Devs</Text>
      <StatusBar style="auto" />
    </View>
    <ScrollView horizontal={true} contentContainerStyle={{alignItems: 'center', paddingHorizontal: 10, flexDirection: 'row',}}>
        <SquareContainer
         imageUrl="./assets/Images/CrossLeg.png"
          label="Test"
          minilabel="12 Tasks" />
        <SquareContainer
         imageUrl="./assets/Images/DeskStudy.png"
          label="Study"
          minilabel="12 Tasks" />
        <SquareContainer
         imageUrl="./assets/Images/CrossLeg.png"
          label="Test"
          minilabel="12 Tasks" />
        <SquareContainer
         imageUrl="./assets/Images/DeskStudy.png"
          label="Study"
          minilabel="12 Tasks" />
        <SquareContainer
         imageUrl="./assets/Images/CrossLeg.png"
          label="Test"
          minilabel="12 Tasks" />
        <SquareContainer
         imageUrl="./assets/Images/DeskStudy.png"
          label="Study"
          minilabel="12 Tasks" />
      </ScrollView>
    </View>
      </>
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
