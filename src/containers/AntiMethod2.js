//import { CalcDistance } from "./CalcDistance";
import setPedoSteps from '../actions'
const AntiMethod2 = (steps,StartPos,LocalEndPos ) => {

     let p,x,min,max,StepsDotX;
     p = 0.6 ; 
     X = 0.4;

     let Distance = CalcDistance(StartPos.coords.latitude,StartPos.coords.longitude,LocalEndPos.coords.latitude,LocalEndPos.coords.longitude)*1000;
     min = (Distance - (Distance*p));
     max = (Distance + (Distance*p));
     StepsDotX = steps * X ;
     console.log("on method 2 distance="+Distance+" steps="+steps);
     console.log("min="+min+" max="+max+" StepsDotX="+StepsDotX);
     console.log("StartPos input method2");
     console.log(StartPos);
     console.log("LocalEndPos input method2");
     console.log(LocalEndPos);
      if ( StepsDotX < min || StepsDotX > max ) {
        console.log ( "acces denied with method 2");
        return false
      }
    
           
      console.log("method 2 pass ");
      PostSteps(steps);
      return true
}

export default AntiMethod2


async function PostSteps(mysteps) {
  try{
    const UserInfo = await AsyncStorage.getItem("@user_info");
  //  UserInfo = JSON.parse(UserInfo);
    console.log(UserInfo);
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
    // Handle exceptions
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