import React, {Component} from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {

            },
            contacto: "Diego Pérez",
        }
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Estas en la pantalla de Contacto de: {this.state.contacto}</Text>
            </View>
        );
    }
}