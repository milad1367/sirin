import React , {Component} from 'react';
import Captcha from '../components/Captcha';
import { connect } from 'react-redux';
import { Text , View } from "react-native";
import GetRndInteger from '../functions/GetRndInteger';

 class AntiMethod4 extends Component {

render() {
    
    var CaptchaScene ;
    
    var RndInt = GetRndInteger(1000,10000);
    console.log(RndInt);
    if ( this.props.FinalSteps.RealSteps >= RndInt ) {
         CaptchaScene = <Captcha /> ;
    }
    return (
      <View>
        
        { CaptchaScene }

      </View>
    )
}

}

const mapStateToProps = state => ({
    steps:state.steps,
    EndPos:state.EndPos,
    session:state.Session,
    FinalSteps:state.FinalSteps,
  })

export default connect(mapStateToProps)(AntiMethod4);
