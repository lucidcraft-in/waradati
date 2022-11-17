import React,{useState} from 'react'
import { Link } from 'react-router-dom';
 import { useDispatch, useSelector } from 'react-redux';

import { addCart  } from '../../actions/cartActions';
import { addWishList } from '../../actions/wishlistAction';

import ProductModal from './ProductModal';
 
 import Reviews from '../Common/Reviews';

const Product = ({ product }) => {
  const dispatch = useDispatch();
  
    const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  
  const [selectedProduct , setSelectedProduct] =useState({})

  
  const addToCart = (product) => {
      
    let data = {
      userId: userInfo._id,
      item: {
        itemId: product.product,
        quantity: 1,
        itemName: product.product_items[0].name,
        stockId: product._id,
      },
    };
       
   
      dispatch(addCart(data));
  }
  
  const addWishListUser = (product) => {
    let data = {
      userId: userInfo._id,
      itemId: product,
    };
    dispatch(addWishList(data));
  };

  

  return (
    <div className="col-lg-4 col-md-4 col-12 ">
      <article className="single_product">
        <figure>
          {/* <Link to="/product"> */}
          <div className="product_thumb">
            {/* <a className="primary_img" href="product-details.html"> */}
            <img
              src={`${process.env.REACT_APP_API_URL}/${product.product_items[0].images[0].url}`}
              alt=""
            />
            {/* </a> */}
            <div className="label_product">
              <span className="label_sale">-7%</span>
            </div>
            <div className="action_links">
              <ul>
                <li className="add_to_cart">
                  <a title="Add to cart" onClick={(e) => addToCart(product)}>
                    <i className="icon-shopping-bag"></i>
                  </a>
                </li>

                <li className="wishlist">
                  <a
                    title="Add to Wishlist"
                    onClick={(e) => addWishListUser(product.product)}
                  >
                    <i className="icon-heart"></i>
                  </a>
                </li>
                <li className="quick_button">
                  <a
                    onClick={(e) => setSelectedProduct(product)}
                    data-bs-toggle="modal"
                    data-bs-target="#modal_box"
                    title="quick view"
                  >
                    {' '}
                    <i className="icon-eye"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="action_links list_action">
              <ul>
                <li className="quick_button">
                  <a
                    onClick={(e) => setSelectedProduct(product)}
                    data-bs-toggle="modal"
                    data-bs-target="#modal_box"
                    title="quick view"
                  >
                    {' '}
                    <i className="icon-eye"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* </Link> */}
          <div className="product_content grid_content">
            <div className="product_price_rating">
              <div className="product_rating">
                <Reviews rating={product?.product_items[0].rating} />
              </div>

              <h4 className="product_name">
                <Link to={`/product/${product.product}`}>
                  {product.product_items[0].name}
                </Link>
              </h4>
              <div className="price_box">
                <span className="current_price">
                  {' '}
                  AED{product.sellingPrice}
                </span>
                <span className="old_price">AED{product.price}</span>
              </div>
            </div>
          </div>
          <div className="product_content list_content">
            <div className="product_rating">
              <ul>
                <li>
                  <a href="#">
                    <i className="icon-star"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-star"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-star"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-star"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-star"></i>
                  </a>
                </li>
              </ul>
            </div>
            <h4 className="product_name">
              {/* <a href="product-details.html">commodo augue nisi</a> */}
            </h4>
            <div className="price_box">
              <span className="current_price">£69.00</span>
              <span className="old_price">£74.00</span>
            </div>
            <div className="product_desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco…
              </p>
            </div>
            <div className="action_links list_action_right">
              <ul>
                <li className="add_to_cart">
                  <a href="cart.html" title="Add to cart">
                    Add to cart
                  </a>
                </li>
                <li className="wishlist">
                  <a href="wishlist.html" title="Add to Wishlist">
                    <i className="icon-heart"></i>
                  </a>
                </li>
                <li className="compare">
                  <a href="#" title="Add to Compare">
                    <i className="icon-sliders"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </figure>
      </article>
      <ProductModal product={selectedProduct} />
    </div>
  );
}

export default Product