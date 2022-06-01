import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import CoinDetail from "../Pages/CoinDetail";



function Router() {


  return (
    <Routes>
       <Route path="/" element={<Dashboard />} />
       <Route path="coins/:id" element={<CoinDetail />} />
      
    </Routes>
  )
}


export default Router;