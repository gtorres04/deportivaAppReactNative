import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import FormularioLogin from './components/formularioLogin';
import ListaFrutas from './components/listaFrutas';

const RouterComponent = () => (
        <Router>
            <Scene key="root">
                <Scene key="autenticacion">
                    <Scene 
                        key='Login'
                        component={FormularioLogin}
                        initial
                    />
                </Scene>
                <Scene key="users">
                    <Scene 
                        key='ListaFrutas'
                        component={ListaFrutas}
                        title='LISTA FRUTAS'
                    />
                </Scene>
            </Scene>
        </Router>
    );

export default RouterComponent;
