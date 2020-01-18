import React,{Component} from 'react';
import {View,Text} from 'react-native';
import CircleButton from 'react-native-Circle-button';

export default class App extends Component
{
    ButtonTop()
    {
        alert('Top Button Click');
    }
    ButtonRight()
    {
        alert('Right Button Click');
    }
    ButtonBottom()
    {
        alert('Bottom Button Click');
    }
    ButtonLeft()
    {
        alert('Left Button Click');
    }
    render()
    {
      return(
          <View style={{flex:1}}>
              <Text 
                style={{paddingTop:120,
                    justifyContent:'center',
                    alignContent:'center',
                    textAlign:'center',
                    fontSize:30
                    }}>
                        Customizable Circle Button
              </Text>
              <CircleButton
                size={45}
                primaryColor="#41727E"
                secondaryColor="#459186"
                onPressButtonTop={this.ButtonTop.bind()}
                onPressButtonRight={this.ButtonRight.bind()}
                onPressButtonBottom={this.ButtonBottom.bind()}
                onPressButtonLeft={this.ButtonLeft.bind()}
              />
          </View>
      );
    }
}