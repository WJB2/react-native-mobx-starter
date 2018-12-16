import React, {Component} from 'react'; 
import {StyleSheet, View, Text} from 'react-native';
// import {NavigationActions} from  'react-navigation';
import {List, WhiteSpace, WingBlank, Card} from 'antd-mobile-rn';
// import { Constants } from 'expo';

const ListItem = List.Item;

class ProfileScreen extends Component {

    static navigationOptions={
        title:"我的"
    }

    render(){
        return (
            <View style={styles.container}>
                <Card style={styles.infoWrapper}>
                    <Text>个人简介</Text>
                </Card>
                <WhiteSpace />
                <List>
                    <ListItem arrow={'horizontal'} onClick={
                        ()=>{
                            this.props.navigation.openDrawer();
                        }
                    }>设置</ListItem>
                </List>
                <List renderHeader={() => <Text style={{backgroundColor:'gray'}}>联系我们</Text>}>
                    <ListItem extra={<Text>0570-4019533</Text>}>
                        联系电话
                    </ListItem>
                    <ListItem extra={<Text>1065809955</Text>}>
                        联系QQ
                    </ListItem>
                </List>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   marginTop: Constants.statusBarHeight,
    },
    infoWrapper: {
        borderRadius: 0,
    }
});


export default ProfileScreen;