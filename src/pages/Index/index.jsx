import React from "react";
import { Link } from "react-router-dom";
import './index.css';
import suporte from "../../assets/images/suporte-tecnico.png"
import caminhao from "../../assets/images/caminhao-de-entrega.png"
import garantia from "../../assets/images/certificado-de-garantia.png"
import topImage from '../../assets/images/kisspng-website-e-commerce-world-wide-web-digital-marketin-mobile-online-shopping-5aa34511625da9.4854262815206494894029.png'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel";
import Categorias from "../../components/Categorias";

function Index() {
  return (
    <div>
      <Navbar />

      <div className="body">

          <div className="cabecalho">
            <div>
              <h1>Uma tempestade de ofertas!</h1>
              <h2>Sem tempo de ir à uma loja? <br/>Não tem problema, agora você pode adquirir tudo que precisa pela internet!</h2>
              <Link className="Link" to="/login"><button>Entre ou cadastre-se!</button></Link>
              
            </div>
            <img src={topImage} alt="" style={{marginLeft:'300px'}} />
          </div>

          <div className="cabecalho2">
            <div className="itemCabecalho2">
              <img src={caminhao} alt="" style={{marginLeft:'300px', height:'100px'}}></img>
              <h1>Entrega Rápida</h1>
              <h2>Entregas a partir de 2 dias!</h2>
          </div>

          <div className="itemCabecalho2">
            <img src={garantia} alt="" style={{marginLeft:'350px', height:'100px'}} />
            <h1>Segurança Garantida</h1>
            <h2>Todo processo de compra feito<br/> com a maior segurança!</h2>
          </div>

          <div className="itemCabecalho2">
            <img src={suporte} alt="" style={{marginLeft:'320px', height:'100px'}} />
            <h1>Suporte ao Cliente</h1>
            <h2>Atendimento 24h</h2>
          </div>

        </div>

        <div className="principal" style={{ width: "100%" }}>
          <h1>Ofertas</h1>
          <Carousel />
          <h1>Novidades</h1>
          <Carousel />
          <h1>Mais Vendidos</h1>
          <Carousel />
          <h1 style={{backgroundColor:'white', textAlign:'center', color:'#042630'}}>Categorias</h1>
          <Categorias />
        </div>

      </div>
      <Footer />
    </div>
  );
}
export default Index;
