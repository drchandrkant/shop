import React,{Component} from 'react';
import {View,Text, Image} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

var db=openDatabase({name:'shiv.db'});

export default class App extends Component
{
    constructor(props)
    {
        super(props);
        db.transaction
        (
            function(txn)
            {
                txn.executeSql
                (
                    'CREATE TABLE IF NOT EXISTS Student(RollN0 INTEGER,StudentName VARCHAR(20),Course varchar(20))',
                    [],
                    (txn,success)=>
                    {
                        alert('Success'+JSON.stringify(success));
                    },
                    (error)=>
                    {
                        alert('Error'+JSON.stringify(error));
                    }
                );
            }
        );
    }
    render()
    {
      return(
          null
      );
    }
}