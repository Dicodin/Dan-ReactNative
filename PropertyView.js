'use strict';

import React, { Component } from 'react'
import {
    StyleSheet,
    Image,
    View,
    Text,
    Linking,
} from 'react-native'

export default class PropertyView extends Component {
    static navigationOptions = {
        title: 'Property',
    };

    _mapLocation = () => {
        const { params } = this.props.navigation.state;
        var property = params.property;
        var location = property.latitude + "," + property.longitude;
        var locationURL = "https://www.google.com/maps/search/?api=1&query="+location;

        Linking.openURL(locationURL);
    };

    render() {
        const { params } = this.props.navigation.state;
        var property = params.property;
        var bedRoomNumber = property.bedroom_number;
        var bathRoomNumber =  property.bathroom_number;
        var carSpaces = property.car_spaces;        

        !(parseFloat(bedRoomNumber)) ? bedRoomNumber = 0 : bedRoomNumber;        
        !(parseFloat(bathRoomNumber)) ? bathRoomNumber = 0 : bathRoomNumber;
        !(parseFloat(carSpaces)) ? carSpaces = 0 : carSpaces;

        return(
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image}
                        source={{ uri: property.img_url }}
                    />
                </View>
                <View style={styles.heading}
                    onTouchStart={this._mapLocation}
                    >
                    <Text style={styles.price}>{property.price_formatted}</Text>
                    <Text style={styles.title}>{property.title}</Text> 
                    <View style={styles.separator}/>                   
                </View>
                <Text style={styles.description}>Bedroom Number: {bedRoomNumber}</Text>
                <Text style={styles.description}>Bathroom Number: {bathRoomNumber}</Text>
                <Text style={styles.description}>Car Spaces: {carSpaces}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      marginTop: 35
    },
    heading: {
      backgroundColor: '#F8F8F8',
    },
    separator: {
      height: 1,
      backgroundColor: '#DDDDDD'
    },
    imageContainer: {
      alignItems: 'center',
    },
    image: {
      width: 400,
      height: 300,      
    },
    price: {
      fontSize: 25,
      fontWeight: 'bold',
      margin: 5,
      color: '#48BBEC'
    },
    title: {
      fontSize: 20,
      margin: 5,
      color: '#656565'
    },
    description: {
      fontSize: 18,
      margin: 5,
      color: '#656565'
    }
  });