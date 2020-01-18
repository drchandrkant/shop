import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import {Card} from 'react-native-elements';
const logo=require('./img/logo.png');

export default class Temp extends Component
{
    render()
    {
      return(
          <View style={{flex:1,flexDirection:'row'}}>
            <View style={{flex:1}}>
                <Card>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Image source={logo} style={{width:50,height:50}}></Image>
                        <Text style={{fontSize:25,marginTop:10,textAlign:'center'}}>Hello !</Text>
                    </View>
                </Card>
            </View>
            <View style={{flex:1}}>
            <Card>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Image source={logo} style={{width:50,height:50}}></Image>
                        <Text style={{fontSize:25,marginTop:10,textAlign:'center'}}>Hello ! DS Academy</Text>
                    </View>
                </Card>
          </View>
          </View>
      );
    }
}