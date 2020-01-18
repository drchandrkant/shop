import React,{Component} from 'react';
import {View,Text,FlatList,Image,ImageBackground,Platform} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Card} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';


// var wine=require('./img/wine.png');
// const coffee=require('./img/coffee.png');
// const lemonade=require('./img/lemonade.png');
// const iced_tea=require('./img/iced_tea.png');
// const chocolate_shake=require('./img/chocolate_shake.png');
// const juice=require('./img/juice.png');
// const milk_shake=require('./img/milk_shake.png');
// const milk=require('./img/milk.png');
// const tea=require('./img/tea.png');
// const green_tea=require('./img/green_tea.png');
const productlist_screen=require('./img/category_card.jpg');

export default class ProductList extends Component
{
    constructor()
    {
        super();
        this.state={
            product:[]
        };
        // this.GetProductlist();
    }

    componentDidMount()
    {
        this.GetProductlist();
    }

    GetProductlist=async()=>
    {
        console.log("Get Product List"); 
        
        var Productlist_API="http://computersciencetutorial.com/shopapi/productlistgw.php";

        var header={
            'Accept':'application/json',
            'Content-Type':'application/json'
        };

        var Data={
            ID:await AsyncStorage.getItem("CategoryID")
        };

        fetch(
            Productlist_API,
            {
                method:'POST',
                headers:header,
                body:JSON.stringify(Data)
            }
        )
        .then((response) => response.json())
        .then((response) => 
        {        
         console.log(response) ;
         this.setState({
            product: response
          });
        })
        .catch((error) => 
        {
          alert("Error "+ error);
        });
    }
    
    show2=async(ID)=>{
        alert(ID);
        await AsyncStorage.setItem("ProductID",ID);
        var v=await AsyncStorage.getItem("ProductID");
        alert(v);
        this.props.navigation.navigate('Product');
    }

    render()
    {
        return(
            <View style={{flex:1,flexDirection:'row',backgroundColor:'#ddd',height:130}}>
                <ImageBackground source={productlist_screen} style={{width:'100%',height:'100%'}} blurRadius={Platform.OS='iso'?10:5}>
                <FlatList style={{margin:5}}
                     data={this.state.product}
                    //numColumns={2}
                        renderItem={({item}) =>
                        <Card style={{marginTop:13,marginBottom:13,marginLeft:13,marginRight:13}}onPress={this.show2.bind(this,item.ID)}>
                            <View style={{justifyContent:'center',alignItems:'center',height:349}}>
                                <Image source={{uri:item.ImagePath}} style={{width:76,height:215}}></Image>
                                <Text style={{fontSize:20,marginTop:10,textAlign:'center'}}>{item.Name}</Text>
                                <Text style={{fontSize:20,marginTop:10,textAlign:'center'}}>{item.Price}</Text>
                            </View>
                        </Card>
                        }
                        keyExtractor={item => item.ID}
                />
                </ImageBackground>
            </View>
        );
    }
}