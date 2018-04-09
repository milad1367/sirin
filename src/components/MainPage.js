import React, { Component } from 'react';
import {Text,View,Image,StyleSheet,Dimensions,TouchableOpacity,Switch} from 'react-native';
import { LinearGradient } from 'expo';
import { Font } from 'expo';
import MainPageToolBar from './mainPageToolbar';
import { DrawerNavigator } from 'react-navigation';
import PropTypes from 'prop-types';
import AntiHack from '../containers/AntiHack';
import GetPedometer from '../containers/GetPedometer';
import MyLocation from '../containers/MyLocation';
import History from './history';
import Profile from './ProfileEdit';
import Start from './Start';
import Store from './Store';
import Collect from './Collect';
import Svg,{G,Path} from 'react-native-svg';
import Chart from './chart';

import CircularProgressBar from './circularProgress';

   class MainPage extends Component {
    static navigationOptions = {
      header : null
    } 
    constructor () {
      super()
      state = {
        dimensions: undefined,
        informationOfView : undefined,
        isFontloaded : false
      }
    }

    componentDidMount(){
      const {navigate} = this.props.navigation;
      Font.loadAsync({
        'Montserrat-Bold': require('../assets/fonts/MontserratAlternates-Bold.ttf'),
        'Montserrat-Light' : require('../assets/fonts/MontserratAlternates-Regular.ttf'),
      }).then(()=>{
        this.setState({isFontloaded : true})
      });
      this.setState({width : 0});
      this.setState({borderColor : 'transparent',borderWidth : 0}) 
      this.setState({colorFalseSwitchIsOn : false})
      this.setState({borderRadius : 0,isOpen : false})
    }
    componentWillMount(){
      this.setState({width : 0}); 
      this.setState({colorFalseSwitchIsOn : false})
      this.setState({borderColor : 'transparent',borderWidth : 0})
      this.setState({borderRadius : 0,isOpen : false})
    } 
    render(){
      
      if (this.state.dimensions) {
        var { dimensions } = this.state
        var { width, height } = dimensions
      }
      const menuToolbar = ['menu','home','back'];
      const window = Dimensions.get('window');
      const {isFontloaded} = this.state;
      let steps;
        if ( this.props.ProgressSteps == 0 ) {
           steps = 0 ;

        }
        else {
          steps = this.props.ProgressSteps;
        }
         
        steps = this.props.ProgressSteps;
         let ConsX = ( this.props.ProgressSteps == 0 ) ? 0 : this.props.ProgressSteps+2;
         let ConsY = ( this.props.ProgressSteps == 0 ) ? 0 : this.props.ProgressSteps+5; 
        return(
        <View
          onLayout={(event) => {
          if (this.state.dimensions) return // layout was already called
          let {width, height} = event.nativeEvent.layout
          this.setState({dimensions: {width, height}})
          }}
          style={{flex : 1}} >
          {this.state.dimensions ?
          <View  style={{flex : 1}}>
            <View style={{flex : 1}}> 
              <LinearGradient colors={['#514a9d','#6572b2','#50abcf',"#24c6dc",'#86d2ea']} style={{borderColor : this.state.borderColor,borderWidth : this.state.borderWidth,flexDirection : 'column',borderRadius : this.state.borderRadius,alignItems: 'stretch',flex:1,paddingTop : 30,paddingLeft:10,paddingRight:10,height : height , width : width}}>
                  <Svg style={{zIndex : 0,top: height*0.24,position : 'absolute'}} width={width} height={height} viewBox="0 0 750 689">
                    <G  id="#f7f7f7ff">
                    <Path  fill="#f7f7f7" opacity="0.75" d=" M 411.40 0.00 L 442.54 0.00 C 472.09 1.32 501.73 2.46 531.01 6.98 C 546.48 8.80 561.80 11.68 577.15 14.29 C 601.84 19.78 626.44 25.82 650.56 33.48 C 656.65 35.36 662.62 37.60 668.77 39.32 C 696.31 49.81 724.09 60.01 750.00 74.20 L 750.00 347.90 C 748.31 364.21 749.05 380.63 749.04 397.00 C 749.01 401.76 749.73 406.48 750.00 411.24 L 750.00 513.80 C 749.90 518.51 749.58 523.22 749.19 527.92 C 748.58 539.92 749.67 551.99 748.24 563.95 C 747.87 573.00 747.95 582.07 748.16 591.13 C 748.80 596.84 749.79 602.51 750.00 608.28 L 750.00 689.00 L 127.30 689.00 C 124.21 688.90 121.13 688.70 118.05 688.46 C 112.28 687.92 106.53 688.90 100.77 689.00 L 14.32 689.00 C 11.73 688.15 8.46 686.42 6.23 689.00 L 0.00 689.00 L 0.00 93.99 L 1.91 94.01 C 1.72 93.60 1.34 92.80 1.14 92.40 C 11.10 89.61 20.56 85.37 30.18 81.65 C 35.49 79.88 40.82 78.10 46.01 75.96 C 55.44 72.80 64.84 69.55 74.21 66.20 C 152.10 39.59 232.23 18.90 313.91 8.09 C 322.98 7.34 331.89 5.29 341.01 4.97 C 357.59 3.10 374.27 2.12 390.92 1.00 C 397.76 1.03 404.63 1.21 411.40 0.00 Z" />
                    </G>
                    <G   id="#d4d8d974">
                    <Path fill="#514a9d" opacity="0.0" d=" M 32.89 80.04 C 37.27 78.69 41.52 76.90 46.01 75.96 C 40.82 78.10 35.49 79.88 30.18 81.65 C 30.92 80.88 31.83 80.27 32.89 80.04 Z" />
                    </G>
                  </Svg>
                  <View style={[styles.toolbar]}>
                      <View style={styles.toolbarButton}>
                        <TouchableOpacity onPress={()=>{
                          this.props.navigation.navigate('DrawerOpen');
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
                      <Text style={[styles.toolbarTitle,{fontSize : 25 },isFontloaded && {fontFamily : 'Montserrat-Bold'}]}>home</Text>
                  </View>
                  <View style={{flex : 3,justifyContent : 'center',alignItems : 'center'}}>
                    <View style={styles.toolbar}>
                    {/* <Text style={[{position : 'absolute',top : 45,left : 40,zIndex : 1,color : '#fff',fontSize : width/12,textAlign : 'center',alignItems : 'center',justifyContent:'center'},isFontloaded && {fontFamily : 'Montserrat-Bold'}]}> {steps}{"\n  steps"} </Text>  */}
                        <CircularProgressBar size={width/2.5} steps={steps} color={'#fff'} borderColor={'rgba(134, 210, 234,0.1)'} progressSteps={steps} style={styles.toolbarButton}/>
                        <CircularProgressBar size={width/3} coins={[ConsX,ConsY]} color={'#ffbc5e'} borderColor={'rgba(134, 210, 234,0.1)'} progressCoin={steps/100} style={styles.toolbarButton}/>
                    </View>
                    <View style={{flex : 3,justifyContent : 'center',alignItems : 'center',marginTop : 0}}>
                        <View style={[styles.toolbar,{justifyContent : 'center',alignItems : 'center',width : width}]}>
                        <Switch
                          onValueChange={(value) => this.setState({colorFalseSwitchIsOn: value})}
                          onTintColor="#8ac6dd"
                          tintColor="#8ac6dd"
                          thumbTintColor="#eee"
                          style={{transform: [{scaleX: 1.5}, {scaleY: 1.4}],height : 35}}
                          value={this.state.colorFalseSwitchIsOn} />
                        </View>
                        <View style={[styles.toolbar]}>
                          {this.state.colorFalseSwitchIsOn ? <Text style={[{textAlign: 'right',color : '#50abcf',fontSize:Math.round(window.height/35)},isFontloaded &&{fontFamily : 'Montserrat-Bold' }]}>run</Text>  : <Text style={{textAlign: 'left',fontFamily : 'Montserrat-Bold',color : '#50abcf',fontSize:Math.round(window.height/35)}}>walk</Text>}
                        </View>
                        <View style={[styles.toolbar]}>
                            <Text style={[{color : '#6572b2',fontSize:Math.round(window.height/40),textAlign : 'center'},isFontloaded && {fontFamily : 'Montserrat-Bold'}]}>What was Your Bussies Day</Text>
                        </View>
                    </View>
                    <View style={{flex : 3,justifyContent : 'center',alignItems : 'center',marginBottom : 20}}>
                      <View style={[styles.toolbar,{backgroundColor : "rgba(255, 255, 255,0.6)",margin : 15,borderRadius:5,paddingTop : 10,marginTop : 5}]}>
                          <Chart/>
                      </View>
                    </View>
                  </View>    
                </LinearGradient>
              </View>
            </View>
            : undefined}  

          </View>
        )
    }

  }


MainPage.propTypes = {
    ProgressSteps: PropTypes.number.isRequired
 }


export default MainPage
  
  const styles = {
    toolbar:{
        flexDirection : 'row',
        alignSelf : 'center',
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor:'transparent',
        marginTop : 15
      },
      toolbarButton : {
        flex : 1,
        justifyContent : 'center',
        alignSelf : 'center'
      },
      toolbarTitle : {
        flex:5,
        justifyContent : 'flex-start',
        textAlign : 'center',
        alignSelf : 'center',
        paddingRight:50,
        color : '#fff',
      }
  }