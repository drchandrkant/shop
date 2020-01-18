import React,{Component} from 'react';
import {View,Text,Dimensions,Alert,Button} from 'react-native';

export default class DeviceHeightWidth extends Component
{
    GetHeight=()=>
    {
        const height=Dimensions.get('window').height;
        Alert.alert('Device Height:' + height);
    };

    GetWidth=()=>
    {
        const width=Dimensions.get('window').width;
        Alert.alert('Device Width:' + width);
    };
    render()
    {
      return(
          <View style={{flex:1,justifyContent:'center',backgroundColor:'#FFFFFF',margin:10}}>
              <View style={{margin:10}}>
                  <Button title="Height" onPress={this.GetHeight}/>
              </View> 
              <View style={{margin:10}}>
                  <Button title="Width" onPress={this.GetWidth}/>
              </View>               
          </View>
      );
    }
}