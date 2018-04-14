import React , {Component} from 'react';
import Basic from './Basic';
import { AsyncStorage,StyleSheet, Text, View } from 'react-native';
import Circles from './Circles';
import StepCounter from '../containers/StepCounter';
import Sirin from './Sirin';
import Profile from './Profile';
import ProfileEdit from './ProfileEdit';
import History from './history';
import Captcha from './Captcha';
import Start from './Start';
import MainPage from './MainPage';
import Sidemenu from './sideMenu';
import GetPedometer from '../containers/GetPedometer';
import Chart from './chart';
import Collect from './Collect';
import Store from './Store';
import GyroscopeSensor from '../containers/GyroscopeSensor';
import MyLocation from '../containers/MyLocation';
import AntiHack from '../containers/AntiHack';
import MyDatePicker from './datePicker';
import MainPageStates from '../containers/MainPageStates';
import DrawerOption from './DrawerOption';
import DrawerOptionForLoggedApps from './DrawerOptionForLoggedApps';
const reactNative = require('react-native');
class  Index extends Component{
  state = {
    userInfo : false
  }
  async componentDidMount(){
     await reactNative.I18nManager.allowRTL(false);
    
  }
  componentWillMount(){
    AsyncStorage.getItem('@user_info').then((value)=>{
      if(value){
        this.setState({userInfo : true});
      }
      else{
        this.setState({userInfo : false});
      }
    });
  }
  render(){
      return(
        <View style={styles.container}>
          <GetPedometer />
          <MyLocation />
          <AntiHack />
          <DrawerOptionForLoggedApps/>
        </View>
      )
  } 
}
export default Index

const styles = StyleSheet.create({
    container: {
      flex : 1,
      justifyContent: 'center'
    },
  });
