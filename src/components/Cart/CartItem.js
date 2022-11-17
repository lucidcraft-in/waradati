import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart  } from '../../actions/cartActions';
export default function CartItem({ cartLists, cart, deleteHandler, }) {
  const dispatch = useDispatch();
  
  const [quantity, setQuantity] = useState(cart.quantity);
  const [price, setPrice] = useState(cart.sellingPrice);
  
    const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  

    const addToCart = (e, product) => {

        setQuantity(e.target.value);
 
        let data = {
          userId: userInfo._id,
          item: {
            itemId: product.itemId,
            quantity: e.target.value,
            itemName: product.itemName,
            stockId: product.stockId,
          },
        };
           
       
          dispatch(addCart(data));
      }
      
  return (
    <tr>
      <td className="product_remove">
        <a href="#">
          <i
            className="fa fa-trash-o"
            onClick={() => deleteHandler(cartLists._id, cart.itemId)}
          ></i>
        </a>
      </td>
      <td className="product_thumb">
        <a href="#">
          <img src={`${cart.image}`} alt="" />
        </a>
      </td>
      <td className="product_name">
        <a href="#">{cart.itemName}</a>
      </td>
      <td className="product-price">AED {cart.sellingPrice}</td>
      <td className="product_quantity">
        <label>Quantity</label>{' '}
        <input
          min="1"
          max="100"
          value={quantity}
          type="number"
          name="quantity"
          onChange={(e) => addToCart(e, cart)}
        />
      </td>
      <td className="product_total">AED {price * quantity}</td>
    </tr>
  );
}
