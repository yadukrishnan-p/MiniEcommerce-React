import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';


function ProductDetails({ cartItems, setCartItems }) {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const [qty, setQty] = useState(1)
    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + '/product/' + id)
            .then(res => res.json())
            .then(res => setProduct(res.product))
            .catch(error => console.error('Error fetching product:', error));
    }, [id])

    if (!product) {
        return <div>Loading...</div>; // Show a loading message while fetching data
    }

    const addToCart = () => {
        const itemExist = cartItems.find((item) => item.product._id == product._id);

        if (!itemExist) {
            const newItem = { product, qty };
            setCartItems((state) => [...state, newItem]);
            toast.success("cart added successfully!")
        }
    }
        const increaseQty = () => {
            if (product.stock == qty) {
                    return 0;
                }
            setQty((state) =>  state + 1)
        }

        function dicreaseQty() {
            if (qty > 1) {
                setQty((state) => state - 1)
            }
        }

  
    return (
        product &&
        <div className="container container-fluid">
            <div className="row f-flex justify-content-around">
                <div className="col-12 col-lg-5 img-fluid" id="product_image">
                    <img src={product.images[0].image} alt="sdf" height="500" width="500" />
                </div>

                <div className="col-12 col-lg-5 mt-5">

                    <h3>{product.name}</h3>
                    <p id="product_id">Product id:  #{product._id}</p>

                    <hr />

                    <div class="rating-outer">
                        <div class="rating-inner" style={{ width: `${product.ratings / 5 * 100}%` }}></div>
                    </div>


                    <hr />

                    <p id="product_price">$ {product.price}</p>
                    <div class="stockCounter d-inline">
                        <span class="btn btn-danger minus" onClick={dicreaseQty}>-</span>

                        <input type="number" class="form-control count d-inline" value={qty} readOnly />

                        <span onClick={increaseQty} class="btn btn-primary plus">+</span>
                    </div>
                    <button type="button" onClick={addToCart} disabled={product.stock == 0} id="cart_btn" class="btn btn-primary d-inline ml-4">Add to Cart</button>

                    <hr />

                    <p>Status: <span id="stock_status" className={product.stock > 0 ? 'text-success' : 'text-danger'}>{product.stock > 0 ? "In Stock" : "out of stock"}</span></p>

                    <hr />

                    <h4 class="mt-2">Description:</h4>
                    <p>{product.description}</p>
                    <hr />
                    <p id="product_seller mb-3">Sold by: <strong>{product.seller}</strong></p>

                    <div class="rating w-50"></div>

                </div>

            </div>

        </div>
    )
}

export default ProductDetails