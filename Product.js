import React,{Component} from 'react';
import {View,Text,FlatList,Image,Button,Picker,StyleSheet,ScrollView,Platform,ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

var wine=require('./img/wine.png');
// const product_screen=require('./img/product_screen.jpg');

export default class Description extends Component
{
    constructor()
    {
        super();
        this.state={
            choosenLabel:"",
            choosenValue:"",
            UserID:"",
            ProductID:"",
            Name:"",
            Price:"",
            Quantity:"",
            GST:"",
            CST:"",
            Amount:"",
            Description:"",
            ImagePath:""
        };
        // this.GetProduct();
    }

    componentDidMount()
    {
        this.GetProduct();
    }
    
    GetProduct=async()=>
    {
        console.log("Get Product Description"); 
        
        var Product_API="http://computersciencetutorial.com/shopapi/productgw.php";

        var header={
            'Accept':'application/json',
            'Content-Type':'application/json'
        };

        var Data={
            ID:await AsyncStorage.getItem("ProductID")
        };

        fetch(
            Product_API,
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
            this.setState({
                ProductID:response[0].ID,
                Name:response[0].Name,
                Price:response[0].Price,
                GST:response[0].GST,
                CST:response[0].CST,
                Description:response[0].Description,
                ImagePath:response[0].ImagePath
            });
            // console.log(response[0].ID);
        })
        .catch((error) => 
        {
          alert("Error "+ error);
        });
    }

    Check_SignIn_Status=async()=>
    {
        // console.log("sign in status");
        // var v = await AsyncStorage.getItem("SignInStatus");
        // console.log(v);
        // if(v==0)
        // {
            // console.log("if");
            // this.props.navigation.navigate("SignIn");
        // }
        // else if(v==1)
        // {
            // console.log("else");
            this.Add_Cart();
        // }
    }

    Add_Cart=async()=>
    {
        console.log("Add to Cart"); 
        
        // var UserID=await AsyncStorage.getItem("UserID");
        var UserID=await AsyncStorage.getItem("UserID");
        var ProductID=this.state.ProductID;
        var Quantity=this.state.choosenLabel;
        var Price=parseFloat(this.state.Price);
        var GST=parseFloat(this.state.GST);
        var CST=parseFloat(this.state.CST);
        var Amount=parseFloat(this.state.Amount);
        // var Description=this.Description;
        // alert(this.state.ProductID);
        GST=(GST*Price*Quantity)/100;
        CST=(CST*Price*Quantity)/100;
        Amount=Quantity*Price;
        // console.log("UserID"+UserID);
        // console.log("ProductID"+ProductID);
        // console.log("Quantity"+Quantity);
        // console.log("price"+Price);
        // console.log("GST"+GST);
        // console.log("CST"+CST);

        var Cart_API="http://computersciencetutorial.com/shopapi/cartgw.php";

        var header={
            'Accept':'application/json',
            'Content-Type':'application/json'
        };

        var Data={
            UserID:UserID,
            ProductID:ProductID,
            Quantity:Quantity,
            Price:Price,
            GST:GST,
            CST:CST,
            Amount:Amount
        };

        fetch(
            Cart_API,
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
            this.props.navigation.navigate("Cart");
        })
        .catch((error) => 
        {
          alert("Error "+ error);
        });
    }

    Picker_Click=(label,value)=>
    {
         //alert(label);
        this.setState({choosenLabel:label});
    }

    render()
    {
      return(
          <ScrollView style={{flex:2,backgroundColor:"#7caa"}}>
              {/* <ImageBackground source={product_screen} style={{width:360,height:"100%"}}> */}
                <View style={{justifyContent:'center',alignItems:'center',marginTop:50}}>
                    <Image source={this.state.ImagePath} style={{width:76,height:215}}></Image>
                    <Text style={{fontSize:25,marginTop:10,textAlign:'center'}}>{this.state.Name}</Text>
                    <Text style={{fontSize:25,marginTop:10,textAlign:'center'}}>{this.state.Price}</Text>
                    <Text style={{fontSize:25,marginTop:10,textAlign:'center'}}>Quantity</Text>
                    <Picker selectedValue={this.state.choosenLabel}
                        prompt="Select Quantity"
                        style={{width:'42%',backgroundColor:"#58aa"}}
                        onValueChange={this.Picker_Click.bind()}>
                            <Picker.Item label="Select Quantity" value="0"></Picker.Item>
                            <Picker.Item label="1" value="1"></Picker.Item>
                            <Picker.Item label="2" value="2"></Picker.Item>
                            <Picker.Item label="3" value="3"></Picker.Item>
                            <Picker.Item label="4" value="4"></Picker.Item>
                            <Picker.Item label="5" value="5"></Picker.Item>
                            <Picker.Item label="6" value="6"></Picker.Item>
                            <Picker.Item label="7" value="7"></Picker.Item>
                            <Picker.Item label="8" value="8"></Picker.Item>
                            <Picker.Item label="9" value="9"></Picker.Item>
                            <Picker.Item label="10" value="10"></Picker.Item>
                    </Picker>
                    <Text style={{fontSize:25,marginTop:10,textAlign:'center'}}>{this.state.Description}</Text>
                    <View style={{marginTop:20}}>
                        <Button title='Add To Cart' onPress={this.Check_SignIn_Status.bind()}/>
                    </View>
                </View>        
                {/* </ImageBackground> */}
            </ScrollView>
      );
    }
}