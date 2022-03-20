import * as React from "react";
import {BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";


function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Nav/>}>
                        <Route index element={<Product />} />
                        <Route path='/product-details/:id' element={<ProductDetails/>}/>
                        <Route path='/cart' element={<Cart/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
