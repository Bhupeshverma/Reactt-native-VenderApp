import React, { Component } from 'react';
import {View, Text, AsyncStorage, StyleSheet, TextInput, Button, Alert, ScrollView} from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { BarCodeScanner, Permissions } from 'expo';
import { connect } from 'react-redux';

class DetailScreen extends Component {

  constructor(props){
    super(props);
    this.state={
      text: '',
      count: 0,
      hasCameraPermission: null
    }
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});
  }

  render(){
    const filterItem = this.props.products.missing_item.filter((item , index) => {
      if (item.product_id === this.props.id) {
        return item
      }
    })
    return(
      <View style={styles.container}>
        <Button

          title="Click to scan Product id"
          color="#841584"
        />
        <Card>

        </Card>
        <Text>{this.props.id}</Text>
        <Text>Size 34</Text>
        <Text>{filterItem[0].size_34}</Text>
        <Text>{filterItem[0].size_35}</Text>
        <Text>{filterItem[0].size_36}</Text>
        <Text>{filterItem[0].size_37}</Text>
        <Text>{filterItem[0].size_38}</Text>
        <Text>{filterItem[0].size_39}</Text>
        <Text>{filterItem[0].size_40}</Text>
        <Text>{filterItem[0].size_41}</Text>
        <Text>{filterItem[0].size_42}</Text>
      </View>
    )
  }
}
const mapStateToProps = ({ productReducer }) => {
  const {  products } = productReducer;

  return { products};
};

export default connect(mapStateToProps)(DetailScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#f2f2f2'

  },
})
