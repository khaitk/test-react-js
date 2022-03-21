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
    const [qty, setQty] = useState()

    useEffect(()=>{
        const retriveCart = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if(retriveCart){
            setCart(retriveCart)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(cart))
    },[cart])

    const totalPrice = () => {
        let sum = 0;
        cart.map((item, index) => {
            let totalPrice = item.giaBan * item.soLuong;
            sum += totalPrice;

        })
        return sum;
    }

    if (cart.length >0){
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
                                    <td>{item.giaBan}đ x {item.soLuong}</td>
                                    <td>
                                        <b className='text-color-blue'>{item.giaBan * item.soLuong}đ</b>
                                    </td>
                                    <td>
                                        <Button onClick={
                                            () => {
                                                const newCart = [...cart]
                                                newCart.splice(index, 1)
                                                setCart(newCart)
                                            }}
                                        >
                                            <i className='fa fa-trash-o icon-delete'></i>
                                        </Button>
                                    </td>
                                </tr>
                            )
                        })}
                        <tr>
                            <th colSpan='4'>Tổng Cộng : </th>
                            <th className='text-color-red'>{totalPrice()} đ</th>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }else{
        return (
            <div className="container-flex">
                <br/>
                <div className="card text-center">
                    <strong>Hiện tại giỏ hàng đang rỗng. </strong>
                    <Link to='/'>Quay lại</Link>
                </div>
            </div>
        )
    }
}

export default Cart;
