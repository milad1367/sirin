import React, { Component } from 'react';
import GyroscopeSensor from '../containers/GyroscopeSensor';
import MyLocation from '../containers/MyLocation';
import GetPedometer from '../containers/GetPedometer';
import AntiHack from '../containers/AntiHack';
import MainPageStates from '../containers/MainPageStates';

import { AsyncStorage,StyleSheet, Text, View } from 'react-native';
export default class  RootHome extends Component {
  
    render(){

        return(
              <View>
                <MyLocation />
                <AntiHack />
                <MainPageStates />
             </View>
        )
        
    }

 }