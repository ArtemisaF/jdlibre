import React from "react";

const PAGINACION = (props)=> {
    return(
        <div className="py-3">
            <button onClick={props.children[1]} type="button" className="btn btn-info mr-1">&larr;Anterior</button>
            <button  onClick={props.children[3]} type="button" className="btn btn-info ">Siguiente&rarr;</button>
        </div>
    );
}
export default PAGINACION;