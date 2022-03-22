import * as React from "react";
import {BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Nav from "./dist/components/Nav";
import Product from "./dist/components/Product";
import ProductDetails from "./dist/components/ProductDetails";
import Cart from "./dist/components/Cart";
import Footer from "./dist/components/Footer";


function App() {
    return (
        <div className='container'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Nav/>}>
                        <Route index element={<Product />} />
                        <Route path='/product-details/:id' element={<ProductDetails/>}/>
                        <Route path='/cart' element={<Cart/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>

            <Footer/>
        </div>
    );
}

export default App;
