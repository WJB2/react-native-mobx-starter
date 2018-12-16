import React, {Component} from 'react'; 

import {StyleSheet, View, Text} from 'react-native';

class MessageScreen extends Component {

    static navigationOptions={
        title:"首页",
    };

    render(){
        return (
            <View>
                <Text>首页</Text>
            </View>
        );
    }
}

export default MessageScreen;