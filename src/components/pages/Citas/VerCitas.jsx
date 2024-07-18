import React from 'react';
import DataTable from 'react-data-table-component';
import '../Citas/VerCitas.css';
import Header from '../../molecules/Header/Header';
import Nav from '../../molecules/Nav/Nav';

const VerCitas = () => {
    const handleEdit = (row) => {
        // Lógica para editar la fila
        console.log("Editando fila: ", row);
    };

    const handleDelete = (row) => {
        // Lógica para eliminar la fila
        console.log("Eliminando fila: ", row);
    };

    const columns = [
        {
            name: "Nombre",
            selector: row => row.nombre
        },
        {
            name: "Apellido",
            selector: row => row.apellido
        },
        {
            name: "Edad",
            selector: row => row.edad
        },
        {
            name: "Acciones",
            cell: row => (
                <div>
                    <button onClick={() => handleEdit(row)} className="edit-button">Editar</button>
                    <button onClick={() => handleDelete(row)} className="delete-button">Eliminar</button>
                </div>
            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        }
    ];

    const data = [
        {
            nombre: "Juan",
            apellido: "Perez",
            edad: 25
        },
        {
            nombre: "Maria",
            apellido: "Gomez",
            edad: 30
        },
        {
            nombre: "Carlos",
            apellido: "Ramirez",
            edad: 35
        }
    ];

    return (
        <>
            <Header
                logo="src/assets/images/MedicaNatura(Logo).png"
            />
            <Nav />
            <div className="data-table-container">
                <DataTable
                    columns={columns}
                    data={data}

                    className="data-table"
                    customStyles={{
                        rows: {
                            style: {
                                minHeight: '56px', // override the row height
                            },
                        },
                        headCells: {
                            style: {
                                backgroundColor: '#4CAF50',
                                color: 'white',
                                fontSize: '16px',
                            },
                        },
                        cells: {
                            style: {
                                fontSize: '14px',
                            },
                        },
                    }}
                />
            </div>
        </>
    );
}

export default VerCitas;
