import React,{useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { wishlIstListByUser, removeWishList } from '../../actions/wishlistAction'
import { useNavigate  } from "react-router-dom";
import NavBar from '../Layout/NavBar';
import Footer from '../Layout/Footer';
import { Link } from 'react-router-dom';

export default function WishList({ history }) {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const wishListlist = useSelector((state) => state.wishlists)

  const { loading, error, wishlists } = wishListlist;

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const wishListDelete = useSelector((state) => state.wishListDelete)

  const {
    loading: loadingDelete,
    error: errorDelete,
    success: success,
  } = wishListDelete


  let arrayLength
  useEffect(() => {

    console.log(userInfo);
    if (!userInfo) {
    
      navigate('/login');
    }

    if (success) {
      navigate('/wishlist');
    }
 
      dispatch(wishlIstListByUser(userInfo._id))
  
     arrayLength = wishlists.length;
  }, [
    dispatch,
    history,
    userInfo,
    success
   
  ])
  const deleteHandler = (id) => {
 
    if (window.confirm('Are you sure')) {
      dispatch(removeWishList(id))
  
      
    }
    
   
  }


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
                  <li>Wish List</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wishlist_area mt-100">
        <div className="container">
          <form action="#">
            <div className="row">
              <div className="col-12">
                <div className="table_desc wishlist">
                  <div className="cart_page table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th className="product_remove">Delete</th>
                          <th className="product_thumb">Image</th>
                          <th className="product_name">Product</th>
                          <th className="product-price">Price</th>
                          <th className="product_quantity">Stock Status</th>
                          <th className="product_total">Add To Cart</th>
                        </tr>
                      </thead>
                      <tbody>
                        {wishlists?.length > 0 ? (
                          wishlists?.map((wishlist) => (
                            <tr>
                              <td className="product_remove">
                                <a onClick={() => deleteHandler(wishlist._id)}>
                                  X
                                </a>
                              </td>
                              <td className="product_thumb">
                                <a href="#">
                                  <img
                                    src={`${wishlist?.items[0]?.images[0]?.url}`}
                                    alt=""
                                  />
                                </a>
                              </td>
                              <td className="product_name">
                                <a href="#">{wishlist?.items[0]?.name}</a>
                              </td>
                              <td className="product-price">
                                {wishlist?.items[0]?.sellingPrice}
                              </td>
                              <td className="product_quantity">
                                {!wishlist?.items[0]?.stock
                                  ? 'In Stock'
                                  : 'Out of Stock'}
                              </td>
                              <td className="product_total">
                                <a href="#">Add To Cart</a>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <div>
                            <p>No data available</p>
                          </div>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="row">
            <div className="col-12">
              <div className="wishlist_share">
                <h4>Share on:</h4>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-rss"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-vimeo"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-tumblr"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </li>
                  <li>
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
      <Footer />
    </div>
  );
}
