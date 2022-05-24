import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/navbarlogin.css'

const NavbarLogin = () => {
    return(
            <div className="navegacao">
                <ul>
                    <li><Link className="Link" to="/">home</Link></li>
                    <li><Link className="Link destaque" to="">comprar</Link></li>
                    <li><Link className="Link destaque" to="">vender</Link></li>
                    <li><Link className="Link" to="">ajuda</Link></li>
                    <li><Link className="Link" to="">contato</Link></li>
                </ul>
            </div>

    );
}

export default NavbarLogin;