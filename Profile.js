import React, { Component } from 'react';
import { View, Text,TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-picker'
import AsyncStorage from '@react-native-community/async-storage';
// import { TouchableOpacity } from 'react-native-gesture-handler';

// import Profile from './Profile';
// import MyOrders from './MyOrders';
// import MyOffers from './MyOffers';

const options={
    title:'my pic app',
    takePhotoButtonTitle:'Take photo with your camera',
    chooseFromLibraryButtonTitle:'choose photo from library'
}

export default class Profile extends Component {
    constructor() {
        super();
        this.state = {
            UserID: "",
            FullName: "",
            EmailID: "",
            MobileNo: "",
            Password: ""
        }
    }

    componentDidMount() {
        this.GetProfile();
    }

    ProfileImage=()=>{
        var options={
            title:'Select Image',
            customButtons:[
                {name:'customOptionKey',title:'Choose Photo from Custom Option'}
            ],
            storageOptions:{
                skipBackup:true,
                path:'photos'
            }
        };

        ImagePicker.showImagePicker(options,response=>{
            console.log('Response=',response);
            if(response.didCancel){
                console.log('User cancelled image picker');
            }
            else if(response.erroe)
            {
                console.log('ImagePicker Error:',response.error);
            }
            else if(response.customButton)
            {
                console.log('User tapped custom button:',response.customButton);
                alert(response.customButton);
            }
            else
            {
                let source=response;
                this.setState({
                    filePath:source
                });
            }
        });
    }
    
    GetProfile = async () => {
        console.log("Customer Details");
        var UserID = await AsyncStorage.getItem("UserID");
        console.log("UserID" + UserID);
        var Customer_API = "http://computersciencetutorial.com/shopapi/profilegw.php";

        var header = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };

        var Data = { UserID: UserID };

        fetch(
            Customer_API,
            {
                method: 'POST',
                headers: header,
                body: JSON.stringify(Data)
            }
        )
            .then((response) => response.json())
            .then((response) => {
                // console.log("response"+response);
                console.log(response);
                this.setState({
                    FullName: response[0].FullName,
                    MobileNo: response[0].MobileNo,
                    Password: response[0].Password,
                    EmailID:response[0].EmailID
                });
                // console.log("FullName"+this.state.Password);
            })
            .catch((error) => {
                alert("Error " + error);
            });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#98d2c1', height: '45%', alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity onPress={this.ProfileImage}>
                    <View style={{ width: 140, height: 140, borderRadius: 100, borderWidth:4, borderColor: '#fff', backgroundColor: '#eee' }}></View>
                    </TouchableOpacity>
                </View>
                <View style={{ height: '5%', justifyContent: 'center', backgroundColor: '#7fbcac' }}>
                    <Text style={{ fontSize: 20, marginLeft: 5 }}>Name: {this.state.FullName}</Text>
                </View>
                <View style={{ height: '5%', justifyContent: 'center', backgroundColor: '#7fbcac', marginTop: 10 }}>
                    <Text style={{ fontSize: 20, marginLeft: 5 }}>Email ID: {this.state.EmailID}</Text>
                </View>
                <View style={{ height: '5%', justifyContent: 'center', backgroundColor: '#7fbcac', marginTop: 10 }}>
                    <Text style={{ fontSize: 20, marginLeft: 5 }}>Gender:</Text>
                </View>
                <View style={{ height: '5%', justifyContent: 'center', backgroundColor: '#7fbcac', marginTop: 10 }}>
                    <Text style={{ fontSize: 20, marginLeft: 5 }}>Contact: {this.state.MobileNo}</Text>
                </View>
                <View style={{ height: '5%', justifyContent: 'center', backgroundColor: '#7fbcac', marginTop: 10 }}>
                    <Text style={{ fontSize: 20, marginLeft: 5 }}>Password: {this.state.Password}</Text>
                </View>
                <View style={{ height: '5%', justifyContent: 'center', backgroundColor: '#7fbcac', marginTop: 10 }}>
                    <Text style={{ fontSize: 20, marginLeft: 5 }}>My Orders:</Text>
                </View>
                <View style={{ height: '5%', justifyContent: 'center', backgroundColor: '#7fbcac', marginTop: 10 }}>
                    <Text style={{ fontSize: 20, marginLeft: 5 }}>My Offers:</Text>
                </View>
            </View>
        );
    }
}
