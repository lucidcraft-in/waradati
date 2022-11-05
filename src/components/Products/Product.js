import React from 'react'
 import { Link } from 'react-router-dom';
const Product = ({ product }) => {


    const addToCart = (id) => {
        console.log(id)
    }

  return (
    <div class="col-lg-4 col-md-4 col-12 ">
      <article class="single_product">
        <figure>
          {/* <Link to="/product"> */}
            <div class="product_thumb">
              <a class="primary_img" href="product-details.html">
                <img
                  src={`${process.env.REACT_APP_API_URL}/${product.product_items[0].images[0].url}`}
                  alt=""
                />
              </a>
              <div class="label_product">
                d<span class="label_sale">-7%</span>
              </div>
              <div class="action_links">
                <ul>
                  <li class="add_to_cart">
                    <a
                      title="Add to cart"
                      onClick={(e) => addToCart(product.product)}
                    >
                      <i class="icon-shopping-bag"></i>
                    </a>
                  </li>
                  <li class="compare">
                    <a href="#" title="Add to Compare">
                      <i class="icon-sliders"></i>
                    </a>
                  </li>
                  <li class="wishlist">
                    <a href="wishlist.html" title="Add to Wishlist">
                      <i class="icon-heart"></i>
                    </a>
                  </li>
                  <li class="quick_button">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#modal_box"
                      title="quick view"
                    >
                      {' '}
                      <i class="icon-eye"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="action_links list_action">
                <ul>
                  <li class="quick_button">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#modal_box"
                      title="quick view"
                    >
                      {' '}
                      <i class="icon-eye"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          {/* </Link> */}
          <div class="product_content grid_content">
            <div class="product_price_rating">
              <div class="product_rating">
                <ul>
                  <li>
                    <a href="#">
                      <i class="icon-star"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icon-star"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icon-star"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icon-star"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icon-star"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <h4 class="product_name">
                <a href="product-details.html">
                  {product.product_items[0].name}
                </a>
              </h4>
              <div class="price_box">
                <span class="current_price"> AED{product.sellingPrice}</span>
                <span class="old_price">AED{product.price}</span>
              </div>
            </div>
          </div>
          <div class="product_content list_content">
            <div class="product_rating">
              <ul>
                <li>
                  <a href="#">
                    <i class="icon-star"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="icon-star"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="icon-star"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="icon-star"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="icon-star"></i>
                  </a>
                </li>
              </ul>
            </div>
            <h4 class="product_name">
              <a href="product-details.html">commodo augue nisi</a>
            </h4>
            <div class="price_box">
              <span class="current_price">£69.00</span>
              <span class="old_price">£74.00</span>
            </div>
            <div class="product_desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco…
              </p>
            </div>
            <div class="action_links list_action_right">
              <ul>
                <li class="add_to_cart">
                  <a href="cart.html" title="Add to cart">
                    Add to cart
                  </a>
                </li>
                <li class="wishlist">
                  <a href="wishlist.html" title="Add to Wishlist">
                    <i class="icon-heart"></i>
                  </a>
                </li>
                <li class="compare">
                  <a href="#" title="Add to Compare">
                    <i class="icon-sliders"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </figure>
      </article>
    </div>
  );
}

export default Product