import React, {Component} from 'react'; 

import {StyleSheet, View, Text} from 'react-native';

class TodoScreen extends Component {

    static navigationOptions={
        title:"待办事项"
    }

    render(){
        return (
            <View>
                <Text>待办</Text>
            </View>
        );
    }
}

export default TodoScreen;