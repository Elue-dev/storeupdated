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
    <div className={classes.content}>
         <div className={classes.first}>
              {/* <div>
                <img src={Logo3} className={classes.shoe} alt="shoe"/>
              </div> */}
             <div className={classes.wrapper}>
                <div className='product_container'>
                  {products.map(product => (
                   <SingleProduct
                     product={product}
                     key={product.id}
                     cart={cart}
                     setCart={setCart}
                   />
                   ))}
                </div>
            </div>
        </div>
        {/* <div className={classes.second}>
            <h3>SNEAKER COMPANY</h3>
            <h1>Fall Limited Edition Sneakers</h1>
            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they will withstand everything the weather can offer.</p>
            <div className={classes.money}>
               <div className={classes.dollar}>
                <h1>$125.00</h1>
            
               </div>
               <div className={classes.percent}>
                   <h3>50%</h3>
               </div>
               
            </div>
            <h5 className={classes.prev}>$250.00</h5>
            <div className={classes.btn}>
                <button className={classes.add}>
                    <h3>-</h3>
                    <h4 className={classes.zero}>0</h4>
                    <h3>+ {cart.lenght}</h3>

                </button>
                <button  className={classes.btnCart}>
                    <img src={Logo1} className={classes.carts}  alt="myumg" />          
                    <h5>Add to cart</h5>
                </button>
            </div>

        </div> */}

    </div>
      
    )
}

export default Home
