import 'font-awesome/css/font-awesome.min.css';
import '../App.css'
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import product from "./Product";


function Cart() {

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

    console.log(cart)

    if(cart.length !== 0){
        return(
            <div className="row">
                <div className="col-12">
                    <div className="card">
                       <table className="table">
                           <thead>
                               <tr>
                                   <th>#</th>
                                   <th>Hình Ảnh</th>
                                   <th>Sản Phẩm</th>
                                   <th>Số Lượng</th>
                                   <th>Thực Hiện</th>
                               </tr>
                           </thead>
                           <tbody>
                           {cart.map((product, index) => {
                               return (
                                   <tr key={index}>
                                       <td>{index}</td>
                                       <td><img src={product.hinhAnh} alt="" width={100}/></td>
                                       <td>
                                           {product.tenSanPham} <br/>
                                           {product.giaBan}
                                       </td>
                                       <td>{product.number}</td>
                                       <td>Delete</td>
                                   </tr>
                               )
                           })}

                           </tbody>
                       </table>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div className="row">
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="card">
                        <h4 className='text-center'>Gio Hang Dang Trong</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;
