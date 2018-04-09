import React, { Component } from 'react';
import {Alert,ActivityIndicator,AsyncStorage,Text,View,Image,StyleSheet,Dimensions,TouchableOpacity,Animated,TextInput,KeyboardAvoidingView,ScrollView} from 'react-native';
import { SideMenu } from 'react-native-elements'
import { LinearGradient , Font} from 'expo';
import ToolBar from './Toolbar';
import {BoxShadow} from 'react-native-shadow';
import LinearGradientButton from './LinearGradientButton';
import DatePicker from 'react-native-datepicker';
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
import Sidemenu from './sideMenu';
import MyDatePicker from './datePicker';
class Profile extends Component {
  static navigationOptions = {
    header : null
} 
constructor () {
    super()
    this.state = {
      isOpen: false,
      isFontLoaded : false,
      isEdit : false,
      userInfo : false,
      isDatePicketed : false,
      date : '',
      isUpdateLoading : false,
      Name : '',
      PhoneNumber : '',
      isEtheriumAccountChanged : false,
      isNameChanged : false,
      isPasswordChanged : false,
      isPhoneNumberChanged : false,
      EtheriumAccount : '',
      Password : '',
      isSignOutLoading : false
    }

}
  async componentDidMount(){
    await Font.loadAsync({
      'Montserrat-Bold': require('../assets/fonts/MontserratAlternates-Bold.ttf'),
      'Montserrat-Light' : require('../assets/fonts/MontserratAlternates-Regular.ttf'),
    }).then(()=>{
      this.setState({isFontLoaded : true});
    });
    this.setState({isEdit : false})
    try{
      var value = await AsyncStorage.getItem("@user_info");
      value = JSON.parse(value);
      this.setState({userInfo : value});
    }
    catch(e){
      console.log('caught error', e);
      // Handle exceptions
    }
    this.setState({date : this.state.userInfo.birthDate});
  }
  editForm(){
    //this.setState({isUpdateLoading : false })
    this.setState({isEdit : true})
  }
  editPage(){
    this.setState({isEdit : false})
  }
  UpdateFetch(){
    var log = "";
    this.setState({isUpdateLoading : true})
    if(this.state.isDatePicketed || this.state.isEtheriumAccountChanged || this.state.isNameChanged || this.state.isPasswordChanged){
      if(this.state.Name.length == 0  && this.state.date == this.state.userInfo.birthDate && this.state.Password.length == 0 && this.state.EtheriumAccount.length == 0){
        this.editPage();
        this.setState({isUpdateLoading : false}); 
      }
      if(!this.state.isEtheriumAccountChanged){
        this.state.EtheriumAccount = this.state.userInfo.etheriumAccount;
      }
      if(!this.state.isNameChanged){
        this.state.Name = this.state.userInfo.name;
      }
      if(!this.state.isDatePicketed){
        this.state.date = this.state.userInfo.birthDate
      }
      if(this.state.EtheriumAccount.length > 0 && this.state.EtheriumAccount.length < 42){
        if(log.length > 0)
        log += '\netherium account number is not valid';
        else
        log += 'etherium account number is not valid';  
      }
      if(this.state.Password.length > 0 && this.state.Password.length < 6 && this.state.isPasswordChanged){
        if(log.length > 0)
        log += '\nPassword must be contain at least 6 charecters';
        else
        log += 'Password must be contain at least 6 charecters';
      }
      if(!this.state.Name.length > 0){
        if(log.length > 0)
        log += '\nname must not be empty';
        else
        log += 'name must not be empty';  
      }
      if(!log.length > 0){
        fetch('https://sirin-app.herokuapp.com/user/change/info', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                token : this.state.userInfo.token,
                phone : this.state.userInfo.phone,
                name : this.state.Name,
                email : this.state.userInfo.email,
                birthDate : this.state.date,
                etheriumAccount : this.state.EtheriumAccount,
                password : this.state.Password
              })
            }).then((response) => response.json()).then(async (responseJson) => {
                console.log(responseJson);
                if(responseJson.status == 'ok'){
                  await AsyncStorage.clear();
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
                  this.setState({userInfo : user});
                  user = await JSON.stringify(user);
                  AsyncStorage.setItem('@user_info',user).then(async()=>{
                    console.log("user info added");
                    console.log(user);
                    this.setState({isUpdateLoading : false});
                    await this.editPage();
                    Alert.alert("SUCCESS!","your info updated successfully");
                  });
                }
                else if(responseJson.status == 'error'){
                  massagelog = '';
                 for( var i = 0 ; i< responseJson.data.length ; i ++ ){
                   massagelog += responseJson.data[i].msg;
                 } 
                  this.setState({isUpdateLoading : false});
                  Alert.alert("ERROR!",massagelog);
                }
                else if(responseJson.status == 'token-error'){
                  massagelog = '';
                 for( var i = 0 ; i< responseJson.data.length ; i ++ ){
                   massagelog += responseJson.data[i].msg;
                 } 
                  this.setState({isUpdateLoading : false});
                  Alert.alert("ERROR!",massagelog);
                }
                else{
                  this.setState({isUpdateLoading : false});
                  Alert.alert("ERROR!",'somthing has went wrong plz try later');
                }
              }).catch((error) => {
                  console.error(error);
              });                
            }
      
      
      else{
        this.setState({isUpdateLoading : false}); 
        Alert.alert("ERROR!",log);
      }
    }
    else{
      this.setState({isUpdateLoading : false});
      this.editPage();
    }
  }
  SignOut(){
    this.setState({isSignOutLoading : true});
    fetch('https://sirin-app.herokuapp.com/user/logout', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({token : this.state.userInfo.token})
        }).then((response) => response.json()).then(async(responseJson) => {
          console.log(responseJson);
          this.setState({isSignOutLoading : false});
          if(responseJson.status == 'ok'){
            await AsyncStorage.clear();
            this.setState({userInfo : null});
            this.props.navigation.navigate('Root');
            console.log("deleted");
          }
          else{
            console.log(responseJson);
          }
        }).catch((error) => {console.error(error)
    });
  }
  get ProfileForm(){
    const {isFontLoaded} = this.state;
    const width = Dimensions.get('window').width
    const height = Dimensions.get('window').height
    if(this.state.isEdit){
      if(this.state.isFontLoaded){
        var font = 'Montserrat-Bold';
      }
      else{
        var font = 'sans-serif';
      }
      if(this.state.isDatePicketed && this.state.userInfo){
        var color = "#51a9ce";
      }
      if(!this.state.isDatePicketed && !this.state.userInfo){
        var color = "rgba(195, 195, 198,0.8)"
      }
      if(this.state.isUpdateLoading){
        var submitUpdateButton = <ActivityIndicator size={'large'} color={'#514a9d'}/>
      }
      else{
        var submitUpdateButton = <TouchableOpacity onPress={this.UpdateFetch = this.UpdateFetch.bind(this)}>
                    <LinearGradientButton width={window.width/5} detail={"done"} />
              </TouchableOpacity>
      }    
      return(   
      <View style={{flex : 1}}>
        <View style={{flex : 10,justifyContent : 'center',alignItems : 'center'}}>
          <View style={[styles.toolbar,styles.formInfo,{flex : 2,justifyContent : 'center',alignItems : 'center'}]}>
            <Text style={[{textAlign : 'left',paddingLeft : width/30,fontSize : width/28,paddingTop:10,color:'#b3b3b3'},isFontLoaded && {fontFamily : 'Montserrat-Bold'}]}>Name</Text>
            <TextInput underlineColorAndroid={'transparent'} value={this.state.Name} onChangeText={(Name)=>{this.setState({Name,isNameChanged:true})}}  multiline={true} placeholderTextColor="#51a9ce" placeholder={this.state.userInfo.name} style={[{flex : 2,textAlign : 'right',paddingTop:5,paddingRight : width/30,color:'#51a9ce',fontSize : width/30},isFontLoaded && {fontFamily : 'Montserrat-Bold'}]}/>
          </View>
          <View style={[styles.toolbar,styles.formInfo,{flex : 2,justifyContent : 'center',alignItems : 'center'}]}>
              <Text style={[{textAlign : 'left',fontSize : width/30,paddingLeft : width/30,paddingTop:10,color:'#b3b3b3'},isFontLoaded && {fontFamily : 'Montserrat-Bold'}]}>Phone number</Text>
              <TextInput keyboardType={'phone-pad'} underlineColorAndroid={'transparent'} multiline={true} placeholderTextColor="#51a9ce" editable={false}  placeholder={this.state.userInfo.phone} style={[{flex : 2,textAlign : 'right',paddingTop:5,paddingRight : width/30,color:'#51a9ce',fontSize : width/30},isFontLoaded && {fontFamily : 'Montserrat-Bold'}]}/>
          </View>
          <View style={[styles.toolbar,styles.formInfo,{flex : 2,justifyContent : 'center',alignItems : 'center'}]}>
              <Text style={[{textAlign : 'left',fontSize : width/30,paddingLeft : width/30,paddingTop:10,color:'#b3b3b3'},isFontLoaded && {fontFamily : 'Montserrat-Bold'}]}>Email</Text>
              <TextInput underlineColorAndroid={'transparent'} editable={false} multiline={true} placeholderTextColor="#51a9ce" placeholder={this.state.userInfo.email} style={[{flex : 2,textAlign : 'right',paddingTop:5,paddingRight : width/30,color:'#51a9ce',fontSize : width/30},isFontLoaded && {fontFamily : 'Montserrat-Bold'}]}/>
          </View>
          <View style={[styles.toolbar,styles.formInfo,{flex : 2,justifyContent : 'center',alignItems : 'flex-start'}]}>
              <Text style={[{flex : 1,textAlign : 'left',fontSize : width/30,paddingLeft : width/30,paddingTop:10,color:'#b3b3b3'},isFontLoaded && {fontFamily : 'Montserrat-Bold'}]}>Birthdate</Text>
              {/* <MyDatePicker style={{textAlign : 'right',alignItems : 'flex-end'}} selectedColor={'#51a9ce'} fontSize={width*.031}/> */}
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
                        fontSize : window.width/30,
                        justifyContent: 'flex-end'
                    },
                      dateInput: {
                        marginRight: 5,
                        paddingLeft : 70,
                        borderWidth : 0,
                        marginTop : -5
                      }
                    }}
                    onDateChange={(date)=> {
                      this.setState({date,isDatePicketed : true})
                    }}
                  />
          </View>
          <View style={[styles.toolbar,styles.formInfo,{flex : 2,justifyContent : 'center',alignItems : 'center'}]}>
              <Text style={[{textAlign : 'left',fontSize : width/30,paddingLeft : width/30,paddingTop:10,color:'#b3b3b3'},isFontLoaded && {fontFamily : 'Montserrat-Bold'}]}>Password</Text>
              <TextInput value={this.state.Password} secureTextEntry={false} onChangeText={(Password)=>{this.setState({Password,isPasswordChanged:true})}} underlineColorAndroid={'transparent'} multiline={true} placeholderTextColor="#51a9ce" placeholder="" style={[{flex : 2,textAlign : 'right',paddingTop:5,paddingRight : width/30,color:'#51a9ce',fontSize : width/30},isFontLoaded && {fontFamily : 'Montserrat-Bold'}]}/>
          </View>
          <View style={[styles.toolbar,styles.formInfo,{flex : 2,justifyContent : 'center',alignItems : 'center'}]}>
              <View style={{flex : 1}}>
                <Text style={[{textAlign : 'left',fontSize : width/30,paddingLeft : width/30,paddingTop:10,color:'#b3b3b3'},isFontLoaded && {fontFamily : 'Montserrat-Bold'}]}>Etherium account
                </Text>
              </View>
              <View style={{flex : 1}}>
                <TextInput secureTextEntry={false} onChangeText={(EtheriumAccount)=>{this.setState({EtheriumAccount,isEtheriumAccountChanged:true})}} underlineColorAndroid={'transparent'}  placeholderTextColor="#51a9ce" placeholder={this.state.userInfo.etheriumAccount} style={[{flex : 2,textAlign : 'right',paddingTop:5,paddingRight : width/30,color:'#51a9ce',fontSize : width/30},isFontLoaded && {fontFamily : 'Montserrat-Bold'}]}/>
              </View>
          </View>
        </View>
        <View style={[styles.toolbar,{flex : 3}]}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              {submitUpdateButton}
            </View>
        </View>
      </View>  
      )
    }
    else{
      if(this.state.isSignOutLoading){
        var submitSignOutButton = <ActivityIndicator size={'large'} color={'#514a9d'}/>
      }
      else{
        var submitSignOutButton = <TouchableOpacity onPress={this.SignOut = this.SignOut.bind(this)}>
          <LinearGradientButton detail={"sign out"} />
        </TouchableOpacity>
      }
      return(     
        <View style={{flex : 1}}>
            <View style={{justifyContent : 'center',alignItems : 'center',flex : 3}}>
              <View style={[styles.toolbar,styles.formInfo,{flex : 1}]}>
                  <Text style={[{flex : 1,textAlign : 'left',paddingLeft : width/30,fontSize : width/25,color:'#b3b3b3'},isFontLoaded && {fontFamily : 'Montserrat-Bold'}]}>Name</Text>
                  <Text style={[{flex : 2,textAlign : 'right',paddingRight : width/30,fontSize : width/25,color:'#51a9ce'},isFontLoaded && {fontFamily : 'Montserrat-Bold'}]}>{this.state.userInfo.name}</Text>
              </View>
              <View style={[styles.toolbar,styles.formInfo,{flex : 1}]}>
                  <Text style={[{flex : 1,textAlign : 'left',paddingLeft : width/30,fontSize : width/25,color:'#b3b3b3'},isFontLoaded && {fontFamily : 'Montserrat-Bold'}]}>Phone number</Text>
                  <Text style={[{flex : 1,textAlign : 'right',paddingRight : width/30,fontSize : width/25,color:'#51a9ce'},isFontLoaded && {fontFamily : 'Montserrat-Bold'}]}>{this.state.userInfo.phone}</Text>
              </View>
              <View style={[styles.toolbar,styles.formInfo,{flex : 1}]}>
                  <Text style={[{flex : 1,textAlign : 'left',paddingLeft : width/30,fontSize : width/25,color:'#b3b3b3'},isFontLoaded && {fontFamily : 'Montserrat-Bold'}]}>Email</Text>
                  <Text style={[{flex : 4,textAlign : 'right',paddingRight : width/30,color:'#51a9ce',fontSize : width/30},isFontLoaded && {fontFamily : 'Montserrat-Bold'}]}>{this.state.userInfo.email}</Text>
              </View>
              <View style={[styles.toolbar,styles.formInfo,{flex : 1}]}>
                  <Text style={[{flex : 1,textAlign : 'left',paddingLeft : width/30,fontSize : width/25,color:'#b3b3b3'},isFontLoaded && {fontFamily : 'Montserrat-Bold'}]}>Birthday</Text>
                  <Text style={[{flex : 2,textAlign : 'right',paddingRight : width/30,fontSize : width/25,color:'#51a9ce'},isFontLoaded && {fontFamily : 'Montserrat-Bold'}]}>{this.state.userInfo.birthDate}</Text>
              </View>
            </View>  
            <View style={{flex : 2,flexDirection : 'row'}}>
            <View style={[styles.toolbar,{flex : 2,justifyContent : 'center',alignItems : 'center'}]}>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity onPress={this.editForm = this.editForm.bind(this)}>
                  <LinearGradientButton detail={"edit"} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.toolbar,{flex : 2,justifyContent : 'center',alignItems : 'center'}]}>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {submitSignOutButton}
              </View>
            </View>
            </View>
        </View>
      )
    }
  }
  render() {
  const menuToolbar = ['menu','Profile','back'];
  const text = "edit";
  const {isFontLoaded} = this.state;
  const window = Dimensions.get('window');
  console.log(this.state);
    return (
      this.state.userInfo && 
      <View style={{flex : 1}}>
        <View style={{flex : 1}}>
          <ScrollView>
            <KeyboardAvoidingView behavior='position'>
            <LinearGradient colors={['#514a9d','#24c6dc','#fcfdff','#f7f7f7','#fff']} style={{flexDirection : 'column',alignItems: 'stretch',flex:1,paddingTop : 30,paddingLeft:10,paddingRight:10,height : window.height , width : window.width}}>
              <Svg style={{zIndex : 0,position : 'absolute'}} width={window.width} height={window.height} viewBox="0 0 750 689">
                <G  id="#f7f7f7ff">
                <Path  fill="#f7f7f7" opacity="1.00" d=" M 411.40 0.00 L 442.54 0.00 C 472.09 1.32 501.73 2.46 531.01 6.98 C 546.48 8.80 561.80 11.68 577.15 14.29 C 601.84 19.78 626.44 25.82 650.56 33.48 C 656.65 35.36 662.62 37.60 668.77 39.32 C 696.31 49.81 724.09 60.01 750.00 74.20 L 750.00 347.90 C 748.31 364.21 749.05 380.63 749.04 397.00 C 749.01 401.76 749.73 406.48 750.00 411.24 L 750.00 513.80 C 749.90 518.51 749.58 523.22 749.19 527.92 C 748.58 539.92 749.67 551.99 748.24 563.95 C 747.87 573.00 747.95 582.07 748.16 591.13 C 748.80 596.84 749.79 602.51 750.00 608.28 L 750.00 689.00 L 127.30 689.00 C 124.21 688.90 121.13 688.70 118.05 688.46 C 112.28 687.92 106.53 688.90 100.77 689.00 L 14.32 689.00 C 11.73 688.15 8.46 686.42 6.23 689.00 L 0.00 689.00 L 0.00 93.99 L 1.91 94.01 C 1.72 93.60 1.34 92.80 1.14 92.40 C 11.10 89.61 20.56 85.37 30.18 81.65 C 35.49 79.88 40.82 78.10 46.01 75.96 C 55.44 72.80 64.84 69.55 74.21 66.20 C 152.10 39.59 232.23 18.90 313.91 8.09 C 322.98 7.34 331.89 5.29 341.01 4.97 C 357.59 3.10 374.27 2.12 390.92 1.00 C 397.76 1.03 404.63 1.21 411.40 0.00 Z" />
                </G>
                <G   id="#d4d8d974">
                <Path fill="#d4d8d9" opacity="0.45" d=" M 32.89 80.04 C 37.27 78.69 41.52 76.90 46.01 75.96 C 40.82 78.10 35.49 79.88 30.18 81.65 C 30.92 80.88 31.83 80.27 32.89 80.04 Z" />
                </G>
              </Svg>
              <View style={styles.toolbar}>
                <View style={styles.toolbarButton}>
                <TouchableOpacity onPress={()=>{
                  this.props.navigation.navigate('DrawerOpen')
                  }}>
                  <Svg width="56" height="31" viewBox="0 -10 67 55" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <G id="#82828282">
                      <Path fill="#828282" opacity="0.51" d=" M 0.00 0.00 L 0.53 0.00 L 0.38 0.46 L 0.00 0.47 L 0.00 0.00 Z" />
                      <Path fill="#828282" opacity="0.51" d=" M 55.46 0.00 L 56.00 0.00 L 56.00 0.48 L 55.48 0.50 L 55.46 0.00 Z" />
                    </G>
                    <G id="#ffffffff">
                      <Path fill="#ffffff" opacity="1.00" d=" M 0.53 0.00 L 55.46 0.00 L 55.48 0.50 L 56.00 0.48 L 56.00 2.44 C 52.77 3.46 49.37 3.11 46.04 3.15 C 35.05 3.13 24.07 3.15 13.08 3.14 C 8.72 3.11 4.32 3.42 0.01 2.59 L 0.00 2.93 L 0.00 0.47 L 0.38 0.46 L 0.53 0.00 Z" />
                      <Path fill="#ffffff" opacity="1.00" d=" M 0.00 13.91 C 1.61 13.27 3.34 13.13 5.06 13.16 C 20.04 13.20 35.02 13.19 50.00 13.16 C 52.01 13.16 54.01 13.35 56.00 13.63 L 56.00 16.09 C 54.40 16.72 52.69 16.87 50.99 16.84 C 36.00 16.81 21.02 16.81 6.03 16.84 C 4.01 16.84 2.00 16.64 0.00 16.37 L 0.00 13.91 Z" />
                      <Path fill="#ffffff" opacity="1.00" d=" M 0.00 27.42 C 4.61 26.52 9.32 26.93 13.98 26.86 C 22.11 26.91 30.24 26.75 38.37 26.95 C 38.23 27.77 37.96 29.42 37.83 30.24 C 27.58 30.92 17.27 30.31 6.99 30.55 C 4.65 30.31 1.68 31.32 0.00 29.13 L 0.00 27.42 Z" />
                    </G>
                  </Svg>
                </TouchableOpacity> 
                </View>
                <Text style={[styles.toolbarTitle,isFontLoaded && {fontFamily : 'Montserrat-Bold'}]}>profile</Text>
                <View style={styles.toolbarButton}>
                  <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
                    <Svg viewBox="0 -10 67 55" height='40' width='40'>
                      <G id="#ffffffff">
                        <Path fill="#ffffff" opacity="1.00" d=" M 13.55 0.78 C 14.45 1.65 15.35 2.54 16.23 3.43 C 13.31 6.21 10.45 9.06 7.67 11.98 C 21.11 12.02 34.56 11.99 48.00 12.00 L 48.00 16.00 C 34.57 16.01 21.15 15.98 7.72 16.01 C 10.49 18.89 13.32 21.71 16.20 24.48 C 15.33 25.38 14.46 26.28 13.59 27.19 C 9.30 22.74 4.86 18.45 0.53 14.04 C 4.72 9.48 9.31 5.30 13.55 0.78 Z" />
                      </G>
                    </Svg>
                  </TouchableOpacity>
                </View>
              </View>
                <View style={[styles.toolbar,styles.imageContainer,{marginTop : window.width/20,marginBottom : window.width/20}]}>
                    <Image source={{uri : this.state.userInfo.image}} style={[styles.profileImage,{width : window.width/2.5 , height : window.width/2.5}]}></Image> 
                </View>
                {this.ProfileForm}  
            </LinearGradient>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>  
    );
  }
}
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const styles = StyleSheet.create({
  profileImage : {
    borderRadius : 100,
    marginTop : 0,
    zIndex : 1
  },
  formContent : {
    justifyContent : 'center',
    alignItems : 'center'
  },
  toolbar:{
    flexDirection : 'row',
    zIndex : 1,
    paddingTop:0,
    paddingBottom:height/45,
    backgroundColor:'transparent'
  },
  imageContainer : {
    justifyContent : 'center',
    marginBottom : height/20
  },
  toolbarButton : {
    flex : -1,
    justifyContent : 'center',
    alignSelf : 'center'
  },
  toolbarTitle : {
    flex:1,
    paddingRight : 20,
    paddingVertical : 5,
    textAlign : 'center',
    fontSize : width/15,
    color : '#fff',
    justifyContent : 'center'
  }
});
export default Profile;