import React,{Component} from 'react';
import {View,Text,Platform} from 'react-native';

export default class DetectDevice extends Component
{
    render()
    {
      return(
          <View style={{flex:1,justifyContent:'center'}}>
              <Text style={{fontSize:24,textAlign:'center'}}>
                  {Platform.OS === 'ios' ? 'Device is ios' : 'Device is Android'}
              </Text>
          </View>
      );
    }
}