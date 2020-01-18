import React,{Component} from 'react';
import {View,Text} from 'react-native';

export default class Text_style extends Component
{
    render()
    {
        return(
            <View>
                <Text>Welcome</Text>
                <Text style={{backgroundColor:'blue'}}>backgroundColor</Text>
                <Text style={{color:'green'}}>Color</Text>
                <Text style={{fontSize:30}}>fontSize</Text>
                <Text style={{fontWeight:'900'}}>fontWeight 400</Text>
                <Text style={{fontWeight:'normal'}}>fontWeight normal</Text>
                <Text style={{fontWeight:'bold'}}>fontWeight</Text>
                <Text style={{fontStyle:'normal'}}>fontStyle normal</Text>
                <Text style={{fontStyle:'italic'}}>fontStyle italic</Text>
                <Text style={{textAlign:'auto'}}>textAlign auto</Text>
                <Text style={{textAlign:'center'}}>textAlign center</Text>
                <Text style={{textAlign:'right'}}>textAlign right</Text>
                <Text style={{textAlign:'justify'}}>textAlign justify klfnvjlvjn flvjfvjl nlvfdjvj lfnfldnvlf nvlnfvl ndlnvldfnv ldkfnvl diijo kjdbvk jbkdjsb ncksbc bjjfvckj jkmi</Text>
                <Text style={{textAlign:'left'}}>textAlign left opbklfnvjlvjn flvjfvjl nlvfdjvj lfnfldnvlf nvlnfvl ndlnvldfnv ldkfnvl diijo kjdbvk jbkdjsb ncksbc bjjfvckj jkmi</Text>
                <Text style={{letterSpacing:20}}>letterSpacing</Text>
                <Text style={{lineHeight:100}}>lineHeight</Text>
                <Text style={{textDecorationLine:'none'}}>textDecorationLine none</Text>
                <Text style={{textDecorationLine:'underline'}}>textDecorationLine underline</Text>
                <Text style={{textDecorationLine:'line-through'}}>textDecorationLine line-through</Text>
                <Text style={{textDecorationLine:'underline line-through'}}>textDecorationLine underline line-through</Text>
                <Text style={{textShodowOffset:{width: 0.5,height: 0.5}}}>textShadowOffset</Text>
                {/* <Text style={{textShadowColor:red}}>textShadowColor</Text> */}

            </View>
        );
    }
}