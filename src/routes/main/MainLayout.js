import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import {createBottomTabNavigator,createStackNavigator} from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

import MessageScreen from './../message/MessageScreen';
import TodoScreen from './../todo/TodoScreen';
import WorkbenchScreen from './../workbench/WorkbenchScreen';
import ContactScreen from './../contact/ContactScreen';
import HomeScreen from './../home/HomeScreen';
import ProfileScreen from './../profile/ProfileNavigation';

const MainScreen =createBottomTabNavigator({
    Home: {
        screen: createStackNavigator({
            Todo: {
                screen: HomeScreen,
            }
        }),
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon:({ tintColor })=>{
                return <Icon name={'home'} size={22} style={{color:tintColor}}/>
            }
        }
    },
    Message:{
        screen:createStackNavigator({
            Message:{
                screen:MessageScreen
            }
        }),
        navigationOptions:{
            tabBarLabel:'消息',
            tabBarIcon:({tintColor})=>{
                return <Icon name={'chat-bubble'} size={22} style={{color:tintColor}}/>
            }
        }
    },
    Todo: {
        screen: createStackNavigator({
            Todo: {
                screen: TodoScreen,
            }
        }),
        navigationOptions: {
            tabBarLabel: '待办',
            tabBarIcon:({ tintColor })=>{
                return <Icon name={'format-list-bulleted'} size={22} style={{color:tintColor}}/>
            }
        }
    },
    Workbench: {
        screen: createStackNavigator({
            Workbench: {
                screen: WorkbenchScreen,
            }
        }),
        navigationOptions: {
            tabBarLabel: '工作台',
            tabBarIcon:({ tintColor })=>{
                return <Icon name={'apps'} size={22} style={{color:tintColor}}/>
            }
        }
    },
    Contact: {
        screen: createStackNavigator({
            Contact: {
                screen: ContactScreen,
            }
        }),
        navigationOptions: {
            tabBarLabel: '通讯录',
            tabBarIcon:({ tintColor })=>{
                return <Icon name={'assignment-ind'} size={22} style={{color:tintColor}} />
            }
        }
    },
    Profile:{
        screen:createStackNavigator({
            Profile: {
                screen: ProfileScreen,
            }
        }),
        navigationOptions:{
            tabBarLabel: '我的',
            tabBarIcon:({tintColor})=>{
                return <Icon name={'person'} size={22} style={{color:tintColor}}/>
            }
        }
    }
},{
    navigationOptions:({navigation})=>({
        tabBarOptions:{
            activeTintColor:'tomato',
            inactiveTintColor:'gray',
            iconStyle:{
                fontSize:24,
            },
        }
    })
});

export default MainScreen;