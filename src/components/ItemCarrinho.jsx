import React from "react";
import "../assets/css/itemcarrinho.css";

const ItemCarrinho = (props) => {
  const nomeProduto = props.nomeProduto;
  const preco = props.preco;
  const numParcelas = props.numParcelas;

  return (
    <div className="Produto">
      <img className="imageProduto" src="image/sacola.png" alt="" />
      <div className="descricaoProduto">
        <p>{nomeProduto}</p>
        <p>{preco}</p>
        <div className="bottomProduto">
          <p>{numParcelas}</p>
          <img className="bottomProduto-img" src="image/lata-de-lixo 1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ItemCarrinho;
