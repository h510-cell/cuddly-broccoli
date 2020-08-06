import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import firebase from '../Config';
export default class UserDetailsScreen extends React.Component{
    constructor(){
        super(
            this.state={
                userId:firebase.auth().currentUser.email,
                itemDescription:this.props.navigation.state.params('details')["item_Description"],
            }
        )
}

addBarter=()=>{}

componentDidMount(){
    this.addBarter()
}

render(){
    return(
      <View style={styles.container}>
      </View>    
    )
}
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})