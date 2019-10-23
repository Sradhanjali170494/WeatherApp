import React, { Component } from 'react'

import {
    View,
    Text,
    ScrollView,
    StyleSheet
} from 'react-native';

import WeatherCard from './WeatherCard'

class Places extends Component{
    constructor(props){
        super(props);
        this.state={
            places:props.places
        }
    }

    componentWillReceiveProps(newProps){
        this.setState({
            places:newProps.places
        })
    }

    render(){
        return(
            <ScrollView contentContainerStyle={styles.container}>
                {
                    this.state.places.map((place,index)=>{
                        return <WeatherCard key={index} place={place}/>
                    })
                }
            </ScrollView>
        )
    }
}

var styles=StyleSheet.create({
    container:{
        flex:1,
        marginTop:10
    }
})

export default Places;