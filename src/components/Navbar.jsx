import React from "react";
import '../assets/css/navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='NavBar'>
        <h1 className='logo'>Storm</h1>

        <div className="navegacao">
          <input className="pesquisa" type="text" placeholder="O que você vai comprar hoje?" />

          <ul>
              <li><Link className="Link" to="/">home</Link></li>
              <li><Link className="Link destaque" to="">comprar</Link></li>
              <li><Link className="Link destaque" to="">vender</Link></li>
              <li><Link className="Link" to="">ajuda</Link></li>
              <li><Link className="Link" to="">contato</Link></li>
          </ul>

          <p>Usuário</p>
          <div className="icone">
            <img src="image/user.png" alt="user" />
          </div>
        </div>
    </div>
  );
};

export default Navbar;
