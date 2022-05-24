import React from 'react';
import '../assets/css/categoria.css'
import icone from  '../assets/images/sacola-de-compras-quadrada-com-alca.png'

function Categoria(props){
    return(
        <div className='container'>
            <div>
            <img src={props.image? props.image : icone} alt="" className='icon'/>
            </div>
            <span className='title'>{props.nome? props.nome : 'Categoria'}</span><br />
        </div>
    )
}
export default Categoria