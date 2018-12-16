import React, {Component} from 'react'; 

import {StyleSheet, View, Text} from 'react-native';

class ContactScreen extends Component {

    static navigationOptions={
        title:"通讯录"
    }

    render(){
        return (
            <View>
                <Text>通讯录</Text>
            </View>
        );
    }
}

export default ContactScreen;