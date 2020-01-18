import React,{Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Splash from './Splash';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SendOtp from './SendOtp';
import VerifyOtp from './VerifyOtp';
import ChangePassword from './ChangePassword';
import Category from './Category';
import ProductList from './ProductList';
import Product from './Product';
import Cart from './Cart';
import Billing from './Billing';
import PaymentOptionScreen from './PaymentOptionScreen';
import History from './History';

const App=createStackNavigator({
    Splash:
    {   
        screen:Splash,
        navigationOptions:{header:null}
    },
    SignIn:
    {
        screen:SignIn,
        navigationOptions:{header:null}
    },
    SignUp:
    {
        screen:SignUp,
        navigationOptions:{header:null}
    },
    SendOtp:
    {
        screen:SendOtp,
        navigationOptions:{header:null}
    },
    VerifyOtp:
    {
        screen:VerifyOtp,
        navigationOptions:{header:null}
    },
    ChangePassword:
    {
        screen:ChangePassword,
        navigationOptions:{header:null}
    },
    Category:
    {
        screen:Category,
        navigationOptions:{header:null}
    },
    ProductList:
    {
        screen:ProductList,
        navigationOptions:{header:null}
    },
    Product:
    {
        screen:Product,
        navigationOptions:{header:null}
    },
    Cart:
    {
        screen:Cart,
        navigationOptions:{header:null}
    },
    Billing:
    {
        screen:Billing,
        navigationOptions:{header:null}
    },
    PaymentOptionScreen:
    {
        screen:PaymentOptionScreen,
        navigationOptions:{header:null}
    },
    History:
    {
        screen:History,
        navigationOptions:{header:null}
    }
 },
// {
//     initialRouteName:'Splash'
// }
);

export default createAppContainer(App);