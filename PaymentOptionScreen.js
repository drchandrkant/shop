import React, { Component } from 'react';
import { View, Text,TouchableOpacity, TouchableNativeFeedbackBase } from 'react-native';

export default class App extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#cc8',AlignITems:'center' }}>
                <View style={{ backgroundColor: '#000', width: "100%", height: 70, alignItems: 'center', justifyContent: 'center',marginBottom:50 }}>
                    <Text style={{ color: '#FFF', fontSize: 40 }}>Pay Using</Text>
                </View>

                <TouchableOpacity
                 style={{ marginTop: 20,
                    backgroundColor:"#000",
                    width:"100%",
                    height:60
                  }}>
                    <Text style={{ fontSize: 25,color:"#FFF",marginLeft:10,marginTop:10,textAlign:'center' }}>Credit Card</Text>
                </TouchableOpacity>

                <TouchableOpacity
                 style={{ marginTop: 20,
                    backgroundColor:"#000",
                    width:"100%",
                    height:60
                  }}>
                    <Text style={{ fontSize: 25,color:"#FFF",marginLeft:10,marginTop:10,textAlign:'center' }}>Debit Card</Text>
                </TouchableOpacity>

                <TouchableOpacity
                 style={{ marginTop: 20,
                    backgroundColor:"#000",
                    width:"100%",
                    height:60
                  }}>
                    <Text style={{ fontSize: 25,color:"#FFF",marginLeft:10,marginTop:10,textAlign:'center' }}>Gpay</Text>
                </TouchableOpacity>

                <TouchableOpacity
                 style={{ marginTop: 20,
                    backgroundColor:"#000",
                    width:"100%",
                    height:60
                  }}>
                    <Text style={{ fontSize: 25,color:"#FFF",marginLeft:10,marginTop:10,textAlign:'center' }}>Paytm</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={{ marginTop: 20,
                    backgroundColor:"#000",
                    width:"100%",
                    height:60
                  }}>
                    <Text style={{ fontSize: 25,color:"#FFF",marginLeft:10,marginTop:10,textAlign:'center' }}>Cash On Delivery</Text>
                </TouchableOpacity>
            </View >
        );
    }
}