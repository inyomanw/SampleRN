/* eslint-disable */
import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import { ListItem, Icon } from 'react-native-elements'
import { connect } from 'react-redux';
import { deleteFood } from '../redux/actions/food';

class FoodList extends Component {

  static navigationOptions = {
    title: 'Food List',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#845cc3',
    },
  };

  deleteItem = data=>{
    Alert.alert(
        'Delete Item',
        `Are you sure to delete this Item ${data.item.name}?`,
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => this.props.delete(data.item.key)},
        ],
        {cancelable: true},
      );
}

  render() {
    return (
        <View>
            <FlatList style={styles.listContainer}
            data={this.props.foods}
            keyExtractor={(item, index) => item.key.toString()}
            renderItem={
            (data) =>
                <ListItem
                title={data.item.name}
                bottomDivider
                rightIcon={<Icon
                    name='delete'
                    size={36}
                    onPress={() => this.deleteItem(data)}
                    // onPress={() => this.props.delete(data.item.key)} 
                    />
                }
                />
            }
            />
            <TouchableOpacity style={{backgroundColor:'#61A756', marginTop:11, padding:12, borderRadius:4}}
                            onPress={() => this.props.navigation.navigate('FoodForm')}>
                <Text style={{fontSize:13, color:'white', textAlign:'center'}}>Add</Text>
            </TouchableOpacity>
        </View>
    );
  }
};

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#dce2ff',
    padding: 16
  },
  listText: {
    fontSize: 30
  },
});

const mapStateToProps = (state) => {
  console.log(state);
  return {
    foods: state.foodReducer.foodList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (key) => dispatch(deleteFood(key))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FoodList);