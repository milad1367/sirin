const Error = (state = [] ,action) => {
    switch (action.type) {
      case 'GET_ERROR':
        return [ ...state, action.value ]
        default:
        return state
    }
  
  }
  
  export default Error