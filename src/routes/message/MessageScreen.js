import React, {Component} from 'react'; 

import {StyleSheet, View, Text} from 'react-native';

class MessageScreen extends Component {

    static navigationOptions={
        title:"消息"
    }

    render(){
        return (
            <View>
                <Text>信息</Text>
            </View>
        );
    }
}

export default MessageScreen;