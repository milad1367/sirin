const StepsPast = (state= 0 ,action) => {
    switch (action.type) {
      case 'GIVE_STEPS_PAST':
        return  action.StepsPast
        default:
        return state
    }
  
  }
  
  export default StepsPast