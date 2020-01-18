import React,{Component} from 'react';
import {View,Text,Button,TouchableOpacity,ScrollView,Image} from 'react-native';
import DocumentPicker from 'react-native-document-picker';

export default class FIlePicker extends Component
{
    constructor(){
        super();
        this.state={
            singleFile:'',
            multipleFile:[]
        };
    }
    async selectOneFile(){
        try{
            const res=await DocumentPicker.pick({
                type:[DocumentPicker.types.allFiles]
            });
            console.log('res:' + JSON.stringify(res));
            console.log('URI:' + res.uri);
            console.log('Type:' + res.type);
            console.log('File name:' + res.name);
            console.log('File Size:' + res.size);
            this.state({
                singleFile:res
            });
        }
        catch(err){
            if(DocumentPicker.isCancel(err)){
                alert('Canceled from single doc Picker');
            }
            else{
                alert('Unknown Error:' + JSON.stringify(err));
                throw err;
            }
        }
    }

    async selectMultipleFile() {
        try {
          const results = await DocumentPicker.pickMultiple({
            type: [DocumentPicker.types.images],
          });
          for (const res of results) {
            console.log('res : ' + JSON.stringify(res));
            console.log('URI : ' + res.uri);
            console.log('Type : ' + res.type);
            console.log('File Name : ' + res.name);
            console.log('File Size : ' + res.size);
          }
          this.setState({ multipleFile: results });
        } 
        catch (err) {
          if (DocumentPicker.isCancel(err)) {
            alert('Canceled from multiple doc picker');
          } 
          else {
            alert('Unknown Error: ' + JSON.stringify(err));
            throw err;
          }
        }
      }

    render()
    {
      return(
          <View style={{flex:1,backgroundColor:'#fff',padding:16}}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={{alignItems:'center',flexDirection:'row',backgroundColor:'#DDDDDD',padding:5}}
                onPress={this.selectOneFile.bind(this)}>
                    <Text style={{margin:10,fontSize:19}}>
                        Click here to pick one file
                    </Text>
                    <Image source={{
                        uri:'./img/logo.png'
                    }}
                    style={{height:20,width:20,resizeMode:'stretch'}}
                    />
                </TouchableOpacity>
                <Text style={{marginTop:16,fontSize:15,backgroundColor:'#fff',color:'black'}}>
                    File Name:{' '}
                    {this.state.singleFile.name ? this.state.singleFile.type : ''}
                    {'\n'}
                    
                    File Size:{' '}
                    {this.state.singleFile.size ? this.state.singleFile.size : ''}
                    {'\n'}

                    URI:{' '}
                    {this.state.singleFile.uri ? this.state.singleFile.uri : ''}
                    {'\n'}
                </Text>
                <View
                    style={{backgroundColor:'grey',height:2,margin:10}} 
                />
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={{alignItems:'center',flexDirection:'row',backgroundColor:'#DDDDDD',padding:5}}
                    onPress={this.selectMultipleFile.bind(this)}
                >
                    <Text style={{marginRight:10,fontSize:19}}>
                        Click here to pick mutliple files
                    </Text>
                    <Image
                        source={{uri:'./img/logo.png'}}
                        style={{height:20,width:20,resizeMode:'stretch'}}
                    />
                </TouchableOpacity>
                <ScrollView>
                    {this.state.multipleFile.map((item,key)=>(
                        <View key={key}>
                            <Text style={{backgroundColor:'#fff',fontSize:15,marginTop:16,color:'balck'}}>
                                File Name:{item.name ? item.name : ''}
                                {'\n'}

                                Type:{item.type ? itemm.type : ''}
                                {'\n'}

                                File Size:{item.size ? item.size : ''}
                                {'\n'}

                                URI:{item.uri ? item.uri : ''}
                                {'\n'}
                            </Text>
                        </View>
                    ))}
                </ScrollView>
          </View>
      );
    }
}