import React from 'react';
import { Stack, Scene, Router, Actions, Overlay, Lightbox, Reducer} from 'react-native-router-flux';
import LoginScreen from './src/screens/Auth/login';
import MainScreen from './src/screens/MainScreen';
import DetailScreen from './src/screens/DetailScreen';
import LogoutComponent from './src/screens/Auth/logout'
import {connect} from "react-redux";
import { Constants } from 'expo';


const reducerCreate = params => (state, action) => Reducer(params)(state, action);

const RouterComponent = ({needSignIn}) => {
  return (
    <Router  createReducer={reducerCreate}  navigationBarStyle={{ backgroundColor: '#f5f4f4' }} sceneStyle={{paddingTop: 10}}>
<Lightbox>
      <Stack key="root" hideNavBar >

        <Stack key="auth" hideNavBar initial={needSignIn}>
          <Scene key="login" component={LoginScreen} hideNavBar  />
        </Stack>
        <Stack key="Main" initial={!needSignIn} title="VenderApp" rightTitle="Logout" onRight={()=>Actions.Logout()} >
              <Scene key="Orders" component={MainScreen} />
              <Scene key="Details" component={DetailScreen} />
        </Stack>
        </Stack>
<Scene key="Logout" component={LogoutComponent}/>
</Lightbox>
    </Router>
  );
};

function mapStateToProps(state) {
	return {
		needSignIn: !state.auth.sessionID
	}
}

export default connect(mapStateToProps)(RouterComponent);
