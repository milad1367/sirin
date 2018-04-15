import React, { Component } from 'react';
import {Text,View,Image,StyleSheet} from 'react-native';
import FetchStepCounter from '../actions';
import { giveSteps } from '../actions'
import reducer from '../reducers';
import { connect } from 'react-redux'
import Expo from "expo";
import { Pedometer } from "expo";

 class Sirin extends Component {
  render() {
    this.props.dispatch(giveSteps("25"));
   return(
     <Text>sirin</Text>
   )
  }
}
Sirin = connect()(Sirin)

export default Sirin
