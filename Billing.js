import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Card } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            customer_detail: [],
            UserID: "",
            OrderDate: "",
            OrderID: "",
            CustomerName: "",
            ContactNo: "",
            EmailID: "",
            Address: "",
            GrandTotal: ""
        }
    }
    componentDidMount() {
        this.Bill();
    }

    Bill = async () => {
        console.log("Billing Details");
        var UserID = await AsyncStorage.getItem("UserID");
        var Customer_API = "http://computersciencetutorial.com/shopapi/billgw.php";

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
                var i=response.length-1;
                this.setState({
                    customer_detail: response,
                    OrderDate: response[0].RegDateTime,
                    OrderID: response[0].ID,
                    CustomerName: response[0].FullName,
                    ContactNo: response[0].MobileNo,
                    EmailID: response[0].EmailID,
                    GrandTotal: parseFloat(response[i].GrandTotal).toFixed(2)
                    // Address:response[0].Address
                });
                console.log(this.state.GrandTotal);
            })
            .catch((error) => {
                alert("Error " + error);
            });
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#bb7' }}>
                <Card style={{ marginTop: 23, marginBottom: 3, marginLeft: 3, marginRight: 3, backgroundColor: '#790', height: 50, width: 352 }}>
                    <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 28, fontWeight: 'bold' }}>Billing Details</Text>
                </Card>
                <View style={{ width: '100%' }}>
                    <Card style={{ marginTop: 20, marginBottom: 3, marginLeft: 3, marginRight: 3, backgroundColor: '#bb5' }}>
                        <View>
                            <View style={{ marginTop: 3, marginLeft: 10, marginRight: 10, marginBottom: 10 }}>
                                <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Customer Details</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={{ marginTop: 3, marginLeft: 10, marginRight: 10, marginBottom: 10 }}>
                                    <Text style={{ textAlign: 'left', fontSize: 15, fontWeight: 'bold' }}>Order Date : {this.state.OrderDate}</Text>
                                </View>
                                <View style={{ marginTop: 3, marginLeft: 10, marginRight: 10, marginBottom: 10 }}>
                                    <Text style={{ textAlign: 'left', fontSize: 15, fontWeight: 'bold' }}>Order ID : {this.state.OrderID}</Text>
                                </View>
                            </View>
                            <Text style={{ marginTop: 3, marginLeft: 10, marginRight: 10, marginBottom: 10, fontSize: 15, fontWeight: 'bold' }}>Customer Name : {this.state.CustomerName}</Text>
                            <Text style={{ marginTop: 3, marginLeft: 10, marginRight: 10, marginBottom: 10, fontSize: 15, fontWeight: 'bold' }}>Contact No. : {this.state.ContactNo}</Text>
                            <Text style={{ marginTop: 3, marginLeft: 10, marginRight: 10, marginBottom: 10, fontSize: 15, fontWeight: 'bold' }}>Email ID : {this.state.EmailID}</Text>
                            <Text style={{ marginTop: 3, marginLeft: 10, marginRight: 10, marginBottom: 10, fontSize: 15, fontWeight: 'bold' }}>Address : </Text>
                        </View>
                    </Card>

                    <Card style={{ marginTop: 13, marginBottom: 3, marginLeft: 3, marginRight: 3, backgroundColor: '#790' }}>
                        <View style={{ marginTop: 3, marginLeft: 10, marginRight: 10, marginBottom: 10 }}>
                            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Purchase Detail</Text>
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
                </View>
                <View style={{ width: "100%" }}>
                <FlatList
                    data={this.state.customer_detail}
                    renderItem={({ item }) =>
                        <Card style={{ marginTop: 3, marginBottom: 3, marginLeft: 3, marginRight: 3, backgroundColor: '#bb5', width: 352 }}>
                            <View style={{ flexDirection: 'row', marginTop: 3, marginLeft: 3, marginRight: 150, marginBottom: 10, width: "100%" }}>
                                <Text style={{ marginleft: 3, textAlign: 'left', fontSize: 12, fontWeight: 'bold', width: 80 }}>{item.Name}</Text>
                                <Text style={{ marginLeft: 32, textAlign: 'center', fontSize: 12, fontWeight: 'bold', width: 15 }}>{item.Quantity}</Text>
                                <Text style={{ marginLeft: 10, textAlign: 'center', fontSize: 12, fontWeight: 'bold', width: 30 }}>{item.Price}</Text>
                                <Text style={{ marginLeft: 10, textAlign: 'center', fontSize: 12, fontWeight: 'bold', width: 40 }}>{item.Amount}</Text>
                                <Text style={{ marginLeft: 10, textAlign: 'center', fontSize: 12, fontWeight: 'bold', width: 40 }}>{item.IGST}</Text>
                                <Text style={{ marginLeft: 15, textAlign: 'center', fontSize: 12, fontWeight: 'bold', width: 60 }}>{item.Total}</Text>
                            </View>
                        </Card>
                    }
                // keyExtractor={item => item.ID}
                />
                </View>
                <View style={{ height: 50, width: "100%" }}>
                    <Card style={{ marginTop: 13, marginBottom: 3, marginLeft: 3, marginRight: 3, backgroundColor: '#790' }}>
                        <View style={{ flexDirection: 'row', marginTop: 3, marginLeft: 3, marginRight: 10, marginBottom: 10 }}>
                            <Text style={{ textAlign: 'left', fontSize: 12, fontWeight: 'bold' }}>Grand Total {'\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'} {this.state.GrandTotal}</Text>
                        </View>
                    </Card>
                </View>
            </View>
        );
    }
}