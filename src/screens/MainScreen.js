import React, { Component } from 'react'
import {View, Text,StyleSheet, BackHandler, Alert, ScrollView, ActivityIndicator, Dimensions,ListView, AsyncStorage} from 'react-native';
import {SearchBar, Button} from 'react-native-elements';
import { Card, CardContent, CardImage } from 'react-native-material-cards'
import { connect } from 'react-redux';
import {Actions} from 'react-native-router-flux';
import { fetchProducts,fetchData, batchDone, recievedData ,logIn, SavedProducts} from '../actions';
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';

var { height, width } = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;

class MainScreen extends Component {
  constructor(props){
    super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state={
        text: '',
        count: 0,
        newdata:[],
        scanText:'',
        search : 1,
        completedTask:[]


    }
      this.handleOrder = this.handleOrder.bind(this)
      this.updateItem = this.updateItem.bind(this)
  }
componentDidMount(){
    if(!this.props.products){
        this.props.fetchData()
        this.props.fetchProducts()
    }
}
    filterSearch(text) {
        this.setState({text})
        console.log(this.state.text)
        let data =  this.dataFilter(text, this.props.products.missing_item)
        console.log(data)
        this.setState({newdata:data});
        {data.length == 0 ? this.setState({search:1}): this.setState({search:0}) }

    }


