import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import FormularioLogin from './components/formularioLogin';
import MenuDeportes from './components/menuDeportes';
import ReporteFootball from './components/reporteFootball';
import ReporteBasketball from './components/reporteBasketball';
import Apuestas from './components/apuestas';
import Perfil from './components/perfil';

const RouterComponent = () => (
    <Router>
        <Scene key="root">
            <Scene
                key='Login'
                component={FormularioLogin}
                title="Iniciar Sesion"
                initial
            />
            <Scene
                key='MenuDeportes'
                component={MenuDeportes}
                title="App Deportes"
            />
            <Scene
                key='ReporteFootball'
                component={ReporteFootball}
                title="Football"
            />
            <Scene
                key='ReporteBasketball'
                component={ReporteBasketball}
                title="Basketball"
            />
            <Scene
                key='Apuestas'
                component={Apuestas}
                title="Apuestas"
            />
            <Scene
                key='Perfil'
                component={Perfil}
                title="Perfil"
            />
        </Scene>
    </Router>
);

export default RouterComponent;
