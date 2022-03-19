import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import {BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Nav/>}>
                        <Route index element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
