import Expo from "expo";
import React from "react";
import { Pedometer } from "expo";
import { StyleSheet, Text, View } from "react-native";
import ShowCircles from "../components/ShowCircles";

import getStepCounter from "../actions";
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  steps :state.steps
})

const StepCounter = connect(mapStateToProps)(ShowCircles);
export default StepCounter
