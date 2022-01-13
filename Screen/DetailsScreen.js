import React, { Component } from 'react';
import {View, Text, Button} from 'react-native' ;



class DetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
                <Text>  Details Screen</Text>
                <Button title='Go to Home' onPress={()=>this.props.navigation.popToTop()}/>
            </View>
         );
    }
}
 
export default DetailsScreen;