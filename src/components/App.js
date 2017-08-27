import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import FormularioLogin from './formularioLogin';
import Encabezado from './lib/encabezado';
import Boton from './lib/boton';
import Spinner from './lib/spinner';
import Card from './lib/card';
import CardSection from './lib/cardSection';
import storeRedux from '../store';
import Router from '../Router';


class App extends Component {
    
    state = { sessionIniciada: null };
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAxqwjd9zefClTIkMjO0vvc-sjk4wqis2o',
            authDomain: 'deportiva-app.firebaseapp.com',
            databaseURL: 'https://deportiva-app.firebaseio.com',
            projectId: 'deportiva-app',
            storageBucket: 'deportiva-app.appspot.com',
            messagingSenderId: '220693319801'
        });
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ sessionIniciada: true });
            } else {
                this.setState({ sessionIniciada: false });
            }
        });
    }
    contenidoSegunSession() {
        switch (this.state.sessionIniciada) {
            case true:
                return (
                    <View style={{ height: 35 }}>
                        <Encabezado tituloEncabezado={'Cerrar Session'} />
                        <Card>
                            <CardSection>
                                <Boton 
                                    texto={'Cerrar Session'} 
                                    onPress={() => firebase.auth().signOut()} 
                                />
                            </CardSection>
                        </Card>
                    </View>
                );
            case false:
                return (
                    <FormularioLogin />
                );
            default:
            return (
                <View>
                    <Encabezado tituloEncabezado={'Deportiva App'} />
                    <Spinner size={'large'} />
                </View>
            );
        }
    }
    //{this.contenidoSegunSession()}
    render() {
        return (
            <Provider store={storeRedux} >
                <Router />
            </Provider>
            
        );
    }
}
export default App;
