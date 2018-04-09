const EndPos = (state= 0 ,action) => {
    switch (action.type) {
      case 'GET_END_POS':
        return  action.value
        default:
        return state
    }
  
  }
  
  export default EndPos