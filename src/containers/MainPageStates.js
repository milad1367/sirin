import React, { Component } from 'react';

import {Text,View } from 'react-native';

import { connect } from 'react-redux';
import MainPage from '../components/MainPage';
import GetPedometer from './GetPedometer';
import MyLocation from './MyLocation';
import AntiHack from './AntiHack';

mapStateToProps = ( state ) => ({
   ProgressSteps : state.steps
})
 const MainPageStates = connect(
    mapStateToProps
)(MainPage)

export default MainPageStates 