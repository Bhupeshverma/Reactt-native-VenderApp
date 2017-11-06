import React ,{Component} from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ViewPropTypes, Dimensions , TouchableOpacity} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import Hero from 'react-native-hero';
import {Constants} from 'expo';
import { connect } from 'react-redux';
import { logIn} from '../../actions';
import {Button, Icon} from 'react-native-elements'

var { height,width } = Dimensions.get('window');
var box_count = 2;
var box_height = height / box_count;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  box: {
    height: box_height
  },
  box1: {
    flex:3,
  },
  box2: {
    flex:9,
    backgroundColor: '#000'
  },
  someButtonStyle:{
    backgroundColor:"transparent"
  },
  button: {
    width:width,
    backgroundColor: "#000",
    paddingVertical: 20,
    flexDirection: 'row'
  },
  buttonText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: '300'
  },


});

class DrawerContent extends Component {
  static propTypes = {
    name: PropTypes.string,
    sceneStyle: ViewPropTypes.style,
    title: PropTypes.string,
  }

  static contextTypes = {
    drawer: React.PropTypes.object,
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={[styles.box, styles.box1]}>
          <Hero
              source={require('../../assets/Images/sssbackground.jpg')}
              renderOverlay={() => (
                <View>
                <Text style={{fontSize:40, fontWeight: "bold", color: "#fff", margin: 20}}>Welcome To</Text>
                <Text style={{fontSize:40, fontWeight: "bold", color: "#fff",marginLeft: 20}}>SSS VendorsApp</Text>
                </View>
                )}
                minHeight={200}
                colorOverlay="#1bb4d8"
                colorOpacity={0.7}
              />
        </View>
        <View style={[styles.box, styles.box2]}>
          <View>
            <View style={{alignItems: 'flex-start'}}>
              <TouchableOpacity activeOpacity={.5} onPress={()=>{Actions.Home()}}>
                <View style={styles.button}>
                  <Icon
                      name='sc-telegram'
                      type='evilicon'
                      color='#fff'
                      size= {34}
                    />
                  <Text style={styles.buttonText} >Home</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'flex-start'}}>
            <TouchableOpacity activeOpacity={.5} onPress={()=>{Actions.Details()}}>
              <View style={styles.button}>
                <Icon
                    name='sync'
                    color='#fff'
                    size= {34}
                  />
                <Text style={styles.buttonText} >Sync With CRM</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'flex-start'}}>
          <TouchableOpacity activeOpacity={.5} onPress={()=>{Actions.Logout()}}>
            <View style={styles.button}>
              <Icon
                  name='logout'
                  type='material-community'
                  color='#fff'
                  size= {34}
                />
              <Text style={styles.buttonText} >Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
       </View>
      </View>
      </View >
    );
  }
}
export default DrawerContent;
