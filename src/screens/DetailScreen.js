import React, { Component } from 'react';
import {View,StyleSheet,Text, Dimensions, ScrollView, ActivityIndicator,ToastAndroid} from 'react-native';
import { connect } from 'react-redux';
import { Sync, SavedProducts, ClearProducts, SyncWithCrm} from '../actions';
import {SearchBar } from 'react-native-elements';
import { Card, CardContent, CardImage } from 'react-native-material-cards'
import {Actions} from 'react-native-router-flux'
import {  Image ,Button, Row ,Subtitle,Caption, Heading, Title} from '@shoutem/ui';
import { MaterialDialog } from 'react-native-material-dialog';

var { height, width } = Dimensions.get('window');
var box_count = 1;
var box_height = height / box_count;
class DetailScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            total_count:0,
            visible:true
        }

    }
   componentDidMount(){
     var dataArray, count=0;
       console.log("data",this.props.data)
       console.log("syncData", this.props.syncData);
       this.props.data.map((item,index)=>{
         return item.map((item,index)=>{
           return(
             item.map((item,index)=>{
               count+=item.total
             })
           )
         })
       })
       console.log(count);
       this.setState({total_count: count})
   }
   _handleSync(){
     var syncArray;
     var date =new Date()
     var dd = date.getDate();
     var mm = date.getMonth()+1; //January is 0!
     var yyyy = date.getFullYear();
     if(dd<10){
          dd='0'+dd;
      }
      if(mm<10){
          mm='0'+mm;
    }
     var today = yyyy+'-'+dd+'-'+mm
     console.log("today", today);
     this.props.syncData.map((item,index)=>{
       syncArray =item.map((item,index)=>{
         return(
           item.map((item,index)=>{
             return item
           })
         )
       })
     })
     console.log("syncArray",syncArray);
     this.props.Sync(syncArray,today, this.state.total_count)
     Actions.nextScreen()
}

  render(){
    return(
        <View style={styles.container}>

          <View style={[styles.box, styles.box1]}>

              {this.props.data.length == 0 ?
                <View style={{flex:1,
                  alignItems: 'center',
                  justifyContent: 'center'
                  }}>
                    <Text style={{fontSize:20, fontWeight: "bold", color: "#555"}}>
                      The Tray is Empty !!
                    </Text>
                  </View>
                :
                <ScrollView>
                  {
                    this.props.data.map((itemss, index)=>{

                          return  itemss.map((items, value)=>{

                              return items.map((item, index)=>{

                                  return(

                                    <View styleName="vertical" key={item.product_id}>
                                      <Row>
                                        {item.product_image === null ?
                                          <Image
                                           styleName="medium rounded-corners"
                                           source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-1.png'}}
                                         />:
                                         <Image
                                          styleName="medium rounded-corners"
                                          source={{ uri: item.product_image}}
                                        />}
                                        <View styleName="vertical stretch space-between">
                                          <Subtitle>{item.name}</Subtitle>
                                          <View style={{flexDirection: 'row' ,justifyContent: 'space-around'}}>
                                            <Subtitle>{item.product_id}</Subtitle>
                                            <Subtitle>{item.total}</Subtitle>
                                          </View>
                                        </View>
                                      </Row>
                                      <Row>
                                        <Title>SIZES</Title>
                                        <Title styleName="h-center">SCAN-COUNT</Title>
                                      </Row>
                                      <Row>
                                        <Subtitle>Size_34</Subtitle>
                                        <Subtitle styleName="h-center">{item.size_34}</Subtitle>

                                      </Row>
                                      <Row >
                                        <Subtitle>Size_35</Subtitle>
                                        <Subtitle styleName="h-center">{item.size_35}</Subtitle>

                                      </Row>
                                      <Row >
                                        <Subtitle>Size_36</Subtitle>
                                        <Subtitle styleName="h-center">{item.size_36}</Subtitle>

                                      </Row>
                                      <Row >
                                        <Subtitle>Size_37</Subtitle>
                                        <Subtitle styleName="h-center">{item.size_37}</Subtitle>

                                      </Row>
                                      <Row >
                                        <Subtitle>Size_38</Subtitle>
                                        <Subtitle styleName="h-center">{item.size_38}</Subtitle>

                                      </Row>
                                      <Row >
                                        <Subtitle>Size_39</Subtitle>
                                        <Subtitle styleName="h-center">{item.size_39}</Subtitle>

                                      </Row>
                                      <Row >
                                        <Subtitle>Size_40</Subtitle>
                                        <Subtitle styleName="h-center">{item.size_40}</Subtitle>

                                      </Row>
                                      <Row >
                                        <Subtitle>Size_41</Subtitle>
                                        <Subtitle styleName="h-center">{item.size_41}</Subtitle>

                                      </Row>
                                      <Row >
                                        <Subtitle>Size_42</Subtitle>
                                        <Subtitle styleName="h-center">{item.size_42}</Subtitle>

                                      </Row>
                                  </View>

                                )
                                })
                              })
                            })
                }
              </ScrollView>
            }


            {this.props.data.length != 0 ?
              <Button
                styleName="dark"
                 style={{backgroundColor: "#000", height: 40}}
                 onPress={()=>this._handleSync()}>
                <Text style={{color: '#fff', fontWeight: '400'}} >SYNC WITH CRM</Text>
              </Button>:null}
          </View>

        </View>
    )
  }
}
function  mapStateToProps(state){
    return {

        data: state.savedDataReducer,
        syncData: state.SaveSyncFormatReducer
    }
}
export default connect(mapStateToProps,{Sync, SavedProducts, ClearProducts, SyncWithCrm})(DetailScreen);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#eff6f7',

    },
    box: {
        height: box_height //set this one
    },
    //header
    box1: {
        flex: 12,
        backgroundColor: '#eff6f7',

    },
    spinner: {
      flex:1,
      alignItems: 'center',
    }
})
