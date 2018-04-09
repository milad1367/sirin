import Svg,{
    Circle,
    Ellipse,
    G,
    RadialGradient,
    Line,
    Path,
    Text,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Use,
    Defs,
    Stop
  } from 'react-native-svg';
  import {View,Image,StyleSheet,Dimensions} from 'react-native';
  import { LinearGradient } from 'expo';
  import React, { Component } from 'react';
  export default class LinearText extends Component{
    render(){
        const window = Dimensions.get('window');
        return(
            <Svg
            height="60"
            width="200"
            >
            <Text
                style={{textAlign:'center'}}
                fill="#6572b2"
                stroke="#50abcf"
                fontSize="25"
                fontWeight="bold"
                x="100"
                y="20"
                textAnchor="middle"
            >{this.props.text}
            </Text>
        </Svg>
        )
    }

  }