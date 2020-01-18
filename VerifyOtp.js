import React,{Component} from 'react';
import {View,Text,Image,TextInput,Button} from 'react-native';
const logo=require('./img/logo.png');

export default class VerifyOtp extends Component
{
    constructor()
    {
        super();
        this.state={
            OTP:""
        };
    }
    Verify_Otp=()=>
    {
        var OTP=this.state.OTP;
        if(OTP.length==0)
        {
            alert("Required Field Missing");
            this.props.navigation.navigate('VerifyOtp');
        }
        else
        {
            // alert("Database");
            this.props.navigation.navigate('ChangePassword');
        }
    }
    Resend=()=>
    {
        this.props.navigation.navigate('SendOtp');
    }
    render()
    {
      return(
          <View style={{flex:1,margin:10}}>
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <Image source={logo} style={{width:100,height:100}}></Image>
              </View>
              <View style={{flex:2}}>
                  <TextInput 
                    style={{borderBottomWidth:1,marginBottom:10}} 
                    placeholder='OTP' 
                    keyboardType='number-pad'
                    onChangeText={(OTP)=>this.setState({OTP})}
                  />
                  <View style={{marginTop:20,marginBottom:20}}>
                      <Button title='Verify OTP' onPress={this.Verify_Otp.bind()}></Button>
                  </View>
                  <Text onPress={this.Resend.bind(this)}>Resend OTP</Text>
              </View>
          </View>
      );
    }
}