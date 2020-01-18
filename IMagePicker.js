import React,{Component} from 'react';
import {View,Text,Button,Image,TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const options={
    title:'my pic app',
    takePhotoButtonTitle:'Take photo with your camera',
    chooseFromLibraryButtonTitle:'choose photo from library'
}
export default class IMagePicker extends Component
{
    constructor(){
        super();
        this.state={
            filePath:{}
        }
    }
    myfun=()=>{
        // alert('Clicked');
        var options={
            title:'Select Image',
            customButtons:[
                {name:'customOptionKey',title:'Choose Photo from Custom Option'}
            ],
            storageOptions:{
                skipBackup:true,
                path:'photos'
            }
        };

        ImagePicker.showImagePicker(options,response=>{
            console.log('Response=',response);
            if(response.didCancel){
                console.log('User cancelled image picker');
            }
            else if(response.erroe)
            {
                console.log('ImagePicker Error:',response.error);
            }
            else if(response.customButton)
            {
                console.log('User tapped custom button:',response.customButton);
                alert(response.customButton);
            }
            else
            {
                let source=response;
                this.setState({
                    filePath:source
                });
            }
        });
    }
    
    render()
    {
      return(
          <View style={{flex:1,backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}}>
              <Image
                source={{
                  uri: 'data:image/jpeg;base64,' + this.state.filePath.data,
                }}
                style={{ width: 100, height: 100 }}
            />
            {/* <Image
              source={{ uri: this.state.filePath.uri }}
              style={{ width: 250, height: 250 }}
            /> */}
            <Text style={{ alignItems: 'center' }}>
              {this.state.filePath.uri}
            </Text>
            <TouchableOpacity style={{backgroundColor:'green',margin:10,padding:10}}
              onPress={this.myfun}>
                  <Text style={{color:'#fff'}}>Select Image</Text>
              </TouchableOpacity>
          </View>
      );
    }
}