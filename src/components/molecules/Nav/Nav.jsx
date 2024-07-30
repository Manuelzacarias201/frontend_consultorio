import '../Nav/Nav.css'

import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
      <Link to="/Home" className='nav-link'>Home</Link>
        <Link to="/AgendarCita" className='nav-link'>Agendar Cita</Link>
        <Link to="/VerCitas" className='nav-link'>Ver Citas</Link>
        <Link to="/AtenderCita" className='nav-link'>Atender Cita</Link>
        <Link to="/HistorialMedico" className='nav-link'>Historial sMedico</Link>

      </div>
    </nav>
  );
}

export default Nav;