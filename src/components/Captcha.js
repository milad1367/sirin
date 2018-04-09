import React, { Component } from 'react';
import { LinearGradient } from 'expo';
import ToolBar from './Toolbar';
import LinearGradientButton from './LinearGradientButton';
import { Modal,Text, TouchableHighlight, View , TouchableOpacity } from 'react-native';
import LinearText from './linearText';
import {Font} from 'expo';


export default class Captcha extends Component {
  state = {
    isVisible : true,
    isFontLoaded : false,
    RandIndex : " "
  }
  componentWillMount(){
    this.setState({isVisible : true});
  }
  componentDidMount(){
    Font.loadAsync({
      'Montserrat-Bold': require('../assets/fonts/MontserratAlternates-Bold.ttf'),
      'Montserrat-Light' : require('../assets/fonts/MontserratAlternates-Regular.ttf'),
    }).then(()=>{
      this.setState({isFontLoaded : true});
    });
    this.setState({isVisible : true});
  }
  async validateText(i){
    if(this.props.buttons[i] == this.props.buttons[this.props.index]){
      console.log("this is true");
      await this.setState({isVisible : false});
    }
    else{
      console.log("this is false");
      await this.setState({isVisible : false});
    }
    // this.setState({isVisible : true});
    return ;
  }
  render() {
    let rand = this.props.index;
    if(this.props.show){
      var show = true;
    }

    else if(!this.props.show){
      var show = false;
    }
    const {isFontLoaded} = this.state;
    const text = "Are You There ?"; 
    return (
      <View>
        <Modal
          style={[{flex:1,justifyContent : 'center'}, isFontLoaded && {fontFamily : 'Montserrat-Bold' }]}
          animationType="fade"
          transparent={true}
          visible={show && this.state.isVisible }
          onRequestClose={() => {this.setState({isVisible : true})}}>
         <View style={{justifyContent:'center',backgroundColor : 'rgba(37, 37, 37,0.9)',alignItems : 'stretch',flex : 1}}>
          <View>
            <View style={{bottom : 100,alignItems :'center'}}>
              <LinearText text={text}/>
            </View>
            <Text style={[{textAlign:'center',color : '#6572b2',bottom : 80,fontSize:30}, isFontLoaded && {fontFamily : 'Montserrat-Bold' }]}>Click Or Touch The {this.props.buttons[rand]}</Text>
            <View style={{flexDirection : 'row',marginLeft : 20,marginRight : 20}}>
              {this.props.buttons.map((button,i)=>{
               return(
                <TouchableOpacity key={i} onPress={this.validateText.bind(this,i)} style={{flex : 1}}>
                  <Text style={[{textAlign:'center',color : '#fff',fontSize : 20}, isFontLoaded && {fontFamily : 'Montserrat-Bold' }]}>{button}</Text>
                </TouchableOpacity>
               ) 
              })}
            </View>  
          </View>
         </View>
        </Modal>
      </View>//514a9d
    );
  }
}
