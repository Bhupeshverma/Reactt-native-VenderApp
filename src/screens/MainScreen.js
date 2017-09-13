import React, { Component } from 'react'
import {View, Text, AsyncStorage, StyleSheet, TextInput, Alert, ScrollView, ActivityIndicator} from 'react-native';
import LoginScreen from './Auth/login'
import {SearchBar, Button} from 'react-native-elements';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { BarCodeScanner, Permissions } from 'expo';
import data from '../../data'
import {Actions} from 'react-native-router-flux'
import { connect } from 'react-redux';
import { fetchProducts,fetchData,  Startscan, recievedData } from '../actions';
import {Link, Route, withRouter} from 'react-router-native'
import FlipCard from 'react-native-flip-card'


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
  this.props.fetchData()
  console.log("hello")
}
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
      console.log(data.data)
      this.props.recievedData(data.data)
  }


  onPressScan(){
    this.props.Startscan()
  }
  handleProduct(){
    const {missing_item} =this.props.products
    const dataFilter = missing_item.filter((item)=>{
      if(this.props.dataWithBarcode == item.product_id){
        return item
      }
    })
    if(this.props.dataWithBarcode){
      return dataFilter.map((item, index)=>{
        return (
          <Card style={{flexDirection: 'column'}} key={item.product_id}>
            <Card style={{ justifyContent: 'space-around'}}>
              <Card style={styles.CardContainer}>
                <Card style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                  <CardContent text="Product ID"/>
                  <CardContent text={item.product_id}/>
                </Card>
                <Card style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                  <CardContent text="Missing Count " />
                  <CardContent text= {item.total} />
                </Card>
                <Card style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                  <CardContent text="Scan count " />
                  <CardContent text= {this.state.count}/>
                </Card>
              </Card>
            </Card>
            <CardAction seperator={true} inColumn={false}>
              <CardButton
                onPress={() => {Actions.Details({product: item})}}
                title="Click to view details"
                color='blue'
              />
            </CardAction>


          </Card>
        )
      })
    }
    return missing_item.map((item)=>{
       return (
         <Card style={{flexDirection: 'column'}} key={item.product_id}>
           <Card style={{justifyContent: 'space-around'}}>

             <Card style={styles.CardContainer}>
               <Card style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                 <CardContent text="Product ID"/>
                 <CardContent text={item.product_id}/>
               </Card>
               <Card style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                 <CardContent text="Missing Count " />
                 <CardContent text= {item.total} />
               </Card>
               <Card style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                 <CardContent text="Scan count " />
                 <CardContent text= {this.state.count}/>
               </Card>

             </Card>


           </Card>

           <CardAction seperator={true} inColumn={false}>


             <CardButton
               onPress={() => {Actions.Details({product: item})}}
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
              <View style={{height: 200}}>
                {this.props.barcodeState ? this.handleOrder()
                :
                <Button
                  onPress={this.onPressScan.bind(this)}
                  large
                  iconRight
                  icon={{name: 'code'}}
                title='Click To Scan' />}
              </View>
              <View style={{flexDirection: 'column'}}>
                {this.props.spinner ? <ActivityIndicator size="large"/>:<View></View>}
                {this.props.error ? <Text style={styles.signupLinkText}> Couldn't fetch products  !</Text>: <View></View>}
                {this.props.products?<ScrollView >
                  {this.handleProduct()}
                </ScrollView> : <View></View>}
              </View>
            </View>
          )
}}
function  mapStateToProps(state){
  return {
     spinner: state.productReducer.spinner,
     products: state.productReducer.products,
     error: state.productReducer.error,
     barcodeState: state.barcodeReducer.barcodeState,
     dataWithBarcode: state.barcodeReducer.dataWithBarcode
   }
}
export default connect(mapStateToProps, {
 fetchProducts, fetchData, Startscan, recievedData
})(MainScreen);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#f2f2f2'
  },
  CardContainer: {

    marginTop:10
  },
})
