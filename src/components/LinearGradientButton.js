import React, { Component } from 'react';
import {Text,View,Image,StyleSheet,Dimensions,Platform} from 'react-native';
import { LinearGradient } from 'expo';
import { Font } from 'expo';
export default class LinearGradientButton extends Component {
  state={
    isfontLoaded : false
  }
  componentDidMount(){
    Font.loadAsync({
      'Montserrat-Bold': require('../assets/fonts/MontserratAlternates-Bold.ttf'),
      'Montserrat-Light' : require('../assets/fonts/MontserratAlternates-Regular.ttf'),
    }).then(()=>{
      this.setState({isfontLoaded : true});
    });
  }
  render() {
    const window= Dimensions.get('window');
    const{isfontLoaded} = this.state;
    if(Platform.OS === 'ios'){
      return (
        <LinearGradient
          start={[0.1,0.4]}
          end={[0.5,0.4]}
          colors={['#48c6ef', '#514a9d']}
          style={{ padding: 15, width: this.props.width || 150, marginTop : 10,marginBottom : 10, alignItems: 'center', borderRadius: 22 }}>
          <Text
            style={[{
              backgroundColor: 'transparent',
              fontSize: this.props.width*.15,
              color: '#fff',
            },isfontLoaded && {fontFamily : 'Montserrat-Light'}]}>
            {this.props.detail}
          </Text>
        </LinearGradient>
      );
    }
    else{
      return(
      <LinearGradient
        start={[0,1]}
        end={[1,0]}
        colors={['#48c6ef','#4eb0d2', '#514a9d']}
        style={{ padding: 15, width: this.props.width || 150, marginTop : 10,marginBottom : 10, alignItems: 'center', borderRadius: 22 }}>
        <Text
          style={[{
            backgroundColor: 'transparent',
            fontSize: this.props.width*.15,
            color: '#fff',
          },isfontLoaded && {fontFamily : 'Montserrat-Light'}]}>
          {this.props.detail}
        </Text>
      </LinearGradient>
      )
    }
  }
}
