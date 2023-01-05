import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

import { message } from 'antd';

import i18next from 'i18next';
import cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';

 

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
     const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
const [searchParams, setSearchParams] = useSearchParams();


  const [cartModalActive, setActiveModal] = useState('');
 

  const [categorySearch, setCategorySearch] = useState('')
  const [searchName, setSearchName] = useState(searchParams.get('spn'));
const [openSideBarMobileView, setOpenSideBarMobileView] = useState('');

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

  const cartCreate = useSelector((state) => state.cartCreate);
  const { success:cartCreateSuccess } = cartCreate;
  useEffect(() => {

    if (success) {
      navigate('/');
    }

    dispatch(listCategoriesHomePage(''));
    dispatch(listCategoriesByPriority(''));
    dispatch(listCategories());

    dispatch(cartListByUser(userInfo?._id));

   

  }, [dispatch, success,cartCreateSuccess]);

   

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

  const searchHere = (e) => {
 
    e.preventDefault();

    if (categorySearch === '') {
      message.error('Please select category', 3);
      return;
     
    }
        let url = `/category/products/${categorySearch}?spn=${searchName}`;

     navigate(url);
    
    
  }
 

  const currentLanguageCode = cookies.get('i18next') || 'en';
  
 
 
  return (
    <div>
      {' '}
      <div
        className={`off_canvars_overlay ${cartModalActive} ${openSideBarMobileView}`}
      ></div>
      <div className="offcanvas_menu">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="canvas_open"
                onClick={() => setOpenSideBarMobileView('active')}
              >
                <a href="javascript:void(0)">
                  <i className="icon-menu"></i>
                </a>
              </div>
              <div
                className={`offcanvas_menu_wrapper ${openSideBarMobileView}`}
              >
                <div
                  className="canvas_close"
                  onClick={() => setOpenSideBarMobileView('')}
                >
                  <a href="javascript:void(0)">
                    <i className="icon-x"></i>
                  </a>
                </div>
                <div className="welcome-text">
                  <p> {t('fast_delivery')}</p>
                </div>
                <div className="language_currency text-center">
                  <ul>
                    {/* <li className="currency">
                      <a href="#">
                        {' '}
                        AED <i className="fa fa-angle-down"></i>
                      </a>
                    </li> */}
                    <li className="language">
                      {currentLanguageCode === 'en' ? (
                        <a
                          onClick={() => {
                            i18next.changeLanguage('ar');
                          }}
                        >
                          {' '}
                          {t('arabic')}
                        </a>
                      ) : (
                        <a
                          onClick={() => {
                            i18next.changeLanguage('en');
                          }}
                        >
                          {' '}
                          {t('english')}
                        </a>
                      )}
                    </li>
                  </ul>
                </div>

                <div className="call-support">
                  <p>
                    {t('call_support')}
                    <a href="tel:+971 52 450 0355">+971 52 450 0355</a>
                  </p>
                </div>
                <div id="menu" className="text-left ">
                  <ul className="offcanvas_main_menu">
                    <li className="menu-item-has-children active">
                      <Link to="/"> {t('home')}</Link>
                    </li>
                    <li className="menu-item-has-children active">
                      <Link to="/about">{t('about_us')}</Link>
                    </li>
                    <li className="menu-item-has-children active">
                      <Link to="/checkout">{t('checkout')}</Link>
                    </li>
                    <li className="menu-item-has-children active">
                      <Link to="/wishlist">{t('wishlist')}</Link>
                    </li>
                    <li className="menu-item-has-children active">
                      <Link to="/account">{t('my_account')}</Link>
                    </li>
                    <li className="menu-item-has-children active">
                      <Link to="/contact">{t('contact_us')}</Link>
                    </li>
                  </ul>
                </div>

                <div className="offcanvas_footer">
                  <span>
                    <a href="#">
                      <i className="fa fa-envelope-o"></i> uaewardati@gmail.com
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
                      <form action="#">
                        <div className="hover_category">
                          <select
                            className="select_option"
                            name="categorySearch"
                            value={categorySearch}
                            onChange={(e) => setCategorySearch(e.target.value)}
                          >
                            <option selected value="">
                              {t('select_category')}
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
                            placeholder={
                              currentLanguageCode === 'en'
                                ? t('search_product_english')
                                : t('search_product_arabic')
                            }
                            type="text"
                            value={searchName}
                            name="searchName"
                            onChange={(e) => setSearchName(e.target.value)}
                          />
                          <button onClick={(e) => searchHere(e)}>
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
                              <Link to="/checkout">{t('checkout')}</Link>
                            </li>
                            <li>
                              <Link to="/account"> {t('my_account')} </Link>
                            </li>
                            <li>
                              <Link to="/cart">{t('shopping_cart')}</Link>
                            </li>
                            <li>
                              <Link to="/wishlist">{t('wishlist')}</Link>
                            </li>
                            <li>
                              {/* to="/login" */}
                              <Link onClick={logoutHandler} to="">
                                {t('logout')}
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
                    <div className="text-align-center">
                      {' '}
                      <div className="language_currency text-right">
                        <ul>
                          {/* <li className="currency ">
                        <a href="#">&nbsp; AED</a>
                      </li> */}
                          <li className="language  ">
                            {currentLanguageCode === 'en' ? (
                              <a
                                onClick={() => {
                                  i18next.changeLanguage('ar');
                                }}
                              >
                                {' '}
                                {t('arabic')}
                              </a>
                            ) : (
                              <a
                                onClick={() => {
                                  i18next.changeLanguage('en');
                                }}
                              >
                                {' '}
                                {t('english')}
                              </a>
                            )}
                          </li>
                        </ul>
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
                      <h2 className="categori_toggle"> {t('categories')}</h2>
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
                                      {subcategory.subCategoryName}
                                    </Link>
                                    <ul className="categorie_sub_menu">
                                      {subcategory?.products?.map((product) => (
                                        <li>
                                          <Link
                                            to={`/product/${product.productId}`}
                                          >
                                            {product.productName}
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
                            {t('all_categories')}
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
                            {t('home')}
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
                                        {subcategory.subCategoryName}
                                      </Link>
                                      <ul>
                                        {subcategory?.products?.map(
                                          (product) => (
                                            <li>
                                              <Link
                                                to={`/product/${product.productId}`}
                                              >
                                                {product.productName}
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
                          <Link to={`/about`}> {t('about_us')}</Link>
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
                          <Link to={`/contact`}> {t('contact_us')}</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="call-support">
                    <p>
                      {t('call_support')}
                      <a href="tel:+971 52 450 0355">+971 52 450 0355</a>
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
