import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';
import Snackbar from 'react-native-snackbar-component';

export default class SNackbar extends Component
{
    constructor()
    {
        super();
        this.state=({
            snackIsVisible:false,
            // distance:100
        });

    }

    Button_Click=()=>
   {
        this.setState({ 
            snackIsVisible: !this.state.snackIsVisible
        });
    }

    Snackbar_Click=() => {
        alert("let's go");
        this.setState({ 
          snackIsVisible: !this.state.snackIsVisible 
        });
    }
   
    render()
    {
      return(
          <View style={{flex:1,alignItmes:'center',justifyContent:'center'}}>
              <Button
                onPress={this.Button_Click.bind(this)}
                title="show snackbar"
                color="#841584"
                accessibilityLabel="toggle"
            />
             <Snackbar
                visible={this.state.snackIsVisible}
                textMessage="This is Snackbar"
                actionHandler={this.Snackbar_Click.bind(this)}
                actionText="let's go"
                // distanceCallback={distance => {
                // this.setState({ distance: distance});
                //  }}
            /> 
          </View>
      );
    }
}