import { Link, NavLink } from "react-router-dom";
import Button from "../Button/Button";
import './Navbar.css'
const Navbar = () => {

  return <div className="md:px-24 bg-slate-50">
    {/* responsive (dropdown menu on small screen, center menu on large screen) */}
    <div className="navbar bg-slate-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul  tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><NavLink lassName={({ isActive }) => (isActive ? 'active' : '')}  to="statistics">Statistics</NavLink></li>
            <li><NavLink to="joblisting">Job Listing</NavLink></li>
            <li><NavLink to="blog">Blog</NavLink></li>
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case md:text-3xl font-bold ">CareerHub</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul id="active-route"  className="menu menu-horizontal px-1">
            <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="statistics">Statistics</NavLink></li>
            <li><NavLink to="joblisting">Job Listing</NavLink></li>
            <li><NavLink to="blog">Blog</NavLink></li>
        </ul>
      </div>
      <div className="navbar-end">
        <Button title='Start Applying'></Button>
      </div>
    </div>
  </div>;
};

export default Navbar;
