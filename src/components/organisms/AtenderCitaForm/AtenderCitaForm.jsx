import React, { useState } from 'react';
import FormField from '../../molecules/form/FormField';
import Buttonform from '../../atoms/Button/Buttonform';
import './AtenderCitaForm.css';
import AtenderCita from '../../pages/AtenderCita/AtenderCita';

const AtenderCitaForm = () => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [fecha, setFecha] = useState('');
  const [alergias, setAlergias] = useState('');
  const [receta, setReceta] = useState('');
  const [instrucciones, setInstrucciones] = useState('');

  const handleGenerateRecipe = () => {
    console.log('Generar Receta');
  };

  return (
    <div className="container">
      <h1>Consultorio Natura</h1>
      <div className="info">
        <FormField
          label="Nombre del paciente:"
          id="nombre"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <FormField
          label="Edad:"
          id="edad"
          type="number"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
          required
        />
        <FormField
          label="Fecha:"
          id="fecha"
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          required
        />
        <FormField
          label="¿Es alérgico a algún medicamento?"
          id="alergias"
          type="text"
          value={alergias}
          onChange={(e) => setAlergias(e.target.value)}
          placeholder="Si no es alérgico, escriba 'Ninguna'"
        />
        <FormField
          label="Receta (medicamentos):"
          id="receta"
          type="textarea"
          value={receta}
          onChange={(e) => setReceta(e.target.value)}
          required
        />
        <FormField
          label="Instrucciones:"
          id="instrucciones"
          type="textarea"
          value={instrucciones}
          onChange={(e) => setInstrucciones(e.target.value)}
          required
        />
      </div>
      <Buttonform onClick={handleGenerateRecipe}>Generar Receta</Buttonform>
    </div>
  );
};

export default AtenderCitaForm;
