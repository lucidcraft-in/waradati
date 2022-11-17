import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
 

 import Reviews from '../Common/Reviews';

const SingleProduct =({ product, page }) => {
 
  
 
  

  return (
    <article className="single_product">
      <figure>
        <div className="product_thumb">
          <a className="primary_img">
            <img
              src={`${process.env.REACT_APP_API_URL}/${
                product.product && product.product[0].images[0].url
              } `}
              alt=""
            />
          </a>
          <div className="label_product">
            <span className="label_sale">
              AED {product.price - product.sellingPrice} <span className='saved'>you saved</span>
            </span>
          </div>
        </div>
        <figcaption className="product_content">
          <div className="product_rating">
            <Reviews rating={product.product && product.product[0].rating} />
          </div>
          <h4 className="product_name">
            <Link to={`product/${product.product && product.product[0]._id}`}>
              {' '}
              {product.product && product.product[0].name}
            </Link>
          </h4>
          <div className="price_box">
            <span className="current_price">AED {product.sellingPrice}</span>
            <span className="old_price">AED {product.price}</span>
          </div>
        </figcaption>
      </figure>
    </article>
  );
}


export default SingleProduct