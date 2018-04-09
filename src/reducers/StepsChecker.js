
import  SetSessions from '../actions';

const StepsChecker = (state={},action) => {
    switch (action.type) {
      case 'STEPS_CHECKER':
        if ( action.value > 0 ) {
        if ( state.count === 4 ) {
        return  EndSission = (dispatch) => {
            return dispatch(SetSessions("end"));
        } 
        }
        return { ...state , count : state.count + 1 , status:"" }  
        
    }
        default:
        return state
  
  
    }
  
  }
  
  export default StepsChecker