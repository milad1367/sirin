import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Switch,
} from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import * as Progress from 'react-native-progress';

const window =  Dimensions.get('window');

export default class CircleSteps extends Component {
  render() {
    return (   
    <View>          
      <Progress.Circle progress={this.props.steps} showsText={true} borderColor={'#7293c3'} color={'red'} thickness={10}  borderWidth={5} size={window.width/3}  />
        <View style={{ flexDirection: 'row', justifyContent: 'center',}}>
          <Text style={{color:'black',paddingTop:Math.round(window.height/75) ,fontWeight:'bold',fontSize:Math.round(window.height/35),}}>{Number((this.props.steps/2000).toFixed(2))} {"\n"} km</Text>
       </View>
    </View>
    );
  }
}

