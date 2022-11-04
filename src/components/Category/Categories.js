import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
 import { useDispatch, useSelector } from 'react-redux';

import { listCategories } from '../../actions/categoryActions';

import NavBar from '../Layout/NavBar';
import Footer from '../Layout/Footer';

const  Categories =() => {
  const dispatch = useDispatch();

       const categoryList = useSelector((state) => state.categoryList);
       const { loading, error, categories } = categoryList;

    useEffect(() => {
      dispatch(listCategories(''));
    }, []);
  
  return (
    <div>
      {' '}
      <NavBar />
      <div class="breadcrumbs_area">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="breadcrumb_content">
                <ul>
                  <li>
                    <Link to="/">home</Link>
                  </li>
                  <li>All Categories</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="blog_details">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12">
              <div class="related_posts">
                <h3>Categories</h3>
                <div class="row">
                  {categories.map((category) => (
                    <div class="col-lg-4 col-md-6 mt-2">
                      <article class=" ">
                        <figure>
                          <div class="related_thumb">
                            <a href="blog-details.html">
                              {/* <img src="assets/img/blog/blog1.jpg" alt="" /> */}
                              <img
                                src={`${process.env.REACT_APP_API_URL}/${category.image}`}
                                alt=""
                              />
                            </a>
                          </div>
                          <figcaption class="related_content">
                            <h4>
                              <a href="#">{category.categoryName}</a>
                            </h4>
                            <div class="blog_meta">
                              <span class="author">
                                <a href="#">{category.title}</a>
                              </span>
                            </div>
                          </figcaption>
                        </figure>
                      </article>
                    </div>
                  ))}
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


export default Categories;