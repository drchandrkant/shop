import React,{Component} from 'react';
import {View,Text,FlatList,Image,ImageBackground,Platform} from 'react-native';
import {Card} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import {createBottomTabNavigator,createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {Icon} from 'react-native-elements';

import Profile from './Profile';
import Cart from './Cart';
import History from './History';
import ProductList from './ProductList';
import Product from './Product';

const category_screen=require('./img/splash_screen.jpg');
const category_card=require('./img/category_card.jpg');
// const background=require('./img/page.jpg');

export default class Category extends Component
{
    constructor(props)
    {
        super(props);
        
        this.state={
            category:[]
        };
        this.getCategory();
       
    }

    // componentDidMount(){
        
    //    this.GetCategory;   
    // }

    getCategory=()=>
    {
        console.log("Get Category"); 
        
        var Category_API="http://computersciencetutorial.com/shopapi/categorygw.php";

        var header={
            'Accept':'application/json',
            'Content-Type':'application/json'
        };

        var Data={};

        fetch(
            Category_API,
            {
                method:'GET',
                headers:header
                // body:JSON.stringify(Data)
            }
        )
        .then((response) => response.json())
        .then((response) => 
        {    
         console.log(response);     
         this.setState({
            category: response
          });
        })
        .catch((error) => 
        {
          alert("Error "+ error);
        });
    }

    showProductList=async(ID)=>{
        console.log("Category Clicked");
        // alert("hello");
         //console.log(ID);
        await AsyncStorage.setItem("CategoryID",ID);
         var v=await AsyncStorage.getItem("CategoryID");
         console.log(v);
        this.props.navigation.navigate("ProductList");
    }

        render()
    {
        return(
         <View style={{flex:1,flexDirection:'row',backgroundColor:'#ddd'}}>
             <ImageBackground source={category_screen} style={{width:'100%',height:'100%'}} blurRadius={Platform.OS='iso'?10:5}>
                <FlatList style={{margin:5}}
                     data={this.state.category}
                    //numColumns={2}
                    renderItem={({item}) =>
                        <Card style={{marginTop:3,marginBottom:3,marginLeft:3,marginRight:3,backgroundColor:'#D4FF00',height:250}}>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center',height:250}}>
                                <Image source={category_card} style={{width:330,height:150}}></Image>
                                <Text style={{fontSize:25,marginTop:10,textAlign:'center'}}>{item.Name}</Text>
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

// const TabNavigator=createMaterialBottomTabNavigator(
//     {
//         Category:{
//             screen:Category,
//             navigationOptions:{
//                 tabBarLabel:'Category',
//                 activeColor:'#ff0000',
//                 inactiveColor:'#000',
//                 barStyle:{backgroundColor:'#d4ff00'},
//                 tabBarIcon:()=>(
//                     <View>
//                         <Icon name={'person'} size={25} style={{color:'#ff0000'}}/>
//                     </View>
//                 )
//             }
//         },
//         Profile:{
//             screen:Profile,
//             navigationOptions:{
//                 tabBarLabel:'Profile',
//                 activeColor:'#ff0000',
//                 inactiveColor:'#000',
//                 barStyle:{backgroundColor:'#d4ff00'},
//                 tabBarIcon:()=>(
//                     <View>
//                         <Icon name={'person'} size={25} style={{color:'#ff0000'}}/>
//                     </View>
//                 )
//             }
//         },
//         History:{
//             screen:History,
//             navigationOptions:{
//                 tabBarLabel:'History',
//                 activeColor:'#ff0000',
//                 inactiveColor:'#000',
//                 barStyle:{backgroundColor:'#d4ff00'},
//                 tabBarIcon:()=>(
//                     <View>
//                         <Icon name={'person'} size={25} style={{color:'#ff0000'}}/>
//                     </View>
//                 )
//             }
//         },
//         Cart:{
//             screen:Cart,
//             navigationOptions:{
//                 tabBarLabel:'Cart',
//                 activeColor:'#ff0000',
//                 inactiveColor:'#000',
//                 barStyle:{backgroundColor:'#d4ff00'},
//                 tabBarIcon:()=>(
//                     <View>
//                         <Icon name={'add-shopping-cart'} size={25} style={{color:'#ff0000'}}/>
//                     </View>
//                 )
//             }
//         }
//     }
// );

// export default createAppContainer(TabNavigator);