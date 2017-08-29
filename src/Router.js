import React from 'react';
import firebase from 'firebase';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import FormularioLogin from './components/formularioLogin';
import MenuDeportes from './components/menuDeportes';
import ReporteFootball from './components/reporteFootball';
import ReporteBasketball from './components/reporteBasketball';
import Apuestas from './components/apuestas';
import Perfil from './components/perfil';


const TabIconFootball = ({ selected }) => (
      <Icon name="futbol-o" size={30} style={{ color: selected ? 'red' : 'black' }} />
    );
const TabIconHome = ({ selected }) => (
    <Icon name="home" size={30} style={{ color: selected ? 'red' : 'black' }} />
    );
const TabIconBasketball = ({ selected }) => (
    <Icon name="ban" size={30} style={{ color: selected ? 'red' : 'black' }} />
    );
const TabIconApuestas = ({ selected }) => (
    <Icon name="money" size={30} style={{ color: selected ? 'red' : 'black' }} />
    );

const RouterComponent = () => (
    <Router>
        <Scene key="root">
            <Scene
                key="autenticacion"
                tabs
                hideNavBar
                hideTabBar
            >
                <Scene
                    key='Login'
                    component={FormularioLogin}
                    title="Iniciar Sesion"
                    initial
                    direc
                />
            </Scene>
            <Scene
                key="tabbar"
                tabs
                tabBarStyle={{ backgroundColor: '#FFFFFF' }}
                hideNavBar
            >
                <Scene key="MenuDeportesTab" title="HOME" icon={TabIconHome}>
                    <Scene
                        key='MenuDeportes'
                        component={MenuDeportes}
                        title="App Deportes"
                        rightTitle="Cerrar Sesion"
                        onRight={() => {
                            firebase.auth().signOut();
                            Actions.autenticacion();
                            }}
                    />
                </Scene>
                <Scene key="ReporteFootballTab" title="Football" icon={TabIconFootball}>
                    <Scene
                        key='ReporteFootball'
                        component={ReporteFootball}
                        title="Football"
                    />
                </Scene>
                <Scene key="ReporteBasketballTab" title="Basketball" icon={TabIconBasketball}>
                    <Scene
                        key='ReporteBasketball'
                        component={ReporteBasketball}
                        title="Basketball"
                    />
                </Scene>
                <Scene key="ApuestasTab" title="Apuestas" icon={TabIconApuestas}>
                    <Scene
                        key='Apuestas'
                        component={Apuestas}
                        title="Apuestas"
                    />
                </Scene>
            </Scene>
            <Scene
                key='Perfil'
                component={Perfil}
                title="Perfil"
                back={false}
            />
        </Scene>
    </Router>
);

export default RouterComponent;
