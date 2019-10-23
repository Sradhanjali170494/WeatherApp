import React, { Component } from 'react'

import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

class Zipcode extends Component{
    constructor(){
        super();
        this.state={
            zipCode:''
        }
    }

    onZipcodeChange=(text)=>{
        this.setState({
            zipCode:text
        })
    }

    onFind=()=>{
        this.props.onFind(this.state.zipCode)
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.heading}>Zipcode</Text>
                <TextInput style={styles.input} onChangeText={this.onZipcodeChange}></TextInput>
                <TouchableHighlight style={styles.button} onPress={this.onFind}>
                    <Text>Find</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

var styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        marginTop:116
    },
    heading:{
        color:"white",
        fontSize:40,
        marginBottom:5
    },
    input:{
        height:40,
        borderColor:"white",
        borderWidth:1,
        width:"60%",
        color:"white",
        fontSize:25
    },
    button:{
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width:50,
        marginTop:16
    }
})

export default Zipcode;