import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo2.png';

function Navbar() {
  return (
    <nav className="fixed top-0 h-20 w-full bg-sky-800/80 px-4 text-white flex justify-between z-40">
      <Link className="items-center flex h-full ml-5" to="/">
        <img className="w-44" src={logo} alt="" />
      </Link>
      <ul className="flex items-center gap-4">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'inline-block h-full border-b border-white' : 'inline-block h-full hover:border-b border-white'
            }
            to="/about"
          >
            ¿Qué hacemos?
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'inline-block h-full border-b border-white' : 'inline-block h-full hover:border-b border-white'
            }
            to="/choose"
          >
            Eligeme
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'inline-block h-full border-b border-white' : 'inline-block h-full hover:border-b border-white'
            }
            to="/donate"
          >
            Donar
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'inline-block h-full border-b border-white' : 'inline-block h-full hover:border-b border-white'
            }
            to="/contact"
          >
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
