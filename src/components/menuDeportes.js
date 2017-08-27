import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ItemDeporte from './itemDeporte';

class MenuDeportes extends Component {
    irReporteFootball() {
        Actions.ReporteFootball();
    }
    irReporteBasketball() {
        Actions.ReporteBasketball();
    }
    irApuestas() {
        Actions.Apuestas();
    }
    irPerfil() {
        Actions.Perfil();
    }
    render() {
        const { viewStyles } = styles;
        return (
            <View style={viewStyles}>
                <ItemDeporte onPress={this.irReporteFootball.bind(this)} nombre={'Football'} />
                <ItemDeporte onPress={this.irReporteBasketball.bind(this)} nombre={'Basketball'} />
                <ItemDeporte onPress={this.irApuestas.bind(this)} nombre={'Apuestas'} />
                <ItemDeporte onPress={this.irPerfil.bind(this)} nombre={'Perfil'} />
            </View>
            
        );
    }
    
}

const styles = {
    viewStyles: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'space-between',
        flexWrap: 'wrap',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 30
    }
};
export default MenuDeportes;
