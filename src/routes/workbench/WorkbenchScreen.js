import React, {Component} from 'react'; 

import {StyleSheet, View, Text} from 'react-native';

class MessageScreen extends Component {

    static navigationOptions={
        title:"工作台"
    }

    render(){
        return (
            <View>
                <Text>工作台</Text>
            </View>
        );
    }
}

export default MessageScreen;