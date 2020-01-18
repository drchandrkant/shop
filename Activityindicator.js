import React,{Component} from 'react';
import {View,Text,ActivityIndicator,Button} from 'react-native';

export default class Activityindicator extends Component
{
    state={showIndicator:false}
    onButtonPress=()=>
    {
        this.setState({showIndicator:true});
    }
    render()
    {
        if(this.state.showIndicator){
            return(
                <View style={{flex:1,justifyContent:'center',flexDirection:'column'}}>
                    <ActivityIndicator size="large" color="#0000FF"/>
                </View>
            );
        }
        else{
            return(
                <View style={{flex:1,justifyContent:'center',flexDirection:'column'}}>
                    <Button title='Click Me' onPress={this.onButtonPress}/>
                </View>
            );
        }
    }
}