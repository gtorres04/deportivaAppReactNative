import { combineReducers } from 'redux';
import seleccionarReducer from './seleccionarReducer';
import datosFrutas from './frutasReducer';


export default combineReducers({
    frutas: datosFrutas,
    idFrutaSeleccionada: seleccionarReducer
});
