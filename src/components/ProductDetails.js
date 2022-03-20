import '../App.css'
import Products from '../data/products.json'
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function ProductDetails() {

    let location = useLocation()
    let navigate = useNavigate()
    const item = new URLSearchParams(location.search)
    const LOCAL_STORAGE_KEY = 'cart'
    const [cart,setCart] = useState([])
    const [quantity,setQuantity]=useState(1)

    const cartItem ={
        tenSanPham:item.get('tenSanPham'),
        giaBan:item.get('giaBan'),
        hinhAnh:item.get('hinhAnh'),
        moTa: item.get('moTa'),
        soLuong:quantity,
        tongCong:quantity * Number(item.get('giaBan'))
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
            <div className="container">
                <div className="item">
                    <img src={cartItem.hinhAnh} alt="" width={250}/>
                </div>
                <div className="item mt-4">
                    <h4>{cartItem.tenSanPham}</h4>
                    <strong className="text-danger">{cartItem.giaBan} đ</strong> <br/> <br/>
                    <input type="number" name='quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)}/> <br/> <br/>
                    <button className="fa fa-cart-plus" onClick={handleAddCart}></button>
                </div>
            </div>
            <div className="container-flex">
                Mô tả <br/>
                <div>{cartItem.moTa}</div>
            </div>
        </>
    );
}

export default ProductDetails