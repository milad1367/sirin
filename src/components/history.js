import React, { Component } from 'react';
import {Text,View,Image,StyleSheet,ScrollView,Dimensions,TouchableOpacity,Animated} from 'react-native';
import { LinearGradient,Font } from 'expo';
import ToolBar4Options from './Toolbar4Options';
import LinearGradientButton from './LinearGradientButton';
import { SideMenu } from 'react-native-elements'

import Svg,{
    Circle,
    Ellipse,
    G,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Use,
    Defs,
    Stop
  } from 'react-native-svg';
  import Sidemenu from './sideMenu';
class History extends Component {
    static navigationOptions = {
        header : null
    } 
    constructor () {
        super()
        this.state = {
            isOpen: false,
            isFontLoaded : false,
            histories : [
                {
                    date : [27,'feb'],
                    steps : [2140,1],
                    coins : 10
                },{
                    date : [28,'feb'],
                    steps : [5000,3],
                    coins : 15
                },{
                    date : [29,'feb'],
                    steps : [10,0.01],
                    coins : 2
                },
                {
                    date : [30,'feb'],
                    steps : [1500,0.8],
                    coins : 1
                },
                {
                    date : [31,'feb'],
                    steps : [500,0.2],
                    coins : 5
                }
                
            ]
        }
    }
    componentDidMount(){
        Font.loadAsync({
            'Montserrat-Bold': require('../assets/fonts/MontserratAlternates-Bold.ttf'),
            'Montserrat-Light' : require('../assets/fonts/MontserratAlternates-Regular.ttf'),
        }).then(()=>{
            this.setState({isFontLoaded : true});
        });
    }
    render() {
    const menuToolbar = ['menu','History','back'];
    const window = Dimensions.get('window');
    const {isFontLoaded} = this.state;
    return (
    <View style={{flex : 1}}>    
            <View style={{flex : 1}}>
                <LinearGradient colors={['#86d2ea','#24c6dc','#529dc3']} style={{flexDirection : 'column',alignItems: 'stretch',flex:1,paddingTop : 30,paddingLeft:10,paddingRight:10,width : window.width,height : window.height}}>
                    <Svg style={{zIndex : 0,position : 'absolute',top : window.height*.25}} width={window.width} height={window.height} viewBox="0 0 750 689">
                    <G  id="#f7f7f7ff">
                    <Path  fill="#f7f7f7" opacity="1.00" d=" M 411.40 0.00 L 442.54 0.00 C 472.09 1.32 501.73 2.46 531.01 6.98 C 546.48 8.80 561.80 11.68 577.15 14.29 C 601.84 19.78 626.44 25.82 650.56 33.48 C 656.65 35.36 662.62 37.60 668.77 39.32 C 696.31 49.81 724.09 60.01 750.00 74.20 L 750.00 347.90 C 748.31 364.21 749.05 380.63 749.04 397.00 C 749.01 401.76 749.73 406.48 750.00 411.24 L 750.00 513.80 C 749.90 518.51 749.58 523.22 749.19 527.92 C 748.58 539.92 749.67 551.99 748.24 563.95 C 747.87 573.00 747.95 582.07 748.16 591.13 C 748.80 596.84 749.79 602.51 750.00 608.28 L 750.00 689.00 L 127.30 689.00 C 124.21 688.90 121.13 688.70 118.05 688.46 C 112.28 687.92 106.53 688.90 100.77 689.00 L 14.32 689.00 C 11.73 688.15 8.46 686.42 6.23 689.00 L 0.00 689.00 L 0.00 93.99 L 1.91 94.01 C 1.72 93.60 1.34 92.80 1.14 92.40 C 11.10 89.61 20.56 85.37 30.18 81.65 C 35.49 79.88 40.82 78.10 46.01 75.96 C 55.44 72.80 64.84 69.55 74.21 66.20 C 152.10 39.59 232.23 18.90 313.91 8.09 C 322.98 7.34 331.89 5.29 341.01 4.97 C 357.59 3.10 374.27 2.12 390.92 1.00 C 397.76 1.03 404.63 1.21 411.40 0.00 Z" />
                    </G>
                    <G   id="#d4d8d974">
                    <Path fill="#d4d8d9" opacity="0.45" d=" M 32.89 80.04 C 37.27 78.69 41.52 76.90 46.01 75.96 C 40.82 78.10 35.49 79.88 30.18 81.65 C 30.92 80.88 31.83 80.27 32.89 80.04 Z" />
                    </G>
                    </Svg>  
                    <View style={styles.toolbar}>
                        <View style={styles.toolbarButton}>    
                            <TouchableOpacity onPress={()=>{
                                this.props.navigation.navigate('DrawerOpen')
                                }}>
                                <Svg width="56" height="31" viewBox="0 -10 67 55" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <G id="#82828282">
                                    <Path fill="#828282" opacity="0.51" d=" M 0.00 0.00 L 0.53 0.00 L 0.38 0.46 L 0.00 0.47 L 0.00 0.00 Z" />
                                    <Path fill="#828282" opacity="0.51" d=" M 55.46 0.00 L 56.00 0.00 L 56.00 0.48 L 55.48 0.50 L 55.46 0.00 Z" />
                                </G>
                                <G id="#ffffffff">
                                    <Path fill="#ffffff" opacity="1.00" d=" M 0.53 0.00 L 55.46 0.00 L 55.48 0.50 L 56.00 0.48 L 56.00 2.44 C 52.77 3.46 49.37 3.11 46.04 3.15 C 35.05 3.13 24.07 3.15 13.08 3.14 C 8.72 3.11 4.32 3.42 0.01 2.59 L 0.00 2.93 L 0.00 0.47 L 0.38 0.46 L 0.53 0.00 Z" />
                                    <Path fill="#ffffff" opacity="1.00" d=" M 0.00 13.91 C 1.61 13.27 3.34 13.13 5.06 13.16 C 20.04 13.20 35.02 13.19 50.00 13.16 C 52.01 13.16 54.01 13.35 56.00 13.63 L 56.00 16.09 C 54.40 16.72 52.69 16.87 50.99 16.84 C 36.00 16.81 21.02 16.81 6.03 16.84 C 4.01 16.84 2.00 16.64 0.00 16.37 L 0.00 13.91 Z" />
                                    <Path fill="#ffffff" opacity="1.00" d=" M 0.00 27.42 C 4.61 26.52 9.32 26.93 13.98 26.86 C 22.11 26.91 30.24 26.75 38.37 26.95 C 38.23 27.77 37.96 29.42 37.83 30.24 C 27.58 30.92 17.27 30.31 6.99 30.55 C 4.65 30.31 1.68 31.32 0.00 29.13 L 0.00 27.42 Z" />
                                </G>
                                </Svg>
                            </TouchableOpacity>
                        </View>
                        <Text style={[styles.toolbarTitle,{ 
                            flex:1,
                            paddingRight : 20,
                            paddingVertical : 5,
                            textAlign : 'center',
                            fontSize : window.width/15,
                            color : '#fff',
                            justifyContent : 'center'},isFontLoaded && {fontFamily : 'Montserrat-Bold'}]}>history</Text>
                        <View style={styles.toolbarButton}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
                            <Svg viewBox="0 -10 67 55" height='40' width='40'>
                            <G id="#ffffffff">
                                <Path fill="#ffffff" opacity="1.00" d=" M 13.55 0.78 C 14.45 1.65 15.35 2.54 16.23 3.43 C 13.31 6.21 10.45 9.06 7.67 11.98 C 21.11 12.02 34.56 11.99 48.00 12.00 L 48.00 16.00 C 34.57 16.01 21.15 15.98 7.72 16.01 C 10.49 18.89 13.32 21.71 16.20 24.48 C 15.33 25.38 14.46 26.28 13.59 27.19 C 9.30 22.74 4.86 18.45 0.53 14.04 C 4.72 9.48 9.31 5.30 13.55 0.78 Z" />
                            </G>
                            </Svg>
                        </TouchableOpacity>
                        </View>
                    </View>
                    <ScrollView style={styles.ScrollView}>
                    {this.state.histories.map(history => <LinearGradient
                    start={[0.1,0.4]}
                    end={[0.5,0.4]}
                    colors={['rgba(191, 199, 242,0.8)','rgba(191, 199, 242,0.8)']}
                    style={{paddingTop: window.width/50, marginBottom : window.width/12 , alignItems: 'center', borderRadius: 15}}>
                        <View style={styles.toolbar}>
                            <Text style={[styles.toolbarTitle,{color : '#529dc3'},isFontLoaded && {fontFamily : 'Montserrat-Bold'}]}>{history.date[0]}</Text>
                            <Text style={[styles.toolbarTitle,{color : '#6571b1'},isFontLoaded && {fontFamily : 'Montserrat-Bold'}]}>{history.steps[0]}  Steps</Text>
                            <Text style={[styles.toolbarTitle,{color : '#ffbc5e'},isFontLoaded && {fontFamily : 'Montserrat-Bold'}]}>{history.coins}</Text> 
                        </View>
                        <View style={styles.toolbar}>
                            <Text style={[styles.toolbarTitle,{color : "#529dc3"},isFontLoaded && {fontFamily : 'Montserrat-Bold'}]}>{history.date[1]}</Text>
                            <Text style={[styles.toolbarTitle,{color : '#6571b1'},isFontLoaded && {fontFamily : 'Montserrat-Bold'}]}>{history.steps[1]} km</Text>
                            <Text style={[styles.toolbarTitle,{color : '#6571b1'},isFontLoaded && {fontFamily : 'Montserrat-Bold'}]}>coins</Text> 
                        </View>
                    </LinearGradient>)}

                    
                    
                    
                    </ScrollView> 
                </LinearGradient>
            </View>
        </View>    
        // </SideMenu>        
    );
  }
}
const window = Dimensions.get('window');
const styles = StyleSheet.create({
  profileImage : {
    borderRadius : 75,
    shadowOpacity : 1,
    shadowColor : '#252525',
    justifyContent: 'center'
  },
  profileImage : {
    borderRadius : 50,
    shadowOpacity : 1,
    shadowColor : '#252525',
    justifyContent: 'space-between'
  },
  formContent : {
    justifyContent : 'center',
    alignContent : 'center'
  },
  toolbarTitle : {
    flex:1,
    fontSize : window.width/20,
    textAlign : 'center',
    color : '#fff',
  },
  toolbar:{
    flexDirection : 'row',
    paddingTop:0,
    paddingBottom:10,
    backgroundColor:'transparent'
  },
  imageContainer : {
    justifyContent : 'center',
    marginTop : 50,
    marginBottom : 15
  },
  ScrollView :{
      marginTop : 15
  },
  toolbarImage:{
    flex : 1,
    justifyContent : 'center'
  },
  toolbarButton : {
    flex : -1,
    justifyContent : 'center',
  },
});
export default History;