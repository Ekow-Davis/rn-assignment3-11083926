import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Image, Text, View, FlatList } from 'react-native';
import SquareContainer from './Components/SquareContainer';
import RectangularContainer from './Components/RectangularContainer'

const data = [
  { key: '1', label: 'Mobile App Dev' },
  { key: '2', label: 'Web Dev' },
  { key: '3', label: 'Creative Dev' },
  { key: '4', label: 'Algorithms' },
  { key: '5', label: 'DS' },
];

const ProfileImage = require("./assets/Images/ProfilePicture.png");


/*Removes the Square Components*/
{/* <FlatList
            data={data}
            renderItem={({ item }) => (
              <RectangularContainer
                label={item.label}
              />
            )}
            keyExtractor={(item) => item.key}
            style={{flexGrow: 0,}}
          /> */}


const App =() => {

  return (
    <>
    <View style={styles.container}>
    <StatusBar style="auto" />
    <View style={{marginBottom: 20,}}>
      <Text style={{fontSize: 28, fontWeight: 'bold',}}>Hello, Devs</Text>
      <Text style={{fontsize: 8}}>14 tasks today</Text>
      <Image source={ProfileImage} style={{borderRadius: 50, marginVertical: 10,width: 100, height: 100,}} />
    </View>
    <Text style={{fontSize: 24, fontWeight: 'bold'}}>Categories</Text>
    <ScrollView horizontal={true} contentContainerStyle={{alignItems: 'center', paddingHorizontal: 10, flexDirection: 'row',}}>
        <SquareContainer
         imageUrl="./assets/Images/CrossLeg.png"
          label="Bat"
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
          label="Hello"
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