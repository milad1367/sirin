import React, { Component } from 'react';
import {Alert,AsyncStorage,Text,View,Button,Image,StyleSheet,ScrollView,InteractionManager,Picker,Dimensions,TouchableOpacity,TextInput,KeyboardAvoidingView,Animated,ActivityIndicator} from 'react-native';
import { LinearGradient } from 'expo';
import { Font } from 'expo';
import LinearGradientButton from './LinearGradientButton';
import MainPageStates from '../containers/MainPageStates';
import { connect } from 'react-redux';
import GetPedometer from '../containers/GetPedometer';
import GyroscopeSensor from '../containers/GyroscopeSensor';
import MyLocation from '../containers/MyLocation';
import AntiHack from '../containers/AntiHack';
import datePicker from './datePicker';
import DateValue from '../actions';
import Toast from 'react-native-simple-toast';
import DatePicker from 'react-native-datepicker';
import { StackNavigator } from 'react-navigation';
import Svg,{
    Circle,
    Ellipse,
    G,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Use,
    Defs,
    Stop
  } from 'react-native-svg';
import MyDatePicker from './datePicker';
import Slider from './Slider';
var phones = require('../../phone.json');
var sorted = phones.sort((a, b) => a.country.localeCompare(b.country));
class Start extends Component {
  static navigationOptions = {
    header : null,
    drawerLockMode: 'locked-closed'
  } 
  
