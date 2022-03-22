import '../../App.css';
import logo from '../../logo.png';
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
            <header className="header">
                <Link to='/' className='link-logo'><img src={logo} width='50px' className='logo-img'></img></Link>
                <ul className="main-nav">
                    <Link to='/cart' className='link'>
                        <i className="fa fa-shopping-cart icon-cart">

                        </i>
                    </Link>
                </ul>
            </header>

            <Outlet />
        </>
    );
}


export default Nav;
