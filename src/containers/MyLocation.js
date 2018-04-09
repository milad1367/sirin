import React, {Component} from 'react';
import {Platform,Text,View,StyleSheet} from 'react-native';
import {Constants,Location,Permissions} from 'expo';
import {getGps,getError,setGpsAlarmFlag} from '../actions';
import {connect} from 'react-redux';

class MyLocation extends Component {

  componentWillMount() {
      if (Platform.OS === 'android' && !Constants.isDevice) {
        let text = 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!';
        this.props.dispatch(getError(text));
        } else {
          this.getLocation();
      }     
  }
  componentDidMount() {
    this._getGpsStatus();
  }
  componentWillUnmount() {
    
      this.getLocation = null;
  }



  getLocation = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }
    this.mlocation = Expo.Location.watchPositionAsync({
        enableHighAccuracy: true,
        timeInterval: 1,
        distanceInterval: 1
    }, (loc) => {
        if (loc.timestamp) {
            this.props.dispatch(getGps(loc));
        } else {
            this.props.dispatch(getError("Gps is off"));
        }
    });
}
_getGpsStatus= async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }
  
    let tempGps = await Location.getProviderStatusAsync();
    
    if (!tempGps.gpsAvailable && (this.props.gps.GpsAlarmFlag !="true" || !this.props.gps ) ) {
      alert('please turn on gps');
     // this.props.dispatch(setGpsAlarmFlag("true"));

    }
    else {
     // this.setState({ gps: "on" });
      
    }
  };

  render() {

      return (
          false
      );
  }
}
const mapStateToProps = state => ({
  gps:state.Gps
})
MyLocation = connect(mapStateToProps)(MyLocation);
export default MyLocation
const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
  },
  paragraph: {
      margin: 24,
      fontSize: 18,
      textAlign: 'center',
  },
});