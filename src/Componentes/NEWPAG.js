import React, {Component} from "react";
import SegundaConsulta from "./SegundaConsulta";
import Logo from "./logo512.png";
import Card from "../Css/CardnewPage.css"
export default class NEWPAG extends Component{

    state={
        id:localStorage.getItem('idProducto'),
        info:'',
        validar:0
    }

    consultarApi=()=>{
        if (this.state.validar ==0){
            const url2 = `https://api.mercadolibre.com/items/${this.state.id}?include_attributes=all`;
            fetch(url2)
                .then(respuesta2=>respuesta2.json() )
                .then(resultad=>this.setState({info : resultad}));
            this.setState({
               validar:1
            });
        }
        else {
            return ;
        }
    }

    render() {
        return(
           <div>
               <SegundaConsulta>
                   consulta={this.consultarApi}
               </SegundaConsulta>
              <div className="jumbotron">
                  <h1 align="center">{this.state.info.title}</h1>
              </div>
               <div className="card mb-3" >
                   <div className="row no-gutters">
                       <div className="col-md-4">
                           <img src={this.state.info.thumbnail} className="card-img-top" alt=" "/>
                       </div>
                       <div className="cold-md-8">
                           <div className="card-body">
                               <h3 className="card-title">Unidades vendidas: total de {this.state.info.sold_quantity}</h3>
                               <h3 className="card-title">Unidades disponibles {this.state.info.available_quantity}</h3>
                               <h3 className="card-title">Condicion del producto {this.state.info.condition}</h3>
                               <h3 className="card-title">Precio: {this.state.info.price} {this.state.info.currency_id}</h3>
                           </div>
                       </div>
                   </div>
               </div>
           </div>

        );
    }
}