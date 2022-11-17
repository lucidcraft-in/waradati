import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createProductReview } from '../../actions/productActions';
  import Reviews from '../Common/Reviews';

const ProductInfo = ({ data }) => {
   const dispatch = useDispatch();
  
  const [rating, setRating] = useState(0);
  const [isReviewed, setIsReviewed] = useState(true);
  const [reviewDescription, setReviewDescription] = useState('');

   const userLogin = useSelector((state) => state.userLogin);
   const { userInfo } = userLogin;

  useEffect(() => {

  checkYouReviewedThisProduct()
  }, [data]);
  


  const createReview = (e) => {
    e.preventDefault();
    let obj = {
      rating,
      comment: reviewDescription,
    };

    dispatch(createProductReview(data._id, obj));
  }

  const checkYouReviewedThisProduct = () => {
  
    
    const test = data?.reviews?.some((review) => review.user === userInfo._id);
      
    if (data?.reviews?.length === 0 || test===false) {
      setIsReviewed(false)
    }
    
  }
 
 
  
  return (
    <div className="product_d_info mb-90">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="product_d_inner">
              <div className="product_info_button">
                <ul className="nav" role="tablist" id="nav-tab">
                  <li>
                    <a
                      className="active"
                      data-bs-toggle="tab"
                      href="#info"
                      role="tab"
                      aria-controls="info"
                      aria-selected="false"
                    >
                      Product Details
                    </a>
                  </li>

                  <li>
                    <a
                      data-bs-toggle="tab"
                      href="#reviews"
                      role="tab"
                      aria-controls="reviews"
                      aria-selected="false"
                    >
                      Reviews ({data?.reviews?.length})
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="info"
                  role="tabpanel"
                >
                  <div className="product_info_content">
                    <p>{data.description}</p>
                  </div>
                </div>

                <div className="tab-pane fade" id="reviews" role="tabpanel">
                  <div className="reviews_wrapper">
                    <h2>
                      {data?.reviews?.length} review for {data.name}
                    </h2>
                    {data?.reviews?.map((review) => (
                      <div className="reviews_comment_box">
                        <div className="comment_thmb">
                          <img src="assets/img/blog/comment2.jpg" alt="" />
                        </div>
                        <div className="comment_text">
                          <div className="reviews_meta">
                            <div className="star_rating">
                              <Reviews rating={review.rating} />
                            </div>
                            <p>
                              <strong>{review.name} </strong>-{' '}
                              {review.createdAt}
                            </p>
                            <span>{review.comment}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                    {isReviewed === false ? (
                      <span>
                        <div className="comment_title">
                          <h2>Add a review </h2>
                          <p>
                            Your email address will not be published. Required
                            fields are marked{' '}
                          </p>
                        </div>

                        <div className="product_ratting mb-10">
                          <h3>Your rating</h3>
                          <ul>
                            <li>
                              <a
                                onClick={(e) => setRating(1)}
                                style={{
                                  color: rating >= 1 ? '#f8e825' : '',
                                  fontSize: '25px',
                                }}
                              >
                                <i className="icon-star "></i>
                              </a>
                            </li>
                            <li>
                              <a
                                onClick={(e) => setRating(2)}
                                style={{
                                  color: rating >= 2 ? '#f8e825' : '',
                                  fontSize: '25px',
                                }}
                              >
                                <i className="icon-star"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                onClick={(e) => setRating(3)}
                                style={{
                                  color: rating >= 3 ? '#f8e825' : '',
                                  fontSize: '25px',
                                }}
                              >
                                <i className="icon-star"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                onClick={(e) => setRating(4)}
                                style={{
                                  color: rating >= 4 ? '#f8e825' : '',
                                  fontSize: '25px',
                                }}
                              >
                                <i className="icon-star"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                onClick={(e) => setRating(5)}
                                style={{
                                  color: rating === 5 ? '#f8e825' : '',
                                  fontSize: '25px',
                                }}
                              >
                                <i className="icon-star"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="product_review_form">
                          <form>
                            <div className="row">
                              <div className="col-12">
                                <label for="review_comment">Your review </label>
                                <textarea
                                  onChange={(e) =>
                                    setReviewDescription(e.target.value)
                                  }
                                  value={reviewDescription}
                                  name="reviewDescription"
                                ></textarea>
                              </div>
                            </div>
                            <button onClick={(e) => createReview(e)}>
                              Submit
                            </button>
                          </form>
                        </div>
                      </span>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default ProductInfo;