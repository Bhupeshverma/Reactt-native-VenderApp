import React, { Component } from 'react'
import {View, Text,StyleSheet,Keyboard, BackHandler, Alert, ScrollView, ActivityIndicator,
   Dimensions,ListView, AsyncStorage, StatusBar, TouchableOpacity} from 'react-native';
import {SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';
import {Actions} from 'react-native-router-flux';
import { Font } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import { fetchProducts,fetchData, batchDone, recievedData ,logIn, SavedProducts, SyncWithCrm} from '../actions';
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';
import {  Image ,Button, Row ,Subtitle,Caption, Heading, Title} from '@shoutem/ui';

var { height, width } = Dimensions.get('window');

var box_count = 1;
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
        completedTask:[],
        size_34_c: 0,
        size_35_c: 0,
        size_36_c: 0,
        size_37_c: 0,
        size_38_c: 0,
        size_39_c: 0,
        size_40_c: 0,
        size_41_c: 0,
        size_42_c: 0,
        name_value_list:[],
        barcodeArray: [],
        barcodeText:'',
        fontLoaded: false,
        loading: false,
        focus: true
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
        console.log("filteredData", data)
        this.setState({newdata:data});
        this.setState({barcodeText: text})
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
        var formattedSize =scanText.substr(0,2);

         return this.state.newdata.forEach((item, index)=>{

             //size 34
             if(formattedSize === '34' && item.size_34!=0){
                 item.size_34-=1
                 item.total-=1
                 this.setState({
                   size_34_c: this.state.size_34_c + 1
                 })
                 this.state.barcodeArray.push(scanText)
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
                 this.setState({
                   size_35_c: this.state.size_35_c + 1
                 })
                 this.state.barcodeArray.push(scanText)
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
                 this.setState({
                   size_36_c: this.state.size_36_c + 1
                 })
                 this.state.barcodeArray.push(scanText)
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
                 this.setState({
                   size_37_c: this.state.size_37_c + 1
                 })
                 this.state.barcodeArray.push(scanText)
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
                 this.setState({
                   size_38_c: this.state.size_38_c + 1
                 })
                 this.state.barcodeArray.push(scanText)
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
                this.setState({
                  size_39_c: this.state.size_39_c + 1
                })
                this.state.barcodeArray.push(scanText)
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
                 this.setState({
                   size_40_c: this.state.size_40_c + 1
                 })
                 this.state.barcodeArray.push(scanText)
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
                 this.setState({
                   size_41_c: this.state.size_41_c + 1
                 })
                 this.state.barcodeArray.push(scanText)
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
                 this.setState({
                   size_42_c: this.state.size_42_c + 1
                 })
                 this.state.barcodeArray.push(scanText)
             }
             if (formattedSize === '42' && item.size_42 ==0) {
                 Alert.alert(
                     'No more Item to Scan of Size 42'
                 )
             }
        })
    }
    updateItem(){
      var dataArray, savedArray;
      var total = this.state.size_34_c+this.state.size_35_c+this.state.size_36_c+this.state.size_37_c+this.state.size_38_c
      +this.state.size_39_c+this.state.size_40_c+this.state.size_41_c+this.state.size_42_c
      console.log("total_scan_count",total)
      this.state.newdata.map((item,index)=>{
         dataArray = [
          {
            "name": item.name,
            "product_id": item.product_id,
            "product_image": item.product_image,
            "size_34": this.state.size_34_c,
            "size_35": this.state.size_35_c,
            "size_36": this.state.size_36_c,
            "size_37": this.state.size_37_c,
            "size_38": this.state.size_38_c,
            "size_39": this.state.size_39_c,
            "size_40": this.state.size_40_c,
            "size_41": this.state.size_41_c,
            "size_42": this.state.size_42_c,
            "total": total,
          }
        ]

      })

      dataArray.map((item ,index)=>{
        savedArray = [
              {
                  "name": "id_product",
                  "value": item.product_id
              },
              {
                  "name": "name",
                  "value": item.name
              },
              {
                  "name": "size_34",
                  "value": String(this.state.size_34_c)
              },
              {
                  "name": "size_35_c",
                  "value": String(this.state.size_35_c)
              },
              {
                  "name": "size_36_c",
                  "value": String(this.state.size_36_c)
              },
              {
                  "name": "size_37_c",
                  "value": String(this.state.size_37_c)
              },
              {
                  "name": "size_38_c",
                  "value": String(this.state.size_38_c)
              },
              {
                  "name": "size_39_c",
                  "value": String(this.state.size_39_c)
              },
              {
                  "name": "size_40_c",
                  "value": String(this.state.size_40_c)
              },
              {
                  "name": "size_41_c",
                  "value": String(this.state.size_41_c)
              },
              {
                  "name": "size_42_c",
                  "value": String(this.state.size_42_c)
              },
              {
                  "name": "total_shoes_c",
                  "value": String(total)
              }
        ]
      })

      this.state.completedTask.push(dataArray)
      this.state.name_value_list.push(savedArray)
      console.log(savedArray);
      console.log(this.state.completedTask)
      console.log(this.state.name_value_list);
      console.log(this.state.barcodeArray);
      this.setState({search: 1, text:''})
      this.filterSearch('')
      this.props.SavedProducts(this.state.completedTask)
      this.props.SyncWithCrm(this.state.name_value_list)
      this.setState({
        size_34_c:0,
        size_35_c:0,
        size_36_c:0,
        size_37_c:0,
        size_38_c:0,
        size_39_c:0,
        size_40_c:0,
        size_41_c:0,
        size_42_c:0,
        loading: false
      })
}

