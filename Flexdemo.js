import React,{Component} from 'react';
import {View,Text} from 'react-native';

export default class Splash extends Component
{
    render()
    {
      return(
          <View style={{flex:1,flexDirection:'row'}}>
              <View style={{flex:1,backgroundColor:'#ff0000'}}>
              <Text>Welcome Page 1 !</Text>
              </View>
              <View style={{flex:1,backgroundColor:'#aa0070',alignItems:'center',justifyContent:'center'}}>
                  <Text>Hello!</Text>
              </View>
          </View>
      );
    }
}