    dataFilter(text, data){
        return data.filter(function(item){
            const itemData = item.product_id
            const textData = text
            if( itemData == textData){
                return item
            }

        })
    }
    updateScanText(scanText){
        this.setState({scanText})
        console.log(scanText)
        console.log(this.state.scanText)
        var formattedSize = scanText.slice(0,2);
        console.log(formattedSize)
         return this.state.newdata.forEach((item, index)=>{

             //size 34
             if(formattedSize === '34' && item.size_34!=0){
                 item.size_34-=1
                 item.total-=1
             }
             if (formattedSize === '34' && item.size_34 == 0) {
                 Alert.alert(
                     'No more Item to Scan of Size 34'
                 )
             }
             //size 35
             if(formattedSize === '35' && item.size_35!=0){
                  item.size_35-=1
                 item.total-=1
             }
             if (formattedSize === '35' && item.size_35 == 0) {
                 Alert.alert(
                     'No more Item to Scan of Size 35'
                 )
             }
             //size 36
             if(formattedSize === '36' && item.size_36!=0){
                  item.size_36-=1
                 item.total-=1
             }
             if (formattedSize === '36' && item.size_36 == 0) {
                 Alert.alert(
                     'No more Item to Scan of Size 36'
                 )
             }
             //size 37
             if(formattedSize === '37' && item.size_37!=0){
                  item.size_37-=1
                 item.total-=1
             }
             if (formattedSize === '37' && item.size_37 == 0) {
                 Alert.alert(
                     'No more Item to Scan of Size 37'
                 )
             }
            //size 38
             if(formattedSize === '38' && item.size_38!=0){
                  item.size_38-=1
                 item.total-=1
             }
             if (formattedSize === '38' && item.size_38 == 0) {
                 Alert.alert(
                     'No more Item to Scan of Size 38'
                 )
             }
            //size 39
            if(formattedSize === '39' && item.size_39!=0){
                item.size_39-=1
                item.total-=1
            }
             if (formattedSize === '39' && item.size_39 == 0) {
                 Alert.alert(
                     'No more Item to Scan of Size 39'
                 )
             }
             //size 40
             if(formattedSize === '40' && item.size_40!=0){
                 item.size_40-=1
                 item.total-=1
             }
             if (formattedSize === '40' && item.size_40 ==0) {
                 Alert.alert(
                     'No more Item to Scan of Size 40'
                 )
             }
             //size 41
             if(formattedSize === '41' && item.size_41!=0){
                  item.size_41-=1
                 item.total-=1
             }
             if (formattedSize === '41' && item.size_41 ==0) {
                 Alert.alert(
                     'No more Item to Scan of Size 41'
                 )
             }
             //size 42
             if(formattedSize === '42' && item.size_42!=0){
                 item.size_42-=1
                 item.total-=1
             }
             if (formattedSize === '42' && item.size_42 ==0) {
                 Alert.alert(
                     'No more Item to Scan of Size 42'
                 )
             }
        })
    }
    updateItem(){
        this.state.completedTask.push(this.state.newdata[0])
         console.log(this.state.completedTask)
         this.setState({search: 1, text:''})
         this.filterSearch('')
         this.props.SavedProducts(this.state.completedTask)
    }
    handleOrder(){

        return this.state.newdata.map((item,index)=>{
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
                    <Card style={{flexDirection: 'row'}}>

                        <Button
                            raised
                            icon={{name: 'send', size: 16}}
                            buttonStyle={{backgroundColor: '#00d3bd', width: width}}
                            textStyle={{textAlign: 'center'}}
                            title={`Done`}
                            onPress={()=>this.updateItem()}

                        />
                    </Card>
                </Card>
            )
        })
    }


  render() {

    return (
        <View style={styles.container}>
            <View style={[styles.box, styles.box1]}>
                {this.state.search == 1?<SearchBar
                    containerStyle={{width: width-100}}
                    onChangeText={(text) =>this.filterSearch(text)}
                    placeholder='Type Here...'
                    autoFocus={true}
                    value={this.state.text} />

                    :
                    <SearchBar
                        lightTheme
                        containerStyle={{width: width-100}}
                        onChange={()=>this.setState({scanText: ''})}
                        onChangeText={(scanText) =>this.updateScanText(scanText)}
                        placeholder='Type Here...'
                        autoFocus={true}
                        onBlur={()=>this.setState({scanText: ''})}
                        value={this.state.scanText} />

                }
                {this.state.search == 1?<Button
                    large
                    buttonStyle={{backgroundColor: '#00d3bd',width: 100}}
                    textStyle={{textAlign: 'center'}}
                    title={`Clear`}
                    onPress={()=>this.setState({text:''})}
                />:
                    <Button
                        large
                        buttonStyle={{backgroundColor: '#00d3bd',width: 100}}
                        textStyle={{textAlign: 'center'}}
                        title={`Back`}
                        onPress={()=>this.setState({search:1})}
                    />
                }

            </View>
            <View style={[styles.box, styles.box2]}>
                {this.props.spinner ? <View style={styles.spinner}><DoubleBounce size={30} color="#1CAFF6" /></View>:<View></View>}
                {this.props.error ? <Text> Could not fetch products  !</Text>: <View></View>}
                {this.props.products?<ScrollView>{this.handleOrder()}</ScrollView>: <View></View>}
            </View>
            <View style={[styles.box, styles.box3]}>
                <Button

                    icon={{name: 'sync', size: 32}}
                    buttonStyle={{backgroundColor: '#ceaab2'}}
                    textStyle={{textAlign: 'center'}}
                    title={`SYNC WITH CRM`}
                    onPress={()=>Actions.Details()}
                />
            </View>

        </View>
    )
}}
function  mapStateToProps(state){
  return {
     spinner: state.productReducer.spinner,
     products: state.productReducer.products,
     error: state.productReducer.error,
   }
}
export default connect(mapStateToProps, {
 fetchProducts, fetchData, batchDone, logIn, SavedProducts
})(MainScreen);
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
    box1: {
        flex: 1,
        backgroundColor: '#eff6f7',
        flexDirection: 'row'
    },
//content
    box2: {
        flex: 10,
        backgroundColor: '#f2fbfe'
    },
    //footer
    box3: {
        flex: 1,
        width:width,
        backgroundColor: '#cebab2'
    },
    spinner: {
      flex:1,
      alignItems: 'center',
    justifyContent: 'center',
    }
})
