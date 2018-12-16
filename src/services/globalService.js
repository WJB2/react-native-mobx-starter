import request from './../utils/HttpInvoker';

async function login(params){
    return request('/api/authentication/session',{
        method:'POST',
        body:{
            ...params,
        },
    });
}