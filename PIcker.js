import React,{Component} from 'react';
import {View,Text,Picker} from 'react-native';

export default class PIcker extends Component
{
    constructor()
    {
        super();
        this.state={
            choosenLabel:"",
            choosenValue:""
        };
    }
    Picker_Click=(label,value)=>
    {
         //alert(label);
        this.setState({choosenLabel:label},
            ()=>{
                alert(this.state.choosenLabel);
            }
            );
    }
    render()
    {
      return(
          <View>
            <Picker selectedValue={this.state.choosenLabel}
            prompt="Select Course"
            onValueChange={this.Picker_Click.bind()}>
                <Picker.Item label="React" value="6500"></Picker.Item>
                <Picker.Item label="HTMl" value="4500"></Picker.Item>
                <Picker.Item label="PHP" value="5500"></Picker.Item>
            </Picker>
          </View>
      );
    }
}