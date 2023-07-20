/* 6️⃣ ***COMPONENTE CreateCelular*** 6️⃣
Implementar el componente CreateCelular. Este consistirá en un formulario controlado con estados de react.
📢¡Sigue las instrucciones de los tests!📢
REQUISITOS
🟢 Aquí tendrás que renderizar una serie de elementos HTML con distintos atibutos e información dentro.
🟢 Debes manejar cada uno de los inputs de tu formulario mediante un estado local llamado "input".
🟢 La información del formulario se debe despachar al estado global cuando se hace un submit.
🟢 Debes manejar los errores que pueden tener los inputs del formulario.
IMPORTANTE
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
❗Este componente debe ser funcional.
❗¡Puedes implementar el manejo de errores como mejor prefieras! Sólo recuerda renderizar el error apropiado en cada caso.
❗NO hacer un destructuring de los hooks de React, debes utilizarlos con la siguiente forma:
      - 'React.useState'
      - 'React.useEffect'
*/

import {useDispatch} from "react-redux";
import * as actions from "../../redux/actions";

import React from "react";

const validation = (state) => {
  let errors = {};
  if (state.marca.length > 30) {
    errors.marca = "Nombre de marca demasiado largo"
  }
  if (state.modelo.length > 30) {
    errors.modelo= "Nombre de modelo demasiado largo"
  }
  if (state.precio < 0) {
    errors.precio= "El precio del celular tiene que ser mayor a 0"
   }
   return errors
}

const CreateCelular = () => {
  const [input, setInput] = React.useState({
    marca: "",
    modelo: "",
    precio: 0,
    descripción: "",
    sistemaOperativo: "",
    imagen: "",
    lanzamiento: "",
  });
  const [errors, setErrors] = React.useState({
    marca: "",
    modelo: "",
    precio: "",
})
  const dispatch = useDispatch();
  
  const handleChange = (event) => {
    const property = event.target.name;
    const valor = event.target.value;
    
    setInput({...input, [property]: valor})
    setErrors(validation({...input, [property]: valor}))
   
}
const handleSubmit = (event) => {
  event.preventDefault(); // para que no recargue la pagina en evento submit
  
  if(errors.marca ==="" && errors.precio === "" && errors.precio === "") {
    dispatch(actions.createCelular(input));
  }
}
  return <div>
    <form onSubmit = {handleSubmit}>
      <label htmlFor="marca">Marca: </label>
      <input type="text" name= "marca" onChange= {handleChange}/>
      {errors.marca && <p>{errors.marca}</p>}
      <label htmlFor="modelo">Modelo: </label>
      <input type="text" name= "modelo" onChange= {handleChange}/>
      {errors.modelo && <p>{errors.modelo}</p>}
      <label htmlFor="precio">Precio: </label>
      <input type="number" name= "precio" onChange= {handleChange}/>
      {errors.precio && <p>{errors.precio}</p>}
      <label htmlFor="descripcion">Descripción: </label>
      <textarea name= "descripción" onChange= {handleChange}></textarea>
      <label htmlFor="sistema">Sistema Operativo: </label>
      <input name= "sistemaOperativo" onChange= {handleChange}/>
      <label htmlFor="imagen">Imagen: </label>
      <input type="text" name= "imagen" onChange= {handleChange}/>
      <label htmlFor="lanzamiento">Lanzamiento: </label>
      <input type="text" name= "lanzamiento" onChange= {handleChange}/>
      <button type="submit">Crear Celular</button>

      
    </form>
  </div>;
};

export default CreateCelular;
