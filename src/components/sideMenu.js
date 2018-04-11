import React, { Component } from 'react';
import {Text,View,Image,StyleSheet,Dimensions,TouchableOpacity } from 'react-native';
import { LinearGradient, Font } from 'expo';
import History from './history';
import Profile from './ProfileEdit';
import Start from './Start';
import Store from './Store';
import Collect from './Collect';
import MainPage from './MainPage';

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

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  export default class Sidemenu extends Component {
    static navigationOptions = {
      header : null
    } 
    state = {
      isFontLoaded : false
    }
    componentDidMount(){
      Font.loadAsync({
        'Montserrat-Bold': require('../assets/fonts/MontserratAlternates-Bold.ttf'),
        'Montserrat-Light' : require('../assets/fonts/MontserratAlternates-Regular.ttf'),
      }).then(()=>{
        this.setState({isFontLoaded : true});
      });
    }
    render(){
      const {isFontLoaded} = this.state;
      return(
        <View style={{flex : 1}}>  
            <LinearGradient  colors={['#514a9d','#24c6dc','#f7f7f7','#f7f7f7']} style={{flexDirection : 'column',borderRadius : 0,alignItems: 'stretch',flex:1,paddingTop : 30,paddingLeft:10,paddingRight:10,height : height , width : width }}>
              <Svg style={{zIndex : 0,position : 'absolute',top : height*.08}} width={width} height={height} viewBox={"0 0 " + 751 + " " + 1005}>
                <G id="#f7f7f7ff">
                <Path fill="#f7f7f7" opacity="0.7" d=" M 479.38 0.00 L 501.74 0.00 C 519.87 0.72 538.06 2.30 555.77 6.38 C 565.96 8.61 576.13 10.89 586.25 13.37 C 588.30 14.20 590.51 14.61 592.73 14.70 C 594.96 15.16 597.24 15.44 599.53 15.47 C 613.61 23.52 629.37 27.99 643.88 35.15 C 676.96 50.61 707.46 71.83 732.77 98.21 C 739.10 104.61 744.83 111.55 750.85 118.24 L 751.00 117.23 L 751.00 494.52 C 750.01 501.29 750.39 508.14 750.32 514.95 C 750.33 575.95 750.32 636.95 750.35 697.95 C 750.44 706.79 749.99 715.67 751.00 724.46 L 751.00 1004.00 C 516.99 1003.99 282.99 1004.00 48.98 1004.00 C 32.99 1004.16 16.98 1003.64 1.00 1004.31 C 1.01 749.23 0.99 494.14 1.00 239.07 C 1.02 236.87 1.20 234.69 1.31 232.50 C 7.86 233.17 14.43 234.05 21.03 233.97 C 33.69 233.25 45.99 229.93 58.02 226.14 C 66.95 222.20 75.51 217.46 84.02 212.71 C 91.05 207.89 98.16 203.18 105.04 198.14 C 117.05 190.34 128.06 181.10 138.97 171.85 C 164.76 150.71 189.72 128.48 216.95 109.17 C 259.68 78.56 304.61 50.42 353.38 30.44 C 386.68 17.13 421.41 7.13 456.94 2.08 C 464.42 1.39 471.93 1.03 479.38 0.00 Z" />
                </G>
                <G id="#9ba3a81f">
                <Path fill="#9ba3a8" opacity="0.0" d=" M 586.25 13.37 C 588.46 13.48 590.68 13.83 592.73 14.70 C 590.51 14.61 588.30 14.20 586.25 13.37 Z" />
                </G>
                <G id="#f0f1f19d">
                <Path fill="#f0f1f1" opacity="0.2" d=" M 750.32 514.95 C 750.39 508.14 750.01 501.29 751.00 494.52 L 751.00 724.46 C 749.99 715.67 750.44 706.79 750.35 697.95 C 750.32 636.95 750.33 575.95 750.32 514.95 Z" />
                </G>
              </Svg>
              <View style={{flex : 1,justifyContent : 'center'}}>
                <View style={[styles.menuContainer,{alignItems : 'flex-start'}]}>
                    <Image source={require('../imgs/me.png')} style={{height : width/5 , width : width/5,borderRadius : 75,margin : 15}}/>
                    <Text style={[{color : '#fff',textAlign : 'left',fontSize : 15,marginTop : 35}, isFontLoaded && {fontFamily : 'Montserrat-Bold'}]}>milad asghari {"\n"} 30 years old</Text>
                </View>
              </View>
              <View style={{flex : 3,justifyContent:'center',marginTop : 120}}>
                <View style={{flex : 1,marginLeft :25,alignItems : 'flex-start'}}>
                  <View style={{flex : 1}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                      <View style={styles.menuContainer}>
                          <Text style={[{color : '#4c80b9',textAlign : 'left',fontSize : 18},isFontLoaded && {fontFamily : 'Montserrat-Bold'}]}>Home</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={{flex : 1,marginTop : -30}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('History')}>
                      <View style={styles.menuContainer}>
                          <Text style={[{color : '#4c80b9',textAlign : 'left',fontSize : 18},isFontLoaded && {fontFamily : 'Montserrat-Bold'}]}>History</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={{flex : 1,marginTop : -30}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Store')}>
                      <View style={styles.menuContainer}>
                          <Text  style={[{color : '#4c80b9',textAlign : 'left',fontSize : 18},isFontLoaded && {fontFamily : 'Montserrat-Bold'}]}>Store</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={{flex : 1,marginTop : -30}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Profile')} >
                      <View style={styles.menuContainer}>
                          <Text style={[{color : '#4c80b9',textAlign : 'left',fontSize : 18},isFontLoaded && {fontFamily : 'Montserrat-Bold'}]}>Profile</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={{flex : 1,marginTop : -30}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Collect')} >
                      <View style={styles.menuContainer}>
                          <Text style={[{color : '#4c80b9',textAlign : 'left',fontSize : 18},isFontLoaded && {fontFamily : 'Montserrat-Bold'}]}>Collect</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={{flex : 1,marginTop : 20}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Start')}>
                      <View style={styles.menuContainer}>
                          <Text style={[{color : '#4c80b9',textAlign : 'left',fontSize : 18},isFontLoaded && {fontFamily : 'Montserrat-Bold'}]}>Sign Out</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
          </LinearGradient> 
        </View>
        )
      }
  } 
  const styles = {
      menuContainer : {
        flexDirection : 'row',
        justifyContent : 'flex-start',
        backgroundColor:'transparent',
      }
  }
  