import '../App.css'
import Products from '../data/products.json'
import {Link, useLocation, useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {useEffect, useState} from "react";

function Product() {

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
        console.log(cartItem)
    }

    return (
        <div className='content'>
            {Products.map((product, index)=> {
                return (
                    <div key={index}>
                        <div className="item">
                            <div className="card">
                                <Link to={`product-details/${product.id}?tenSanPham=${product.tenSanPham}&giaBan=${product.giaBan}&hinhAnh=${product.hinhAnh}&moTa=${product.moTa}`}>
                                    <img className="card-img-top" src={product.hinhAnh}  width='200px' height='200px' alt=""/>
                                </Link>
                                <div className="card-body px-4 pt-2">
                                    <Link to={`product-details/${product.id}?tenSanPham=${product.tenSanPham}&giaBan=${product.giaBan}&hinhAnh=${product.hinhAnh}&moTa=${product.moTa}`}>
                                        <b>{product.tenSanPham}</b>
                                    </Link>
                                    <div className="row">
                                        <div className="col-8">
                                            <p className='pt-2'>{product.giaBan} đ</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Product;
