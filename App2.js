import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


import MapView from 'react-native-maps';


export default class App extends Component
{

  render()
  {

    return(

      <View style={{flex:1}}>

     
        <MapView

          style={styles.map}

          initialRegion={{

            latitude: 26.9124,

            longitude: 75.7873,

            latitudeDelta: 0.05,

            longitudeDelta: 0.05,

          }}

        />

      </View>

    );

  }
  
}


const styles = StyleSheet.create({

  container: {

    position:'absolute',

    top:0,

    left:0,

    right:0,

    bottom:0,

    alignItems: 'center',

    justifyContent: 'flex-end',

  },

  map: {

    position:'absolute',

    top:0,

    left:0,

    right:0,

    bottom:0,

  },

}
);