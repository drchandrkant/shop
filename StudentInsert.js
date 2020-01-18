// import React, { Component } from 'react';

// import {TextInput,Button, StyleSheet, View, Text } from 'react-native';
// import {openDatabase} from 'react-native-sqlite-storage';

// var db=openDatabase({name:'dst.db'});
 
// export default class StudentInsert extends Component 
// {
//   constructor(props)
//   {
//     super(props);
//     this.state={RollNo:'',SName:'', Course:''};
//   }

//   InsertRecord=()=>{
//     const RollNo=this.state.RollNo;
//     const SName=this.state.SName;
//     const Course=this.state.Course;  

// //    alert(RollNo+", "+SName+", "+Course);
//     if(RollNo.length==0 || SName.length==0 || Course.length==0)
//     {
//       alert("Required Field is Missing");
//     }
//     else
//     {
//       //alert("Insert code here");   

//       db.transaction
//       (
//         function(tx)
//         {
//           tx.executeSql
//           (
//             'insert into Student values(?,?,?)',
//             [RollNo,SName,Course],
//             (tx,result)=>
//             {
//               if(result.rowsAffected>0)  
//                 alert(result.rowsAffected);
//                 // alert('Student Record has been saved Successfully');
//               else
//                 alert('Server Error Please Try Latter');
//             }
            
//           );
//         }
//       );
//     }
//   }
//   render() {
//     return (
//       <View style={styles.MainContainer}>
//         <TextInput style={styles.txtStyle} 
//           placeholder={"RollNo"} 
//           placeholderTextColor={"#FF0000"} 
//           keyboardType={"numeric"}
//           onChangeText={RollNo => this.setState({ RollNo })}/>

//         <TextInput style={styles.txtStyle} 
//         placeholder={"Student Name"} 
//         placeholderTextColor={"#FF0000"}
//         onChangeText={SName => this.setState({ SName })}/>

//         <TextInput style={styles.txtStyle} 
//         placeholder={"Course"} 
//         placeholderTextColor={"#FF0000"}
//         onChangeText={Course => this.setState({ Course })}/>

//         <Button title={"Save Record"} onPress={this.InsertRecord}></Button>
//       </View>

      
//     );
//   }
// }
 
// const styles = StyleSheet.create({
//   MainContainer: {
//     flex: 1,
//     padding: 20,
//     marginTop: 10
//   },
//   txtStyle:{
//     borderBottomWidth:1,
//     borderBottomColor:'red',
//     marginBottom:20,
//   }
// });



import React, { Component } from 'react';

import {TextInput,Button, StyleSheet, View, Text } from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

var db=openDatabase({name:'dst.db'});
 
export default class StudentInsert extends Component 
{
  constructor(props)
  {
    super(props);
    this.state={RollNo:'',SName:'', Course:''};
  }

  InsertRecord=()=>{
    const RollNo=this.state.RollNo;
    const SName=this.state.SName;
    const Course=this.state.Course;  

  //  console.log(RollNo+", "+SName+", "+Course);
    if(RollNo.length==0 || SName.length==0 || Course.length==0)
    {
      console.log("Required Field is Missing");
    }
    else
    {
      console.log("Insert code here");   

      db.transaction
      ( 
        function(tx)
        {
          tx.executeSql
          (
            'insert into Student values(?,?,?)',
            [RollNo,SName,Course],
            (tx,result)=>
            {
              console.log(result.rowsAffected);
              // if(result.rowsAffected>0)
              // {
              //   console.log('Student Record has been saved Successfully');
              // } 
              // else
              // {
              //   console.log('Server Error Please Try Latter');
              // }
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
          placeholder={"RollNo"} 
          placeholderTextColor={"#FF0000"} 
          keyboardType={"numeric"}
          onChangeText={RollNo => this.setState({ RollNo })}/>

        <TextInput style={styles.txtStyle} 
        placeholder={"Student Name"} 
        placeholderTextColor={"#FF0000"}
        onChangeText={SName => this.setState({ SName })}/>

        <TextInput style={styles.txtStyle} 
        placeholder={"Course"} 
        placeholderTextColor={"#FF0000"}
        onChangeText={Course => this.setState({ Course })}/>

        <Button title={"Save Record"} onPress={this.InsertRecord}></Button>
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
