import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import Boton from './lib/boton';
import CampoTexto from './lib/campoTexto';
import Card from './lib/card';
import CardSection from './lib/cardSection';
import Encabezado from './lib/encabezado';
import Spinner from './lib/spinner';
import ListaFrutas from './listaFrutas';

class FormularioLogin extends Component {
    state = {
        email: '', 
        password: '',
        error: '',
        cargando: false
    }
    validarCredenciales() {
        const { email, password } = this.state;
        this.setState({ error: '', cargando: true });
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.loginExitoso.bind(this))
        .catch(this.loginError.bind(this));
    }
    loginExitoso() {
        Actions.users();
        this.setState({ email: '', password: '', cargando: false });
    }
    loginError() {
        this.setState({ error: 'Error de Autenticacion', cargando: false });
    }
    mostrarSpinner() {
        if (this.state.cargando) {
            return <Spinner size={'small'} />;  
        } 
        return (
        <Boton 
            texto="Iniciar Sesion" 
            onPress={this.validarCredenciales.bind(this)} 
        /> 
        );
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Encabezado tituloEncabezado={'Iniciar session'} />
                <Card>
                    <CardSection>
                        <CampoTexto 
                            placeholder={'usuario@mail.com'}
                            onChangeText={email => this.setState({ email })}  
                        />
                    </CardSection>
                    <CardSection>
                        <CampoTexto 
                            placeholder={'contraseña'}
                            onChangeText={password => this.setState({ password })}  
                            secureTextEntry
                        />
                    </CardSection>
                    <Text style={styles.errorMsgStyle}>{this.state.error}</Text>
                    <CardSection>
                        {this.mostrarSpinner()}
                    </CardSection>
                </Card>
                <ListaFrutas />
            </View>
        );
    }
}
const styles = {
    errorMsgStyle: {
        fontSize: 17, 
        color: 'red', 
        alignSelf: 'center'
    }
};
export default FormularioLogin;
