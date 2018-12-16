import React, {Component} from 'react'; 
import {StyleSheet, View, Text} from 'react-native';
import {createDrawerNavigator} from 'react-navigation';
// import { Constants } from 'expo';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ProfileScreen from './ProfileScreen';
import SettingScreen from './SettingScreen';

const ProfileNavigation = createDrawerNavigator({
    ProfileScreen: {
        screen: ProfileScreen,
        navigationOptions: {
            header:null,
        }
    },
    SettingScreen: {
        screen: SettingScreen,
        navigationOptions: {
            header:null,
        }
    }
},{
    drawerWidth: 200, // 抽屉宽
    drawerPosition: 'left', // 抽屉在左边还是右边
    contentOptions: {
      initialRouteName: 'ProfileScreen', // 默认页面组件
      activeTintColor: 'white',  // 选中文字颜色
      activeBackgroundColor: '#ff8500', // 选中背景颜色
      inactiveTintColor: '#666',  // 未选中文字颜色
      inactiveBackgroundColor: '#fff', // 未选中背景颜色
      style: {  // 样式

      }
    }
});

export default ProfileNavigation;