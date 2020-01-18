import React,{Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage'
import {View,Text,TextInput,Button,TouchableOpacity} from 'react-native';

export default class App extends Component
{
    constructor(){
        super();
        this.state={
            textInputData:'',
            getValue:''
        };
    }
    getValueFunction=()=>
    {
        AsyncStorage.getItem('any_key_here').then(value=>this.setState({getValue:value}));
    };

    saveValueFunction=()=>
    {
        if(this.state.textInputData){
            AsyncStorage.setItem('any_key_here',this.state.textInputData);
            this.setState({textInputData:''})
            alert('Data Saved');
        }
        else{
            alert('Please fill data');
        }
    };
    render()
    {
      return(
          <View style={{alignItems:'center',flex:1,margin:10,marginTop:60}}>
              <TextInput
                placeholder="Enter Some Text Here"
                value={this.state.textInputData}
                onChangeText={data=>this.setState({textInputData:data})}
                underlineColorAndroid="transparent"
                style={{textAlign:'center',height:40,width:'100%',borderWidth:1,borderColor:'#808000'}}
              />
              <TouchableOpacity
                onPress={this.saveValueFunction}
                style={{width:'100%',height:40,padding:10,backgroundColor:'#808000',marginTop:10}}
              >
                  <Text style={{color:'#fff',textAlign:'center',}}>Save Value</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.getValueFunction}
                style={{width:'100%',height:40,padding:10,backgroundColor:'#808000',marginTop:10}}
              >
                  <Text style={{color:'#fff',textAlign:'center',}}>Get Value</Text>
              </TouchableOpacity>
              <Text style={{fontSize:20,textAlign:'center'}}>{this.state.getValue}</Text>
          </View>
      );
    }
}