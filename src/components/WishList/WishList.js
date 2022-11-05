import React,{useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { wishlIstListByUser, removeWishList } from '../../actions/wishlistAction'
import { useNavigate  } from "react-router-dom";
import NavBar from '../Layout/NavBar';
import Footer from '../Layout/Footer';

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

  
  console.log("check suus");
  console.log(success);
  useEffect(() => {

    console.log(userInfo);
    if (!userInfo) {
    
      navigate('/login');
    }

    if (success) {
      navigate('/wishlist');
    }

      dispatch(wishlIstListByUser(userInfo._id))

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
      <div class="breadcrumbs_area">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="breadcrumb_content">
                <ul>
                  <li>
                    <a href="index.html">home</a>
                  </li>
                  <li>Wish List</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
          </div>
           <div class="wishlist_area mt-100">
        <div class="container">
            <form action="#">
                <div class="row">
                    <div class="col-12">
                        <div class="table_desc wishlist">
                            <div class="cart_page table-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <th class="product_remove">Delete</th>
                                            <th class="product_thumb">Image</th>
                                            <th class="product_name">Product</th>
                                            <th class="product-price">Price</th>
                                            <th class="product_quantity">Stock Status</th>
                                            <th class="product_total">Add To Cart</th>
                                        </tr>
                                    </thead>
                      <tbody>
                        {wishlists?.map((wishlist) => (
                           <tr>
                           <td class="product_remove"><a  onClick={() => deleteHandler(wishlist._id)}>X</a></td>
                           <td class="product_thumb"><a href="#"><img  src={`${process.env.REACT_APP_API_URL}/${wishlist.items[0].images[0].url}`}
                                      alt=""/></a></td>
                            <td class="product_name"><a href="#">{ wishlist.items[0].name}</a></td>
                            <td class="product-price">{ wishlist.items[0].sellingPrice}</td>
                           <td class="product_quantity">{!wishlist.items[0].stock  ? "In Stock": "Out of Stock"}</td>
                           <td class="product_total"><a href="#">Add To Cart</a></td>


                       </tr>
                          
                        ))}
                                       

                                       

                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>

            </form>
            <div class="row">
                <div class="col-12">
                    <div class="wishlist_share">
                        <h4>Share on:</h4>
                        <ul>
                            <li><a href="#"><i class="fa fa-rss"></i></a></li>
                            <li><a href="#"><i class="fa fa-vimeo"></i></a></li>
                            <li><a href="#"><i class="fa fa-tumblr"></i></a></li>
                            <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
          </div>
          <Footer/>
    </div>
  );
}
