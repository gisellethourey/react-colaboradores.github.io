import { useState } from 'react';
import { BaseColaboradores } from './BaseColaboradores';
import Buscador from './components/Buscador';
import Listado from './components/Listado';
import Formulario from './components/Formulario';
import Alert from './components/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {
  const [baseColaboradores, setBaseColaboradores] = useState(BaseColaboradores);
  const [employeeFilter, setemployeeFilter] = useState(baseColaboradores);

  const [alert, setAlert] = useState({
    alertText: '',
    alertCase: '',
    alertStatus: false,
  });

  const addAlert = (newAlert) => {
    setAlert(newAlert);
  };

  return (
    <>
      <h1 className="m-3 ">Lista de Colaboradores</h1>
      <div className='m-1'>
        <Buscador
          informacion={baseColaboradores}
          dataFileFilter={setemployeeFilter}
        />
      </div>
      <div className="row row-cols-2 justify-content-end m-2">
        <Listado
          informacion={baseColaboradores}
          setArchivo={setBaseColaboradores}
          dataFileFilter={employeeFilter}
          setDataFileFilter={setemployeeFilter}
        />
        <Formulario
          addAlert={addAlert}
         informacion={baseColaboradores}
          setArchivo={setBaseColaboradores}
          dataFileFilter={employeeFilter}
          setDataFileFilter={setemployeeFilter}
        />
        <Alert 
          className="alert" 
          alerta={alert}
        />
      </div>
    </>
  );
}

export default App;