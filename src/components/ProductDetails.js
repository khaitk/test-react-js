import 'font-awesome/css/font-awesome.min.css';
import Products from '../data/products.json'
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function ProductDetails() {

    let location = useLocation()
    let navigate = useNavigate()
    const item = new URLSearchParams(location.search)
    const LOCAL_STORAGE_KEY = 'cart'
    const [cart,setCart] = useState([])
    const [number,setNumber]=useState(1)
    const cartItem ={
        tenSanPham:item.get('tenSanPham'),
        giaBan:item.get('giaBan'),
        hinhAnh:item.get('hinhAnh'),
        moTa: item.get('moTa'),
        number:number,
        totalCost:number * Number(item.get('giaBan'))
    }

    const handleAddCart= () => {
        alert('Đã thêm vào giỏ hàng')
        setCart(prev=>[...prev,cartItem])
    }

    useEffect(()=>{
        const retriveCart = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if(retriveCart){
            setCart(retriveCart)
        }
    },[])
    useEffect(()=>{
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(cart))
    },[cart])


    return (
        <>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-3 p-2">
                    <div className="col-sm-6">
                        <img src={cartItem.hinhAnh} alt="" width={250}/>
                    </div>
                    <div className="col-sm-6 pt-5">
                        <b>{cartItem.tenSanPham}</b> <br/>
                        <span className="text-danger">{cartItem.giaBan} đ</span>
                        <br/>
                        <button className="fa fa-cart-plus" onClick={handleAddCart}></button>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className="col-12 col-md-6 col-lg-3 p-2">
                    Mô tả <br/>
                    {cartItem.moTa}
                </div>
            </div>
        </>
    );
}

export default ProductDetails