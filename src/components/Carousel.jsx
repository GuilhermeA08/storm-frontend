import {React, useRef} from 'react';
import ItemCatalogo from './ItemCatalogo';
import '../assets/css/carousel.css'

function Carousel() {
    const carousel = useRef(null);
    
    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
    
    return (

        <div> 
            <div className='carousel' ref={carousel}>
            <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
            <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
            <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
            <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
            <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
            <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
            <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
            <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
            <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
            <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
            <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
            <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
            <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
            <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
            <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
            <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
            <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
            <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
            <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
            <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
            <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
            <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
            <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
            <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
            <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
            <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
            <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
            <ItemCatalogo imagem="" nome="Carro" preco="00,00" parcelas="0 x R$ 00,00" frete="gratis" />
            </div>

            <div className='botoes'>
                <button onClick={handleLeftClick}>
                    <img src="image/angle.png" alt="scroll left" />
                </button>
                <button onClick={handleRightClick}>
                    <img src="image/angle.png" alt="scroll right" />
                </button>
            </div>
        </div>
        
        
    );
}
export default Carousel;