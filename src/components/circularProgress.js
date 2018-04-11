// import { AnimatedCircularProgress } from 'react-native-circular-progress';
import * as Progress from 'react-native-progress';
import {View,Text,Dimensions} from 'react-native';
import React, { Component } from 'react';
import {Font} from 'expo';
export default class CircularProgressBar extends Component {
    constructor(){
        super();
        state={
            progressSteps : {},
            progressCoin : {},
            isFontLoaded : false
        }
    }
    componentDidMount() {
        Font.loadAsync({
            'Montserrat-Bold': require('../assets/fonts/MontserratAlternates-Bold.ttf'),
            'Montserrat-Light' : require('../assets/fonts/MontserratAlternates-Regular.ttf'),
        }).then(()=>{
            this.setState({isFontLoaded : true});
        });

        this.setState({
            progressSteps: this.props.progressSteps || 0,
            progressCoin:this.props.progressCoin || 0,
            progress : this.props.progressSteps ||  this.props.progressCoin,
            coins : this.props.coins,
            steps : this.props.steps
          });


    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            progressSteps: nextProps.progressSteps || 0,
            progressCoin:nextProps.progressCoin || 0,
            progress : nextProps.progressSteps ||  this.props.progressCoin,
            coins : nextProps.coins,
            steps : nextProps.steps
          });

    }
    componentWillMount() {
        this.setState({
          progressSteps: 0,
          progressCoin:0,
          progress : 0,
          steps : 0,
          coins : 0
        });
    }

    get CircularCalc(){
        const {isFontLoaded} = this.state;
    //    console.log(this.state);
    //    console.log(this.props.coins);
        const window = Dimensions.get('window');
        if(this.state.progressSteps > 0){
            return(
                <Text style={[{color:'white',fontSize:Math.round(window.height/30)},isFontLoaded && {fontFamily : 'Montserrat-Bold'}]}>{Number((this.state.progressSteps).toFixed(3))} km</Text>
            )
        }
        if(this.state.progressCoin > 0){
            return(
                <Text style={[{color:'white',fontSize:Math.round(window.height/40),textAlign :"center"},isFontLoaded && {fontFamily : 'Montserrat-Bold'}]}> Remain to get {"\n"} Your share </Text>
                // {Number((this.state.progressCoin).toFixed(1))*10*5}
            )
        }
    }
    render(){
        const {isFontLoaded} = this.state;
        // console.log(this.props.details)
        const window = Dimensions.get('window');
        console.log("this.state"+this.state.progressSteps);
        console.log("this.props"+this.props.progressSteps);
        // this.setState({progressSteps : this.props.progressSteps})
        // console.log(this.state)
        return(
            <View style={{alignItems : 'center',flex:1}}>
                <Progress.Circle
                    textStyle={[{textAlign : 'center',justifyContent : 'center',alignItems : 'center',fontSize : window.width/15},isFontLoaded && {fontFamily : 'Montserrat-Bold'}]} 
                    size={this.props.size}
                    borderWidth={5}
                    direction={'clockwise'}
                    showsText={true}
                    thickness={15}
                    strokeCap={'round'} 
                    borderColor={this.props.borderColor}
                    color={this.props.color}
                    progress={this.state.progress} 
                    thickness={5} 
                    formatText={()=>{
                        if(this.state.steps > 0){
                            return this.state.steps + "\n" + "steps"
                        }
                        else if(this.state.coins){
                            return this.state.coins[0] + " : " + this.props.coins[1]
                        }   
                    }}
                    indeterminate={false}/>
                    <View style={{ flexDirection: 'row',paddingTop:Math.round(window.height/75), justifyContent: 'center',}}>
                        {this.CircularCalc}
                    </View>
            </View>
        )
    }
}
