import { useState } from 'react';
import { Link } from 'react-router-dom';
import SingleProduct from '../SingleProduct';
import Logo1 from '../../Assets/icon-cart.svg';
import Logo3 from '../../Assets/Logo3.jpg';
import classes from './home.module.css';


const store = [
    {
        id:1,
        header: 'SNEAKER COMPANY',
        title: 'Fall Limited Edition Sneakers',
        desc: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they will withstand everything the weather can offer.',
        price: '125.00',
        old_price: '250.00',
        image:'logo3.jpg'
    },
]

function Home({ cart, setCart }) {


    const [products] = useState(store)

    return (
                <div>
                  {products.map(product => (
                   <SingleProduct
                     product={product}
                     key={product.id}
                     cart={cart}
                     setCart={setCart}
                   />
                   ))}
                </div>
    )
}

export default Home
