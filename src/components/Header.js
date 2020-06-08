import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
      <h1>Expensify</h1>
      <NavLink className="Menu" exact to="/" activeStyle={{fontWeight: "bold",color: "red"}}>Dashboard</NavLink>
      <NavLink className="Menu" to="/create" activeStyle={{fontWeight: "bold",color: "red"}}>Create</NavLink>
      <NavLink className="Menu" to="/help" activeStyle={{fontWeight: "bold",color: "red"}}>Help</NavLink>
    </header>
);

export default Header;