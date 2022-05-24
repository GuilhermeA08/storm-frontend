import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Index from "../pages/Index/index";
import Login from "../pages/Login/index";
import Cadastro from "../pages/Cadastro/index";
import CatalogoCompra from "../pages/CatalogoCompra/index"

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Index />} path="/" exact></Route>
        <Route element={<Login />} path="/login" exact></Route>
        <Route element={<Cadastro />} path="/cadastro" exact></Route>
        <Route element={<CatalogoCompra />} path="/catalogoCompra" exact></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
