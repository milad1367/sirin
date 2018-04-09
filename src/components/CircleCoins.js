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

export default class CircleCoins extends Component {
    render() {
        return (   
        <View>          
          <Progress.Circle progress={this.props.coins} showsText={true} borderColor={'#7293c3'} color={'red'} thickness={10}  borderWidth={5} size={window.width/4}  />
            <View style={{ flexDirection: 'row', justifyContent: 'center',}}>
              <Text style={{color:'black',paddingTop:Math.round(window.height/75) ,fontWeight:'bold',fontSize:Math.round(window.height/35),}}>{Number((this.props.coins).toFixed(1))} {"\n"} km</Text>
           </View>
        </View>
        );
      }
}
