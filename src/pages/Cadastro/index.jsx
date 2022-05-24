import React from 'react'
import { Link } from "react-router-dom";
import NavbarLogin from '../../components/NavbarLogin';
import '../Cadastro/cadastro.css';

function Cadastro() {
    return (
        <div className='corpoCadastro'>
            <div className='right'></div>

            <div className='left'>
                <NavbarLogin />
                <div className='formulario'>
                    <h1>storm</h1>
                    <h6 class="mx-auto">
                    Está pronto para ter acesso à milhares de produtos<br />e serviços com
                    apenas um click?
                    </h6>

                    <div className='areaFormulario'>
                        <h1><strong>Cadastre</strong> aqui sua nova conta!</h1>

                        <div className="nome">
                            <label for="floatingNome">Nome</label><br />
                            <input type="text" id="floatingNome"/>
                        </div>

                        <div className="sobrenome">
                            <label for="floatingSobrenome">Sobrenome</label><br />
                            <input type="text" id="floatingSobrenome"/>
                        </div>

                        <div className="cpf">
                            <label for="floatingCPF">CPF</label><br />
                            <input type="text" id="floatingCPF"/>
                        </div>

                        <div className="email">
                            <label for="floatingEmail">Email</label><br />
                            <input type="email" id="floatingEmail"/>
                        </div>

                        <div className="senha">
                            <label for="floatingAssunto">Senha</label><br />
                            <input type="password" id="floatingPassword"/>
                        </div>

                        <div className="botao">
                            <Link className="Link" to="">Cadastrar</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cadastro;