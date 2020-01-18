import React,{Component} from 'react';
import {View,Text,Image,TextInput,Button} from 'react-native';
var logo=require('./img/logo.png');
export default class Forgetpass extends Component
{
    constructor()
    {
        super();
        this.state={
            NewPassword:"",
            ConfirmNewPassword:""
        };
    }
    Change_Password=()=>
    {
        var NewPassword=this.state.NewPassword;
        var ConfirmNewPassword=this.state.ConfirmNewPassword;
        if(NewPassword.length==0||ConfirmNewPassword==0)
        {
            alert("Required Field Missing");
            this.props.navigation.navigate('ChangePassword');
        }
        else
        {
            // alert("Database");
            this.props.navigation.navigate('SignIn');
        }
    }
    render()
    {
      return(
          <View style={{flex:1,margin:10}}>
              <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                  <Image source={logo} style={{width:100,height:100}}></Image>
              </View>
              <View style={{flex:2}}>
                  <TextInput 
                    style={{borderBottomWidth:1,marginBottom:10}} 
                    placeholder='New Password' 
                    secureTextEntry={true}
                    onChangeText={(NewPassword)=>this.setState({NewPassword})}
                  />
                  <TextInput 
                    style={{borderBottomWidth:1,marginBottom:10}} 
                    placeholder='Confirm New Password' 
                    secureTextEntry={true}
                    onChangeText={(ConfirmNewPassword)=>this.setState({ConfirmNewPassword})}
                  />
                  <View>
                    <Button title='Change' onPress={this.Change_Password.bind()}></Button>
                  </View>
              </View>
          </View>
      );
    }
}