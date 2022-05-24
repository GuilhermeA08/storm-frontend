import React from 'react';
import Categoria from './Categoria';
import '../assets/css/categorias.css'

function Categorias(){
    return(
        <div style={{marginLeft:'26%'}}>
        <div className='list'>
            <Categoria />
            <Categoria />
            <Categoria />
            <Categoria />
            <Categoria />
            <Categoria />
            <Categoria />
            <Categoria />
        </div>
        <div className='list'>
                <Categoria />
                <Categoria />
                <Categoria />
                <Categoria />
                <Categoria />
                <Categoria />
                <Categoria />
                <Categoria />
            </div>
        </div>

    )
}
export default Categorias
