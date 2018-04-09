const DatePicker = (state ="",action) => {
    switch (action.type) {
      case 'GET_DATE_VALUE':
      return  action.value
      default:
      return state
    }
  
  }
  
  export default DatePicker;