import {Text,Button,View,Image} from 'react-native';
import { StackNavigator } from 'react-navigation';
import AntiHack from '../containers/AntiHack';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class  Test extends Component {

  render(){
    //console.log(test);
    return(null) 

    console.log(this.props.test);

    return null
}

}

Test.propTypes = {
      test: PropTypes.number.isRequired
        
}

 export default Test