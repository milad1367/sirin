const Gps = (state= 0 ,action) => {
    switch (action.type) {
      case 'GET_GPS':
        return  action.value
      case 'SET_GPS_ALARM_FLAG':
        return {...state,GpsAlarmFlag:action.value }
        default:
        return state
    }
  
  }
  
  export default Gps