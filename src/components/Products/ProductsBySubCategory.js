import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';

import NavBar from '../Layout/NavBar';
import Breadcrumb from '../Common/Breadcrumb';
import Footer from '../Layout/Footer';
import ProductFilter from '../Products/ProductFilter';
import Product from './Product';
import Spinner from '../Common/Spinner';
import { listProductsSubCategory } from '../../actions/productActions';

const ProductsBySubCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();

  const [priceRange, setPriceRange] = useState('');
  const [priceSort, setPriceSort] = useState('');

  const productList = useSelector((state) => state.productListSubCategory);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProductsSubCategory(id));
    if (priceRange || priceSort) setToUrl();
  }, [priceRange, priceSort, id, searchParams]);

  let allProducts = products?.map((product) => <Product product={product} />);

  const setToUrl = () => {
    let result = '?';

    if (priceRange) {
      let text = `&price_range=${priceRange}`;
      result = result.concat(text);
    }

    if (priceSort) {
      let text = `&sort=${priceSort}`;
      result = result.concat(text);
    }

  

  

    navigate(result);

    dispatch(listProductsSubCategory(`${id}${result}`));
  };
 
  const clearFilter = () => {
    let result = '';
    navigate(result);
  };

   const setUrlOnFilter = (e, sort = false, filter = false) => {
     if (sort === true) setPriceSort(e.target.value);

     if (filter === true) setPriceRange(e.target.value);

     setToUrl();
   };

 

  return (
    <div>
      {' '}
      {loading === true ? <Spinner /> : ''}
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
                  <li>Products </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shop_area mt-100 mb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="shop_toolbar_wrapper">
                <div className="shop_toolbar_btn">
                  <button
                    data-role="grid_3"
                    type="button"
                    className="active btn-grid-3"
                    data-bs-toggle="tooltip"
                    title="3"
                  ></button>
                </div>
                <div className=" niceselect_option">
                  <form className="select_option" action="#">
                    <select
                      name="orderby"
                      className="form-select"
                      onChange={(e) => setPriceSort(e.target.value)}
                    >
                      <option value="">Sort</option>
                      <option value="asc">Sort by price: low to high</option>
                      <option value="dec">Sort by price: high to low</option>
                    </select>
                  </form>
                </div>
                <div className="page_amount">
                  <p>Showing {products?.length} results</p>
                </div>
              </div>
              {products?.length != 0 ? (
                <div className="row shop_wrapper">{allProducts}</div>
              ) : (
                <div className="alert alert-warning" role="alert">
                  No data available!
                </div>
              )}

              {/* <div className="shop_toolbar t_bottom">
                <div className="pagination">
                  <ul>
                    <li className="current">1</li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li className="next">
                      <a href="#">next</a>
                    </li>
                    <li>
                      <a href="#"></a>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
            <ProductFilter
              setUrlOnFilter={setUrlOnFilter}
              clearFilter={clearFilter}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductsBySubCategory;
