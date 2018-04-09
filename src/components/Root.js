import React , {Component} from 'react';
import Index from './Index';


class Root extends Component{
    static navigationOptions = {
        header : null,
        drawerLockMode: 'locked-closed'
      } 
    render(){
        return <Index/>
    } 
}
export default Root


