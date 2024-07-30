import React, { useState } from 'react';
import FormField from '../../molecules/form/FormField';
import Buttonform from '../../atoms/Button/Buttonform';
import './HistorialMedico.css';

const HistorialMedicoForm = () => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [fecha, setFecha] = useState('');
  const [malestares, setMalestares] = useState('');
  const [diagnostico, setDiagnostico] = useState('');
  const [historial, setHistorial] = useState([]);

  const handleAddConsultation = () => {
    const newEntry = {
      nombre,
      edad,
      fecha,
      malestares,
      diagnostico
    };
    setHistorial([...historial, newEntry]);
    setNombre('');
    setEdad('');
    setFecha('');
    setMalestares('');
    setDiagnostico('');
  };

  return (
    <div className="container">
      <h1>Consultorio Natura - Historial Médico</h1>
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
          label="Fecha de consulta:"
          id="fecha"
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          required
        />
        <FormField
          label="Malestares presentados:"
          id="malestares"
          type="textarea"
          value={malestares}
          onChange={(e) => setMalestares(e.target.value)}
          required
        />
        <FormField
          label="Diagnóstico:"
          id="diagnostico"
          type="textarea"
          value={diagnostico}
          onChange={(e) => setDiagnostico(e.target.value)}
          required
        />
      </div>
      <Buttonform onClick={handleAddConsultation}>Agregar Consulta</Buttonform>
      <h2>Historial de Consultas</h2>
      <div id="historial">
        {historial.map((entry, index) => (
          <div key={index} className="history-entry">
            <p><strong>Nombre:</strong> {entry.nombre}</p>
            <p><strong>Edad:</strong> {entry.edad}</p>
            <p><strong>Fecha de consulta:</strong> {entry.fecha}</p>
            <p><strong>Malestares:</strong> {entry.malestares}</p>
            <p><strong>Diagnóstico:</strong> {entry.diagnostico}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistorialMedicoForm;
