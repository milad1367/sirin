const StartPos = (state= 0 ,action) => {
    switch (action.type) {
      case 'GET_START_POS':
        return  action.value
        default:
        return state
    }
  
  }
  
  export default StartPos