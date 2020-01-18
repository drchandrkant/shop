import React,{Component} from 'react';
import {View,Text} from 'react-native';

class CustomComponent extends Component
{
    constructor()
    {
        super();
        console.log('constructor() called.');
    }

    componentWillMount()
    {
        console.log('componentWillMount() Called.');
    }

    componentDidMount()
    {
        console.log('componentDidMount() Called.');
    }

    componentWillReceiveProps(nextProp)
    {
        console.log('componentWillRecieve() Called.');
    }

    shouldComponentUpdate(nextProp,nextState)
    {
        console.log('shouldComponentUpdate() Called.');
        return true;
    }

    componentWillUpdate(nextProp,nextState)
    {
        console.log('componentWillUpdate() Called.');
    }

    componentDidUpdate(prevProp,prevState)
    {
        console.log('componentDidUpdate() Called.');
    }

    componentWillUnmount()
    {
        console.log('componentWillUnmount() called.');
    }

    componentDidCatch(error,info)
    {
        console.log('componentDidCatch() Called.');
    }

    
    render()
    {
      return(
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text>Language is:{this.props.name}</Text>
          </View>
      );
    }
}

export default class LifeCycle extends Component
{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center'}}>
                <CustomComponent name="C"/>
            </View>
        );
    } 
}
