import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
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
    
    render() {
        return (
            <Provider store={storeRedux} >
                <Router />
            </Provider>
        );
    }
}
export default App;
