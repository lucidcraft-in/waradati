import React from 'react'

import NavBar from '../Layout/NavBar';
import Footer from '../Layout/Footer';

export default function WishList() {
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
                  <li>shop right sidebar</li>
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
                                        <tr>
                                            <td class="product_remove"><a href="#">X</a></td>
                                            <td class="product_thumb"><a href="#"><img
                                                        src="assets/img/s-product/product.jpg" alt=""/></a></td>
                                            <td class="product_name"><a href="#">Handbag fringilla</a></td>
                                            <td class="product-price">£65.00</td>
                                            <td class="product_quantity">In Stock</td>
                                            <td class="product_total"><a href="#">Add To Cart</a></td>


                                        </tr>

                                        <tr>
                                            <td class="product_remove"><a href="#">X</a></td>
                                            <td class="product_thumb"><a href="#"><img
                                                        src="assets/img/s-product/product2.jpg" alt=""/></a></td>
                                            <td class="product_name"><a href="#">Handbags justo</a></td>
                                            <td class="product-price">£90.00</td>
                                            <td class="product_quantity">In Stock</td>
                                            <td class="product_total"><a href="#">Add To Cart</a></td>


                                        </tr>
                                        <tr>
                                            <td class="product_remove"><a href="#">X</a></td>
                                            <td class="product_thumb"><a href="#"><img
                                                        src="assets/img/s-product/product3.jpg" alt=""/></a></td>
                                            <td class="product_name"><a href="#">Handbag elit</a></td>
                                            <td class="product-price">£80.00</td>
                                            <td class="product_quantity">In Stock</td>
                                            <td class="product_total"><a href="#">Add To Cart</a></td>


                                        </tr>

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