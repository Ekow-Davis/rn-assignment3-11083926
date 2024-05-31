import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Image, Text, View, FlatList } from 'react-native';
import SquareContainer from './Components/SquareContainer';
import RectangularContainer from './Components/RectangularContainer'



const App =() => {

  return (
    <>
    <View style={styles.container}>
    <View>
      <Text style={{fontSize: 28, fontWeight: 'bold',}}>Hello, Devs</Text>
      <Text style={{fontsize: 8}}>14 tasks today</Text>
      <StatusBar style="auto" />
      
    </View>
    <Text style={{fontSize: 24, fontWeight: 'bold'}}>Categories</Text>
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
      <View>
        <Text>Ongoing Task</Text>
        <FlatList
            data={[{ key: '1', label: 'Mobile App Development' }]}
            renderItem={({ item }) => (
              <RectangularContainer
                label={item.label}
              />
            )}
            keyExtractor={(item) => item.key}
          />
      </View>
    </View>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f0e8',
    
  },
});

export default App;