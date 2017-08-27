import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import ItemLista from './itemLista';

class ListaFrutas extends Component {

    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(this.props.frutas);
    }
    mostrarFila(fruta) {
        return <ItemLista frutaInfo={fruta} />;
    }
    render() {
        return (
            <ListView 
                dataSource={this.dataSource} 
                renderRow={this.mostrarFila}
            />
        );
    }
}

const mapStateToProps = state => ({ frutas: state.frutas });

export default connect(mapStateToProps)(ListaFrutas);