handle34Minus(total){

  if(this.state.size_34_c === 0){
    Alert.alert('Scan count is already 0')
  }else{
    this.setState({
      size_34_c: this.state.size_34_c - 1
    })
    this.state.newdata.map((item,index)=>{
          item.size_34+=1
          item.total+=1
    })
  }
}
handle35Minus(){
  if(this.state.size_35_c === 0){
    Alert.alert('Scan count is already 0')
  }else{
    this.setState({
      size_35_c: this.state.size_35_c - 1
    })
    this.state.newdata.map((item,index)=>{
          item.size_35+=1
          item.total+=1
    })
  }
}
handle36Minus(){
  if(this.state.size_36_c === 0){
    Alert.alert('Scan count is already 0')
  }else{
    this.setState({
      size_34_c: this.state.size_36_c - 1

    })
    this.state.newdata.map((item,index)=>{
          item.size_36+=1
          item.total+=1
    })
  }
}
handle37Minus(){
  if(this.state.size_37_c === 0){
    Alert.alert('Scan count is already 0')
  }else{
    this.setState({
      size_34_c: this.state.size_37_c - 1
    })
    this.state.newdata.map((item,index)=>{
          item.size_37+=1
          item.total+=1
    })
  }
}
handle38Minus(){
  if(this.state.size_38_c === 0){
    Alert.alert('Scan count is already 0')
  }else{
    this.setState({
      size_38_c: this.state.size_38_c - 1
    })
    this.state.newdata.map((item,index)=>{
          item.size_38+=1
          item.total+=1
    })
  }
}
handle39Minus(){
  if(this.state.size_39_c === 0){
    Alert.alert('Scan count is already 0')
  }else{
    this.setState({
      size_39_c: this.state.size_39_c - 1
    })
    this.state.newdata.map((item,index)=>{
          item.size_39+=1
          item.total+=1
    })
  }
}
handle40Minus(){
  if(this.state.size_40_c === 0){
    Alert.alert('Scan count is already 0')
  }else{
    this.setState({
      size_40_c: this.state.size_40_c - 1
    })
    this.state.newdata.map((item,index)=>{
          item.size_40+=1
          item.total+=1
    })
  }
}
handle41Minus(){
  if(this.state.size_41_c === 0){
    Alert.alert('Scan count is already 0')
  }else{
    this.setState({
      size_41_c: this.state.size_41_c - 1
    })
    this.state.newdata.map((item,index)=>{
          item.size_41+=1
          item.total+=1
    })
  }
}
handle42Minus(){
  if(this.state.size_42_c === 0){
    Alert.alert('Scan count is already 0')
  }else{
    this.setState({
      size_34_c: this.state.size_42_c - 1
    })
    this.state.newdata.map((item,index)=>{
          item.size_42+=1
          item.total+=1
    })
  }
}
    handleOrder(){

        return this.state.newdata.map((item,index)=>{
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
                   <Title styleName="h-center">M-COUNT</Title>
                   <Title styleName="h-center">SCAN-COUNT</Title>
                 </Row>
                 <Row>
                   <Subtitle>Size_34</Subtitle>
                   <Subtitle styleName="h-center">{item.size_34}</Subtitle>
                   <Subtitle styleName="h-center">{this.state.size_34_c}</Subtitle>
                   <Icon.Button name="minus" backgroundColor="#fff" color ="#000" onPress={()=>this.handle34Minus()}>
                   </Icon.Button>
                 </Row>
                 <Row >
                   <Subtitle>Size_35</Subtitle>
                   <Subtitle styleName="h-center">{item.size_35}</Subtitle>
                   <Subtitle styleName="h-center">{this.state.size_35_c}</Subtitle>
                   <Icon.Button name="minus" backgroundColor="#fff" color ="#000" onPress={()=>this.handle35Minus()}>
                   </Icon.Button>
                 </Row>
                 <Row >
                   <Subtitle>Size_36</Subtitle>
                   <Subtitle styleName="h-center">{item.size_36}</Subtitle>
                   <Subtitle styleName="h-center">{this.state.size_36_c}</Subtitle>
                   <Icon.Button name="minus" backgroundColor="#fff" color ="#000" onPress={()=>this.handle36Minus()}>
                   </Icon.Button>
                 </Row>
                 <Row >
                   <Subtitle>Size_37</Subtitle>
                   <Subtitle styleName="h-center">{item.size_37}</Subtitle>
                   <Subtitle styleName="h-center">{this.state.size_37_c}</Subtitle>
                   <Icon.Button name="minus" backgroundColor="#fff" color ="#000" onPress={()=>this.handle37Minus()}>
                   </Icon.Button>
                 </Row>
                 <Row >
                   <Subtitle>Size_38</Subtitle>
                   <Subtitle styleName="h-center">{item.size_38}</Subtitle>
                   <Subtitle styleName="h-center">{this.state.size_38_c}</Subtitle>
                   <Icon.Button name="minus" backgroundColor="#fff" color ="#000" onPress={()=>this.handle38Minus()}>
                   </Icon.Button>
                 </Row>
                 <Row >
                   <Subtitle>Size_39</Subtitle>
                   <Subtitle styleName="h-center">{item.size_39}</Subtitle>
                   <Subtitle styleName="h-center">{this.state.size_39_c}</Subtitle>
                   <Icon.Button name="minus" backgroundColor="#fff" color ="#000" onPress={()=>this.handle39Minus()}>
                   </Icon.Button>
                 </Row>
                 <Row >
                   <Subtitle>Size_40</Subtitle>
                   <Subtitle styleName="h-center">{item.size_40}</Subtitle>
                   <Subtitle styleName="h-center">{this.state.size_40_c}</Subtitle>
                   <Icon.Button name="minus" backgroundColor="#fff" color ="#000" onPress={()=>this.handle40Minus()}>
                   </Icon.Button>
                 </Row>
                 <Row >
                   <Subtitle>Size_41</Subtitle>
                   <Subtitle styleName="h-center">{item.size_41}</Subtitle>
                   <Subtitle styleName="h-center">{this.state.size_41_c}</Subtitle>
                   <Icon.Button name="minus" backgroundColor="#fff" color ="#000" onPress={()=>this.handle41Minus()}>
                   </Icon.Button>
                 </Row>
                 <Row >
                   <Subtitle>Size_42</Subtitle>
                   <Subtitle styleName="h-center">{item.size_42}</Subtitle>
                   <Subtitle styleName="h-center">{this.state.size_42_c}</Subtitle>
                   <Icon.Button name="minus" backgroundColor="#fff" color ="#000" onPress={()=>this.handle42Minus()}>
                   </Icon.Button>
                 </Row>
                 {/* <Button
                   styleName="dark"
                    style={{backgroundColor: "#000", height: 30}}
                    onPress={()=>this.updateItem()}>
                   <Text style={{color: '#fff', fontWeight: '400'}} >DONE</Text>
                 </Button> */}

             </View>

             )

       })
      }


