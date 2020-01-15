/* eslint-disable */
import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';
// import axios from 'axios';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state = { isLoading: true}
    this.axios = require('axios')
  }

//   componentDidMount(){
//     return fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((responseJson) => {
//         console.log(responseJson)
//         this.setState({
//           isLoading: false,
//           dataSource: responseJson,
//         }, function(){

//         });

//       })
//       .catch((error) =>{
//         console.error(error);
//       });
//   }

  componentDidMount() {
    this.axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        // handle success
        console.log(response);
        this.setState({
            isLoading: false,
            dataSource: response.data,
        });
    })
    .catch(error => {
        // handle error
        console.log(error);
    });
  }

  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
    renderItem={({item}) => <Text> nama : {item.name} alamat : {item.address.street} company : {item.company.name}</Text>}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}
