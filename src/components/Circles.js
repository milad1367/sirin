import React from 'react' ;
import Expo from "expo";
import { createStore } from 'redux'
import { Pedometer } from "expo";
import CircleCoins from './CircleCoins';
import CircleSteps from './CircleSteps';
import { StyleSheet, Text, View } from 'react-native';
import { giveSteps } from '../actions'
import { connect } from 'react-redux';
import { ShowCircles } from './ShowCircles'
import reducer from '../reducers';

 class Circles extends React.Component {
  state = {
    isPedometerAvailable: "checking",
    pastStepCount: 0,
    currentStepCount: 0
  };
  componentDidMount() {
    this._subscribe();
    
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount(result => {
      this.setState({
        currentStepCount: result.steps
      });
      this.props.dispatch(giveSteps(result.steps)); 
      
    });
    
    Pedometer.isAvailableAsync().then(
      result => {
        this.setState({
          isPedometerAvailable: String(result)
        });
         
        
       
      },
      error => {
        this.setState({
          isPedometerAvailable: "Could not get isPedometerAvailable: " + error
        });
      }
    );

    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        this.setState({ pastStepCount: result.steps });
      //  this.props.dispatch(giveSteps(result.steps));
      },
      error => {
        this.setState({
          pastStepCount: "Could not get stepCount: " + error
        });
      }
    );
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };
  render() {
    
    return(
      <View>
        <Text> {this.state.isPedometerAvailable} </Text>
        <Text> {this.state.pastStepCount} </Text>
        <Text> {this.state.currentStepCount} </Text>

      </View>
    );
  }
}

Circles = connect()(Circles);

export default Circles;
const styles = StyleSheet.create({
  container: {
    flex : 1,
    justifyContent: 'center'
  },
});
