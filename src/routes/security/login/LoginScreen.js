import React,{Component} from 'react';
import {StyleSheet,View,Text,ScrollView} from 'react-native';
import {createForm} from 'rc-form';
import {inject,observer} from 'mobx-react';
import {InputItem,WingBlank,WhiteSpace,Card,Button} from 'antd-mobile-rn';

class LoginForm extends Component{
    render(){
        return(
            <View>
                <WingBlank size={'lg'}>
                    <WhiteSpace size={'lg'} />
                    <InputItem placeholder={'账号/手机号/邮箱'}/>
                    <WhiteSpace size={'lg'} />
                    <InputItem placeholder={'密码'} type={'password'} />
                    <WhiteSpace size={'lg'} />
                    <Button style={styles.loginButton} type={'primary'} onClick={
                        ()=>{
                            this.props.navigation.navigate({
                                routeName:'Main'
                            });
                        }
                    }>登入
                    </Button>
                </WingBlank>
            </View>
        );
    }
}

const LoginFormWrapper=createForm()(LoginForm);

@observer
@inject('globalStore')
class LoginScreen extends Component {

    render() {

        const {show,list,changeShow,getData}=this.props.globalStore;
        console.log(this.props);
        
        return (
            <View style={styles.container}>
                <LoginFormWrapper {...this.props} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loginButton: {
        borderRadius: 0,
    }
});

export default LoginScreen;