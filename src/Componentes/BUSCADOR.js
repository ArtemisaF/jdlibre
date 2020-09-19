import React, {Component} from 'react';

export default class BUSCADOR extends Component {

    busquedadref= React.createRef();
    obtenerD= (e)=> {
        e.preventDefault();
        this.props.datosbusquedad(this.busquedadref.current.value);
    }
    render() {
        return(
            <form onSubmit={this.obtenerD}>
                <div  className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.busquedadref} type="text" className="form-control form-control-lg" placeholder="Busaca un producto"/>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-primary btn-block" value="Buscar"/>
                    </div>
                </div>
            </form>
        );
    }
}

