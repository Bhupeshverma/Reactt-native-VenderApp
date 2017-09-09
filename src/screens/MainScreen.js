import React, { Component } from 'react';
import {View, Text, AsyncStorage, StyleSheet, TextInput, Button, Alert, ScrollView, ActivityIndicator} from 'react-native';
import LoginScreen from './Auth/login'
import {SearchBar} from 'react-native-elements';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { BarCodeScanner, Permissions } from 'expo';
import data from '../../data'
import {Actions} from 'react-native-router-flux'
import { connect } from 'react-redux';
import { fetchProducts } from '../actions';
import {Link, Route, withRouter} from 'react-router-native'
class MainScreen extends Component {

  constructor(props){
    super(props);
    this.state={
      text: '',
      count: 0,
      hasCameraPermission: null
    }
  }
async componentDidMount(){

  const { status } = await Permissions.askAsync(Permissions.CAMERA);
  this.setState({hasCameraPermission: status === 'granted'});
  this.props.fetchProducts()
  console.log("hello")
}
  // async componentWillMount() {
  //
  //   const { status } = await Permissions.askAsync(Permissions.CAMERA);
  //   this.setState({hasCameraPermission: status === 'granted'});
  // }

  filterSearch(text){
    var count= this.state.count + 1;
    console.log(count)
    this.setState({
      text: text,
      count: count
    })
  }
  onPressHandle(){
    this.setState({
      text: ''
    })
  }
  handleOrder(){
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{flex: 1}}>
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={StyleSheet.absoluteFill}
          />
        </View>
      );
    }
  }
  _handleBarCodeRead = (data) => {
    var count= this.state.count + 1;
    console.log(count)
    this.setState({
      text: data.data,
      count: count
    })

  }

  handleProduct(){
    return this.props.products.missing_item.map((item)=>{
        return (
          <Card style={{flexDirection: 'column'}} key={item.product_id}>
            <Card style={{flexDirection: 'row', justifyContent: 'space-around', height: 200}}>
              <Card style={styles.CardContainer}>
                <CardImage source={{uri: 'http://placehold.it/480x270'}} />
              </Card>
              <Card style={styles.CardContainer}>
                <Card>
                  <CardContent text="Missing Count " />
                  <CardContent text= {item.total} />
                </Card>
                <Card>
                  <CardContent text="Scan count " />
                  <CardContent text= {this.state.count}/>
                </Card>

              </Card>


            </Card>

            <CardAction seperator={true} inColumn={false}>


              <CardButton
                onPress={()=>{
                  Actions.Details({id: item.product_id})
                }}
                  title="Click to view details"
                  color='blue'
                />

            </CardAction>


          </Card>
        )
    })
  }

  render() {

    return (

            <View style={styles.container}>
              <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <TextInput
                  style={{  width: 200, padding: 8}}
                  placeholderTextColor="#000"
                  placeholder="Search here ..."
                  onChangeText={(text) => this.filterSearch({text})}
                  value={this.state.text}
                />
                <Button
                  onPress={this.onPressHandle.bind(this)}
                  title="Clear"
                  color="#841584"
                  style={{width: 50, height: 10, padding: 8}}
                />
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-around', height: 200}}>


                {/* <CardImage source={{uri: 'http://placehold.it/480x270'}} />
                    </Card>
                    <Card style={styles.CardContainer}>
                    <Card>
                    <CardContent text="Total Missing Count " />
                    <CardContent text= "50"/>
                    </Card>
                    <Card>
                    <CardContent text="Scan count " />
                    <CardContent text= {this.state.count}/>
                </Card> */}

                {this.handleOrder()}

              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-around', height: 200}}>
                {this.props.spinner ? <ActivityIndicator size="large"/>:<View></View>}
                {this.props.error ? <Text style={styles.signupLinkText}> Couldn't fetch products  !</Text>: <View></View>}
                {this.props.products? <ScrollView >
                  {this.handleProduct()}
                </ScrollView> : <View></View>}


              </View>
            </View>
          )



}}

const mapStateToProps = ({ productReducer }) => {
  const {  spinner,products,error } = productReducer;

  return { spinner,products,error};
};

export default connect(mapStateToProps, {
 fetchProducts
})(MainScreen);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#f2f2f2'

  },
  CardContainer: {

    width: 150,
    height: 100,
    marginTop:10
  }

})
