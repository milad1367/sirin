import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GetStartPos , GetEndPos , SetSession , StepsChecker,setPedoSteps,setRealSteps,DateValue } from '../actions';
import { Text , View } from "react-native";
import CalcDistance from './CalcDistance';
import AntiMethod2 from './AntiMethod2';
import Captcha from '../components/Captcha';
import AntiMethod4 from './AntiMethod4';

class AntiHack extends React.Component {


  componentDidMount(){
  
  }


  shouldComponentUpdate(nextProps, nextState) {

    if (nextProps.gps && this.props.gps ) {
      this.test2 = nextProps.gps.coords.latitude - this.props.gps.coords.latitude;
    }

    if ( nextProps.session.end && nextProps.EndPos ) {

      this.props.dispatch(GetStartPos(0));
      this.props.dispatch(GetEndPos(0));
      this.props.dispatch(SetSession(0));

    }
    if ( ((nextProps.steps - nextProps.FinalSteps.PedoSteps) >=100) && this.props.StartPos && nextProps.session.start ) {
       console.log("if on method2");
       let steps = nextProps.steps - nextProps.FinalSteps.PedoSteps;
       let startPos = this.props.StartPos;
       let endPos;
       if(this.props.gps) {
        endPos = this.props.gps;
       }
       else {
         endPos = nextProps.gps;
       }
       console.log("endPos method2 : ");
       console.log(endPos );
       console.log( this.props.gps);
       console.log("nextProps.gps : "); 
       console.log(nextProps.gps);
        this.props.dispatch(setPedoSteps(nextProps.steps));
       if ( AntiMethod2(steps,startPos,endPos )) {
          console.log("real steps is set on antimethod2");
          this.props.dispatch(setRealSteps(steps));
          this.props.dispatch(GetStartPos(this.props.gps));
       }
       else {
       this.props.dispatch(GetStartPos(this.props.gps));
       }
    }

    return true
  }

  componentWillReceiveProps(nextProps) {

    if (!this.props.StartPos && this.props.gps && SpeedNorm("walk","start",nextProps.gps.coords.speed ) && nextProps.steps ) {
         this.props.dispatch(GetStartPos(this.props.gps));
         this.props.dispatch(SetSession("start"));
         
    }
    if ( ( this.props.steps > 0) && ( this.props.steps == nextProps.steps ) && nextProps.session.start && SpeedNorm("walk","end",nextProps.gps.coords.speed ) ) {
          console.log("i am in steps checker!" );
          this.props.dispatch(SetSession("end"));
          this.props.dispatch(GetEndPos(nextProps.gps));
          
    }
 
  }

  render() {
    let StartPos,EndPos = 0
    if(this.props.StartPos) {
     StartPos = this.props.StartPos.coords.latitude;
    }
    if(this.props.EndPos) {
      EndPos = this.props.EndPos.coords.latitude;
    }


    
    return(
      /*
    <View>
      
      <Text> distance: {this.distance} </Text>
      <Text> steps: {this.props.steps} </Text>
      <Text> startpos: {StartPos} </Text>
      <Text> endpos: {EndPos} </Text>
      <Text> RealSteps: {this.props.FinalSteps.RealSteps} </Text>
     
      
    </View>
*/
false
    )
  }
}




AntiHack.PropTypes = {
  
}
  


const mapStateToProps = state => ({
  gps:state.Gps,
  steps:state.steps,
  StartPos:state.StartPos,
  EndPos:state.EndPos,
  session:state.Session,
  stepsChecker:state.StepsChecker,
  FinalSteps:state.FinalSteps,
})



  export default connect(mapStateToProps)(AntiHack);




const SpeedNorm = (  which , pos , speed  ) => {

const walk = {
   MinSpeed:-1,
   MaxSpeed:4
 };

 const run = {};

 if ( which == "walk" ) {
   if( pos == "start" ) {
   if ( speed > walk.MaxSpeed || speed < walk.MinSpeed  ) {
     return false
   }
   return true 
 }

 else {
   
   if ( pos == "end" && speed < walk.MinSpeed || speed > walk.MaxSpeed  ) {
     
      return true
   }
   return false
 }

}
console.log("bad code in speed norm const!");
 return false

}
