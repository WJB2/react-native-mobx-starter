import 'babel-polyfill';
import React, { Component } from 'react';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import AppContainer from './router';
import globalStore from './stores/globalStore';

configure({ enforceActions: 'observed' });

const stores={
  // globalStore:new globalStore({list:[1]}),//塞入初始数据，可用于服务端渲染
  globalStore:new globalStore({})
};

export default class App extends Component {
  componentDidMount(){
    // 去掉黄色警告
    console.disableYellowBox = true;
  
  } 
  render() {

    return (
      <Provider {...stores}>
        <AppContainer />
      </Provider>
    );
  }
}