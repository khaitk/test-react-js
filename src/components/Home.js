import product from '../data/products.json'

function Home() {
    console.log(product)
    return (
        <div className="d-flex justify-content-center">
            <div className="row">
                {product.map((product, index)=> {
                    return (
                        <div className='col-3' key={index}>
                            <h5>Khai TK</h5>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Home;
