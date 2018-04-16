import setPedoSteps from '../actions'
const AntiMethod2 = (steps,StartPos,LocalEndPos ) => {
     let p,x,min,max,StepsDotX;
     p = 0.6 ; 
     X = 0.4;
     let Distance = CalcDistance(StartPos.coords.latitude,StartPos.coords.longitude,LocalEndPos.coords.latitude,LocalEndPos.coords.longitude)*1000;
     min = (Distance - (Distance*p));
     max = (Distance + (Distance*p));
     StepsDotX = steps * X ;
      if ( StepsDotX < min || StepsDotX > max ) {
        return false
      }       
      PostSteps(steps);
      return true
}
export default AntiMethod2
async function PostSteps(mysteps) {
  try{
    const UserInfo = await AsyncStorage.getItem("@user_info");
    fetch('https://sirin-app.herokuapp.com/user/steps/save', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        steps: mysteps,
        token: UserInfo.token,
      })
    }).then((response)=>{console.log(response);console.log(UserInfo.token);});
}
catch(e){
    console.log('caught error', e);
}
 
}

function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
  }

  
  function CalcDistance (lat1, lon1, lat2, lon2) {
    var earthRadiusKm = 6371;
  
    var dLat = degreesToRadians(lat2-lat1);
    var dLon = degreesToRadians(lon2-lon1);
  
    lat1 = degreesToRadians(lat1);
    lat2 = degreesToRadians(lat2);
  
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    return earthRadiusKm * c;
  }