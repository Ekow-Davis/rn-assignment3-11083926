import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, ScrollView, Image, TextInput, Text, View, FlatList } from 'react-native';
import SquareContainer from './Components/SquareContainer';
import RectangularContainer from './Components/RectangularContainer'

const horizontalData = [
  { key: '1', label: 'Mobile App Dev' },
  { key: '2', label: 'Web Dev' },
  { key: '3', label: 'Creative Dev' },
  { key: '4', label: 'Algorithms' },
  { key: '5', label: 'DS' },
];

const ProfileImage = require("./assets/Images/ProfilePicture.png");
const FilterImage = require("./assets/Images/FilterIcon.png");




const App =() => {

  return (
    <>
    <SafeAreaView style={{flex: 1,}}>
    <View style={styles.container}>
    <StatusBar style="auto" />
    <ScrollView>
    <View style={{marginBottom: 20, marginTop: 50, flexDirection: 'row',}}>
      <View>
      <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 40,}}>Hello, Devs</Text>
      <Text style={{fontsize: 8, marginLeft: 40,}}>14 tasks today</Text>
      </View>    
      <Image source={ProfileImage} style={{borderRadius: 50, marginVertical: 10, width: 60, height: 60, backgroundColor: "white", marginLeft: 100,}} />
    </View>
    <View style={{flexDirection: 'row',}}>
      <TextInput style={{backgroundColor: "white", width: 250, height: 45, borderRadius: 10, marginLeft: 40, }} />
      <Image source={FilterImage} style={{height: 50, width: 50, marginLeft: 20, }} />
    </View>
    <Text style={{fontSize: 24, fontWeight: 'bold', marginLeft: 40, marginTop: 20, marginBottom: 20,}}>Categories</Text>
    <ScrollView horizontal={true} contentContainerStyle={{alignItems: 'center', paddingLeft: 20, paddingHorizontal: 10, flexDirection: 'row',}}>
        <SquareContainer
         imageUrl="./assets/Images/CrossLeg.png"
          label="Excercise"
          minilabel="12 Tasks" />
        <SquareContainer
         imageUrl="./assets/Images/DeskStudy.png"
          label="Study"
          minilabel="12 Tasks" />
        <SquareContainer
         imageUrl="./assets/Images/CrossLeg.png"
          label="Cook"
          minilabel="12 Tasks" />
        <SquareContainer
         imageUrl="./assets/Images/DeskStudy.png"
          label="Code"
          minilabel="12 Tasks" />
        <SquareContainer
         imageUrl="./assets/Images/CrossLeg.png"
          label="Teach"
          minilabel="12 Tasks" />
        <SquareContainer
         imageUrl="./assets/Images/DeskStudy.png"
          label="Party"
          minilabel="12 Tasks" />
      </ScrollView>
      <View>
        <Text style={{fontSize: 24, fontWeight: 'bold', marginLeft: 40, marginTop: 20, marginBottom: 10,}}>Ongoing Task</Text>
        <FlatList
            data={horizontalData}
            renderItem={({ item }) => (
              <RectangularContainer
                label={item.label}
              />
            )}
            keyExtractor={(item) => item.key}
            style={{flexGrow: 0, marginLeft: 10,}}
          />
      </View>
    </ScrollView>
    </View>
    </SafeAreaView>
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