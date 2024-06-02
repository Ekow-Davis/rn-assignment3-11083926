# rn-assignment3-11083926
Assignment 3 for DCIT 202

## Screenshots
Screenshots on how the app looks.


## Components Used
Below are the components I used, some custom made, others derived from the react library

## React-Native Libary
### Text
This is the Component used to render text on react-native. It is what I used for all the text on the mobile app.

### View
Like a div component in web development, the View component also works in a similar sense and is mainly used to group and wrap around certain components or parts especially for giving specific parts stying or effects exclusive to them

### ScrollView
The ScrollView component provides a scrolling container that can host multiple components, allowing for vertical or horizontal scrolling. It is ideal for displaying content that may exceed the screen size, ensuring that users can scroll.

### Pressable/Button
Pressable: This component is used to detect various touch interactions. It provides feedback for touch interactions and is customizable. It is used in this app to make the FilterImage pressable.

Button: This component renders a standard button that users can press. It takes a title prop for the text label and an onPress prop for the click handler. However, it only supports text labels directly. Hence why it could not be used for the FilterImage and rather Pressable was used

### TextInput
The TextInput component allows users to enter text into the app. In this app, it is used for the search bar, enabling users to type in their queries.

### Stylesheet
The StyleSheet component is used to create and manage styles in React Native. It is sessentially the CSS of react-native. This component ensures that the styles are written in a JavaScript object format and can be easily reused and maintained.

### FlatList
The FlatList component is optimized for rendering large lists of data. It supports efficient scrolling and only renders the components that are visible on the screen. In this app, it is used to render the list of ongoing tasks as well as the categroies.

## Custom Made
### SquareContainer
The SquareContainer component is a custom component designed to display an image with a label smaller label under it. It is used to render items in the categories section, providing a square-shaped container for each category item.

### RectangularContainer
The RectangularContainer component is a custom component used to display items in a rectangular format. It renders a label on a background.