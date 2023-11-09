import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
var Realm = require('realm');

let realm;

export default class realmService extends Component {

  constructor() {

    super();   

    realm = new Realm({
      schema: [{
        name: 'Employee',
        primaryKey: 'emp_id',
        properties:
        {
          emp_id: { type: 'int', default: 0 },
          emp_first_name: 'string',
          emp_last_name: 'string'
        }
      }],
      schemaVersion: 0
    });
  }

  render() {

    // Writing data to real database
    realm.write(() => {
      var ID = realm.objects('Employee').length + 1;
      realm.create('Employee', { emp_id: ID, emp_first_name: 'rajesh', emp_last_name: 'kumar' });
    });

    // getting realm database data using employee object
    var employeeClass = realm.objects('Employee');
    var getJSONData = JSON.stringify(employeeClass);
    realm.close();


    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 15, textAlign: 'center' }}>
          {getJSONData}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});