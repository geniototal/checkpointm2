/* 7️⃣ *** COMPONENTE CelularCard *** 7️⃣

Implementar el componente CelularCard.
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Tendrás que renderizar una serie de etiquetas HTML que incluyan texto y propiedades.
🟢 Tendrás que despachar una action para eliminar un celular específico.

IMPORTANTE
❗Este componente debe ser FUNCIONAL.
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
*/

import "./celularCard.css";
import React from "react";

const CelularCard = (props) => {
  return <div className="card">
    <h2>{props.id}</h2>
    <h2>{props.marca}</h2>
    <h2>{props.modelo}</h2>
    <img src= {props.imagen}alt={props.marca} />

    <h2>{props.precio}</h2>
  </div>;
};

export default CelularCard;


