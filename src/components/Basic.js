// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
//   Dimensions,
//   Switch,
// } from 'react-native';
// import SideMenu from 'react-native-side-menu';
// import Menu from './Menu';
// import ResponsiveImage from 'react-native-responsive-image';
// import { AnimatedCircularProgress } from 'react-native-circular-progress';
// import * as Progress from 'react-native-progress';
// const window =  Dimensions.get('window');
// const styles = StyleSheet.create({
//   button: {
//     position: 'absolute',
//     top: 20,
//     padding: 10,
//   },
//   caption: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     alignItems: 'center',
//   },
//   container: {
//     flex: 1,
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
  
//   faceImg:{
//     width:50,
//     height:50,
//      borderRadius: 30,
//      marginTop:25
//   },
//   face:{
//     textAlign:'right',

//   },
//    points: {
//     backgroundColor: 'transparent',
//     position: 'absolute',
//     top: 72,
//     left: 56,
//     width: 90,
//     textAlign: 'center',
//     color: '#ff0000',
//     fontSize: 50,
//     fontWeight: "100"
//   },
//   rowCenter:{
//     flexDirection: 'row', 
//     justifyContent: 'center',
//   },
//   columnCenter:{
//    flexDirection: 'column',
//    justifyContent: 'center',
//    alignItems: 'center',

//   },
//   switchView:{
//     marginTop:window.width/9,
//   },
//   responsiveProgressView: {
//     marginTop:window.width/10,
//   },
//   responsiveSwitchView:{
//     marginTop:window.width/6,

//   }
// });

// export default class Basic extends Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);

//     this.state = {
//       isOpen: false,
//       selectedItem: 'About',
//       progressSteps:0,
//       progressCoin:0,
//       colorFalseSwitchIsOn:true,
//     };
//   }

//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen,
//     });
//   }

//   updateMenuState(isOpen) {
//     this.setState({ isOpen });
//   }

//   onMenuItemSelected = item =>
//     this.setState({
//       isOpen: false,
//       selectedItem: item,
//     });
//   componentDidMount() {
//     /*
//     this.timerID = setInterval(
//       () => this.tick(),
//       1
//      );
//     */
//   if(this.state.progressSteps < 0.7){
//     this.setState({
//       progressSteps: 0.7,
//       progressCoin:0.4,
//     });
//     }
//   }
// /*
//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     if(this.state.progressSteps < 0.7){
//     this.setState({
//       progressSteps: this.state.progressSteps + 0.1,

//     });
//     }
//       if(this.state.progressCoin < 0.4){
//        this.setState({
//        progressCoin: this.state.progressCoin + 0.1,
//     });
//     }
//   }
//     */
//   render() {

    
 
//     const menu = <Menu onItemSelected={this.onMenuItemSelected} />;


    

//     return (
      
//       <SideMenu
//         menu={menu}
//         isOpen={this.state.isOpen}
//         onChange={isOpen => this.updateMenuState(isOpen)}
//       >
//     <View style={styles.container}>
//     <Image source={require('../imgs/home.png')} style={{flex: 1,
//         width: null,
//         height: null,
//         resizeMode: 'cover',}} >
//     <View style={{
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         paddingTop:20,
//         marginLeft:10,
//         marginRight:10
//       }}>
//       <View style={{width:50, height:50}}>
//         <TouchableOpacity
//           onPress={this.toggle}
//           style={styles.button}
//         >
//           <Image 
//             source={require('../imgs/menu.png')}
//             style={{ width: 32, height: 32, }}
//           />

//         </TouchableOpacity>
//         </View>
//       <View>
//           <Text style={{color:'white',paddingTop:30}}>
//             Home
//           </Text>
//       </View>


//         <View>               
//           <Image source={require('../imgs/face.png')} style={styles.faceImg} />
          
//         </View> 
//         </View>
//   <View style={[styles.rowCenter, window.width >476 && styles.responsiveProgressView ]}>
//     <View>          
//       <Progress.Circle progress={this.state.progressSteps} showsText={true} borderColor={'#7293c3'} color={'#ffffff'} thickness={10}  borderWidth={5} size={window.width/3}  />
//         <View style={{ flexDirection: 'row', justifyContent: 'center',}}>
//           <Text style={{color:'white',paddingTop:Math.round(window.height/75) ,fontWeight:'bold',fontSize:Math.round(window.height/35),}}>{Number((this.state.progressSteps).toFixed(1))} {"\n"} km</Text>
//        </View>
//     </View>
//     <View style={{paddingTop:20, paddingLeft:15}}>         
//       <Progress.Circle progress={this.state.progressCoin} showsText={true} borderColor={'#7293c3'} color={'#ffbc5e'} thickness={10}  borderWidth={5} size={window.width/4}  />
//         <View style={{ flexDirection: 'row', justifyContent: 'center',}}>
//           <View>
//             <Text style={{color:'white',paddingTop:Math.round(window.height/75) ,fontWeight:'bold',fontSize:Math.round(window.height/45),textAlign :"center",}}>{Number((this.state.progressCoin).toFixed(1))*10*5} Coins {"\n"} left</Text>
//           </View>
//         </View>
//     </View>
//   </View>
//         <View style={[styles.columnCenter,styles.switchView,window.width >476 && styles.responsiveSwitchView]}>
//           <View>
//         <Switch
//           onValueChange={(value) => this.setState({colorFalseSwitchIsOn: value})}
//           onTintColor="#8ac6dd"
//           tintColor="#8ac6dd"
//           thumbTintColor="#fff"
//           style={{transform: [{scaleX: 2}, {scaleY: 2}],borderRadius : 20}}
//           value={this.state.colorFalseSwitchIsOn} />
//           <View style={{marginTop:10}}>
//           {this.state.colorFalseSwitchIsOn ? <Text style={{textAlign: 'right',fontSize:Math.round(window.height/50)}}>walk</Text>  : <Text style={{textAlign: 'left',fontSize:Math.round(window.height/50)}}>run</Text>}
//           </View>
//       </View>
//       <View>
//         <Text style={{textAlign:"center",color:"#6572b2",fontSize:Math.round(window.height/35)}}> hey dude </Text>
//         <Text style={{textAlign:"center",color:"#6572b2",fontSize:Math.round(window.height/35)}}> how much is your steps today </Text>
//       </View>
//       </View>
// </Image>        
// </View>
// <View>


//     </View> 
// </SideMenu>
     
//     );
//   }
// }
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import Menu from './Menu';


const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 20,
    padding: 10,
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class Basic extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
      selectedItem: 'About',
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  onMenuItemSelected = item =>
    this.setState({
      isOpen: false,
      selectedItem: item,
    });

  render() {
    const menu = <Menu onItemSelected={this.onMenuItemSelected} />;

    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
      >
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.ios.js
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+Control+Z for dev menu
          </Text>
          <Text style={styles.instructions}>
            Current selected menu item is: {this.state.selectedItem}
          </Text>
        </View>
        <TouchableOpacity
          onPress={this.toggle}
          style={styles.button}
        >
        </TouchableOpacity>
      </SideMenu>
    );
  }
}
