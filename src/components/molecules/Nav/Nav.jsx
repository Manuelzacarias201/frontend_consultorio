import '../Nav/Nav.css'

import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
      <Link to="/Home" className='nav-link'>Home</Link>
        <Link to="/AgendarCita" className='nav-link'>Agendar Cita</Link>
        <Link to="/verCitas" className='nav-link'>Ver Citas</Link>
      </div>
    </nav>
  );
}

export default Nav;