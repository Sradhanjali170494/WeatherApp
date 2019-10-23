import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import Zipcode from '../components/Zipcode';
import Places from '../components/Places'

class WeatherNow extends Component {
    constructor() {
        super();
        this.state = {
            places: []
        }
    }

    onFind = (zipCode) => {
        console.log(zipCode);
        this.getWeatherInfo(zipCode);
    }

    getWeatherInfo = (zipCode) => {
        let url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=6644e680d2025e3820e93d0f13adb2ff`;

        fetch(url)
            .then(response => response.json())
            .then(weatherInfo => {
                console.log("Weather for new zipcode:" + zipCode + " is  " + JSON.stringify(weatherInfo))
                if (weatherInfo) {
                    let tempFarnheit = Math.round(9 / 5 * (weatherInfo.main.temp - 273) + 32);
                    this.setState({
                        places: [
                            ...this.state.places,
                            {
                                area: weatherInfo.name,
                                description: weatherInfo.weather[0].description,
                                temparature: tempFarnheit
                            }]
                    })
                }
            })
            .catch((err) => {
                console.log("failed to get weather" + JSON.stringify(err))
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.zipCodeView}>
                    <Zipcode onFind={this.onFind} />
                </View>
                <View style={styles.placesView}>
                    <Places places={this.state.places}/>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: "#EA4C89",
        width: "100%"
    },
    zipCodeView:{
        flex:1
    },
    placesView:{
        flex:2
    }
})

export default WeatherNow;