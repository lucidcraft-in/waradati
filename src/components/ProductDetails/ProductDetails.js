import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
  
import NavBar from '../Layout/NavBar';
import Footer from '../Layout/Footer';
import Breadcrumb from '../Common/Breadcrumb';
 
 import { listProductDetails } from '../../actions/productActions';
 import { addWishList } from '../../actions/wishlistAction';
import { addCart } from '../../actions/cartActions';
import ProductInfo from './ProductInfo';
 

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

     const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  
      const userLogin = useSelector((state) => state.userLogin);
      const { userInfo } = userLogin;

  const [data, setData] =useState({})
  const [images, setImages] = useState([]);
  const [stock, setStock] = useState([]);
  const [selectStockItem, setSelectStockItem] = useState();
  const [quantity,changeQnty] = useState(1)
  

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [data]);

 
  if (
    Object.keys(product).length !== 0 &&
    images.length === 0 &&
    product._id
  ) {
    
    setImages(product?.images[0]);
    setData(product);
    setStock(product?.stock_items[0]);
  } 

  const addToCart = (e) => {
    
    e.preventDefault();
    
    if (!selectStockItem) return

    
      let data_ = {
        userId: userInfo._id,
        item: {
          itemId: data._id,
          quantity: quantity,
          itemName: data.name,
          stockId: selectStockItem,
        },
    };
    
 
    
    dispatch(addCart(data_));
    
  }


  const addWishListUser = () => {
     
     let data_ = {
       userId: userInfo._id,
       itemId: data._id,
     };
     dispatch(addWishList(data_));
  };
  
  console.log(data)

   
  return (
    <div>
      {' '}
      <NavBar />
      <Breadcrumb />
      <div class="product_details mt-100 mb-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="product-details-tab">
                <div id="img-1" class="zoomWrapper single-zoom">
                  <a href="#">
                    <img
                      id="zoom1"
                      src={`${process.env.REACT_APP_API_URL}/${images.url}`}
                      data-zoom-image="assets/img/product/productbig4.jpg"
                      alt="big-1"
                    />
                  </a>
                </div>
                <div class="single-zoom-thumb">
                  <ul
                    class="s-tab-zoom owl-carousel single-product-active"
                    id="gallery_01"
                  >
                    <li>
                      <a
                        href="#"
                        class="elevatezoom-gallery active"
                        data-update=""
                        data-image="assets/img/product/productbig4.jpg"
                        data-zoom-image="assets/img/product/productbig4.jpg"
                      >
                        <img
                          src="assets/img/product/productbig4.jpg"
                          alt="zo-th-1"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="elevatezoom-gallery active"
                        data-update=""
                        data-image="assets/img/product/productbig1.jpg"
                        data-zoom-image="assets/img/product/productbig1.jpg"
                      >
                        <img
                          src="assets/img/product/productbig1.jpg"
                          alt="zo-th-1"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="elevatezoom-gallery active"
                        data-update=""
                        data-image="assets/img/product/productbig2.jpg"
                        data-zoom-image="assets/img/product/productbig2.jpg"
                      >
                        <img
                          src="assets/img/product/productbig2.jpg"
                          alt="zo-th-1"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="elevatezoom-gallery active"
                        data-update=""
                        data-image="assets/img/product/productbig3.jpg"
                        data-zoom-image="assets/img/product/productbig3.jpg"
                      >
                        <img
                          src="assets/img/product/productbig3.jpg"
                          alt="zo-th-1"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="product_d_right">
                <form>
                  <h1>
                    <a href="#">{data.name}</a>
                  </h1>
                  <div class="product_nav">
                    <ul>
                      <li class="prev">
                        <a href="product-details.html">
                          <i class="fa fa-angle-left"></i>
                        </a>
                      </li>
                      <li class="next">
                        <a href="variable-product.html">
                          <i class="fa fa-angle-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class=" product_ratting">
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
                      <li class="review">
                        <a href="#"> (customer review ) </a>
                      </li>
                    </ul>
                  </div>
                  <div class="price_box">
                    <span class="current_price">AED {stock.sellingPrice}</span>
                    <span class="old_price">AED {stock.price}</span>
                  </div>
                  <div class="product_desc">
                    <p>{data.description}</p>
                  </div>
                  <div class="widget_list widget_manu">
                    <h3>STOCKS</h3>
                    <ul>
                      {data?.stock_items?.map((stock) => (
                        <li>
                          <a>
                            <input
                              type="radio"
                              name="select_stock_item"
                              value={stock._id}
                              style={{ width: '18px', height: '18px' }}
                              onChange={(e) =>
                                setSelectStockItem(e.target.value)
                              }
                            />
                            &nbsp;&nbsp; &nbsp;
                            {stock.size}{' '}
                            <span style={{ fontWeight: '500' }}>
                              AED {stock.sellingPrice}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div class="product_variant quantity">
                    <label>quantity</label>
                    <input
                      min="1"
                      max="100"
                      value={quantity}
                      type="number"
                      onChange={(e) => changeQnty(e.target.value)}
                    />
                    <button class="button" onClick={(e) => addToCart(e)}>
                      add to cart
                    </button>
                  </div>
                  <div class=" product_d_action">
                    <ul>
                      <li>
                        <a
                          onClick={(e) => addWishListUser()}
                          title="Add to wishlist"
                        >
                          + Add to Wishlist
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="product_meta">
                    <span>
                      Brand: <a>{data.brand}</a>
                    </span>
                  </div>
                </form>
                <div class="priduct_social">
                  <ul>
                    <li>
                      <a class="facebook" href="#" title="facebook">
                        <i class="fa fa-facebook"></i>
                        Like
                      </a>
                    </li>
                    <li>
                      <a class="twitter" href="#" title="twitter">
                        <i class="fa fa-twitter"></i> tweet
                      </a>
                    </li>
                    <li>
                      <a class="pinterest" href="#" title="pinterest">
                        <i class="fa fa-pinterest"></i>
                        save
                      </a>
                    </li>
                    <li>
                      <a class="google-plus" href="#" title="google +">
                        <i class="fa fa-google-plus"></i>
                        share
                      </a>
                    </li>
                    <li>
                      <a class="linkedin" href="#" title="linkedin">
                        <i class="fa fa-linkedin"></i>
                        linked
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductInfo data={data} />
      <section class="product_area related_products">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="section_title">
                <h2>Related Products </h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="product_carousel product_column4 owl-carousel">
              <div class="col-lg-3">
                <article class="single_product">
                  <figure>
                    <div class="product_thumb">
                      <a class="primary_img" href="product-details.html">
                        <img src="assets/img/product/product1.jpg" alt="" />
                      </a>
                      <div class="label_product">
                        <span class="label_sale">-7%</span>
                      </div>
                      <div class="action_links">
                        <ul>
                          <li class="add_to_cart">
                            <a href="cart.html" title="Add to cart">
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
                    </div>
                    <figcaption class="product_content">
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
                    </figcaption>
                  </figure>
                </article>
              </div>
              <div class="col-lg-3">
                <article class="single_product">
                  <figure>
                    <div class="product_thumb">
                      <a class="primary_img" href="product-details.html">
                        <img src="assets/img/product/product2.jpg" alt="" />
                      </a>
                      <div class="label_product">
                        <span class="label_sale">-9%</span>
                      </div>
                      <div class="action_links">
                        <ul>
                          <li class="add_to_cart">
                            <a href="cart.html" title="Add to cart">
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
                    </div>
                    <figcaption class="product_content">
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
                        <a href="product-details.html">eget sagittis</a>
                      </h4>
                      <div class="price_box">
                        <span class="current_price">£65.00</span>
                        <span class="old_price">£70.00</span>
                      </div>
                    </figcaption>
                  </figure>
                </article>
              </div>
              <div class="col-lg-3">
                <article class="single_product">
                  <figure>
                    <div class="product_thumb">
                      <a class="primary_img" href="product-details.html">
                        <img src="assets/img/product/product3.jpg" alt="" />
                      </a>
                      <div class="label_product">
                        <span class="label_sale">-6%</span>
                      </div>
                      <div class="action_links">
                        <ul>
                          <li class="add_to_cart">
                            <a href="cart.html" title="Add to cart">
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
                    </div>
                    <figcaption class="product_content">
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
                        <a href="product-details.html">fringilla augue</a>
                      </h4>
                      <div class="price_box">
                        <span class="current_price">£68.00</span>
                        <span class="old_price">£75.00</span>
                      </div>
                    </figcaption>
                  </figure>
                </article>
              </div>
              <div class="col-lg-3">
                <article class="single_product">
                  <figure>
                    <div class="product_thumb">
                      <a class="primary_img" href="product-details.html">
                        <img src="assets/img/product/product4.jpg" alt="" />
                      </a>
                      <div class="label_product">
                        <span class="label_sale">-5%</span>
                      </div>
                      <div class="action_links">
                        <ul>
                          <li class="add_to_cart">
                            <a href="cart.html" title="Add to cart">
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
                    </div>
                    <figcaption class="product_content">
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
                        <a href="product-details.html">massa massa</a>
                      </h4>
                      <div class="price_box">
                        <span class="current_price">£75.00</span>
                        <span class="old_price">£80.00</span>
                      </div>
                    </figcaption>
                  </figure>
                </article>
              </div>
              <div class="col-lg-3">
                <article class="single_product">
                  <figure>
                    <div class="product_thumb">
                      <a class="primary_img" href="product-details.html">
                        <img src="assets/img/product/product5.jpg" alt="" />
                      </a>
                      <div class="label_product">
                        <span class="label_sale">-8%</span>
                      </div>
                      <div class="action_links">
                        <ul>
                          <li class="add_to_cart">
                            <a href="cart.html" title="Add to cart">
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
                    </div>
                    <figcaption class="product_content">
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
                        <a href="product-details.html">placerat vestibulum</a>
                      </h4>
                      <div class="price_box">
                        <span class="current_price">£65.00</span>
                        <span class="old_price">£70.00</span>
                      </div>
                    </figcaption>
                  </figure>
                </article>
              </div>
              <div class="col-lg-3">
                <article class="single_product">
                  <figure>
                    <div class="product_thumb">
                      <a class="primary_img" href="product-details.html">
                        <img src="assets/img/product/product6.jpg" alt="" />
                      </a>
                      <div class="label_product">
                        <span class="label_sale">-9%</span>
                      </div>
                      <div class="action_links">
                        <ul>
                          <li class="add_to_cart">
                            <a href="cart.html" title="Add to cart">
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
                    </div>
                    <figcaption class="product_content">
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
                        <a href="product-details.html">Porro Cook</a>
                      </h4>
                      <div class="price_box">
                        <span class="current_price">£62.00</span>
                        <span class="old_price">£68.00</span>
                      </div>
                    </figcaption>
                  </figure>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="brand_area brand__three">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="brand_container owl-carousel">
                <div class="single_brand">
                  <a href="#">
                    <img src="assets/img/brand/brand1.png" alt="" />
                  </a>
                </div>
                <div class="single_brand">
                  <a href="#">
                    <img src="assets/img/brand/brand2.png" alt="" />
                  </a>
                </div>
                <div class="single_brand">
                  <a href="#">
                    <img src="assets/img/brand/brand3.png" alt="" />
                  </a>
                </div>
                <div class="single_brand">
                  <a href="#">
                    <img src="assets/img/brand/brand4.png" alt="" />
                  </a>
                </div>
                <div class="single_brand">
                  <a href="#">
                    <img src="assets/img/brand/brand5.png" alt="" />
                  </a>
                </div>
                <div class="single_brand">
                  <a href="#">
                    <img src="assets/img/brand/brand6.png" alt="" />
                  </a>
                </div>
                <div class="single_brand">
                  <a href="#">
                    <img src="assets/img/brand/brand2.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}


export default ProductDetails;