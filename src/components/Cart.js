import 'font-awesome/css/font-awesome.min.css';
import '../App.css'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Products from '../data/products.json'
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";


function Cart() {

    let location = useLocation()
    let navigate = useNavigate()
    const item = new URLSearchParams(location.search)
    const LOCAL_STORAGE_KEY = 'cart'
    const [cart,setCart] = useState([])

    useEffect(()=>{
        const retriveCart = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if(retriveCart){
            setCart(retriveCart)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(cart))
    },[cart])

    console.log(cart)

    return (
        <div className="container-flex">
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Hình Ảnh</th>
                    <th>Tên Sản Phẩm</th>
                    <th>Số Lượng</th>
                    <th>Tổng Giá</th>
                    <th>Thực Hiện</th>
                </tr>
                </thead>
                <tbody>
                {cart.map((item, index) => {
                    return (
                        <tr key={index} className='text-center'>
                            <td>{index +1}</td>
                            <td><img src={item.hinhAnh} width='80px' alt=""/></td>
                            <td>{item.tenSanPham}</td>
                            <td>{item.soLuong}</td>
                            <td>{item.giaBan * item.soLuong}</td>
                            <td><Button>Delete</Button></td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
        </div>
    );
}

export default Cart;
