import React from 'react'
import {Link} from 'react-router-dom'
function ProductCart({product}) {
    return (
        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
                <img
                    className="card-img-top mx-auto"
                    src={product.images[0].image}
                />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">
                        <Link to={`/product/${product._id}`} ><a href="">{product.name}</a></Link>
                    </h5>
                    <div className="ratings mt-auto">
                        <div className="rating-outer">    {/* ratings/5*100  */}
                            <div className="rating-inner" style={{width: `${product.ratings/5 * 100}%`}}></div>
                        </div>
                    </div>
                    <p className="card-text">{product.price}</p>
                    <Link to={'/product/'+product._id}><a href="#" id="view_btn" className="btn btn-block">View Details</a></Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCart