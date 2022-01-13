import React, { Component } from 'react';
import {View, Text} from 'ract-native';
import {NavigationContainer} from '@react-navigation/native' ;
import {createNativeStackNavigator} from '@react-navigation/native-stack' ;
import HomeScreen from './Screen/HomeScreen';
import OrderScreen from './Screen/OrderScreen';
import DetailsScreen from './Screen/DetailsScreen';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const Stack = createNativeStackNavigator();

    return ( 
      <NavigationContainer >
        <Stack.Navigator  initialRouteName='Home'>
          <Stack.Screen name="Home" component = {HomeScreen}/>
          <Stack.Screen name="Order" component = {OrderScreen} options={{title:"Goods Order"}} />
          <Stack.Screen name="Details" component = {DetailsScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
     );
  }

}
 
export default App;