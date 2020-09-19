import React, {Component} from 'react';
export default class SegundaConsulta extends Component{
    state={
        info:''
    }
    render() {
    return(
        <div>
            {this.props.children[1]()}
        </div>
    );
    }
}