const Session = (state = {} ,action) => {

    switch (action.type) {
      case 'SET_SESSION':
         if (action.text == "start") {
        return { start:true , end: false }
         }
         if ( action.text == "end" ) {
        return { start: false , end:true }
         }
         return { start:false,end:false}
        default:
        return state
    }
    
  }
  
  export default Session