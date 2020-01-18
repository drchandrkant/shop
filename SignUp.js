import React, { Component } from 'react';
import { View, ScrollView, Text, Image, TextInput, Button, Platform, ImageBackground } from 'react-native';

var logo = require('./img/logo.png');
const signup_screen = require('./img/wallpaper3.jpg');


export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FullName: "",
      EmailID: "",
      MobileNo: "",
      Password: "",
      ConfirmPassword: ""
    };
  }

  Sign_Up = () => {
    var FullName = this.state.FullName;
    var EmailID = this.state.EmailID;
    var MobileNo = this.state.MobileNo;
    var Password = this.state.Password;
    var ConfirmPassword = this.state.ConfirmPassword;
    if (FullName.length == 0 || EmailID.length == 0 || MobileNo.length == 0 || Password.length == 0 || ConfirmPassword.length == 0) {
      alert("Required Field Missing");
    }
    else {
      var Sign_Up_API = "http://computersciencetutorial.com/shopapi/signupgw.php";

      var header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };

      var Data = {
        FullName: FullName,
        EmailID: EmailID,
        MobileNo: MobileNo,
        Password: Password
      };

      fetch(
        Sign_Up_API,
        {
          method: 'POST',
          headers: header,
          body: JSON.stringify(Data)
        }
      )
        .then((response) => response.json())
        .then((response) => {
          alert(response[0].Message);
          this.props.navigation.navigate('SignIn');
        })
        .catch((error) => {
          alert("Error " + error);
        });
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <ImageBackground style={{ width: 360, height: 780 }} source={signup_screen} blurRadius={Platform.OS = 'ios' ? 10 : 5}>
            <View style={{ flex: 1, margin: 50, alignItems: 'center', justifyContent: 'center' }}>
              {/* <Image source={logo} style={{width:100,height:100,}}></Image> */}
              <Text style={{ fontSize: 60, fontWeight: "300", marginTop: 20 }}>Sign Up</Text>
            </View>
            <View style={{ flex: 4, margin: 10 }}>
              <TextInput
                style={{ borderBottomWidth: 2, marginBottom: 10 }}
                placeholder='Full Name'
                onChangeText={(FullName) => this.setState({ FullName })}
              />
              <TextInput
                style={{ borderBottomWidth: 2, marginBottom: 10 }}
                placeholder='Email ID'
                keyboardType='email-address'
                onChangeText={(EmailID) => this.setState({ EmailID })}
              />
              <TextInput
                style={{ borderBottomWidth: 2, marginBottom: 10 }}
                placeholder='Mobile No.'
                keyboardType='number-pad'
                onChangeText={(MobileNo) => this.setState({ MobileNo })}
              />
              <TextInput
                style={{ borderBottomWidth: 2, marginBottom: 10 }}
                placeholder='Password'
                secureTextEntry={true}
                onChangeText={(Password) => this.setState({ Password })}
              />
              <TextInput
                style={{ borderBottomWidth: 2, marginBottom: 10 }}
                placeholder='Confirm Password'
                secureTextEntry={true}
                onChangeText={(ConfirmPassword) => this.setState({ ConfirmPassword })}
              />
              <View style={{ marginTop: 20, marginBottom: 20 }}>
                <Button title='Sign Up' accessibilityLabel="toggle" onPress={this.Sign_Up.bind()}></Button>
              </View>
            </View>
          </ImageBackground>
        </ScrollView>
      </View>
    );
  }
}