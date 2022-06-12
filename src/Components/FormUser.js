import React from "react";

function FormUser() {

    return(
        <div>
            <h2>Déjanos conocerte un poco más</h2>
        <form>
<div className="mb-3">
    <label for="nombreCompleto" className="form-label">Nombre Completo</label>
    <input type="text" className="form-control" id="nombreCompleto"/>   
  </div>
  <div className="mb-3">
    <label for="edad" className="form-label">Edad</label>
    <input type="number" className="form-control" id="edad"/>   
  </div>
  <div className="mb-3">
    <label for="genero" className="form-label">Género</label>
    <select id="genero" className="form-select">
        <option>Femenino</option>
        <option>Masculino</option>
        <option>Binario</option>
      </select>
   
  </div>
  <div className="mb-3">
    <label for="fechaNacimiento" className="form-label">Fecha de Nacimiento</label>
    <input type="date" min='1910-01-01' className="form-control" id="fechaNacimiento"/>   
  </div>
 
  <button type="submit" className="btn btn-primary">Consultá tu horoscopo</button>
</form>
</div>
    );
}
export default FormUser;