import React from 'react';
import { Stack, Scene, Router, Actions, Overlay, Lightbox, Reducer, Drawer, ActionConst} from 'react-native-router-flux';
import LoginScreen from './src/screens/Auth/login';
import MainScreen from './src/screens/MainScreen';
import DetailScreen from './src/screens/DetailScreen';
import SyncScreen from './src/screens/SyncScreen';
import LogoutComponent from './src/screens/Auth/logout';
import DrawerContent from './src/screens/drawer/DrawerContent';
import MenuIcon from './src/screens/drawer/ham2.png';
import {connect} from "react-redux";
import { Constants } from 'expo';
import {StatusBar} from 'react-native';


const reducerCreate = params => (state, action) => Reducer(params)(state, action);

const RouterComponent = ({needSignIn}) => {
  return (
    <Router  createReducer={reducerCreate}  navigationBarStyle={{ backgroundColor: '#262727' }} titleStyle={{color:"#fff"}} >
      <Lightbox>
            <Stack key="root" hideNavBar >
              <Drawer
                initial={needSignIn}
                hideNavBar
                key="drawer"
                contentComponent={DrawerContent}
                drawerImage={MenuIcon}
                drawerWidth={300}>
                <Scene key="Home" component={MainScreen}
                  title="Home" initial
                />
                <Scene key="Details" component={DetailScreen} title="Sync" />
                <Scene key="nextScreen" component={SyncScreen} hideNavBar />
              </Drawer>

              <Stack key="Main"  initial={!needSignIn} hideNavBar >
                <Scene key="login" component={LoginScreen} hideNavBar/>
              </Stack>

            </Stack>
        <Scene key="Logout" component={LogoutComponent}/>
    </Lightbox>
    </Router>
  );
};

function mapStateToProps(state) {
	return {
		needSignIn: state.auth.sessionID
	}
}

export default connect(mapStateToProps)(RouterComponent);
