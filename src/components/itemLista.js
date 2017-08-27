import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import CardSection from './lib/cardSection';
import * as actions from '../actions';

class ItemLista extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }
    mostrarDescripcion() {
        if (this.props.expandir) {
        return (
                <CardSection>
                    <Text style={{ flex: 1 }}>
                        {this.props.frutaInfo.descripcion}
                    </Text>
                </CardSection>
            );
        }
    }
    render() {
        const { nombreStyle } = styles;
        console.log(this.props);
        return (
            <TouchableWithoutFeedback 
                onPress={() => this.props.seleccionarFruta(this.props.frutaInfo.id)} 
            >
                <View>
                    <CardSection>
                        <Text style={nombreStyle}>
                            {this.props.frutaInfo.nombre}
                        </Text>
                    </CardSection>
                    {this.mostrarDescripcion()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
const styles = {
    nombreStyle: {
        fontSize: 20,
        paddingLeft: 5
    }
};
const mapStateToProps = (state, ownProps) => {
    console.log(state.idFrutaSeleccionada);
    console.log(ownProps.frutaInfo.id);
    console.log(state.idFrutaSeleccionada === ownProps.frutaInfo.id);
    const expandir = state.idFrutaSeleccionada === ownProps.frutaInfo.id;
    return { expandir: expandir, idFrutaSeleccionada: state.idFrutaSeleccionada };
};
export default connect(mapStateToProps, actions)(ItemLista);
