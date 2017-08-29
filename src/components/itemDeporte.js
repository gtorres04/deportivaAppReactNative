import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


const ItemDeporte = (props) => {
    const { viewStyles } = styles;
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={viewStyles}>
                {props.children}
                <Text>{props.nombre}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = {
    viewStyles: {
        backgroundColor: '#d0d0d0',
        justifyContent: 'center',
        alignItems: 'center',
        height: 130,
        width: 130,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        marginBottom: 30,
    }
};
export default ItemDeporte;
