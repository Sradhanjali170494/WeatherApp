import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

class WeatherCard extends Component{
    constructor(props){
        super(props);
        this.state={
            place:props.place
        }
    }

    displaySuperscript = (base, exponent) => {
        return <View style={{flexDirection: 'row'}}>
            <View style={{alignItems: 'flex-end'}}>
                <Text style={{fontSize: 45,color:"white"}}>{base}</Text>
                <Text style={{fontSize: 45,color:"red"}}>{base}</Text>
            </View>
            <View style={{alignItems: 'flex-start'}}>
                <Text style={{fontSize: 20,color:"white"}}>{exponent}</Text>
            </View>
        </View>
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.areaText}>{this.state.place.area}</Text>
                <View style={styles.tempText}>{this.displaySuperscript(this.state.place.temparature,"0")}</View>
                <Text style={styles.descriptionText}>{this.state.place.description}</Text>
            </View>
        )
    }
}

var styles=StyleSheet.create({
    container:{
        alignItems:"center",
        borderColor:"white",
        borderWidth:1,
        height:180,
        borderRadius:20,
        margin:10
    },
    
    areaText:{
        color:"white",
        fontSize:60,
        fontWeight:"bold",
        paddingLeft:10
    },

    tempText:{
        color:"white",
        fontSize:30,
        paddingLeft:10
    },

    descriptionText:{
        color:"white",
        fontSize:30,
        paddingLeft:10
    },
    
})

export default WeatherCard;