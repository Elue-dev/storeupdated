import { useState, useEffect } from 'react'
import './Single.css'

function Cart({ cart, setCart }) {
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(cart.reduce((total, current) => total + Number(current.price), 0))
    },[cart])

    return (
        <div>
            {cart.length === 0 ? (
                <h1 className='empty_cart'>Your cart is empty</h1>
            ) : (
                <>
                <>
                <h1 className='summary'>SUMMARY</h1>
                     {cart.map(product => (<>
                        <div className='flex_cart' key={product.id}>
                            <div>
                                <img src={product.image} alt={product.title} /> 
                            </div>
                            <div>
                                <h3>{product.title}</h3>
                                <h2>${product.price}</h2>

                                <button className='btnCart' onClick={()=>setCart(cart.filter(item => item.id !== product.id))}>
                                    <i className="fas fa-trash"></i>
                                    <h5>Remove from cart</h5>
                                </button>
                            </div>
                        </div>
                        </>
                    ))}
                </>
                <div className='total'><h2>Total: ${total}.00</h2></div>
                </>
            )}
            {/* <button style={{textAlign: 'center'}}>
                click to pay
            </button> */}
        </div>
    )
}

export default Cart
