import React,{Component} from 'react';
import {View,Text,Switch} from 'react-native';

export default class SWitch extends Component
{
    constructor()
    {
        super();
        this.state={switchValue:false};
    }
        Switch_Click=(value)=>{
        //  alert("Hello !");
        this.setState({switchValue:value});
    } 
    render()
    {
      return(
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>{this.state.switchValue?'Switch is ON':'Switch is oFF'}</Text>
            <Switch style={{marginTop:30}} onValueChange={this.Switch_Click.bind()} value={this.state.switchValue}/>
          </View>
      );
    }
}