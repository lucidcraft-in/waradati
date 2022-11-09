import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

 import { createProductReview } from '../../actions/productActions';

const ProductInfo = ({ data }) => {
   const dispatch = useDispatch();
  
  const [rating, setRating] = useState(0);
  const [isReviewed, setIsReviewed] = useState(true);
  const [reviewDescription, setReviewDescription] = useState('');


  const createReview = (e) => {
    e.preventDefault();
    let obj = {
      rating,
      comment: reviewDescription,
    };

    dispatch(createProductReview(data._id, obj));
  }
 
 
  
  return (
    <div class="product_d_info mb-90">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="product_d_inner">
              <div class="product_info_button">
                <ul class="nav" role="tablist" id="nav-tab">
                  <li>
                    <a
                      class="active"
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
                      Reviews (1)
                    </a>
                  </li>
                </ul>
              </div>
              <div class="tab-content">
                <div
                  class="tab-pane fade show active"
                  id="info"
                  role="tabpanel"
                >
                  <div class="product_info_content">
                    <p>{data.description}</p>
                  </div>
                </div>

                <div class="tab-pane fade" id="reviews" role="tabpanel">
                  <div class="reviews_wrapper">
                    <h2>
                      {data?.reviews?.length} review for {data.name}
                    </h2>
                    {data?.reviews?.map((review) => (
                      <div class="reviews_comment_box">
                        <div class="comment_thmb">
                          <img src="assets/img/blog/comment2.jpg" alt="" />
                        </div>
                        <div class="comment_text">
                          <div class="reviews_meta">
                            <div class="star_rating">
                              <ul>
                                <li>
                                  <a
                                    style={{
                                      color:
                                        review.rating >= 1 ? '#f8e825' : '',
                                    }}
                                  >
                                    <i class="icon-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    style={{
                                      color:
                                        review.rating >= 2 ? '#f8e825' : '',
                                    }}
                                  >
                                    <i class="icon-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    style={{
                                      color:
                                        review.rating >= 3 ? '#f8e825' : '',
                                    }}
                                  >
                                    <i class="icon-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    style={{
                                      color:
                                        review.rating >= 4 ? '#f8e825' : '',
                                    }}
                                  >
                                    <i class="icon-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    style={{
                                      color:
                                        review.rating >= 5 ? '#f8e825' : '',
                                    }}
                                  >
                                    <i class="icon-star"></i>
                                  </a>
                                </li>
                              </ul>
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
                    {isReviewed === false ?
                      <span>
                        <div class="comment_title">
                          <h2>Add a review </h2>
                          <p>
                            Your email address will not be published. Required
                            fields are marked{' '}
                          </p>
                        </div>
                  
                        <div class="product_ratting mb-10">
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
                                <i class="icon-star "></i>
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
                                <i class="icon-star"></i>
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
                                <i class="icon-star"></i>
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
                                <i class="icon-star"></i>
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
                                <i class="icon-star"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="product_review_form">
                          <form>
                            <div class="row">
                              <div class="col-12">
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
                            <button onClick={(e) => createReview(e)}>Submit</button>
                          </form>
                        </div>
                      </span>
                      : ''}
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