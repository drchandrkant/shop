import React, { Component } from 'react';
import { View, ScrollView, Text, Image, TextInput, Button, Platform, ImageBackground, BackHandler } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import AsyncStorage from '@react-native-community/async-storage';

const logo = require('./img/logo.png');
const signin_screen = require('./img/wallpaper3.jpg');

export default class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            MobileNo: "",
            Password: "",
            UserID: ""
        };
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

    componentWillMount()
    {
        BackHandler.addEventListener('hardwareBackPress',this.handleBackButtonClick);
    }

    componentWillUnmount()
    {
        BackHandler.removeEventListener('hardwareBackPress',this.handleBackButtonClick);
    }

    handleBackButtonClick()
    {
        BackHandler.exitApp();
        return true;
    }

    Sign_In = () => {
        var MobileNo = this.state.MobileNo;
        var Password = this.state.Password;
        if (MobileNo.length == 0 || Password.length == 0) {
            alert("Required Field Missing");
        }
        else {
            var Sign_In_API = "http://computersciencetutorial.com/shopapi/signingw.php";

            var header = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };

            var Data = {
                MobileNo: MobileNo,
                Password: Password
            };

            fetch(
                Sign_In_API,
                {
                    method: 'POST',
                    headers: header,
                    body: JSON.stringify(Data)
                }
            )
                .then((response) => response.json())
                .then((response) => {
                    console.log(response);
                    var status = response[0].Status;
                    if (status == 1) {
                        // this.setState({
                        //     UserID: response[0].ID
                        // });
                        this.StoreUserID(response[0].ID);
                        this.props.navigation.navigate('Category');
                    }
                    else {
                        alert("Please Check User name or Password !");
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    StoreUserID = async (UserID) => {
        console.log("Check for user id");
        //var UserID = this.state.UserID;
        // console.log(UserID);
        await AsyncStorage.setItem("UserID", UserID);
        // this.props.navigation.navigate('Category');
        // var v1 = await AsyncStorage.getItem("UserID");
        // console.log("userid"+v1);
        // await AsyncStorage.setItem("SignInStatus", "1");
        // var v2 = await AsyncStorage.getItem("SignInStatus");
        // console.log(v2);
    }
    New_user = () => {
        this.props.navigation.navigate('SignUp');
    }

    Forget_password = () => {
        this.props.navigation.navigate('SendOtp');
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <ImageBackground blurRadius={Platform.OS == 'ios' ? 10 : 5} source={signin_screen} style={{ width: 360, height: 780 }}>
                        <View style={{ flex: 2, margin: 10, alignItems: 'center', justifyContent: 'center' }}>
                            {/* <Image source={logo} style={{width:100,height:100}}></Image> */}
                            <Text style={{ fontSize: 70, fontWeight: "300", color: "#000000" }}>Sign In</Text>
                        </View>
                        <View style={{ flex: 4, margin: 10 }}>
                            <TextInput
                                style={{ borderBottomWidth: 2, borderBottomColor: '#000000', marginBottom: 10 }}
                                placeholder='Mobile No.'
                                keyboardType='number-pad'
                                onChangeText={(MobileNo) => this.setState({ MobileNo })}
                            />

                            <TextInput
                                style={{ borderBottomWidth: 2, borderBottomColor: '#000000', marginBottom: 10 }}
                                placeholder='Password'
                                secureTextEntry={true}
                                onChangeText={(Password) => this.setState({ Password })}
                            />
                            <View style={{ marginTop: 20, marginBottom: 20 }}>
                                <Button title='Sign In' onPress={this.Sign_In}></Button>
                            </View>
                            <Text style={{ textAlign: 'center', fontWeight: "bold", marginBottom: 10, color: '#000000' }} onPress={this.New_user.bind(this)}>New User? Sign Up</Text>
                            <Text style={{ textAlign: 'center', fontWeight: "bold", color: '#000000' }} onPress={this.Forget_password.bind(this)}>Forgot Password?</Text>
                        </View>
                    </ImageBackground>
                </ScrollView>
            </View>
        );
    }
}