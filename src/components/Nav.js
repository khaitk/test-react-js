import '../App.css';
import logo from '../logo.png';
import {Link, Outlet, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

function Nav() {

    let navigate = useNavigate()
    const [cart,setCart] = useState([])
    useEffect(()=>{
        const retriveCart = JSON.parse(localStorage.getItem('cart'))
        if(retriveCart){
            setCart(retriveCart)
        }
    },[])
    useEffect(()=>{
        localStorage.setItem('cart',JSON.stringify(cart))
    },[cart])

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">
                    <img src={logo} width="80" height="80"
                         className="d-inline-block align-top" alt=""/>
                </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                </div>
                <div className="float-right">
                    <Link to='/cart'>
                        <i className="fa fa-cart-plus Icon-font-size"></i>
                    </Link>
                </div>
            </nav>

            <Outlet />
        </>
    );
}


export default Nav;
