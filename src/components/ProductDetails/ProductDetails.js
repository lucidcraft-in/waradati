import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { message } from 'antd';
 

import NavBar from '../Layout/NavBar';
import Footer from '../Layout/Footer';
import Breadcrumb from '../Common/Breadcrumb';

import {
  listProductDetails,
  nearestProducts,
  listProductsCategory,
} from '../../actions/productActions';
import { addWishList } from '../../actions/wishlistAction';
import { addCart, checkCartItemAdded } from '../../actions/cartActions';
import ProductInfo from './ProductInfo';
import Reviews from '../Common/Reviews';
import ImageArea from './ImageArea';
import RelatedProducts from './RelatedProducts';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const myRef = useRef(null);
   const navigate = useNavigate();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const nearestProduct = useSelector((state) => state.nearestProduct);
  const { nearestPr } = nearestProduct;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  

  const [selectStockItem, setSelectStockItem] = useState('');
  const [quantity, changeQnty] = useState(1);
  const [itemAddedInCart, setItemAdded] = useState(false);

  useEffect(() => {
    dispatch(listProductDetails(id));
    dispatch(nearestProducts(id));

     

    dispatch(checkCartItemAdded(id, selectStockItem)).then((res) => {
      console.log(res);
      setItemAdded(res=== true ? true : false);
    });

    myRef.current.scrollIntoView();
  }, [id, selectStockItem]);

  const addToCart = (e) => {
    e.preventDefault();
  if (!userInfo) {
    return navigate('/login');
    }
      if (!selectStockItem) {
        message.error('Please select stock item', 3);
        return;
      }

   

    let data_ = {
      userId: userInfo._id,
      item: {
        itemId: id,
        quantity: quantity,
        itemName: product.name,
        stockId: selectStockItem,
      },
    };

    dispatch(addCart(data_)).then((res) => {
      message.loading('Cart item adding...', 1);
      setTimeout(() => {
        if (res.code === 200) {
          message.success('Cart added');
        } else {
          message.error('Please try once', 3);
        }
      }, 1000);
    });

    setItemAdded(true);
  };

  const addWishListUser = () => {
    let data_ = {
      userId: userInfo._id,
      itemId: id,
    };
    dispatch(addWishList(data_));
     message.success('Wishlist added');
  };



 
 
  return (
    <div>
      {' '}
      <NavBar />
      <div className="breadcrumbs_area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb_content">
                <ul>
                  <li>
                    <Link to="/">home</Link>
                  </li>
                  <li>{product.name} </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product_details mt-100 mb-100" ref={myRef}>
        <div className="container">
          <div className="row">
            <ImageArea product={product} />
            <div className="col-lg-6 col-md-6">
              <div className="product_d_right">
                <form>
                  <h1>
                    <a href="#">{product.name}</a>
                  </h1>
                  <div className="product_nav">
                    <ul>
                      {nearestPr?.beforeProduct &&
                      nearestPr?.beforeProduct.length != 0 ? (
                        <li className="prev">
                          <Link
                            to={`/product/${
                              nearestPr.beforeProduct &&
                              nearestPr.beforeProduct[0]._id
                            }`}
                          >
                            <i className="fa fa-angle-left"></i>
                          </Link>
                        </li>
                      ) : (
                        ''
                      )}

                      {nearestPr?.afterProduct &&
                      nearestPr?.afterProduct.length != 0 ? (
                        <li className="next">
                          <Link
                            to={`/product/${
                              nearestPr.afterProduct &&
                              nearestPr.afterProduct[0]._id
                            }`}
                          >
                            <i className="fa fa-angle-right"></i>
                          </Link>
                        </li>
                      ) : (
                        ''
                      )}
                    </ul>
                  </div>
                  <div className=" product_ratting">
                    <Reviews rating={product.stock_items && product.rating} />
                  </div>
                  <div className="price_box">
                    <span className="current_price">
                      AED{' '}
                      {product.stock_items &&
                        product?.stock_items[0]?.sellingPrice}
                    </span>
                    <span className="old_price">
                      AED{' '}
                      {product.stock_items && product?.stock_items[0]?.price}
                    </span>
                  </div>
                  <div className="product_desc">
                    <p>{product.description}</p>
                  </div>
                  <div className="widget_list widget_manu ">
                    <h3>STOCKS</h3>
                    <ul>
                      {product.stock_items &&
                        product?.stock_items.map((stock) => (
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
                  <div className="product_variant quantity">
                    <label>quantity</label>
                    <input
                      min="1"
                      max="100"
                      value={quantity}
                      type="number"
                      onChange={(e) => changeQnty(e.target.value)}
                    />
                    {itemAddedInCart === false ? (
                      <button className="button" onClick={(e) => addToCart(e)}>
                        add to cart
                      </button>
                    ) : (
                      <Link to="/cart">
                        <button className="button">Go to cart</button>
                      </Link>
                    )}
                  </div>
                  <div className=" product_d_action">
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
                  <div className="product_meta">
                    <span>
                      Brand: <a>{product.brand}</a>
                    </span>
                  </div>
                </form>
                <div className="priduct_social">
                  <ul>
                    <li>
                      <a className="facebook" href="#" title="facebook">
                        <i className="fa fa-facebook"></i>
                        Like
                      </a>
                    </li>
                    <li>
                      <a className="twitter" href="#" title="twitter">
                        <i className="fa fa-twitter"></i> tweet
                      </a>
                    </li>
                    <li>
                      <a className="pinterest" href="#" title="pinterest">
                        <i className="fa fa-pinterest"></i>
                        save
                      </a>
                    </li>
                    <li>
                      <a className="google-plus" href="#" title="google +">
                        <i className="fa fa-google-plus"></i>
                        share
                      </a>
                    </li>
                    <li>
                      <a className="linkedin" href="#" title="linkedin">
                        <i className="fa fa-linkedin"></i>
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
      <ProductInfo data={product} />
      <RelatedProducts category={product?.category} />
      <Footer />
    </div>
  );
};

export default ProductDetails;
