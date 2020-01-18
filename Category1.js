import React,{Component} from 'react';
import {View,Text,Image,FlatList,ImageBackground, Platform} from 'react-native';
import {Card} from 'react-native-paper';
const category_screen=require('./img/splash_screen.jpg');
const category_card=require('./img/category_card.jpg');

export default class Category1 extends Component
{
    constructor()
    {
        super();
        this.state={
            category:[]
        };
        // this.GetCategory();
    }

    componentDidMount=()=>{
        this.GetCategory;
    }

    GetCategory=()=>
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
                method:'POST',
                headers:header
                //body:JSON.stringify(Data)
            }
        )
        .then((response)=>response.json())
        .then((response)=>
        {
            this.setState({
                category:response
            });
        })
        .catch((error)=>
        {
            console.logs("Error"+error);
        });
    }

    show1=(ID)=>
    {
        alert("Hello");
    }
    render()
    {
      return(
          <View style={{flex:1,flexDirection:'row',margin:5,backgroundColor:'#ddd'}}>
            <ImageBackground source={category_screen} style={{width:'100%',height:'100%'}} blurRadius={Platform.OS='ios'?10:5}>
                <FlatList style={{margin:5}}
                    data={this.state.category}
                    renderItem={({item})=>
                    <Card style={{marginTop:3,marginBottom:3,marginLeft:3,marginRight:3,backgroundColor:'#D4FF00',height:250}} onPress={this.show1(this,item.ID)}>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center',height:250}}>
                                <Image source={category_card} style={{width:330,height:150}}/>
                                <Text style={{fontSize:25,marginTop:10,textAlign:'center'}}>{item.Name}</Text>
                            </View>
                        </Card>
                    }
                    keyExtractor={item=>item.ID}
                />
            </ImageBackground>              
          </View>
      );
    }
}