import React, { Component } from 'react';
import { View, Text, FlatList, Image, ImageBackground, Platform, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Card } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const productlist_screen = require('./img/category_card.jpg');

export default class ProductList extends Component {
    constructor() {
        super();
        this.state = {
            OrderHistory: [],
            UserID: "",
            OrderDate: "",
            OrderID: "",
            GrandTotal:""
        };
    }

    componentDidMount() {
        this.GetHistory();
    }

    GetHistory = async () => {
        console.log("Get Product List");
        var UserID = await AsyncStorage.getItem("UserID");
        var History_API = "http://computersciencetutorial.com/shopapi/historygw.php";

        var header = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };

        var Data = {
            UserID: UserID
        };

        fetch(
            History_API,
            {
                method: 'POST',
                headers: header,
                body: JSON.stringify(Data)
            }
        )
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                var i=response.length-1;
                this.setState({
                    OrderHistory: response,
                    OrderDate: response[0].RegDateTime,
                    OrderID: response[0].ID,
                    GrandTotal: parseFloat(response[i].GrandTotal).toFixed(2)
                });
            })
            .catch((error) => {
                alert("Error " + error);
            });
    }


    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#ddd', height: 130 }}>
                <ImageBackground source={productlist_screen} style={{ width: '100%', height: '100%' }} blurRadius={Platform.OS = 'iso' ? 10 : 5}>
                    <Card style={{ marginTop: 13, marginBottom: 3, marginLeft: 3, marginRight: 3, backgroundColor: '#790' }}>
                        <View style={{ marginTop: 3, marginLeft: 10, marginRight: 10, marginBottom: 10 }}>
                            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Purchase History</Text>
                        </View>
                    </Card>
                    <Card style={{ marginTop: 3, marginBottom: 3, backgroundColor: '#790', width: "100%" }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ marginTop: 3, marginLeft: 3, marginRight: 70, marginBottom: 10 }}>
                                <Text style={{ textAlign: 'left', fontSize: 12, fontWeight: 'bold' }}>Order Date : {this.state.OrderDate}</Text>
                            </View>
                            <View style={{ marginTop: 3, marginLeft: 3, marginRight: 70, marginBottom: 10 }}>
                                <Text style={{ textAlign: 'left', fontSize: 12, fontWeight: 'bold' }}>Order ID : {this.state.OrderID}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ marginTop: 3, marginLeft: 3, marginRight: 70, marginBottom: 10 }}>
                                <Text style={{ textAlign: 'left', fontSize: 12, fontWeight: 'bold' }}>Product{'\n'}Name</Text>
                            </View>
                            <View style={{ marginTop: 3, marginLeft: 3, marginRight: 10, marginBottom: 10 }}>
                                <Text style={{ textAlign: 'left', fontSize: 12, fontWeight: 'bold' }}>Qty</Text>
                            </View>
                            <View style={{ marginTop: 3, marginLeft: 3, marginRight: 10, marginBottom: 10 }}>
                                <Text style={{ textAlign: 'left', fontSize: 12, fontWeight: 'bold' }}>Price</Text>
                            </View>
                            <View style={{ marginTop: 3, marginLeft: 3, marginRight: 20, marginBottom: 10 }}>
                                <Text style={{ textAlign: 'left', fontSize: 12, fontWeight: 'bold' }}>Amt</Text>
                            </View>
                            <View style={{ marginTop: 3, marginLeft: 3, marginRight: 40, marginBottom: 10 }}>
                                <Text style={{ textAlign: 'left', fontSize: 12, fontWeight: 'bold' }}>IGST</Text>
                            </View>
                            <View style={{ marginTop: 3, marginLeft: 3, marginRight: 10, marginBottom: 10 }}>
                                <Text style={{ textAlign: 'left', fontSize: 12, fontWeight: 'bold' }}>Total</Text>
                            </View>
                        </View>
                    </Card>
                    <Card style={{ marginTop: 3, backgroundColor: '#fff', width: "100%", height: 300 }}>
                        <ScrollView style={{ height: 230 }}>
                            <FlatList
                                data={this.state.OrderHistory}
                                renderItem={({ item }) =>
                                    <Card style={{ marginTop: 3, marginBottom: 3, backgroundColor: '#bb5', width: "100%" }}>
                                        <View style={{ flexDirection: 'row', marginTop: 3, marginLeft: 3, marginRight: 150, marginBottom: 10, width: "100%" }}>
                                            <Text style={{ marginleft: 3, textAlign: 'left', fontSize: 12, fontWeight: 'bold', width: 80 }}>{item.Name}</Text>
                                            <Text style={{ marginLeft: 32, textAlign: 'center', fontSize: 12, fontWeight: 'bold', width: 15 }}>{item.Quantity}</Text>
                                            <Text style={{ marginLeft: 10, textAlign: 'center', fontSize: 12, fontWeight: 'bold', width: 30 }}>{item.Price}</Text>
                                            <Text style={{ marginLeft: 10, textAlign: 'center', fontSize: 12, fontWeight: 'bold', width: 40 }}>{item.Amount}</Text>
                                            <Text style={{ marginLeft: 10, textAlign: 'center', fontSize: 12, fontWeight: 'bold', width: 50 }}>{item.IGST}</Text>
                                            <Text style={{ marginLeft: 15, textAlign: 'center', fontSize: 12, fontWeight: 'bold', width: 60 }}>{item.Total}</Text>
                                        </View>
                                    </Card>
                                }
                                keyExtractor={item => item.ID}
                            />
                        </ScrollView>
                    </Card>
                    <View style={{ height: 50, width: "100%" }}>
                        <Card style={{ marginTop: 13, marginBottom: 3, marginLeft: 3, marginRight: 3, backgroundColor: '#790' }}>
                            <View style={{ flexDirection: 'row', marginTop: 3, marginLeft: 3, marginRight: 10, marginBottom: 10 }}>
                                <Text style={{ textAlign: 'left', fontSize: 12, fontWeight: 'bold' }}>Grand Total {'\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'} {this.state.GrandTotal}</Text>
                            </View>
                        </Card>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}