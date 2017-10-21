import React, { Component } from 'react';
import {View,StyleSheet,Text, Dimensions, ScrollView, ActivityIndicator} from 'react-native';
import {Button} from 'react-native-elements'
import { Card, CardContent, CardImage } from 'react-native-material-cards'
import { connect } from 'react-redux';
import { Sync, SavedProducts, ClearProducts} from '../actions';
import Shimmer from 'react-native-shimmer';

var { height, width } = Dimensions.get('window');
var box_count = 3;
var box_height = height / box_count;
class DetailScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[]
        }

    }
   componentDidMount(){
       console.log(this.props.data)
   }

  render(){
    return(
        <View style={styles.container}>

          <View style={[styles.box, styles.box2]}>

              {this.props.data.length == 0 ?

                    <Text style={{flex:1,
                    alignItems: 'center',
                  justifyContent: 'center',
                fontSize:20}}>The Tray is Empty !!</Text>

                :
                <ScrollView>
                {
                    this.props.data.map((items, index)=>{
                          return(
                            items.map((item, value)=>{
                              return(
                                <Card key={item.product_id} >
                                    <Card style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                                        <CardImage source={{uri: 'http://streetstylestore.com/img/p/7/5/9/4/0/75940.jpg'}} />
                                        <Card style={{flexDirection: 'column', justifyContent: 'space-around'}}>
                                            <CardContent text={item.product_id}/>
                                            <CardContent text={item.name}/>
                                            <CardContent text={item.total}/>
                                        </Card>

                                    </Card>
                                    <Card style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                                        <CardContent text="size_34"/>
                                        <CardContent text={item.size_34}/>

                                    </Card>
                                    <Card style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                                        <CardContent text="size_35"/>
                                        <CardContent text={item.size_35}/>
                                    </Card>
                                    <Card style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                                        <CardContent text="size_36"/>
                                        <CardContent text={item.size_36}/>
                                    </Card>
                                    <Card style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                                        <CardContent text="size_37"/>
                                        <CardContent text={item.size_37}/>
                                    </Card>
                                    <Card style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                                        <CardContent text="size_38"/>
                                        <CardContent text={item.size_38}/>
                                    </Card>
                                    <Card style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                                        <CardContent text="size_39"/>
                                        <CardContent text={item.size_39}/>
                                    </Card>

                                    <Card style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                                        <CardContent text="size_40"/>
                                        <CardContent text={item.size_40}/>
                                    </Card>
                                    <Card style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                                        <CardContent text="size_41"/>
                                        <CardContent text={item.size_41}/>
                                    </Card>
                                    <Card style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                                        <CardContent text="size_42"/>
                                        <CardContent text={item.size_42}/>
                                    </Card>

                                </Card>
                              )
                            })

                            )
                    })
                }
                </ScrollView>}
          </View>
          <View style={[styles.box, styles.box3]}>
            <Button
                icon={{name: 'sync', size: 32}}
                buttonStyle={{backgroundColor: '#ceaab2'}}
                textStyle={{textAlign: 'center'}}
                title={`SYNC`}
                onPress={()=>this.props.ClearProducts()}
            />
          </View>
        </View>
    )
  }
}
function  mapStateToProps(state){
    return {
        spinner: state.syncReducer.spinner,
        products: state.syncReducer.products,
        error: state.syncReducer.error,
        data: state.savedDataReducer
    }
}
export default connect(mapStateToProps,{Sync, SavedProducts, ClearProducts, ClearProducts})(DetailScreen);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    box: {
        height: box_height //set this one
    },
    //header

//content
    box2: {
        flex: 10,
        backgroundColor: '#f2fbfe'
    },
//footer
    box3: {
        flex: 1,
        backgroundColor: '#cebab2'
    }
});
