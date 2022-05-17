import React from "react";
import "../stylesheet/Presentacion.css";

const datos = () =>  {
            nombre="Bernabé Galati",
            pais="Argentina",
            imagen="bernabe",
            tecnologia="FullStack Developer React.Js",
            presentacion="Constancia + Aprendizaje = Camino al Exito",
          }

function Presentacion(props) {
  return (
    <div className="contenedor-presentacion">
      <img
        className="imagen-presentacion"
        src={require(`./imagenes/presentacion-${props.imagen}.JPG`)}
        alt="foto"
      />
      <div className="contenedor-texto-presentacion">
        <p className="nombre-presentacion">
          {props.nombre} en {props.pais}
        </p>
        <p className="tecnologias-presentacion">{props.tecnologia}</p>
        <p className="texto-presentacion">{props.presentacion}</p>
      </div>
    </div>
  );
}

export default Presentacion;
