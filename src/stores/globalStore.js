//app全局性状态管理
import { observable,action, runInAction} from 'mobx';
export default class globalStore{
    @observable show=true;
    @observable list=[];

    constructor({list=[]}){
        this.list=list;
    }

    @action changeShow=()=>{this.show=!this.show;}
    // @action getData=async (params)=>{
    //     try{
            
    //     }
    // }
}
