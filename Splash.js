import React,{Component} from 'react';
import {ImageBackground,View,Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const splash_screen=require('./img/wallpaper3.jpg');

export default class Splash extends Component
{
    constructor(props)
    {
      super(props);
      setTimeout( ()=>
      {
        // this.props.navigation.popToTop();
        this.props.navigation.navigate("SignIn");
      },3000
      );
    }
    render()
    {
      return(
          <ImageBackground source={splash_screen} style={{width:'100%',height:'100%'}}></ImageBackground>
      );
    }
}

// export default Splash;