handleFocus(){
  console.log("inside");
  this.setState({loading: true})
  //this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
}
handleClearText(){
  this.setState({focus: true})

}
_keyboardDidShow(){

}

handleBackButton(){
  this.setState({
    search:1,
  })
}
handleBlur(){
  this.setState({scanText: ''})
  this.search.focus();
}
  render() {

    return (
        <View style={styles.container}>
          <View style={{flexDirection:'row', backgroundColor: '#fff'}}>
          {this.state.search == 1?

          <SearchBar
            lightTheme
            // onChange={()=>this.setState({scanText: ''})}
            onChangeText={(text) =>this.filterSearch(text)}
            placeholder='Search Product ID Here...'
            onFocus={()=>this.handleFocus()}
            keyboardType='numeric'
            autoFocus={true}
            value={this.state.text}
            showLoadingIcon={this.state.loading}
            containerStyle={{backgroundColor: "#db993d", width: width-100}}
            inputStyle={{backgroundColor:"#fff"}}
          />:
          <SearchBar
            lightTheme
            // onChange={()=>this.setState({scanText: ''})}
            ref={search => this.search = search}
            onChangeText={(scanText) =>this.updateScanText(scanText)}
            placeholder='Search Here...'
            autoFocus={true}
            onBlur={()=>this.handleBlur()}
            value={this.state.scanText}
            onClearText={()=>this.handleClearText()}
            //onSubmit={()=>this.handleSubmit()}
            containerStyle={{backgroundColor: "#db993d", width: width-100}}
            inputStyle={{backgroundColor:"#fff"}}
          />
        }
          {this.state.search == 1?

            <Button styleName="full-width"
              onPress={()=>this.setState({text:''})} >
              <Text>CLEAR</Text>
            </Button>:
            <View style={{flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'space-around'}}>
              <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff'}}>
              <Icon.Button name="backward" backgroundColor="#fff" color ="#000" borderRadius={0} onPress={()=>this.setState({
              size_34_c:0,
              size_35_c:0,
              size_36_c:0,
              size_37_c:0,
              size_38_c:0,
              size_39_c:0,
              size_40_c:0,
              size_41_c:0,
              size_42_c:0,
              search: 1})} >
              </Icon.Button>
              </View>
            {/* <Button
              onPress={()=>this.setState({
              size_34_c:0,
              size_35_c:0,
              size_36_c:0,
              size_37_c:0,
              size_38_c:0,
              size_39_c:0,
              size_40_c:0,
              size_41_c:0,
              size_42_c:0,
              search: 1})} >
              <Text>BACK</Text>
            </Button> */}
            <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff'}}>
            <Icon.Button name="send" backgroundColor="#fff" color ="#000" borderRadius={0} onPress={()=>this.updateItem()}>
            </Icon.Button>
            </View>
            </View>
                }
            </View>
            <View style={[styles.box, styles.box1]}>
              {this.props.spinner ? <View style={styles.spinner}><DoubleBounce size={30} color="#1CAFF6" /></View>:<View></View>}
              {this.props.error ? <Text> Could not fetch products  !</Text>: <View></View>}
              {this.props.products?<ScrollView>{this.handleOrder()}</ScrollView>: <View></View>}

            </View>
        </View>
    )
}}
function  mapStateToProps(state){
  return {
     spinner: state.productReducer.spinner,
     products: state.productReducer.products,
     error: state.productReducer.error
   }
}
export default connect(mapStateToProps, {
 fetchProducts, fetchData, batchDone, logIn, SavedProducts, SyncWithCrm
})(MainScreen);
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
