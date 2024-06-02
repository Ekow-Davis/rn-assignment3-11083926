import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Button, Pressable, StyleSheet, ScrollView, Image, TextInput, Text, View, FlatList } from 'react-native';
import SquareContainer from './Components/SquareContainer';
import RectangularContainer from './Components/RectangularContainer'

const verticalData = [
  { key: '1', label: 'Mobile App Development' },
  { key: '2', label: 'Web Development' },
  { key: '3', label: 'Creative Development' },
  { key: '4', label: 'Algorithms' },
  { key: '5', label: 'Data Structures' },
  { key: '6', label: 'Programming Fundamentals' },
  { key: '7', label: 'Programming 1' },
  { key: '8', label: 'Intro to Calculus' },
  { key: '9', label: 'Vectors & Mechanics' },
  { key: '10', label: 'Data Mining' },
  { key: '11', label: 'Office Tools Productivity' },
  { key: '12', label: 'Digital & Logical Systems' },
  { key: '13', label: 'Critical Thinking' },
  { key: '14', label: 'Machine Learning' },
  { key: '15', label: 'System Administration' },
];

const horizontalData = [
  { key: '1', imageUrl: require('./assets/Images/CrossLeg.png'), label: 'Create', minilabel: '12 Tasks' },
  { key: '2', imageUrl: require('./assets/Images/DeskStudy.png'), label: 'Study', minilabel: '12 Tasks' },
  { key: '3', imageUrl: require('./assets/Images/CrossLeg.png'), label: 'Cook', minilabel: '12 Tasks' },
  { key: '4', imageUrl: require('./assets/Images/DeskStudy.png'), label: 'Code', minilabel: '12 Tasks' },
  { key: '5', imageUrl: require('./assets/Images/CrossLeg.png'), label: 'Teach', minilabel: '12 Tasks' },
  { key: '6', imageUrl: require('./assets/Images/DeskStudy.png'), label: 'Party', minilabel: '12 Tasks' },
  { key: '7', imageUrl: require('./assets/Images/CrossLeg.png'), label: 'Teach', minilabel: '12 Tasks' },
  { key: '8', imageUrl: require('./assets/Images/DeskStudy.png'), label: 'Party', minilabel: '12 Tasks' },
];

const ProfileImage = require("./assets/Images/ProfilePicture.png");
const FilterImage = require("./assets/Images/FilterIcon.png");
const SearchImage = require("./assets/Images/SearchIcon.png");

const handleFilterPress = () => {
  alert('Filter button pressed.\nCannot use button component for andriod to render images through expo go');
};

const handleButtonPress = () => {
  alert('Button can only be rendered using string (for andriod using expo)\nThank you for your time')
}

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

      <Image source={ProfileImage} style={{borderRadius: 50, marginVertical: 10, width: 60, height: 60, backgroundColor: "white", marginLeft: 135,}} />
    </View>

    <View style={{flexDirection: 'row', marginLeft: 20,}}>
      
      <View style={{backgroundColor: "white", width: 280, height: 45, marginLeft: 10, borderRadius: 10,}}>
        <Image source={SearchImage} style={{width: 25, height: 25, top: 10, marginLeft: 10, marginRight: 5,}}/>
      <TextInput placeholder='Search' placeholderTextColor='#999' style={{backgroundColor: "white", width: 150, height: 40, borderRadius: 10, marginLeft: 45, top: -23, }} />
      </View>

      <Pressable onPress={handleFilterPress}>
      <Image source={FilterImage} style={{height: 50, width: 50, marginLeft: 18, }} /> 
      </Pressable>

    </View>

    <Text style={{fontSize: 24, fontWeight: 'bold', marginLeft: 40, marginTop: 20, marginBottom: 20,}}>Categories</Text>
    
    <FlatList
          horizontal
          data={horizontalData}
          renderItem={({ item }) => (
            <SquareContainer
              imageUrl={item.imageUrl}
              label={item.label}
              minilabel={item.minilabel}
            />
          )}
          keyExtractor={(item) => item.key}
          contentContainerStyle={styles.horizontalList}
          showsHorizontalScrollIndicator={false}
        />

      <View>
        <Text style={{fontSize: 24, fontWeight: 'bold', marginLeft: 40, marginTop: 20, marginBottom: 10,}}>Ongoing Task</Text>
        
        <FlatList
            data={verticalData}
            renderItem={({ item }) => (
              <RectangularContainer
                label={item.label}
              />
            )}
            keyExtractor={(item) => item.key}
            style={{flexGrow: 0, marginLeft: 10,}}
          />
      </View>

      <Button title='Test'onPress={handleButtonPress} style={{height: 20, marginTop: 20,}}/>

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

  horizontalList: {
    alignItems: 'center',
    paddingLeft: 20,
    marginLeft: 5,
  },

});

export default App;