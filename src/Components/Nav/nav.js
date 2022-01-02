import React from 'react';
import { Link } from 'react-router-dom';
import Logo1 from "../../Assets/icon-cart.svg";
import Logo2 from "../../Assets/image-avatar.png";
import classes from './nav.module.css';

function Nav ({cart})  {
    return ( 
        <nav className={classes.overall}>
            <div className={classes.items}>
                <div>
                    <Link to='/'><h2>Sneakers</h2></Link>
                </div>
                <div className={classes.link}>
                    <ul>
                    <li><a href="#">Collections</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className={classes.item}>
                <div>
                <Link to='/cart'>
                <img src={Logo1} className={classes.carts}  alt="myumg" />
                <span className={classes.cart_length}>{cart.length}</span>
                </Link>
                </div>
                <img src={Logo2} className={classes.myimg}  alt="myumg" />
            </div>

            </div>

        </nav>
     );
}
 
export default Nav;



// export default function Nav({ cart }) {
//     return (
//         <div>
//             <Link to='/'>
//                 <h3>React Cart</h3>
//             </Link>
//             <Link to='/cart'>
//                 {/* cart.length here just means the number of items in the cart */}
//                 <div>Cart ({cart.length})</div>
//             </Link>
//         </div>
//     )
// }