import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import { Font } from 'expo';
import { connect } from 'react-redux';
import {DateValue} from '../actions';


let createHandlers = function(dispatch) {
  let DataPicker = function( data) {
    dispatch(DateValue(data))
  };

  return {
    DataPicker,
    // other handlers
  };
}






class MyDatePicker extends Component {
  constructor(props){
    super(props)
    this.handlers = createHandlers(this.props.dispatch);    
    this.state = {date: "",isFontLoaded : false,isDatePicketed : false}
  }
  componentWillMount(){
    this.setState({isFontLoaded : false});
  }
  componentDidMount(){
    Font.loadAsync({
      'Montserrat-Bold': require('../assets/fonts/MontserratAlternates-Bold.ttf'),
      'Montserrat-Light' : require('../assets/fonts/MontserratAlternates-Regular.ttf'),
    }).then(()=>{
      this.setState({isFontLoaded : true});
    });
   // this.props.dispatch(DateValue("ddddddddddddddd"));
  }
  render(){
    console.log(this.state.date);
    console.log(this.state.isFontLoaded);
    this.handlers.DataPicker(this.state.date);
    if(this.state.isFontLoaded){
      var font = 'Montserrat-Bold';
    }
    else{
      var font = 'sans-serif';
    }
    if(this.state.isDatePicketed){
      var color = this.props.selectedColor;
    }
    if(!this.state.isDatePicketed || this.props.selectedColor.length <= 0){
      var color = this.props.color
    }
    return (
      <DatePicker
        style={{}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            display : 'none',
          },
          dateText:{
            color : color || '#51a9ce',
            fontFamily : font,
            textAlign : 'right',
            fontSize : this.props.fontSize,
            justifyContent: 'flex-end'
        },
          dateInput: {
            marginRight: 5,
            paddingLeft : 50,
            borderWidth : 0,
          }
          // ... You can check the source to find the other keys. 
        }}
        onDateChange={(date)=> {
          this.setState({date,isDatePicketed : true})
          this.handlers.DataPicker(date);
        }}
      />
    )
  }
}
export default connect()(MyDatePicker);