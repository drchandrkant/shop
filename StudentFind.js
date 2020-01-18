import React, { Component } from 'react';
import {TextInput,Button, StyleSheet, View, Text } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'dst.db' });
 
export default class StudentFind extends Component 
{
  constructor(props)
  {
    super(props);
    this.state={FindRollNo:'',RollNo:'',SName:'', Course:''};
  }
  
  SearchRecord=()=>
  {
    const FindRollNo=this.state.FindRollNo;
    //alert(FindRollNo);

    if(FindRollNo.length==0)
    {
      alert("Required Field is Missing");
    }
    else
    {
      db.transaction
      (
         (tnx)=> 
         {
          tnx.executeSql
          (
              'select * from Student where RollNo=?',
              [FindRollNo],
              (tx,result)=>
              {
                //alert(result.rows.length);
                if(result.rows.length>0)  
                {
                  //alert("Success");
                  //alert(result.rows.item(0).RollNo);
                  this.setState({RollNo:result.rows.item(0).RollNo}); 
                  this.setState({SName:result.rows.item(0).SName});
                  this.setState({Course:result.rows.item(0).Course});
                }
                else
                {
                  alert("No Record Found");
                  this.setState({RollNo:''}); 
                  this.setState({SName:''});
                  this.setState({Course:''});
                }
            }
          );
         }
      );
    }
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <TextInput style={styles.txtStyle} 
        placeholder={"Enter RollNo"} 
        placeholderTextColor={"#FF0000"} 
        keyboardType={"numeric"}
        onChangeText={FindRollNo => this.setState({ FindRollNo })}/>

        <Button 
        title={"Find Record"} 
        onPress={this.SearchRecord}></Button>

        <TextInput 
        style={styles.txtStyle} 
        editable={false}
        value={this.state.RollNo.toString()}
        />

        <TextInput 
        style={styles.txtStyle} 
        editable={false}
        value={this.state.SName}
        />

        <TextInput 
        style={styles.txtStyle} 
        editable={false}
        value={this.state.Course}
        />

      </View>

      
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    padding: 20,
    marginTop: 10
  },
  txtStyle:{
    borderBottomWidth:1,
    borderBottomColor:'red',
    marginBottom:20,
  }
});
