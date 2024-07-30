import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import NotFound from './components/pages/NotFound/NotFound.jsx'
import Home from './components/pages/Home/Home.jsx'
import Login from './components/pages/Login/Login.jsx'
import AgendarCitas from './components/pages/AgendarCitas/AgendarCitas.jsx'
import SecretarioHome from './components/pages/SecretarioHome/SecretarioHome.jsx'
import AgregarMedicamento from './components/pages/AgregarMedicamentos/AgregarMedicamento.jsx'
import ModificarCitas from './components/pages/ModificarCitas/ModificarCitas.jsx'
import VerCitas from './components/pages/Citas/VerCitas.jsx'
import AtenderCita from './components/pages/AtenderCita/AtenderCita.jsx'
import HistorialMedico from './components/pages/HistorialMedico/HistorialMedico.jsx'

const router = createBrowserRouter ([
  {
  //App
  path:"/",
 element: <App/>,
 errorElement:<NotFound/>
  },
  {
    path:"/Home",
    element: <Home/>
  },
  {path:"/login",
    element: <Login/>
  },{
    path:"/AgendarCita",
    element: <AgendarCitas/>
  },{
    path:"/SecretarioHome",
    element:<SecretarioHome/>
  },{
    path:"/AgregarMedicamento",
    element:<AgregarMedicamento/>
  },{
    path:"/ModificarCitas",
    element:<ModificarCitas/>
  },{
    path:"/VerCitas",
    element:<VerCitas/>
  },{
    path:"/AtenderCita",
    element:<AtenderCita/>
  },{
    path:"/HistorialMedico",
    element:<HistorialMedico/>
  }

]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
