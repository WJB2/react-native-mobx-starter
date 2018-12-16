import axios from 'axios';
import { Alert } from 'react-native';
import {Toast} from 'antd-mobile-rn';
import {requestBaseUrl} from '../config/httpConfig';

axios.defaults.timeout=5000;
axios.defaults.baseURL=requestBaseUrl;
axios.defaults.withCredentials=true;
axios.defaults.headers.common['X-Requested-With']='XMLHttpRequest';
axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded;charset=UTF-8';
 
//request拦截器Post传参序列化
axios.interceptors.request.use(
    config=>{
        return config;
    },
    err=>{
        return Promise.reject(err)
    }
)

axios.interceptors.response.use(function(response){
    const responseData=response.data;
    return responseData;
},function(error){
    console.log('失败收到响应')
    console.log(error)
    console.log(error.response);
    if(error.response){
        switch(error.response.status){
            case 401:
                break
            case 404:
                console.log(404);
                break
            case 500:
                console.log(500);
                break
        }
    }
    return Promise.reject(error.response.data);
});

export default function request(url,options){

    const defaultOptions={//默认设置
        credentials:'include',
    };

    const newOptions={...defaultOptions,...options};

    if(newOptions.multipartForm){//如果是文件上传 header设置为上传文件专有
        newOptions.headers={
            ...newOptions.headers,
        }
    }else{
        if(newOptions.method==='POST'||newOptions.method==="PUT"){
            newOptions.headers={
                Accept:'application/json',
                'Content-Type':'application/json;charset=utf-8',
                ...newOptions.headers,
            };
            newOptions.body=JSON.stringify(newOptions.body);
        }
    }

    return axios({
                method:newOptions.method,
                url:url,
                data:newOptions.body,
                headers:newOptions.headers
            })
            .catch(error=>{
                console.log(error)
            })

}
