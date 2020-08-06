import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default class MyBarter extends React.Component{
    constructor(){
        super(
            this.state={
               itemName : "iPhoneX", 
                ExchangerName : "Parth Das",
                ExchangerContact : "7773973973",
                ExchangerAddress : "",
                ExchangerId : "aagamhem",
                Exchanger_status : "approved by Exchanger"
            }
        )
    }

      getAllBarters=()=>{
          this.requestRef=db.collection('MyBarters').get()
          .onsnapShot((snapshot)=>{
              var itemName=snapshot.doc.map((doc)=>doc.data())
              var ExchangerName=snapshot.doc.map((doc)=>doc.data())
              var ExchangerContact=snapshot.doc.map((doc)=>doc.data())
              var ExchangerAddress=snapshot.doc.map((doc)=>doc.data())
              var ExchangerId=snapshot.doc.map((doc)=>doc.data())
              var Exchanger_status=snapshot.doc.map((doc)=>doc.data())
              this.setState({
                  itemName:this.state.itemName,
                  ExchangerName:this.state.ExchangerName,
                  ExchangerContact:this.state.ExchangerContact,
                  ExchangerAddress:this.state.ExchangerAddress,
                  ExchangerId:this.state.ExchangerId,
                  Exchanger_status:this.state.Exchanger_status
              })
            })
      }
            keyExtractor=(item,index)=>index.toString()

            componentDidMount(){
                this.getAllBarters()
}

render(){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}
            onPress={()=>
            this.getAllBarters
            }>
              <Text style={styles.text}>Exchange</Text>  
            </TouchableOpacity>    
            <FlatList
            keyExtractor={this.keyExtractor}
            />
        </View>    
    )
}
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    button:{
        width:200,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10,
        backgroundColor:"orange"
    },
    text:{
        fontSize:25,
        fontWeight:"bold"
    }
})