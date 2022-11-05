import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
  import {  useParams } from 'react-router-dom';

 import NavBar from '../Layout/NavBar';
 import Breadcrumb from '../Common/Breadcrumb';
import Footer from '../Layout/Footer';
import ProductFilter from '../Products/ProductFilter';
  import Product from './Product';

 import { listProductsCategory } from '../../actions/productActions';
 

const ProductByCategoryList = () => {

  const dispatch = useDispatch();
    //  let history = useHistory();
  const { id } = useParams();
  
  const [priceRange, setPriceRange] =useState('')

   const productList = useSelector((state) => state.productList);
   const { loading, error, products } = productList;

    useEffect(() => {
      dispatch(listProductsCategory(id));
      setToUrl()
    }, [priceRange]);
  
  let allProducts = products?.map((product) => <Product product={product} />);

  

  const setToUrl = () => {
    // history.push('/dresses?color=blue');
  }
  
  return (
    <div>
      {' '}
      <NavBar />
      <Breadcrumb />
      <div class="shop_area mt-100 mb-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-9 col-md-12">
              <div class="shop_toolbar_wrapper">
                <div class="shop_toolbar_btn">
                  <button
                    data-role="grid_3"
                    type="button"
                    class="active btn-grid-3"
                    data-bs-toggle="tooltip"
                    title="3"
                  ></button>

                  <button
                    data-role="grid_4"
                    type="button"
                    class=" btn-grid-4"
                    data-bs-toggle="tooltip"
                    title="4"
                  ></button>

                  <button
                    data-role="grid_list"
                    type="button"
                    class="btn-list"
                    data-bs-toggle="tooltip"
                    title="List"
                  ></button>
                </div>
                <div class=" niceselect_option">
                  <form class="select_option" action="#">
                    <select name="orderby" id="short" className="form-select">
                      <option selected value="1">
                        Sort by average rating
                      </option>
                      <option value="2">Sort by popularity</option>
                      <option value="3">Sort by newness</option>
                      <option value="4">Sort by price: low to high</option>
                      <option value="5">Sort by price: high to low</option>
                      <option value="6">Product Name: Z</option>
                    </select>
                  </form>
                </div>
                <div class="page_amount">
                  <p>Showing 1–9 of 21 results</p>
                </div>
              </div>

              <div class="row shop_wrapper">{allProducts}</div>

              <div class="shop_toolbar t_bottom">
                <div class="pagination">
                  <ul>
                    <li class="current">1</li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li class="next">
                      <a href="#">next</a>
                    </li>
                    <li>
                      <a href="#"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <ProductFilter setPriceRange={setPriceRange} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}


export default ProductByCategoryList;