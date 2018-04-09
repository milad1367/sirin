import React, { Component } from 'react';
import {Text,View,Image,StyleSheet} from 'react-native';
import Basic from './Basic';
import { LinearGradient } from 'expo';
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
export default class ToolBar4Options extends Component {
  render() {
    return (
        <View style={styles.toolbar}>
            <View style={styles.toolbarButton}>
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
            </View>
            <View style={styles.toolbarButton}>
            <Svg viewBox="0 -10 67 55" height='40' width='40'>
              <G id="#ffffffff">
                <Path fill="#ffffff" opacity="1.00" d=" M 13.55 0.78 C 14.45 1.65 15.35 2.54 16.23 3.43 C 13.31 6.21 10.45 9.06 7.67 11.98 C 21.11 12.02 34.56 11.99 48.00 12.00 L 48.00 16.00 C 34.57 16.01 21.15 15.98 7.72 16.01 C 10.49 18.89 13.32 21.71 16.20 24.48 C 15.33 25.38 14.46 26.28 13.59 27.19 C 9.30 22.74 4.86 18.45 0.53 14.04 C 4.72 9.48 9.31 5.30 13.55 0.78 Z" />
              </G>
            </Svg>
            </View>
            <Text style={styles.toolbarTitle}>history</Text>
            <Image  source={require('../imgs/face.png')} style={styles.profileImage}/> 
        </View>
    );
  }
}
const styles = StyleSheet.create({
  toolbar:{
    flexDirection : 'row',
    paddingTop:0,
    paddingBottom:10,
    justifyContent : 'center',
    backgroundColor:'transparent'
  },
  profileImage : {
    width : 50,
    height : 50,
    borderRadius : 50,
    shadowOpacity : 1,
    shadowColor : '#252525',
    justifyContent: 'space-between'
  },
  toolbarImage:{
    flex : 1,
    justifyContent : 'center'
  },
  toolbarButton : {
    flex : 3,
    justifyContent : 'center',
  },
  toolbarTitle : {
    flex:5,
    paddingRight : 20,
    textAlign : 'left',
    fontSize : 30,
    color : '#fff',
    fontWeight : 'bold',
    justifyContent : 'center'
  }
});
