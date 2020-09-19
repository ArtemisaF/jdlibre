import React,{ Component } from 'react';
import BUSCADOR from "./BUSCADOR";
import RESULTADO from "./RESULTADO";
import Card from "../Css/Card.css"

class home extends Component {

    state={
        termino: ' ',
        imagen: [],
        pagina: ''
    }
    newPage= (id)=>{
        localStorage.setItem('idProducto',id);
        document.location.href="/NUEVO";
    }
    paginaAnterior= ()=>{
        let pag=this.state.pagina;
        if (pag ==0)return null;
        pag -=50;
        this.setState({
            pagina:pag
        },()=> {
            this.consultarApi();
            this.scroll();
        });

    }
    paginaSiguiente= ()=>{
        let pag= this.state.pagina;
        pag +=50;
        this.setState({
            pagina:pag
        }, ()=> {
            this.consultarApi();
            this.scroll();
        });

    }
    scroll= ()=> {
        const subir=document.querySelector('.jumbotron');
        subir.scrollIntoView({block: "start", behavior: "smooth"});
    }
    consultarApi=()=>{
        const url = `https://api.mercadolibre.com/sites/MCO/search?q=${this.state.termino}&offset=${this.state.pagina}`;
        fetch(url)
            .then(respuesta=>respuesta.json() )
            .then(resultado=>this.setState({imagen : resultado.results}))
    }

    datosbusquedad =(termino)=>{
        this.setState({
            termino:termino,
            pagina: 0
        },()=>{
            this.consultarApi();
        });
    }
    render() {
        return(

                <div className="app container">
                    <div className="jumbotron">
                        <h2 align="center">Buscador de productos</h2>
                        <h1 align="center">JuanShop.libre</h1>
                        <BUSCADOR
                            datosbusquedad={this.datosbusquedad}
                        />
                    </div>
                    <div className="row justify-content-center">
                        <RESULTADO>
                            imagenes={this.state.imagen};
                            paginaAnterior= {this.paginaAnterior}
                            paginaSiguiente= {this.paginaSiguiente}
                            newPage={this.newPage}
                        </RESULTADO>
                    </div>
                </div>

        );
    }


}

export default home;