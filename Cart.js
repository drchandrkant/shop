import React, { Component } from 'react';
import { View, Text, FlatList, Button, Image } from 'react-native';
import { Card } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';

const cart_screen = require('./img/category_card.jpg');

// class TimeComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { time: Date.now() };
//     }
// }

export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart_list: [],
            UserID: "",
            Amount: 0,
            GST: 0,
            CST: 0,
            Sub_Total: 0,
            Grand_Total: 0
        };
    }

    componentDidMount() {
        // this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
        this.GetCartItem();
    }

    // componentWillUnmount() {
    //     clearInterval(this.interval);
    // }

    GetCartItem = async () => {
        console.log("Get Cart Item");
        var UserID = await AsyncStorage.getItem("UserID");
        console.log(UserID);
        var Cart_API = "http://computersciencetutorial.com/shopapi/cartshowgw.php";

        var header = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };

        var Data = { UserID: UserID };

        fetch(
            Cart_API,
            {
                method: 'POST',
                headers: header,
                body: JSON.stringify(Data)
            }
        )
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                var Sub_Total = 0, CST = 0, GST = 0, IGST = 0, Grand_Total = 0;
                //     // // console.log("Loop");
                for (let i = 0; i < response.length; i++) {
                    console.log("loop");
                    Sub_Total = (parseFloat(Sub_Total) + parseFloat(response[i].Amount)).toFixed(1);
                    CST = (parseFloat(CST) + parseFloat(response[i].CST)).toFixed(1);
                    GST = (parseFloat(GST) + parseFloat(response[i].GST)).toFixed(1);
                    // IGST = (parseFloat(GST) + parseFloat(CST)).toFixed(3);
                }
                Grand_Total = (parseFloat(Grand_Total) + parseFloat(Sub_Total) + parseFloat(CST) + parseFloat(GST)).toFixed(1);
                console.log(Sub_Total);
                console.log(CST);
                console.log(GST);
                this.setState({
                    cart_list: response,
                    Sub_Total: Sub_Total,
                    CST: CST,
                    GST: GST,
                    // IGST:IGST,
                    Grand_Total: Grand_Total
                });
            })
            .catch((error) => {
                alert("Error " + error);
            });
    }

    PayNow = async () => {
        console.log("Pay Now");
        var UserID = await AsyncStorage.getItem("UserID");
        console.log(UserID);
        var Order_API = "http://computersciencetutorial.com/shopapi/ordergw.php";

        var header = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };

        var Data = {
            // ID: await AsyncStorage.getItem("ID")
            UserID: UserID
        };

        fetch(
            Order_API,
            {
                method: 'POST',
                headers: header,
                body: JSON.stringify(Data)
            }
        )
            .then((response) => response.json())
            .then((response) => {
                console.log("response" + JSON.stringify(response));
                this.props.navigation.navigate("Billing");
            })
            .catch((error) => {
                alert("Error " + error);
            });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 4, backgroundColor: '#FFF' }}>
                    <FlatList style={{ marginLeft: 2, marginRight: 2 }}
                        data={this.state.cart_list}
                        renderItem={({ item }) =>
                            <Card style={{ marginTop: 3, marginBottom: 3, marginLeft: 3, marginRight: 3, backgroundColor: "#D456", height: 114 }}>
                                <View style={{ justifyContent: 'center', AlignItem: 'center' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', width: '20%', marginLeft: 9, marginTop: 4, marginBottom: 9, height: 1 }}>
                                        <Image source={cart_screen} style={{ width: 80, height: 106 }}></Image>
                                    </View>
                                    <View style={{ justifyContent: 'center', marginLeft: 30, marginTop: 6, alignItems: 'center' }}>
                                        <Text style={{ fontSize: 15, textAlign: 'center', fontWeight: 'bold' }}>Name: {item.Name}</Text>
                                        <Text style={{ fontSize: 15, textAlign: 'center', fontWeight: "bold" }}>Price: Rs.{item.Price}</Text>
                                        <Text style={{ fontSize: 15, marginBottom: 20, textAlign: 'center', fontWeight: 'bold' }}>Quantity: {item.Quantity}</Text>
                                    </View>
                                </View>
                            </Card>
                        }
                        keyExtractor={item => item.ID}
                    />
                </View>
                <View style={{ flex: 2, backgroundColor: '#9FF99F', flexDirection: 'row', marginLeft: 5, marginRight: 5 }}>
                    <View style={{ width: '60%', height: '100%', margin: 10 }}>
                        <Text style={{ fontSize: 20 }}>Sub-Total</Text>
                        <Text style={{ fontSize: 20, marginTop: 10 }}>Total CST</Text>
                        <Text style={{ fontSize: 20, marginTop: 10 }}>Total GST</Text>
                        <Text style={{ fontSize: 20, marginTop: 25, fontWeight: "bold" }}>Grand Total</Text>
                    </View>
                    <View style={{ width: '40%', height: '100%', margin: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 5 }}>Rs.{this.state.Sub_Total}</Text>
                        <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}>Rs.{this.state.CST}</Text>
                        <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}>Rs.{this.state.GST}</Text>
                        <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 30 }}>Rs.{this.state.Grand_Total}</Text>
                    </View>
                </View>
                <View style={{ flex: 0, backgroundColor: '#FFF', justifyContent: 'center', marginTop: 5, marginLeft: 3, marginRight: 3 }}>
                    <Button title='Pay Now' onPress={this.PayNow} />
                </View>
            </View>
        );
    }
}