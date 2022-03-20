import '../App.css'
import Products from '../data/products.json'
import {Link} from "react-router-dom";

function Product() {

    return (
        <div className='container'>
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
                                            <p className='pt-2'>{product.giaBan}</p>
                                        </div>
                                        <div className="col-4">
                                            <Link to={`product-details/${product.id}?tenSanPham=${product.tenSanPham}&giaBan=${product.giaBan}&hinhAnh=${product.hinhAnh}&moTa=${product.moTa}`}>
                                                <i className="fa fa-cart-plus Icon-font-size"></i>
                                            </Link>
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
