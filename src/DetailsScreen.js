import * as React from 'react';
import { Button, View, Text,TouchableOpacity } from 'react-native';
import RNButton from './RNButton';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

export default class DetailsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
            <Button
            title="Go to Details... again"
            onPress={() => this.props.navigation.navigate('Details')}
          />
            <Button
            title="Go to RN Button"
            onPress={() => this.props.navigation.navigate('RnButton')}
          />
           <TouchableOpacity
          style={{marginTop:20,height:30,width:100,backgroundColor:'red',justifyContent:'center'}}
          onPress={() => this.props.navigation.navigate('Home')}
          >
            <Text style={{alignSelf:'center'}}>Go Home</Text>
          </TouchableOpacity>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        /> 
        </View>
      );
    }
  }