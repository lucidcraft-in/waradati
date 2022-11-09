import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import $ from 'jquery';

import { listCategoriesHomePage } from '../../actions/homePageActions';
import { cartListByUser, removeCart } from '../../actions/cartActions';
import { logout } from '../../actions/userActions';
const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cartModalActive, setActiveModal] = useState('');
  const [cartsubTotal, setCartSubTotal] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const cartList = useSelector((state) => state.cartLists);
  const { cartLists } = cartList;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const homePageCategory = useSelector((state) => state.homePageCategory);
  const { loading, error, homePageCategories } = homePageCategory;
  const cartDelete = useSelector((state) => state.cartDelete);

  const {
    loading: loadingDelete,
    error: errorDelete,
    success: success,
  } = cartDelete;

  useEffect(() => {

    if (success) {
      navigate('/');
    }

    dispatch(listCategoriesHomePage(''));

    dispatch(cartListByUser(userInfo._id));

    cartTotalFunc();

  }, [dispatch, success]);

  const setCategoriesModalDisplay = (e) => {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.categories_menu_toggle').slideToggle('medium');
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  const cartTotalFunc = () => {
    let subTotal = 0;

    if (cartLists.item?.length > 0) {
      cartLists.item.map((cart) => {
        subTotal = subTotal + cart.quantity * cart.sellingPrice;
      });
      setCartSubTotal(subTotal);
      setCartTotal(subTotal);
    }
  };
  const deleteHandler = (id, itemId) => {
    if (window.confirm('Are you sure')) {
      dispatch(removeCart({ id, itemId }));
    }
  };
  return (
    <div>
      {' '}
      <div class={`off_canvars_overlay ${cartModalActive}`}></div>
      <div class="offcanvas_menu">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="canvas_open">
                <a href="javascript:void(0)">
                  <i class="icon-menu"></i>
                </a>
              </div>
              <div class="offcanvas_menu_wrapper">
                <div class="canvas_close">
                  <a href="javascript:void(0)">
                    <i class="icon-x"></i>
                  </a>
                </div>
                <div class="welcome-text">
                  <p>Free Delivery: Take advantage of our time to save event</p>
                </div>
                <div class="language_currency text-center">
                  <ul>
                    <li class="currency">
                      <a href="#">
                        {' '}
                        USD <i class="fa fa-angle-down"></i>
                      </a>
                      <ul class="dropdown_currency">
                        <li>
                          <a href="#">EUR</a>
                        </li>
                        <li>
                          <a href="#">GPB</a>
                        </li>
                        <li>
                          <a href="#">RUP</a>
                        </li>
                      </ul>
                    </li>
                    <li class="language">
                      <a href="#">
                        {' '}
                        English <i class="fa fa-angle-down"></i>
                      </a>
                      <ul class="dropdown_language">
                        <li>
                          <a href="#">French</a>
                        </li>
                        <li>
                          <a href="#">Spanish</a>
                        </li>
                        <li>
                          <a href="#">Russian</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="search_container">
                  <form action="#">
                    <div class="hover_category">
                      <select
                        class="select_option"
                        name="select"
                        id="categori2"
                      >
                        <option selected value="1">
                          All Categories
                        </option>
                        <option value="2">Accessories</option>
                        <option value="3">Accessories & More</option>
                        <option value="4">Butters & Eggs</option>
                        <option value="5">Camera & Video </option>
                        <option value="6">Mornitors</option>
                        <option value="7">Tablets</option>
                        <option value="8">Laptops</option>
                        <option value="9">Handbags</option>
                        <option value="10">Headphone & Speaker</option>
                        <option value="11">Herbs & botanicals</option>
                        <option value="12">Vegetables</option>
                        <option value="13">Shop</option>
                        <option value="14">Laptops & Desktops</option>
                        <option value="15">Watchs</option>
                        <option value="16">Electronic</option>
                      </select>
                    </div>
                    <div class="search_box">
                      <input placeholder="Search product..." type="text" />
                      <button type="submit">
                        <i class="icon-search"></i>
                      </button>
                    </div>
                  </form>
                </div>
                <div class="call-support">
                  <p>
                    Call Support: <a href="tel:0123456789">0123456789</a>
                  </p>
                </div>
                <div id="menu" class="text-left ">
                  <ul class="offcanvas_main_menu">
                    <li class="menu-item-has-children active">
                      <a href="#">Home</a>
                      <ul class="sub-menu">
                        <li>
                          <a href="index.html">Home 1</a>
                        </li>
                        <li>
                          <a href="index-2.html">Home 2</a>
                        </li>
                        <li>
                          <a href="index-3.html">Home 3</a>
                        </li>
                        <li>
                          <a href="index-4.html">Home 4</a>
                        </li>
                        <li>
                          <a href="index-5.html">Home 5</a>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="#">Shop</a>
                      <ul class="sub-menu">
                        <li class="menu-item-has-children">
                          <a href="#">Shop Layouts</a>
                          <ul class="sub-menu">
                            <li>
                              <a href="shop.html">shop</a>
                            </li>
                            <li>
                              <a href="shop-fullwidth.html">Full Width</a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-list.html">
                                Full Width list
                              </a>
                            </li>
                            <li>
                              <a href="shop-right-sidebar.html">
                                Right Sidebar{' '}
                              </a>
                            </li>
                            <li>
                              <a href="shop-right-sidebar-list.html">
                                {' '}
                                Right Sidebar list
                              </a>
                            </li>
                            <li>
                              <a href="shop-list.html">List View</a>
                            </li>
                          </ul>
                        </li>
                        <li class="menu-item-has-children">
                          <a href="#">other Pages</a>
                          <ul class="sub-menu">
                            <li>
                              <a href="cart.html">cart</a>
                            </li>
                            <li>
                              <a href="wishlist.html">Wishlist</a>
                            </li>
                            <li>
                              <a href="checkout.html">Checkout</a>
                            </li>
                            <li>
                              <a href="my-account.html">my account</a>
                            </li>
                            <li>
                              <a href="404.html">Error 404</a>
                            </li>
                          </ul>
                        </li>
                        <li class="menu-item-has-children">
                          <a href="#">Product Types</a>
                          <ul class="sub-menu">
                            <li>
                              <a href="product-details.html">product details</a>
                            </li>
                            <li>
                              <a href="product-sidebar.html">product sidebar</a>
                            </li>
                            <li>
                              <a href="product-grouped.html">product grouped</a>
                            </li>
                            <li>
                              <a href="variable-product.html">
                                product variable
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="#">blog</a>
                      <ul class="sub-menu">
                        <li>
                          <a href="blog.html">blog</a>
                        </li>
                        <li>
                          <a href="blog-details.html">blog details</a>
                        </li>
                        <li>
                          <a href="blog-fullwidth.html">blog fullwidth</a>
                        </li>
                        <li>
                          <a href="blog-sidebar.html">blog sidebar</a>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="#">pages </a>
                      <ul class="sub-menu">
                        <li>
                          <a href="about.html">About Us</a>
                        </li>
                        <li>
                          <a href="services.html">services</a>
                        </li>
                        <li>
                          <a href="faq.html">Frequently Questions</a>
                        </li>
                        <li>
                        <Link to={`/contact`} >  contact</Link>
                         
                        </li>
                        <li>
                          <a href="login.html">login</a>
                        </li>
                        <li>
                          <a href="404.html">Error 404</a>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="my-account.html">my account</a>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="about.html">about Us</a>
                    </li>
                    <li class="menu-item-has-children">
                    <Link to={`/contact`} >  Contact Us</Link>
            
                    </li>
                  </ul>
                </div>

                <div class="offcanvas_footer">
                  <span>
                    <a href="#">
                      <i class="fa fa-envelope-o"></i> demo@example.com
                    </a>
                  </span>
                  <ul>
                    <li class="facebook">
                      <a href="#">
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li class="twitter">
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li class="pinterest">
                      <a href="#">
                        <i class="fa fa-pinterest-p"></i>
                      </a>
                    </li>
                    <li class="google-plus">
                      <a href="#">
                        <i class="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li class="linkedin">
                      <a href="#">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header>
        <div class="main_header">
          <div class="header_top">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-7 col-md-7">
                  <div class="welcome-text">
                    <p>
                      Free Delivery: Take advantage of our time to save event
                    </p>
                  </div>
                </div>
                <div class="col-lg-5 col-md-5">
                  <div class="language_currency text-right">
                    <ul>
                      <li class="currency">
                        <a href="#">
                          {' '}
                          USD <i class="fa fa-angle-down"></i>
                        </a>
                        <ul class="dropdown_currency">
                          <li>
                            <a href="#">EUR</a>
                          </li>
                          <li>
                            <a href="#">GPB</a>
                          </li>
                          <li>
                            <a href="#">RUP</a>
                          </li>
                        </ul>
                      </li>
                      <li class="language">
                        <a href="#">
                          {' '}
                          English <i class="fa fa-angle-down"></i>
                        </a>
                        <ul class="dropdown_language">
                          <li>
                            <a href="#">French</a>
                          </li>
                          <li>
                            <a href="#">Spanish</a>
                          </li>
                          <li>
                            <a href="#">Russian</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="header_middle">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-3 col-md-3 col-4">
                  <div class="logo">
                    <Link to="/">
                      <img src="assets/img/logo/logo-w.png" alt="" />
                    </Link>
                  </div>
                </div>
                <div class="col-lg-9 col-md-6 col-6">
                  <div class="header_right_info">
                    <div class="search_container">
                      <form action="#">
                        <div class="hover_category">
                          <select
                            class="select_option"
                            name="select"
                            id="categori1"
                          >
                            <option selected value="1">
                              All Categories
                            </option>
                            <option value="2">Accessories</option>
                            <option value="3">Accessories & More</option>
                            <option value="4">Butters & Eggs</option>
                            <option value="5">Camera & Video </option>
                            <option value="6">Mornitors</option>
                            <option value="7">Tablets</option>
                            <option value="8">Laptops</option>
                            <option value="9">Handbags</option>
                            <option value="10">Headphone & Speaker</option>
                            <option value="11">Herbs & botanicals</option>
                            <option value="12">Vegetables</option>
                            <option value="13">Shop</option>
                            <option value="14">Laptops & Desktops</option>
                            <option value="15">Watchs</option>
                            <option value="16">Electronic</option>
                          </select>
                        </div>
                        <div class="search_box">
                          <input placeholder="Search product..." type="text" />
                          <button type="submit">
                            <i class="icon-search"></i>
                          </button>
                        </div>
                      </form>
                    </div>

                    <div class="header_account_area">
                      {userInfo ? (
                        <div class="header_account-list top_links">
                          <a href="#">
                            <i class="icon-users"></i>
                          </a>
                          <ul class="dropdown_links">
                            <li>
                              <Link to="/checkout">Checkout </Link>
                            </li>
                            <li>
                              <Link to="/account">My Account </Link>
                            </li>
                            <li>
                              <Link to="/cart">Shopping Cart</Link>
                            </li>
                            <li>
                              <Link to="/wishlist">Wishlist</Link>
                            </li>
                            <li>
                              {/* to="/login" */}
                              <Link onClick={logoutHandler} to="">
                                Logout
                              </Link>
                            </li>
                          </ul>
                        </div>
                      ) : (
                        <div class="header_account-list ">
                          <Link to="/login">
                            <i class="icon-login"></i>
                          </Link>
                        </div>
                      )}
                      <div class="header_account-list header_wishlist">
                        <Link to="/wishlist">
                          <i class="icon-heart"></i>
                        </Link>
                      </div>
                      <div class="header_account-list  mini_cart_wrapper">
                        <a onClick={(e) => setActiveModal('active')}>
                          <i class="icon-shopping-bag"></i>
                          <span class="item_count">{cartLists.item?.length > 0 ?cartLists.item?.length:0 }</span>
                        </a>

                        <div class={`mini_cart ${cartModalActive}`}>
                          <div class="cart_gallery">
                            <div class="cart_close">
                              <div class="cart_text">
                                <h3>cart</h3>
                              </div>
                              <div class="mini_cart_close">
                                <a onClick={(e) => setActiveModal('')}>
                                  <i class="icon-x"></i>
                                </a>
                              </div>
                            </div>
                            {cartLists.item?.length > 0 ? (
                              cartLists.item?.map((cart) => (
                                <div class="cart_item">
                                  <div class="cart_img">
                                    <a href="#">
                                      <img
                                        src={`${process.env.REACT_APP_API_URL}/${cart.image}`}
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  <div class="cart_info">
                                    <a href="#">{cart.itemName}</a>
                                    <p>
                                      {cart.quantity} x{' '}
                                      <span> AED {cart.sellingPrice} </span>
                                    </p>
                                  </div>
                                  <div class="cart_remove">
                                    <a href="#">
                                      <i
                                        class="icon-x"
                                        onClick={() =>
                                          deleteHandler(
                                            cartLists._id,
                                            cart.itemId
                                          )
                                        }
                                      ></i>
                                    </a>
                                  </div>
                                </div>
                              ))
                            ) : (
                              <div>
                                <p>Your Cart is Empty</p>
                              </div>
                            )}
                          </div>
                          <div class="mini_cart_table">
                            <div class="cart_table_border">
                              <div class="cart_total">
                                <span>Sub total:</span>
                                <span class="price">AED {cartsubTotal}</span>
                              </div>
                              <div class="cart_total mt-10">
                                <span>total:</span>
                                <span class="price">AED {cartTotal}</span>
                              </div>
                            </div>
                          </div>
                          <div class="mini_cart_footer">
                            <div class="cart_button">
                              <Link to="/cart">
                                <i class="fa fa-shopping-cart"></i> View cart
                              </Link>
                            </div>
                            <div class="cart_button">
                              <a class="active" href="checkout.html">
                                <i class="fa fa-sign-in"></i>
                                Checkout
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="header_bottom sticky-header">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-3">
                  <div class="categories_menu">
                    <div
                      class="categories_title"
                      onClick={(e) => setCategoriesModalDisplay(e)}
                    >
                      <h2 class="categori_toggle">Categories</h2>
                    </div>
                    <div
                      class="categories_menu_toggle"
                      //   style={{ display: 'no' }}
                    >
                      <ul>
                        {homePageCategories?.map((category) => (
                          <li class="menu_item_children">
                            <Link
                              to={`/category/product/${category.categoryId}`}
                            >
                              {category.categoryName}
                              {category?.subCategory?.length > 0 ? (
                                <i class="fa fa-angle-right"></i>
                              ) : (
                                ''
                              )}
                            </Link>
                            {category?.subCategory?.length > 0 ? (
                              <ul class="categories_mega_menu">
                                {category?.subCategory?.map((subcategory) => (
                                  <li class="menu_item_children">
                                    <a href="#">{subcategory.name}</a>
                                    <ul class="categorie_sub_menu">
                                      {subcategory?.products?.map((product) => (
                                        <li>
                                          <a href="">{product.name}</a>
                                        </li>
                                      ))}
                                    </ul>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              ''
                            )}
                          </li>
                        ))}

                        <li>
                          <Link to="/categories" id="more-btn">
                            <i class="fa fa-reorder" aria-hidden="true"></i> All
                            Categories
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="main_menu menu_position">
                    <nav>
                      <ul>
                        <li>
                          <Link class="active" href="/">
                            home<i class="fa fa-angle-down"></i>
                          </Link>
                          <ul class="sub_menu">
                            <li>
                              <a href="index.html">Home shop 1</a>
                            </li>
                            <li>
                              <a href="index-2.html">Home shop 2</a>
                            </li>
                            <li>
                              <a href="index-3.html">Home shop 3</a>
                            </li>
                            <li>
                              <a href="index-4.html">Home shop 4</a>
                            </li>
                            <li>
                              <a href="index-5.html">Home shop 5</a>
                            </li>
                          </ul>
                        </li>
                        <li class="mega_items">
                          <a href="shop.html">
                            shop<i class="fa fa-angle-down"></i>
                          </a>
                          <div class="mega_menu">
                            <ul class="mega_menu_inner">
                              <li>
                                <a href="#">Shop Layouts</a>
                                <ul>
                                  <li>
                                    <a href="shop-fullwidth.html">Full Width</a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-list.html">
                                      Full Width list
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-right-sidebar.html">
                                      Right Sidebar{' '}
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-right-sidebar-list.html">
                                      {' '}
                                      Right Sidebar list
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-list.html">List View</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="#">other Pages</a>
                                <ul>
                                  <li>
                                    <a href="cart.html">cart</a>
                                  </li>
                                  <li>
                                    <a href="wishlist.html">Wishlist</a>
                                  </li>
                                  <li>
                                    <a href="checkout.html">Checkout</a>
                                  </li>
                                  <li>
                                    <a href="my-account.html">my account</a>
                                  </li>
                                  <li>
                                    <a href="404.html">Error 404</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="#">Product Types</a>
                                <ul>
                                  <li>
                                    <a href="product-details.html">
                                      product details
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-sidebar.html">
                                      product sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-grouped.html">
                                      product grouped
                                    </a>
                                  </li>
                                  <li>
                                    <a href="variable-product.html">
                                      product variable
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <a href="blog.html">
                            blog<i class="fa fa-angle-down"></i>
                          </a>
                          <ul class="sub_menu pages">
                            <li>
                              <a href="blog-details.html">blog details</a>
                            </li>
                            <li>
                              <a href="blog-fullwidth.html">blog fullwidth</a>
                            </li>
                            <li>
                              <a href="blog-sidebar.html">blog sidebar</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                        <Link to={`/about`} >  About Us</Link>
                          {/* <a href="#">
                            pages <i class="fa fa-angle-down"></i>
                          </a> */}
                          {/* <ul class="sub_menu pages">
                            <li>
                            <Link to={`/about`} >  About Us</Link>
                            
                            </li>
                            <li>
                              <a href="services.html">services</a>
                            </li>
                            <li>
                              <a href="faq.html">Frequently Questions</a>
                            </li>
                            <li>
                              <a href="contact.html">contact</a>
                            </li>
                            <li>
                              <a href="login.html">login</a>
                            </li>
                            <li>
                              <a href="404.html">Error 404</a>
                            </li>
                          </ul> */}
                        </li>
                        <li>
                        <Link to={`/contact`} >  Contact Us</Link>
                        
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="call-support">
                    <p>
                      Call Support: <a href="tel:0123456789">0123456789</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
