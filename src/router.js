import { createStackNavigator } from "react-navigation";

import LoginScreen from './../src/routes/security/login/LoginScreen';
import MainScreen from './../src/routes/main/MainLayout';

import {createAppContainer } from 'react-navigation';

// 配置路由
const RouterStack = createStackNavigator({
  Login:{
    screen:LoginScreen,
    navigationOptions:{
      title:"登录",
    },
  },
  Main:{
    screen:MainScreen,
    navigationOptions:{
      header:null,
    }
  }
});

export default createAppContainer(RouterStack);