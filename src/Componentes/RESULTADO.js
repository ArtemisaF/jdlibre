import React, {Component} from "react";
import IMAGEN from "./IMAGEN";
import PAGINACION from "./PAGINACION";

export default class RESULTADO extends Component {
    mostrarimagen = ()=> {
        const imagenes = this.props.children[1];
        if(imagenes.length == 0) return null;
        return (
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {imagenes.map(imagen=>(
                        <IMAGEN>
                            key={imagen.id}
                            imagen={imagen}
                            newPage={this.props.children[7]}
                        </IMAGEN>
                    ))}
                </div>
                <PAGINACION>
                    paginaAnterior={this.props.children[3]}
                    paginaSiguiente={this.props.children[5]}
                </PAGINACION>
            </React.Fragment>
        );
    }
    render() {
        return(
             <React.Fragment>
                 {this.mostrarimagen()}
             </React.Fragment>
        );
    }
}