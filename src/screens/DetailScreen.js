import React, { Component } from 'react';
import {View, Text, AsyncStorage, StyleSheet, TextInput, Button, Alert, ScrollView} from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { BarCodeScanner, Permissions } from 'expo';
import { connect } from 'react-redux';
import { DetailStartscan, detailrecievedData, decreaseCount, alertGeneralCase, alertGeneralCaseClose, alertNoMoreProducts, alertNoMoreProductsClose, alertTwinCase, alertTwinCaseClose  } from '../actions';

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
  onPressHandle(){

  }
  onPressScan(){
    this.props.DetailStartscan()
  }

  handleOrder(){
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{flex: 0.4}}>
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={StyleSheet.absoluteFill}
          />
        </View>
      );
    }
  }
  handleSuccessCase(){
  return  (
    this.props.alertGeneralCase ? (
      Alert.alert(
        'Scan Complete click To Scan Another product!!',
        'hello',
        [
          {text: 'OK', onPress: () => this.props.alertGeneralCaseClose()},
        ]
      )
    )
    :
    <View></View>
  )
  }

   handleTwinCase(){
      if(this.props.alertGeneralCase === true){
        this.props.alertGeneralCaseClose();
      }
      else{
        return(
         Alert.alert(
                'same scan case',
                'hello',
                [
                  {text: 'OK', onPress: () => this.props.alertTwinCaseClose()},
                ]
              )
            )
      }
    }


  handleNoProductsReq(){
  if(this.props.alertGeneralCase === true){
    this.props.alertGeneralCaseClose();
  }
  else{
    return (
      Alert.alert(
            'No more products required',
            'hello',
            [
              {text: 'OK', onPress: () => this.props.alertNoMoreProductsClose()},
            ]
          )
        )
  }
}
  _handleBarCodeRead = (data) => {
    this.props.alertGeneralCase();
    this.props.decreaseCount(data.data)
    this.props.alertTwinCase ? this.handleTwinCase() : <View></View>
    this.props.alertNoMoreProducts ? this.handleNoProductsReq() : <View></View>
    this.handleSuccessCase();
  }


  render(){
    return(
      <View style={styles.container}>

        {this.props.barcodeState ? this.handleOrder() :
        <Button
          onPress={this.onPressScan.bind(this)}
          large
          iconRight
          icon={{name: 'code'}}
        title='Click To Scan' />}

        <Card style={{flexDirection: 'row', justifyContent: 'space-around', flex: .3}}>
          <CardImage source={{uri: 'http://placehold.it/480x270'}} />
          <Card style={{flexDirection: 'column', justifyContent: 'space-around'}}>
            <CardContent text={this.props.product.product_id}/>
            <CardContent text={this.props.product.name}/>
            <CardContent text={this.props.product.total}/>
          </Card>
        </Card>
        <ScrollView style={{flex: 0.5}}>
          <Card style={{flexDirection: 'row', justifyContent: 'space-around', flex: .1}}>
            <CardContent text="size_34"/>
            <CardContent text={this.props.product.size_34}/>
            {this.props.product.size_34 == 0 ? <Button
              onPress={this.onPressHandle.bind(this)}
              disabled={true}
              title="Clear"
              color="#841584"
              style={{width: 50, height: 10, padding: 8}}
                                               /> :
                                               <Button
                                                 onPress={this.onPressHandle.bind(this)}
                                                 title="Clear"
                                                 color="#841584"
                                                 style={{width: 50, height: 10, padding: 8}}
                                               />}
          </Card>
          <Card style={{flexDirection: 'row', justifyContent: 'space-around', flex: .1}}>
            <CardContent text="size_35"/>
            <CardContent text={this.props.product.size_35}/>
            {this.props.product.size_35 == 0 ? <Button
              onPress={this.onPressHandle.bind(this)}
              disabled={true}
              title="Clear"
              color="#841584"
              style={{width: 50, height: 10, padding: 8}}
                                               /> :
                                               <Button
                                                 onPress={this.onPressHandle.bind(this)}
                                                 title="Clear"
                                                 color="#841584"
                                                 style={{width: 50, height: 10, padding: 8}}
                                               />}

          </Card>
          <Card style={{flexDirection: 'row', justifyContent: 'space-around', flex: .1}}>
            <CardContent text="size_36"/>
            <CardContent text={this.props.product.size_36}/>
            {this.props.product.size_36 == 0 ? <Button
              onPress={this.onPressHandle.bind(this)}
              disabled={true}
              title="Clear"
              color="#841584"
              style={{width: 50, height: 10, padding: 8}}
                                               /> :
                                               <Button
                                                 onPress={this.onPressHandle.bind(this)}
                                                 title="Clear"
                                                 color="#841584"
                                                 style={{width: 50, height: 10, padding: 8}}
                                               />}
          </Card>
          <Card style={{flexDirection: 'row', justifyContent: 'space-around', flex: .1}}>
            <CardContent text="size_37"/>
            <CardContent text={this.props.product.size_37}/>
            {this.props.product.size_37 == 0 ? <Button
              onPress={this.onPressHandle.bind(this)}
              disabled={true}
              title="Clear"
              color="#841584"
              style={{width: 50, height: 10, padding: 8}}
                                               /> :
                                               <Button
                                                 onPress={this.onPressHandle.bind(this)}
                                                 title="Clear"
                                                 color="#841584"
                                                 style={{width: 50, height: 10, padding: 8}}
                                               />}
          </Card>
          <Card style={{flexDirection: 'row', justifyContent: 'space-around', flex: .1}}>
            <CardContent text="size_38"/>
            <CardContent text={this.props.product.size_38}/>
            {this.props.product.size_38 == 0 ? <Button
              onPress={this.onPressHandle.bind(this)}
              disabled={true}
              title="Clear"
              color="#841584"
              style={{width: 50, height: 10, padding: 8}}
                                               /> :
                                               <Button
                                                 onPress={this.onPressHandle.bind(this)}
                                                 title="Clear"
                                                 color="#841584"
                                                 style={{width: 50, height: 10, padding: 8}}
                                               />}
          </Card>
          <Card style={{flexDirection: 'row', justifyContent: 'space-around', flex: .1}}>
            <CardContent text="size_39"/>
            <CardContent text={this.props.product.size_39}/>
            {this.props.product.size_39 == 0 ? <Button
              onPress={this.onPressHandle.bind(this)}
              disabled={true}
              title="Clear"
              color="#841584"
              style={{width: 50, height: 10, padding: 8}}
                                               /> :
                                               <Button
                                                 onPress={this.onPressHandle.bind(this)}
                                                 title="Clear"
                                                 color="#841584"
                                                 style={{width: 50, height: 10, padding: 8}}
                                               />}
          </Card>
          <Card style={{flexDirection: 'row', justifyContent: 'space-around', flex: .1}}>
            <CardContent text="size_40"/>
            <CardContent text={this.props.product.size_40}/>
            {this.props.product.size_40 == 0 ? <Button
              onPress={this.onPressHandle.bind(this)}
              disabled={true}
              title="Clear"
              color="#841584"
              style={{width: 50, height: 10, padding: 8}}
                                               /> :
                                               <Button
                                                 onPress={this.onPressHandle.bind(this)}
                                                 title="Clear"
                                                 color="#841584"
                                                 style={{width: 50, height: 10, padding: 8}}
                                               />}
          </Card>
          <Card style={{flexDirection: 'row', justifyContent: 'space-around', flex: .1}}>
            <CardContent text="size_41"/>
            <CardContent text={this.props.product.size_41}/>
            {this.props.product.size_41 == 0 ? <Button
              onPress={this.onPressHandle.bind(this)}
              disabled={true}
              title="Clear"
              color="#841584"
              style={{width: 50, height: 10, padding: 8}}
                                               /> :
                                               <Button
                                                 onPress={this.onPressHandle.bind(this)}
                                                 title="Clear"
                                                 color="#841584"
                                                 style={{width: 50, height: 10, padding: 8}}
                                               />}
          </Card>
          <Card style={{flexDirection: 'row', justifyContent: 'space-around', flex: .1}}>
            <CardContent text="size_42"/>
            <CardContent text={this.props.product.size_42}/>
            {this.props.product.size_42 == 0 ? <Button
              onPress={this.onPressHandle.bind(this)}
              disabled={true}
              title="Clear"
              color="#841584"
              style={{width: 50, height: 10, padding: 8}}
                                               /> :
                                               <Button
                                                 onPress={this.onPressHandle.bind(this)}
                                                 title="Clear"
                                                 color="#841584"
                                                 style={{width: 50, height: 10, padding: 8}}
                                               />}
          </Card>
        </ScrollView>
      </View>
    )
  }
}
function mapStateToProps(state){

  return {
    barcodeState: state.detailbarcodeReducer.barcodeState,
    dataWithBarcode: state.detailbarcodeReducer.dataWithBarcode,
    alertGeneralCase: state.productReducer.alertGeneralCase,
    alertTwinCase: state.productReducer.alertTwinCase,
    alertNoMoreProducts: state.productReducer.alertNoMoreProducts
  };
};

export default connect(mapStateToProps, {DetailStartscan, detailrecievedData, decreaseCount, alertGeneralCase, alertGeneralCaseClose, alertNoMoreProducts, alertNoMoreProductsClose, alertTwinCase, alertTwinCaseClose})(DetailScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#f2f2f2'

  },
})
