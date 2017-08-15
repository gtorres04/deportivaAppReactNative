import React, { Component } from 'react';
import firebase from 'firebase';
import FormularioLogin from './formularioLogin';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAxqwjd9zefClTIkMjO0vvc-sjk4wqis2o',
            authDomain: 'deportiva-app.firebaseapp.com',
            databaseURL: 'https://deportiva-app.firebaseio.com',
            projectId: 'deportiva-app',
            storageBucket: 'deportiva-app.appspot.com',
            messagingSenderId: '220693319801'
        });
    }
    render() {
        return (
            <FormularioLogin />
        );
    }
}
export default App;
