import React from 'react'
import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar';
import '../CatalogoCompra/catalogocompra.css';

function CatalogoCompra(props) {
    return (
        <div className='corpo'>
            
            <Navbar />

            <div className="topo">
                <div className="imagen-principal">
                    <img src="image/kisspng-shopping-bag-cartoon-fashion-shopping-bags-5a810a5eab7012.5003817015184062387022.png" alt="" />
                </div>

                <div className="imagens-secundarias">
                    <img src="image/kisspng-shopping-bag-cartoon-fashion-shopping-bags-5a810a5eab7012.5003817015184062387022.png" alt="" />
                    <img src="image/kisspng-shopping-bag-cartoon-fashion-shopping-bags-5a810a5eab7012.5003817015184062387022.png" alt="" />
                    <img src="image/kisspng-shopping-bag-cartoon-fashion-shopping-bags-5a810a5eab7012.5003817015184062387022.png" alt="" />
                    <img src="image/kisspng-shopping-bag-cartoon-fashion-shopping-bags-5a810a5eab7012.5003817015184062387022.png" alt="" />
                </div>

                <div className="info-comprar">
                    <h1>Produto 1 - Nova Linha Especial</h1>
                    <h1>R$ 156,00</h1>
                    <h2>10x 15,60 sem juros</h2>
                
                    <h3><img src="image/caminhao-de-entrega.png" alt="" /> entrega grátis</h3>
                    <div className="adicionar-carrinho">
                        <a href="pagCarrinho.html" class="btn btn-outline-dark">Adicionar ao Carrinho</a>
                    </div>
                    
                    <div className="comprar-agora">
                        <a href="pagCarrinho.html" class="btn btn-success">Comprar Agora</a>
                    </div>
                </div>
                
                

            </div>
            

        </div>
    )
}

export default CatalogoCompra;