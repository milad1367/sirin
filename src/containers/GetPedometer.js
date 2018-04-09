
import React from 'react' ;
import Expo from "expo";
import { Pedometer } from "expo";
import { StyleSheet, Text, View } from 'react-native';
import { giveSteps,giveStepsPast } from '../actions'
import { connect } from 'react-redux';
import { ShowCircles } from '../components/ShowCircles'
import reducer from '../reducers';




class GetPedometer extends React.Component {
  state = {
    isPedometerAvailable : "checking",
    pedometer:0
  }
    componentDidMount() {
      this._subscribe();
    }
  
    componentWillUnmount() {
      this._unsubscribe();
      
    }
  
    _subscribe = () => {
      this._subscription = Pedometer.watchStepCount(result => {
        this.setState({
          pedometer:result.steps
        })
        this.props.dispatch(giveSteps(result.steps)); 
        
      });
      
      Pedometer.isAvailableAsync().then(
        result => {
          this.setState({
            isPedometerAvailable: String(result)
          });
           return String(result);
          
         
        },
        error => {
          this.setState({
            isPedometerAvailable: "Could not get isPedometerAvailable: " + error
          });
         return error
        }
      );
  
      const end = new Date();
      const start = new Date();
      start.setDate(end.getDate() - 1);
      Pedometer.getStepCountAsync(start, end).then(
        result => {
         // this.setState({ pastStepCount: result.steps });
          this.props.dispatch(giveStepsPast(result.steps));
        },
        error => {
       //   this.setState({
        //    pastStepCount: "Could not get stepCount: " + error
        //  });
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
        <Text> isPedometerAvailable: {this.state.isPedometerAvailable} </Text>
        <Text> pedometer: {this.state.pedometer} </Text>
        </View>
      )
    }
  }

  GetPedometer = connect()(GetPedometer);
  
  export default GetPedometer;
  const styles = StyleSheet.create({
    container: {
      flex : 1,
      justifyContent: 'center'
    },
  });
  