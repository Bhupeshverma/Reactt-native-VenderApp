import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginScreen from './src/screens/Auth/login';
import MainScreen from './src/screens/MainScreen';
import DetailScreen from './src/screens/DetailScreen';
const RouterComponent = () => {
  return (
    <Router >

      <Scene key="root" hideNavBar>
        <Scene key="auth" >
          <Scene key="login" component={LoginScreen} hideNavBar   />
        </Scene>
        <Scene key="Main" >
          <Scene key="Orders" component={MainScreen}/>
          <Scene key="Details" component={DetailScreen}/>
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
