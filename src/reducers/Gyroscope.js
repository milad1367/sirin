

const Gyroscope = (state= 0 ,action) => {
    switch (action.type) {
      case 'GET_GYROSCOPE':
        return  action.value
        default:
        return state
    }
  
  }
  
  export default Gyroscope