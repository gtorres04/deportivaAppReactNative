import React from 'react';
import { View, TextInput } from 'react-native';

const CampoTexto = (props) => {
    const { contenedorCampoTextoStyle, campoTextoStyle } = styles;
    return (
        <View style={contenedorCampoTextoStyle}>
            <TextInput 
                placeholder={props.placeholder} 
                style={campoTextoStyle} 
                value={props.value} 
                onChangeText={props.onChangeText} 
                secureTextEntry={props.secureTextEntry}
            />
        </View>
    );
};

const styles = {
    contenedorCampoTextoStyle: {
        flex: 1, 
        height: 40,
        flexDirection: 'row', 
        alignItems: 'center',
    },
    campoTextoStyle: { 
        color: '#000',
        width: 100,
        height: 20,
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 19,
        lineHeight: 24,
        flex: 2,
        borderColor: '#ddd',
    }

};

export default CampoTexto;
