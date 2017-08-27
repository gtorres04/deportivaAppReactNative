export default (state = null, action) => {
    console.log(action);
    switch (action.type) {
        case 'seleccionarFruta':
            return action.payload;
        default:
            return state;
    }
};
