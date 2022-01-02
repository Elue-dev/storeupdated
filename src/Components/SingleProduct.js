import React from 'react';
import Logo1 from '../Assets/icon-cart.svg'
import './Single.css'

function SingleProduct({ product, cart, setCart }) {

    const addToCart = () => {
         setCart([...cart, product])
     }
     const removeFromCart = () => {
        setCart(cart.filter(item => item.id !== product.id))
     }

    return (
        <div className='products'>
            <div>
                <img src={product.image} alt={product.title} className='image' />
            </div>
            <div>
                <h3 className='header'>{product.header}</h3>
                <h2>{product.title}</h2>
                <p>{product.desc}</p>
                <h1>${product.price}</h1>
                <h3 className='old_price'>${product.old_price}</h3>
                {cart.includes(product) ? (
                 <button disabled className='btnCart disabled' onClick={addToCart}>
                    <img src={Logo1} alt='cart' className='cart_img' />
                    <h5>Added to cart</h5>
                </button>
                ) : (
                <button className='btnCart' onClick={addToCart}>
                    <img src={Logo1} alt='cart' className='cart_img' />
                    <h5>Add to cart</h5>
                </button>
                )}
            </div>
        </div>
    )
}

export default SingleProduct
