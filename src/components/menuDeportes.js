import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import ItemDeporte from './itemDeporte';


class MenuDeportes extends Component {
    irReporteFootball() {
        Actions.ReporteFootballTab();
    }
    irReporteBasketball() {
        Actions.ReporteBasketballTab();
    }
    irApuestas() {
        Actions.ApuestasTab();
    }
    irPerfil() {
        Actions.Perfil();
    }
    render() {
        const { viewStyles } = styles;
        return (
            <View style={viewStyles}>
                <ItemDeporte onPress={this.irReporteFootball.bind(this)} nombre={'Football'} >
                    <Icon name="futbol-o" size={50} color="#000" />
                </ItemDeporte>
                <ItemDeporte onPress={this.irReporteBasketball.bind(this)} nombre={'Basketball'} >
                    <Icon name="ban" size={50} color="#000" />
                </ItemDeporte>
                <ItemDeporte onPress={this.irApuestas.bind(this)} nombre={'Apuestas'} >
                    <Icon name="money" size={50} color="#000" />
                </ItemDeporte>
                <ItemDeporte onPress={this.irPerfil.bind(this)} nombre={'Perfil'} >
                    <Icon name="user" size={50} color="#000" />
                </ItemDeporte>
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
