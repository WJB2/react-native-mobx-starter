import React, {Component} from 'react'; 
import {StyleSheet, View, Text} from 'react-native';
import {List, WhiteSpace, WingBlank, Card, Button} from 'antd-mobile-rn';
// import { Constants } from 'expo';

const ListItem = List.Item;

class SettingScreen extends Component {

    static navigationOptions={
        title:'设置'
    }

    render(){
        return (
            <View style={styles.container}>
                <WingBlank>
                    <WhiteSpace />
                    <Text>设置(返回登录页面)</Text>
                    <Button type={"warning"} onClick={
                       ()=>{
                           this.props.navigation.navigate('Login')
                       }
                    }>退出</Button>
                </WingBlank>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   marginTop: Constants.statusBarHeight,
    }
});


export default SettingScreen;