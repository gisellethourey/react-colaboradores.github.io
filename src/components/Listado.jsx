import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
const Listado = ({ informacion, setArchivo, dataFileFilter, setDataFileFilter }) => {

  function deleteEmployee(id) {
    
    const newData = [...informacion].filter(
        (colaborador) => colaborador.id !== id);
    setArchivo(newData);

    const newDataFilter = [...dataFileFilter].filter(
        (colaborador) => colaborador.id !== id
    );

    setDataFileFilter(newDataFilter);
  }

  const colaboradores = dataFileFilter.map((colaborador) => (
    <tr key={colaborador.id}>
      <td>{colaborador.nombre}</td>
      <td>{colaborador.correo}</td>
      <td>{colaborador.edad}</td>
      <td>{colaborador.cargo}</td>
      <td>{colaborador.telefono}</td>
      <td>
        <Button variant= "primary">Borrar</Button>{' '}
      <i className=''
      id = 'delete' 
      onClick={() => deleteEmployee(colaborador.id)}>
          </i>
      </td>
    </tr>
  ));

  return (
    <div>
    <Table responsive="sm">
      <thead>
        <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Telefono</th>
           <th>Borrar</th> 
          </tr>
        </thead>
        
        <tbody>{colaboradores}</tbody>
      </Table>
    </div>
  );
}

export default Listado