import { Link } from "react-router-dom";
import { SidebarLogo } from "./components/Logo";
import Logo from "../../assets/logoPrincipal.svg";
import { NavItem } from "./components/NavItem";

const TITLE = "Dashboard Demac Store";

export const Sidebar = () => {
  return (
    <>
      {/* <!-- Sidebar --> */}
      <ul
        className="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <SidebarLogo brand="Demac Store" logo={Logo} />        
        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>{TITLE}</span>
          </a>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Administrar</div>

        {/* <!-- Nav Items --> */}
       
        <NavItem href="/products" icon="fa-box" name="Productos"/>
        <NavItem href="/users" icon="fa-users" name="Usuarios"/>
        <NavItem href="http://localhost:3000/" icon="fa-solid fa-receipt" name="Contacto" />

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      {/* <!-- End of Sidebar --> */}
    </>
  );
};
