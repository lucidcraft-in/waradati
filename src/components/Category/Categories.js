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
      <div className="breadcrumbs_area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb_content">
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
      <div className="blog_details">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="related_posts">
                <h3>Categories</h3>
                <div className="row">
                  {categories.map((category) => (
                    <div className="col-lg-4 col-md-6 mt-2">
                      <article className=" ">
                        <figure>
                          <div className="related_thumb">
                            <Link
                              to={`/category/products/${category._id}`}
                            >
                              {/* <img src="assets/img/blog/blog1.jpg" alt="" /> */}
                              <img
                                src={`${category.image}`}
                                alt=""
                              />
                            </Link>
                          </div>
                          <figcaption className="related_content">
                            <h4>
                              <a href="#">{category.categoryName}</a>
                            </h4>
                            <div className="blog_meta">
                              <span className="author">
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