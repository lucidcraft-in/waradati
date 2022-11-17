import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import $, { map } from 'jquery';

import {
  listCategoriesHomePage,
  listCategoriesByPriority,
} from '../../actions/homePageActions';
import { listCategories } from '../../actions/categoryActions';
import { cartListByUser, removeCart } from '../../actions/cartActions';
import { logout } from '../../actions/userActions';
import CartModal from '../Cart/CartModal';


const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cartModalActive, setActiveModal] = useState('');
 

  const [categorySearch, setCategorySearch] = useState('')
  const [searchName, setSearchName] = useState('');


  const cartList = useSelector((state) => state.cartLists);
  const { cartLists } = cartList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const homePageCategory = useSelector((state) => state.homePageCategory);
  const { loading, error, homePageCategories } = homePageCategory;

   const categoryList = useSelector((state) => state.categoryList);
   const {  categories } = categoryList;


   const categoryByPriorities = useSelector(
     (state) => state.categoryByPriorities
   );
   const { categoryByPriority } = categoryByPriorities;

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
    dispatch(listCategoriesByPriority(''));
    dispatch(listCategories());

    dispatch(cartListByUser(userInfo?._id));

   

  }, [dispatch, success]);

  const setCategoriesModalDisplay = (e) => {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.categories_menu_toggle').slideToggle('medium');
  };

  

  const logoutHandler = () => {
    dispatch(logout());
  };

 
  const deleteHandler = (id, itemId) => {
    if (window.confirm('Are you sure')) {
      dispatch(removeCart({ id, itemId }));
    }
  };

  const searchHere = () => {
        let url = `/category/products/${categorySearch}&spn=${searchName}`;

     navigate(url);
  }
 
 
  return (
    <div>
      {' '}
      <div className={`off_canvars_overlay ${cartModalActive}`}></div>
      <div className="offcanvas_menu">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="canvas_open">
                <a href="javascript:void(0)">
                  <i className="icon-menu"></i>
                </a>
              </div>
              <div className="offcanvas_menu_wrapper">
                <div className="canvas_close">
                  <a href="javascript:void(0)">
                    <i className="icon-x"></i>
                  </a>
                </div>
                <div className="welcome-text">
                  <p>Free Delivery: Take advantage of our time to save event</p>
                </div>
                <div className="language_currency text-center">
                  <ul>
                    <li className="currency">
                      <a href="#">
                        {' '}
                        AED <i className="fa fa-angle-down"></i>
                      </a>
                      
                    </li>
                    <li className="language">
                      <a href="#">
                        {' '}
                        English <i className="fa fa-angle-down"></i>
                      </a>
                      <ul className="dropdown_language">
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
                {/* <div className="search_container">
                  <form action="#">
                    <div className="hover_category">
                      <select
                        className="select_option"
                        name="select"
                        id="categori2"
                      >
                        <option selected value="1">
                          All  
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
                    <div className="search_box">
                      <input placeholder="Search product..." type="text" />
                      <button type="submit">
                        <i className="icon-search"></i>
                      </button>
                    </div>
                  </form>
                </div> */}
                <div className="call-support">
                  <p>
                    Call Support: <a href="tel:0123456789">0123456789</a>
                  </p>
                </div>
                <div id="menu" className="text-left ">
                  <ul className="offcanvas_main_menu">
                    <li className="menu-item-has-children active">
                      <a href="#">Home</a>
                      <ul className="sub-menu">
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
                    <li className="menu-item-has-children">
                      <a href="#">Shop</a>
                      <ul className="sub-menu">
                        <li className="menu-item-has-children">
                          <a href="#">Shop Layouts</a>
                          <ul className="sub-menu">
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
                        <li className="menu-item-has-children">
                          <a href="#">other Pages</a>
                          <ul className="sub-menu">
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
                        <li className="menu-item-has-children">
                          <a href="#">Product Types</a>
                          <ul className="sub-menu">
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
                    <li className="menu-item-has-children">
                      <a href="#">blog</a>
                      <ul className="sub-menu">
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
                    <li className="menu-item-has-children">
                      <a href="#">pages </a>
                      <ul className="sub-menu">
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
                          <Link to={`/contact`}> contact</Link>
                        </li>
                        <li>
                          <a href="login.html">login</a>
                        </li>
                        <li>
                          <a href="404.html">Error 404</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="my-account.html">my account</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="about.html">about Us</a>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to={`/contact`}> Contact Us</Link>
                    </li>
                  </ul>
                </div>

                <div className="offcanvas_footer">
                  <span>
                    <a href="#">
                      <i className="fa fa-envelope-o"></i> demo@example.com
                    </a>
                  </span>
                  <ul>
                    <li className="facebook">
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li className="twitter">
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li className="pinterest">
                      <a href="#">
                        <i className="fa fa-pinterest-p"></i>
                      </a>
                    </li>
                    <li className="google-plus">
                      <a href="#">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li className="linkedin">
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
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
        <div className="main_header">
          <div className="header_top">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-7">
                  <div className="welcome-text">
                    <p>
                      Free Delivery: Take advantage of our time to save event
                    </p>
                  </div>
                </div>
                <div className="col-lg-5 col-md-5">
                  <div className="language_currency text-right">
                    <ul>
                      <li className="currency">
                        <a href="#">
                          {' '}
                          AED  
                        </a>
                       
                      </li>
                      <li className="language">
                        <a href="#">
                          {' '}
                          English <i className="fa fa-angle-down"></i>
                        </a>
                        <ul className="dropdown_language">
                          <li>
                            <a href="#">Arabic</a>
                          </li>
                         
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header_middle">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-3 col-4">
                  <div className="logo">
                    <Link to="/">
                      <img
                        src={`${process.env.REACT_APP_URL}assets/img/logo/logo-s.png`}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-9 col-md-6 col-6">
                  <div className="header_right_info">
                    <div className="search_container">
                      <form>
                        <div className="hover_category">
                          <select
                            className="select_option"
                            name="categorySearch"
                            value={categorySearch}
                            onChange={(e) => setCategorySearch(e.target.value)}
                          >
                            <option selected value="">
                              All Categories
                            </option>
                            {categories.map((category) => (
                              <option value={category._id}>
                                {category.categoryName}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="search_box">
                          <input
                            placeholder="Search product..."
                            type="text"
                            value={searchName}
                            name="searchName"
                            onChange={(e) => setSearchName(e.target.value)}
                          />
                          <button onClick={(e) => searchHere()}>
                            <i className="icon-search"></i>
                          </button>
                        </div>
                      </form>
                    </div>

                    <div className="header_account_area">
                      {userInfo ? (
                        <div className="header_account-list top_links">
                          <a href="#">
                            <i className="icon-users"></i>
                          </a>
                          <ul className="dropdown_links">
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
                        <div className="header_account-list ">
                          <Link to="/login">
                            <i className="icon-login"></i>
                          </Link>
                        </div>
                      )}
                      <div className="header_account-list header_wishlist">
                        <Link to="/wishlist">
                          <i className="icon-heart"></i>
                        </Link>
                      </div>
                      <div className="header_account-list  mini_cart_wrapper">
                        <a onClick={(e) => setActiveModal('active')}>
                          <i className="icon-shopping-bag"></i>
                          <span className="item_count">
                            {cartLists?.item?.length > 0
                              ? cartLists.item?.length
                              : 0}
                          </span>
                        </a>

                        <CartModal
                          cartModalActive={cartModalActive}
                          cartLists={cartLists}
                          setActiveModal={setActiveModal}
                          deleteHandler={deleteHandler}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header_bottom sticky-header">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-3">
                  <div className="categories_menu">
                    <div
                      className="categories_title"
                      onClick={(e) => setCategoriesModalDisplay(e)}
                    >
                      <h2 className="categori_toggle">Categories</h2>
                    </div>
                    <div
                      className="categories_menu_toggle"
                      //   style={{ display: 'no' }}
                    >
                      <ul>
                        {homePageCategories?.map((category) => (
                          <li className="menu_item_children">
                            <Link
                              to={`/category/products/${category.categoryId}`}
                            >
                              {category.categoryName}
                              {category?.subCategory?.length > 0 ? (
                                <i className="fa fa-angle-right"></i>
                              ) : (
                                ''
                              )}
                            </Link>
                            {category?.subCategory?.length > 0 ? (
                              <ul className="categories_mega_menu">
                                {category?.subCategory?.map((subcategory) => (
                                  <li className="menu_item_children">
                                    <Link
                                      to={`/subcategory/products/${subcategory.subCategoryId}`}
                                    >
                                      {subcategory.name}
                                    </Link>
                                    <ul className="categorie_sub_menu">
                                      {subcategory?.products?.map((product) => (
                                        <li>
                                          <Link
                                            to={`/product/${product.subCategoryId}`}
                                          >
                                            {product.name}
                                          </Link>
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
                            <i className="fa fa-reorder" aria-hidden="true"></i>{' '}
                            All Categories
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="main_menu menu_position">
                    <nav>
                      <ul>
                        <li>
                          <Link className="active" href="/">
                            home
                          </Link>
                        </li>
                        {categoryByPriority?.map((category) => {
                          let name = category.categoryName;
                          if (category.categoryName.length > 10) {
                            name = name.slice(0, 11);
                          }
                          return (
                            <li className="mega_items">
                              <a>
                                {name}
                                <i className="fa fa-angle-down"></i>
                              </a>
                              <div className="mega_menu">
                                <ul className="mega_menu_inner">
                                  {category?.subCategory?.map((subcategory) => (
                                    <li>
                                      <Link
                                        to={`/subcategory/products/${subcategory.subCategoryId}`}
                                      >
                                        {subcategory.name}
                                      </Link>
                                      <ul>
                                        {subcategory?.products?.map(
                                          (product) => (
                                            <li>
                                              <Link
                                                to={`/product/${product.subCategoryId}`}
                                              >
                                                {product.name}
                                              </Link>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </li>
                          );
                        })}

                        <li>
                          <Link to={`/about`}> About Us</Link>
                          {/* <a href="#">
                            pages <i className="fa fa-angle-down"></i>
                          </a> */}
                          {/* <ul className="sub_menu pages">
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
                          <Link to={`/contact`}> Contact Us</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="call-support">
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