  constructor(props){
    super(props);
    this.state={
      showToast: false,
      isFontLoaded : false,
      phoneNumberLogin : '',
      passwordLogin : '',
      phoneNumberSignUp : '',
      userNameSignUp : '',
      emailSignUp : '',
      passwordSignUp : '',
      DatePicker : '',
      iscodeForm : false,
      code : '',
      phoneCode : '',
      date : '',
      isDatePicketed : false,
      sliderPosition : 0,
      SliderStyle : null,
      Country :  "001",
      CountryLogin : "001",
      loginForm : false,
      SignUpForm : false,
      forgotForm : false,
      isForgotLoading : false,
      isCodeLoading : false ,
      isSignUpLoading : false,
      isLoginLoading : false,
      etheriumAccount : '',
      emailForgot : '',
      colors : ['#514a9d','#24c6dc'],
      interactionsComplete : false
    }
  }
  componentWillMount(){
    const window = Dimensions.get('window');
    this.animatedPositionTop = new Animated.Value(window.height*.42);
    this.animatedOpacityLogin = new Animated.Value(0);
    this.animatedOpacitySignUp = new Animated.Value(0);
    this.setState({interactionsComplete: false});
  }  
  async componentDidMount(){
    const window = Dimensions.get('window');
    var interval = await setInterval(()=>{
      this.setState({interactionsComplete: true});
      clearInterval(interval);
    },2000)
    InteractionManager.runAfterInteractions(() => {
      Font.loadAsync({
        'Montserrat-Bold': require('../assets/fonts/MontserratAlternates-Bold.ttf'),
        'Montserrat-Light' : require('../assets/fonts/MontserratAlternates-Regular.ttf'),
      }).then(()=>{
        this.setState({isFontLoaded : true})
      });
      this.setState({
        SliderStyle : null,
        sliderPosition : 0,
        loginForm : 0,
        SignUpForm : 0,
        colors : ['#514a9d','#24c6dc']
      });
    });
  }
  _CodeForm(){
    const { navigate } = this.props.navigation;
    const window = Dimensions.get('window');
    var handleLogin = InteractionManager.createInteractionHandle();
    this.setState({sliderPosition : window.height*0.05});
    InteractionManager.runAfterInteractions(() => {
      Animated.timing(this.animatedPositionTop,{
        toValue : window.height*.35,
        duration : 500
      }).start();
      Animated.timing(this.animatedOpacityLogin,{
        toValue : 1,
        duration : 1500,
        useNativeDriver : true
      }).start();
    });
    InteractionManager.clearInteractionHandle(handleLogin);
    this.setState({colors : ['#514a9d','#24c6dc',"#fff"],SliderStyle : false,loginForm : false , SignUpForm : false,iscodeForm : true,forgotForm:false})
  }
  _forgotPassword(){
    const { navigate } = this.props.navigation;
    const window = Dimensions.get('window');
    var handleLogin = InteractionManager.createInteractionHandle();
    this.setState({sliderPosition : window.height*0.05});
    InteractionManager.runAfterInteractions(() => {
      Animated.timing(this.animatedPositionTop,{
        toValue : window.height*.35,
        duration : 500
      }).start();
      Animated.timing(this.animatedOpacityLogin,{
        toValue : 1,
        duration : 1500,
        useNativeDriver : true
      }).start();
    });
    InteractionManager.clearInteractionHandle(handleLogin);
    this.setState({colors : ['#514a9d','#24c6dc',"#fff"],SliderStyle : false,loginForm : false , SignUpForm : false,iscodeForm : false,forgotForm : true});
  }
  _LoginForm(){
    const { navigate } = this.props.navigation;
    const window = Dimensions.get('window');
    var handleLogin = InteractionManager.createInteractionHandle();
    this.setState({sliderPosition : window.height*0.05});
    InteractionManager.runAfterInteractions(() => {
      Animated.timing(this.animatedPositionTop,{
        toValue : window.height*.3,
        duration : 800
      }).start();
      Animated.timing(this.animatedOpacityLogin,{
        toValue : 1,
        duration : 1500,
        useNativeDriver : true
      }).start();
    });
    InteractionManager.clearInteractionHandle(handleLogin);
    this.setState({colors : ['#514a9d','#24c6dc',"#fff"],loginForm : true , SignUpForm : false,SliderStyle : false,forgotForm:false})
    
  }
  _SignUpForm(){

    const { navigate } = this.props.navigation;
    
    const window = Dimensions.get('window');
    var handleSignUp = InteractionManager.createInteractionHandle();
    InteractionManager.runAfterInteractions(() => {
      this.setState({sliderPosition : window.height*0.10});
      Animated.timing(this.animatedPositionTop,{
        toValue : window.height*.18,
        duration : 800
      }).start();
      Animated.timing(this.animatedOpacitySignUp,{
        toValue : 1,
        duration : 1500
      }).start();
    });
    InteractionManager.clearInteractionHandle(handleSignUp);
    this.setState({SliderStyle : false,colors : ['#514a9d','#24c6dc',"#fff","#fff"],loginForm : false , SignUpForm : true,forgotForm:false})
  }
  LoginFetch(){
    const { navigate } = this.props.navigation;
    let phoneNumber = this.state.CountryLogin + this.state.phoneNumberLogin;
    let password = this.state.passwordLogin;
    let log = '';
    if (phoneNumber.length > 0 && phoneNumber.length < 12){
      log += 'phone number is not valid';
    }
    if(password.length > 0 && password.length < 7){
      if(log.length > 0)
      log += '\npassword must be at least 6 characters';
      else 
      log += 'password must be at least 6 characters';
    }
    if(!log.length > 0){
      this.setState({isLoginLoading : true});
      fetch('https://sirin-app.herokuapp.com/user/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body:JSON.stringify({
              phone : phoneNumber,
              password,
            })
          }).then((response) => response.json()).then(async(responseJson) => {
            if(responseJson.status == 'ok'){
              let age = parseInt((new Date() - new Date(responseJson.data.birthDate)) / 31536000000);
              //console.log(responseJson.data);
              var birthDate = responseJson.data.birthDate;
              birthDate = birthDate.split("",10).join("");
              let user = {
                birthDate : birthDate,
                phone : responseJson.data.phone,
                email : responseJson.data.email,
                name :  responseJson.data.name,
                token : responseJson.data.token,
                image : responseJson.data.userPhoto,
                etheriumAccount : responseJson.data.etheriumAccount,
                age : age
              }
              user = await JSON.stringify(user);
              await AsyncStorage.setItem('@user_info',user).then(()=>{
                console.log(user);
              });
              navigate('MainPageStates');
              this.setState({isLoginLoading : false});
              }
              else if(responseJson.status == 'error'){
                massagelog = '';
               for( var i = 0 ; i< responseJson.data.length ; i ++ ){
                 massagelog += responseJson.data[i].msg;
               }
                this.setState({isLoginLoading : false}); 
                Alert.alert("ERROR!",massagelog);
              }
              else{
                Alert.alert("ERROR!",'somthing has went wrong plz try later');
                this.setState({isCodeLoading : false});
              }
            }).catch((error) => {
                console.error(error);
            });            
    }
    if(log.length > 0){
      Alert.alert("ERROR!",log);
    }
    
    if(log.length > 0){
      Alert.alert("ERROR!",log);
    }
  }
  CodeFetch(){
    const {navigate} = this.props.navigation;
    let phoneNumber = this.state.Country + this.state.phoneNumberSignUp;
    let userName = this.state.userNameSignUp;
    let password = this.state.passwordSignUp;
    let email = this.state.emailSignUp;
    let birthDate = this.state.date;
    let code = `${this.state.phoneCode}`;
    let log = '';
    this.setState({isCodeLoading : true});
    fetch('https://sirin-app.herokuapp.com/user/code', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            phone : phoneNumber,
            email,
            code
          })  
        }).then((response) => response.json()).then( async (responseJson) => {
          if(responseJson.status == 'ok'){
            let age = parseInt((new Date() - new Date(responseJson.user.birthDate)) / 31536000000);
            var birthDate = responseJson.user.birthDate;
            birthDate = birthDate.split("",10).join("");
            let user = {
              email : responseJson.user.email,
              phone : responseJson.user.phone,
              birthDate : birthDate,
              name :  responseJson.user.name,
              token : responseJson.user.token,
              image : responseJson.user.userPhoto,
              etheriumAccount : responseJson.user.etheriumAccount,
              age : age
            }
            user = await JSON.stringify(user);
            AsyncStorage.setItem('@user_info',user).then(()=>{
              console.log("user info added");
              console.log(user);
              navigate('MainPageStates');
            });
            this.setState({isCodeLoading : false});
          }
            else if(responseJson.status == 'error'){
              massagelog = '';
             for( var i = 0 ; i< responseJson.data.length ; i ++ ){
               massagelog += responseJson.data[i].msg;
             } 
              this.setState({isCodeLoading : false});
              Alert.alert("ERROR!",massagelog);
            }
            else{
              this.setState({isCodeLoading : false});
              Alert.alert('ERROR!','somthing has went wrong plz try later');
            }
          }).catch((error) => {
              console.error(error);
          });
  }
  forgotPasswordFetch(){
    const {navigate} = this.props.navigation;
    let email = this.state.emailForgot;
    let log = '';
    this.setState({isForgotLoading : true});
    fetch('https://sirin-app.herokuapp.com/user/forgot/password', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            email,
          })  
        }).then((response) => response.json()).then((responseJson) => {
            if(responseJson.status == 'ok'){
              massagelog = '';
              for( var i = 0 ; i< responseJson.data.length ; i ++ ){
                massagelog += responseJson.data[i].msg;
              }
              this.setState({isForgotLoading : false}); 
              Alert.alert("SUCCESS!",massagelog);
            }
            else if(responseJson.status == 'error'){
              massagelog = '';
             for( var i = 0 ; i< responseJson.data.length ; i ++ ){
               massagelog += responseJson.data[i].msg;
             }
              this.setState({isForgotLoading : false});  
              Alert.alert("ERROR!",massagelog);
            }
            else{
              this.setState({isForgotLoading : false}); 
              Alert.alert("ERROR!",'somthing has went wrong plz try later');
            }
          }).catch((error) => {
              console.error(error);
          });
  }
  SignUpFetch(){
    const {navigate} = this.props.navigation;
    let phonePart = this.state.phoneNumberSignUp;
    let countryPart = this.state.Country;
    let phoneNumber = countryPart + phonePart;
    let userName = this.state.userNameSignUp;
    let password = this.state.passwordSignUp;
    let email = this.state.emailSignUp;
    let birthDate = this.state.date;
    let etheriumAccount = this.state.etheriumAccount;
    let log = '';
    if(phoneNumber.length > 0 && phoneNumber.length < 12){
      log += 'phone number is not valid';
    }
    if(etheriumAccount.length > 0 && etheriumAccount.length < 42){
      if(log.length > 0)
      log += '\netherium account number is not valid';
      else
      log += 'etherium account number is not valid';      
    }
    if(password.length > 0 && password.length < 7){
      if(log.length > 0)
      log += '\npassword must be at least 6 characters';
      else 
      log += 'password must be at least 6 characters';
    }
    if(!log.length > 0){
      this.setState({isSignUpLoading : true});
      fetch('https://sirin-app.herokuapp.com/user/register', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            phone : phoneNumber,
            name : userName,
            password,
            email,
            birthDate,
            etheriumAccount
          })
        }).then((response) => response.json()).then(async (responseJson) => {
            console.log(responseJson);
            if(responseJson.status == 'ok'){
              this.setState({isSignUpLoading : false});
              this.setState({code : responseJson.code});
              await this._CodeForm();
              Alert.alert("SUCCESS!",`Code : ${responseJson.code}`);
            }
            else if(responseJson.status == 'error'){
              massagelog = '';
             for( var i = 0 ; i< responseJson.data.length ; i ++ ){
               massagelog += responseJson.data[i].msg;
             } 
              this.setState({isSignUpLoading : false});
              Alert.alert("ERROR!",massagelog);
            }
            else{
              this.setState({isSignUpLoading : false});
              Alert.alert("ERROR!",'somthing has went wrong plz try later');
            }
          }).catch((error) => {
              console.error(error);
            });                
        }
    else{
      this.setState({isSignUpLoading : false});
      Alert.alert("ERROR!",log);
    }
  }
  get View(){
    const {isFontLoaded} = this.state;
    const window = Dimensions.get('window');
    if(this.state.loginForm){
      if(this.state.passwordLogin.length > 0 && this.state.phoneNumberLogin.length > 0)
        var buttonOpacity = 1;
      else
        var buttonOpacity = 0.2;
      if(this.state.isLoginLoading){
        var submitLoginButtion = <ActivityIndicator size={'large'} color={'#514a9d'}/>
      }
      else{
        var submitLoginButtion = <TouchableOpacity disabled={this.state.passwordLogin.length <=0 || this.state.phoneNumberLogin.length <= 0} style={[{flex : 1}]} onPress={this.LoginFetch.bind(this)}>
        <LinearGradientButton width={window.width / 4}  detail="Login"/>
      </TouchableOpacity>
      }    
      return(
        <Animated.View style={[styles.formContent,{flex : 1.5,opacity : this.animatedOpacityLogin,justifyContent : 'center',alignItems : 'center'}]}>
         <View style={{flex : 1,justifyContent : 'center',alignItems : 'center'}}>
            <Text style={[{fontSize : window.width*.08,color : '#514a9d'},isFontLoaded && {fontFamily:'Montserrat-Light'}]}>Welcome Back</Text>
         </View>
          <View style={{flex : 3,alignItems : 'center',justifyContent : 'center',alignItems : 'center'}}>
            <View style={{flex : 1 , flexDirection : 'row',width : window.width - 30,marginLeft : 5}}>
                <View style={{flex : 1,justifyContent : 'center',marginBottom : -6,marginTop : 15}}>
                    <Picker style={[{color:'#908cbb',flex : 1}]}
                      selectedValue={this.state.CountryLogin}
                      onValueChange={(itemValue, itemIndex) => this.setState({CountryLogin: itemValue})}>
                      {sorted.map((phone,index)=>{
                        return(
                          <Picker.Item key={index} label={ phone.country + " " + phone.code } value={phone.code} />    
                        )
                      })}
                    </Picker>
                    <View style={{borderTopColor : '#24c6dc',borderTopWidth : 0.8,marginTop : 5}}>
                      <Text style={{color : 'transparent',marginBottom : 6}}>This is UnderLine</Text>
                    </View>
                </View>
                <View style={{flex : 1.2}}>
                  <TextInput  underlineColorAndroid={'#24c6dc'} placeholder={'phone number'} value={this.state.phoneNumberLogin} onChangeText={(phoneNumberLogin)=>{this.setState({phoneNumberLogin})}} keyboardType={'phone-pad'}  style={[{color:'#908cbb',padding : 10},isFontLoaded && {fontFamily:'Montserrat-Light'}]}/>
                </View>
            </View>
            <View style={{flex : 1}}>
            <TextInput underlineColorAndroid={'#24c6dc'} value={this.state.passwordLogin} onChangeText={(passwordLogin)=>{this.setState({passwordLogin})}} secureTextEntry={true} placeholder={'password'} style={[{color:'#908cbb',width : window.width - 30,padding : 10},isFontLoaded && {fontFamily:'Montserrat-Light'}]}/>
            </View>
          </View>
          <View style={{flex : 2,justifyContent : 'center',alignItems : 'center',opacity : buttonOpacity}}>
            {submitLoginButtion}
          </View>
          <View style={{flex : 1,flexDirection : 'row',justifyContent : 'center'}}>
            <View style={{flex : 1,justifyContent : 'center',alignItems : 'flex-start'}}>
              <TouchableOpacity onPress={this._SignUpForm = this._SignUpForm.bind(this)}>
                  <Text style={[{fontSize : 15,color : '#514a9d',textAlign : 'center'},isFontLoaded && {fontFamily:'Montserrat-Light'}]}>don't have an account?</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex : 1,justifyContent : 'center',alignItems : 'flex-end'}}>
              <TouchableOpacity onPress={this._forgotPassword = this._forgotPassword.bind(this)}>
                  <Text style={[{fontSize : 15,color : '#514a9d',textAlign : 'center'},isFontLoaded && {fontFamily:'Montserrat-Light'}]}>forgot Your Password ? </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      )
    }
    else if(this.state.forgotForm){
      if(this.state.isForgotLoading){
        var submitForgotButtion = <ActivityIndicator size={'large'} color={'#514a9d'}/>
      }
      else{
        var submitForgotButtion = <TouchableOpacity style={[{flex : 1}]} onPress={this.forgotPasswordFetch.bind(this)}>
             <LinearGradientButton width={window.width / 4}  detail="Send"/>
           </TouchableOpacity>
      }    
      return(
        <Animated.View style={[styles.formContent,{flex : 1,opacity : this.animatedOpacityLogin,justifyContent : 'center',alignItems : 'center'}]}>
        <View style={{flex : 1,justifyContent : 'center',alignItems : 'center'}}>
           <Text style={[{fontSize : window.width*.06,color : '#514a9d'},isFontLoaded && {fontFamily:'Montserrat-Light'}]}>Plz Enter Your Email</Text>
        </View>
         <View style={{flex : 1,alignItems : 'center',justifyContent : 'center',alignItems : 'center'}}>
           <View style={{flex : 1}}>
           <TextInput  underlineColorAndroid={'#24c6dc'} placeholder={'email'} value={this.state.emailForgot} onChangeText={(emailForgot)=>{this.setState({emailForgot})}} style={[{color:'#908cbb',width : window.width - 30,padding : 10},isFontLoaded && {fontFamily:'Montserrat-Light'}]}/>
           </View>
         </View>
         <View style={{flex : 2,justifyContent : 'center',alignItems : 'center',opacity : buttonOpacity}}>
           {submitForgotButtion}
         </View>
         <View style={{flex : 1,justifyContent : 'center'}}>
            <TouchableOpacity style={[{flex : 1}]} onPress={this._LoginForm = this._LoginForm.bind(this)}>
              <Text style={[{fontSize : window.width*.025,color : '#514a9d',textAlign : 'center'},isFontLoaded && {fontFamily:'Montserrat-Light'}]}>didn't forget your password ? </Text>
            </TouchableOpacity>  
         </View>
       </Animated.View>
      )
    }
    else if(this.state.SignUpForm){
      if(this.state.passwordSignUp.length > 0 && this.state.phoneNumberSignUp.length > 0 && this.state.emailSignUp.length > 0 && this.state.userNameSignUp.length > 0)
      var buttonOpacity = 1;
      else
      var buttonOpacity = 0.2;

      if(this.state.isFontLoaded){
        var font = 'Montserrat-Bold';
      }
      else{
        var font = 'sans-serif';
      }
      if(this.state.isDatePicketed){
        var color = "#908cbb";
      }
      if(!this.state.isDatePicketed){
        var color = "rgba(195, 195, 198,0.8)"
      }
      if(this.state.isSignUpLoading){
        var submitSignUpButtion = <ActivityIndicator size={'large'} color={'#514a9d'}/>
      }
      else{
        var submitSignUpButtion = <TouchableOpacity  disabled={this.state.etheriumAccount.length <=0 || this.state.passwordSignUp.length <=0 || this.state.emailSignUp.length <=0 || this.state.phoneNumberSignUp.length <=0 || this.state.userNameSignUp.length<=0 || this.state.etheriumAccount.length <=0 }  onPress={this.SignUpFetch.bind(this)} style={{flex : 1,justifyContent : 'center',alignItems : 'center'}}>
              <LinearGradientButton width={window.width / 4} detail="signup"/>
            </TouchableOpacity>
      }      
      return(
        <Animated.View style={[{flex : 2.5,opacity:this.animatedOpacitySignUp}]}>
          <View style={{flex : 2,justifyContent : 'center',alignItems : 'center'}}>
            <Text style={[{fontSize : window.width*.08,color : '#514a9d'},isFontLoaded && {fontFamily:'Montserrat-Light'}]}>Welcome</Text>
          </View>
          <View style={{flex : 9.5,justifyContent : 'center',alignItems : 'center'}}>
            <View style={{flex : 1,width : window.width - 35,flexDirection : 'row',justifyContent : 'center',alignItems : 'center'}}>
              <View style={{flex : 1,justifyContent : 'center',marginBottom : -3,marginTop : 10}}>
                  <Picker style={[{color:'#908cbb',flex : 1}]}
                    selectedValue={this.state.Country}
                    onValueChange={(itemValue, itemIndex) => this.setState({Country: itemValue})}>
                    {sorted.map((phone,index)=>{
                        return(
                          <Picker.Item key={index} label={ phone.country + " " + phone.code } value={phone.code} />    
                        )
                    })}
                  </Picker>
                  <View style={{borderTopColor : '#24c6dc',borderTopWidth : 0.8,marginTop : 5}}>
                    <Text style={{color : 'transparent',marginBottom : -5}}>This is UnderLine</Text>
                  </View>
              </View>
              <View style={{flex : 1.2}}>
                <TextInput onChangeText={(phoneNumberSignUp)=>{this.setState({phoneNumberSignUp})}} value={this.state.phoneNumberSignUp} underlineColorAndroid={'#24c6dc'} placeholder={'phone number'} keyboardType={'phone-pad'} style={[{color:'#908cbb',padding : 10},isFontLoaded && {fontFamily:'Montserrat-Light'}]}/>
              </View>
            </View> 
            <View style={{flex : 1,flexDirection : 'row',justifyContent : 'center',alignItems : 'center',width : window.width - 30}}>
              <View style={{flex : 1}}>
                <TextInput underlineColorAndroid={'#24c6dc'} placeholder={'name'} onChangeText={(userNameSignUp)=>{this.setState({userNameSignUp})}} value={this.state.userNameSignUp}   style={[{color:'#908cbb',padding : 10},isFontLoaded && {fontFamily:'Montserrat-Light'}]}/>
              </View>
              <View style={{flex : 1.2}}>
                <TextInput underlineColorAndroid={'#24c6dc'} placeholder={'email'} onChangeText={(emailSignUp)=>{this.setState({emailSignUp})}} value={this.state.emailSignUp} style={[{color:'#908cbb',padding : 10},isFontLoaded && {fontFamily:'Montserrat-Light'}]}/>
              </View>
            </View>
            <View style={{flex : 1,justifyContent : 'center',alignItems : 'center'}}>
              <TextInput underlineColorAndroid={'#24c6dc'} placeholder={'etherium account number'} onChangeText={(etheriumAccount)=>{this.setState({etheriumAccount})}} value={this.state.etheriumAccount} style={[{color:'#908cbb',width : window.width - 30,padding : 10},isFontLoaded && {fontFamily:'Montserrat-Light'}]}/>
            </View>
            <View style={{flex : 1,justifyContent : 'center',alignItems : 'center'}}>
              <View style={{left : - window.width /2.4,padding : 0}}>
                <DatePicker
                    date={this.state.date}
                    mode="date"
                    placeholder="birthdate"
                    format="YYYY-MM-DD"
                    minDate="1500-05-01"
                    maxDate="2017-06-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        display : 'none',
                      },
                      dateText:{
                        color : color || '#51a9ce',
                        fontFamily : font,
                        textAlign : 'right',
                        fontSize : window.width*.03,
                        justifyContent: 'flex-end'
                    },
                      dateInput: {
                        marginRight: 5,
                        paddingLeft : 50,
                        borderWidth : 0,
                        marginBottom : -10
                      }
                    }}
                    onDateChange={(date)=> {
                      this.setState({date,isDatePicketed : true})
                    }}
                  />
              </View>
                {/* <DatePickerAndroid/> */}
              <View style={{borderTopColor : '#24c6dc',borderTopWidth : 0.8}}>
                <Text style={{color : 'transparent',width : window.width - 30}}>This is UnderLine</Text>
              </View>
            </View>
            <View style={{flex : 1,justifyContent : 'center',alignItems : 'center'}}>
              <TextInput underlineColorAndroid={'#24c6dc'} secureTextEntry={true} placeholder={'password'} onChangeText={(passwordSignUp)=>{this.setState({passwordSignUp})}} value={this.state.passwordSignUp} style={[{color:'#908cbb',width : window.width - 30,padding : 10},isFontLoaded && {fontFamily:'Montserrat-Light'}]}/>
            </View>
          </View>
          <View style={{flex : 2,justifyContent : 'center',alignItems : 'center',opacity : buttonOpacity}}>
            {submitSignUpButtion}
          </View>
          <View style={{flex : 2,justifyContent : 'center'}}>
            <TouchableOpacity onPress={this._LoginForm = this._LoginForm.bind(this)}>
                <Text style={[{fontSize : 15,color : '#514a9d',textAlign : 'center'},isFontLoaded && {fontFamily:'Montserrat-Light'}]}>Have an account?</Text>   
            </TouchableOpacity>        
          </View>
        </Animated.View>
      )
    }
    else if(this.state.iscodeForm){
      if(this.state.isCodeLoading){
        var submitCodeButtion = <ActivityIndicator size={'large'} color={'#514a9d'}/>
      }
      else{
        var submitCodeButtion =  <TouchableOpacity style={[{flex : 1}]} onPress={this.CodeFetch.bind(this)}>
             <LinearGradientButton width={window.width / 4}  detail="Send"/>
           </TouchableOpacity>
      }      
      return(
        <Animated.View style={[styles.formContent,{flex : 1,opacity : this.animatedOpacityLogin,justifyContent : 'center',alignItems : 'center'}]}>
        <View style={{flex : 1,justifyContent : 'center',alignItems : 'center'}}>
           <Text style={[{fontSize : window.width*.04,color : '#514a9d'},isFontLoaded && {fontFamily:'Montserrat-Light'}]}>Plz Send Us Your Code</Text>
        </View>
         <View style={{flex : 1,alignItems : 'center',justifyContent : 'center',alignItems : 'center'}}>
           <View style={{flex : 1}}>
           <TextInput  underlineColorAndroid={'#24c6dc'} placeholder={'code'} value={this.state.phoneCode} onChangeText={(phoneCode)=>{this.setState({phoneCode})}} keyboardType={'phone-pad'}  style={[{color:'#908cbb',width : window.width - 30,padding : 10},isFontLoaded && {fontFamily:'Montserrat-Light'}]}/>
           </View>
         </View>
         <View style={{flex : 2,justifyContent : 'center',alignItems : 'center',opacity : buttonOpacity}}>
          {submitCodeButtion}
         </View>
       </Animated.View>
      )
    }
    else
    return(
      <View style={styles.formContent}>
        <TouchableOpacity onPress={this._LoginForm = this._LoginForm.bind(this)}>
          <LinearGradientButton width={window.width/3} detail="login"/>
        </TouchableOpacity>  
        <Text style={[{fontSize :window.width/15,color : '#6572b2'},isFontLoaded && {fontFamily:'Montserrat-Light'}]}>
          Or
        </Text>
        <TouchableOpacity onPress={this._SignUpForm = this._SignUpForm.bind(this)}>
          <LinearGradientButton width={window.width/3}  detail="sign up"/>
        </TouchableOpacity>
      </View>
    )
  }
  render() {
     
    console.log(sorted)
    const menuToolbar = ['menu','History','back'];
    const window = Dimensions.get('window');
    const { navigate } = this.props.navigation;
    if(!this.state.interactionsComplete){
      return(
      <View style={{flex : 1,justifyContent : 'center',alignItems : 'center',backgroundColor : '#fff'}}>
        <ActivityIndicator size={'large'} color={'#514a9d'}/>
      </View>
      );
    }
    return (
      <ScrollView>
      <KeyboardAvoidingView behavior='position' >
        <LinearGradient colors={this.state.colors} style={{flexDirection : 'column',alignItems: 'stretch',flex:1,paddingTop : 30,paddingLeft:10,paddingRight:10,height : window.height}}>
          <Animated.View style={{top: this.animatedPositionTop,position : 'absolute'}}>
          <Svg style={{zIndex : 0 , flex : 1}}  width={window.width} height={window.height} viewBox="0 0 750 689">
            <G  id="#f7f7f7ff">
            <Path  fill="#fff" opacity="1.00" d=" M 411.48 0.00 L 442.54 0.00 C 472.09 1.32 501.73 2.46 531.01 6.98 C 546.48 8.80 561.80 11.68 577.15 14.29 C 601.84 19.78 626.44 25.82 650.56 33.48 C 656.65 35.36 662.62 37.60 668.77 39.32 C 696.31 49.81 724.09 60.01 750.00 74.20 L 750.00 347.90 C 748.31 364.21 749.05 380.63 749.04 397.00 C 749.01 401.76 749.73 406.48 750.00 411.24 L 750.00 513.80 C 749.90 518.51 749.58 523.22 749.19 527.92 C 748.58 539.92 749.67 551.99 748.24 563.95 C 747.87 573.00 747.95 582.07 748.16 591.13 C 748.80 596.84 749.79 602.51 750.00 608.28 L 750.00 689.00 L 127.30 689.00 C 124.21 688.90 121.13 688.70 118.05 688.46 C 112.28 687.92 106.53 688.90 100.77 689.00 L 14.32 689.00 C 11.73 688.15 8.46 686.42 6.23 689.00 L 0.00 689.00 L 0.00 93.99 L 1.91 94.01 C 1.72 93.60 1.34 92.80 1.14 92.40 C 11.10 89.61 20.56 85.37 30.18 81.65 C 35.49 79.88 40.82 78.10 46.01 75.96 C 55.44 72.80 64.84 69.55 74.21 66.20 C 152.10 39.59 232.23 18.90 313.91 8.09 C 322.98 7.34 331.89 5.29 341.01 4.97 C 357.59 3.10 374.27 2.12 390.92 1.00 C 397.76 1.03 404.63 1.21 411.40 0.00 Z" />
            </G>
            <G   id="#fff">
            <Path fill="#fff" opacity="0.45" d=" M 32.89 80.04 C 37.27 78.69 41.52 76.90 46.01 75.96 C 40.82 78.10 35.49 79.88 30.18 81.65 C 30.92 80.88 31.83 80.27 32.89 80.04 Z" />
            </G>
          </Svg>
          </Animated.View>  
          <View style={{flex: 2}}>
            <Slider height={this.state.sliderPosition} text={this.state.SliderStyle}/>
          </View>
          {this.View}  
        </LinearGradient>
      </KeyboardAvoidingView>
    </ScrollView>
    );
  }
}

const window = Dimensions.get('window');
const styles = StyleSheet.create({
  formContent : {
    marginTop : 0,
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  },
  toolbar:{
    flexDirection : 'row',
    paddingTop:0,
    backgroundColor:'transparent'
  },
});
const mapStateToProps = state => ({
  DateValue : state.DatePicker,
});

export default  StartApp = StackNavigator({
   Start: { screen: Start },
   MainPageStates: { screen: MainPageStates },
 });