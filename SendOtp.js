import React,{Component} from 'react';
import {View,Text,Image,TextInput,Button} from 'react-native';

var logo=require('./img/logo.png');

export default class SendOtp extends Component
{
    constructor()
    {
        super();
        this.state={
            MobileNo:""
        };
    }

    GenerateRandomNumber=()=>
    {
        // alert("hey")
        var randomNumber=Math.floor(Math.random()*10000)+1;
        alert(randomNumber);
    }

    Send_Otp=()=>
    {
        var MobileNo=this.state.MobileNo;
        if(MobileNo.length!=10)
        {
            alert("Required Field Missing or Invalid Mobile No. !");
        }
        else
        {
            // alert("Sorry");
            this.Check_Mobno(MobileNo);
        }
    }

    Check_Mobno=(MobileNo)=>
    {
        console.log("Check Mobile No."); 
        
        var Check_Mob_API="http://computersciencetutorial.com/shopapi/checkmobnogw.php";

        var header={
            'Accept':'application/json',
            'Content-Type':'application/json'
        };

        var Data={
            MobileNo:MobileNo
        };

        fetch(
            Check_Mob_API,
            {
                method:'POST',
                headers:header,
                body:JSON.stringify(Data)
            }
        )
        .then((response) => response.json())
        .then((response) => 
        {         
          console.log(response);
          var S=response[0].Status;
          console.log(S);
          if(S==1){
            // alert("hello");
            this.GenerateRandomNumber();
            this.props.navigation.navigate('VerifyOtp');
           }
           else{
               alert('Mobile No. is not Registered');
           }
        })
        .catch((error) => 
        {
          alert("Error "+ error);
        });
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
                    placeholder='Mobile No.' 
                    keyboardType='number-pad'
                    onChangeText={(MobileNo)=>this.setState({MobileNo})}
                  />
                  <Text>Enter Your Registered Mobile No.</Text>
                  <View style={{marginTop:20,marginBottom:20}}>
                      <Button title='Send OTP' onPress={this.Send_Otp.bind()}></Button>
                  </View>
              </View>
          </View>
      );
    }
}