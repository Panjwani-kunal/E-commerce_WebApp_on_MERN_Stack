import { Box } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import ProdFilter from "./products/ProdFilter";
import Cart from "./home/Cart";
import Header from "./newheader/Header";

const AppRoute = () => {
  return (
    <Box>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prodfilter/:ptype" element={<ProdFilter />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default AppRoute;
