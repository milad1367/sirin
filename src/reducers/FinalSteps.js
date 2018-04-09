const FinalSteps = (state = {} ,action) => {
    switch (action.type) {
      case 'SET_PEDO_STEPS':
        return {...state , PedoSteps: action.value}
        case 'SET_REAL_STEPS' :
        return { ...state , RealSteps: state.RealSteps + action.value }
        default:
        return state
    }
  
  }
  
  export default FinalSteps