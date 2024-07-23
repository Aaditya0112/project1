import {Outlet, Link} from "react-router-dom"; 
import './layout.css'

const Layout = () => {
    return (
      <>
        <nav className="navMain">
          <ul className = 'navbar'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
  
        <Outlet />
      </>
    )
  };
  
  export default Layout;