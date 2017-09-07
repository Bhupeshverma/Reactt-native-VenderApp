import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './src/screens/Auth/LoginScreen';
import MainScreen from './src/screens/MainScreen';
const RouterComponent = () => {
  return (
    <Router >

      <Scene key="root" hideNavBar>
        <Scene key="auth" >
          <Scene key="login" component={LoginForm} />
        </Scene>
        <Scene key="Main">
          <Scene key="Orders" component={MainScreen}  />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
