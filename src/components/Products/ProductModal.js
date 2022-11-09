import React, {useState, useEffect} from 'react'

export default function ProductModal({ product }) {
  const [productData, setProductData] = useState([]);
   const [images, setImages] = useState([]);
 

    if (
      Object.keys(product).length !== 0 &&
      productData.length === 0 &&
      product._id
    ) {
      setProductData(product.product_items);
          setImages(product?.product_items[0]?.images[0]);
    } 


   console.log(product);
  return (
    <div
      class="modal fade"
      id="modal_box"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <button
            type="button"
            class="close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">
              <i class="icon-x"></i>
            </span>
          </button>
          <div class="modal_body">
            <div class="container">
              <div class="row">
                <div class="col-lg-5 col-md-5 col-sm-12">
                  <div class="modal_tab">
                    <div class="tab-content product-details-large">
                      <div
                        class="tab-pane fade show active"
                        id="tab1"
                        role="tabpanel"
                      >
                        <div class="modal_tab_img">
                          <a href="#">
                             <img  src=
                            {`${process.env.REACT_APP_API_URL}/${images.url}`}/> 
                           
                          </a>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="tab2" role="tabpanel">
                        <div class="modal_tab_img">
                          <a href="#">
                            <img
                              src="assets/img/product/productbig2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="tab3" role="tabpanel">
                        <div class="modal_tab_img">
                          <a href="#">
                            <img
                              src="assets/img/product/productbig3.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="tab4" role="tabpanel">
                        <div class="modal_tab_img">
                          <a href="#">
                            <img
                              src="assets/img/product/productbig4.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="modal_tab_button">
                      <ul
                        class="nav product_navactive owl-carousel"
                        role="tablist"
                      >
                        <li>
                          <a
                            class="nav-link active"
                            data-bs-toggle="tab"
                            href="#tab1"
                            role="tab"
                            aria-controls="tab1"
                            aria-selected="false"
                          >
                            <img src="assets/img/product/product1.jpg" alt="" />
                          </a>
                        </li>
                        <li>
                          <a
                            class="nav-link"
                            data-bs-toggle="tab"
                            href="#tab2"
                            role="tab"
                            aria-controls="tab2"
                            aria-selected="false"
                          >
                            <img src="assets/img/product/product2.jpg" alt="" />
                          </a>
                        </li>
                        <li>
                          <a
                            class="nav-link button_three"
                            data-bs-toggle="tab"
                            href="#tab3"
                            role="tab"
                            aria-controls="tab3"
                            aria-selected="false"
                          >
                            <img src="assets/img/product/product3.jpg" alt="" />
                          </a>
                        </li>
                        <li>
                          <a
                            class="nav-link"
                            data-bs-toggle="tab"
                            href="#tab4"
                            role="tab"
                            aria-controls="tab4"
                            aria-selected="false"
                          >
                            <img src="assets/img/product/product8.jpg" alt="" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-7 col-md-7 col-sm-12">
                  <div class="modal_right">
                    <div class="modal_title mb-10">
                      {/* <h2>{productData?.product_items[0]?.name}</h2> */}
                    </div>
                    <div class="modal_price mb-10">
                      <span class="new_price">$64.99</span>
                      <span class="old_price">$78.99</span>
                    </div>
                    <div class="modal_description mb-15">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Mollitia iste laborum ad impedit pariatur esse
                        optio tempora sint ullam autem deleniti nam in quos qui
                        nemo ipsum numquam, reiciendis maiores quidem aperiam,
                        rerum vel recusandae{' '}
                      </p>
                    </div>
                    <div class="variants_selects">
                      <div class="variants_size">
                        <h2>size</h2>
                        <select class="select_option">
                          <option selected value="1">
                            s
                          </option>
                          <option value="1">m</option>
                          <option value="1">l</option>
                          <option value="1">xl</option>
                          <option value="1">xxl</option>
                        </select>
                      </div>
                      <div class="variants_color">
                        <h2>color</h2>
                        <select class="select_option">
                          <option selected value="1">
                            purple
                          </option>
                          <option value="1">violet</option>
                          <option value="1">black</option>
                          <option value="1">pink</option>
                          <option value="1">orange</option>
                        </select>
                      </div>
                      <div class="modal_add_to_cart">
                        <form action="#">
                          <input
                            min="1"
                            max="100"
                            step="2"
                            value="1"
                            type="number"
                          />
                          <button type="submit">add to cart</button>
                        </form>
                      </div>
                    </div>
                    <div class="modal_social">
                      <h2>Share this product</h2>
                      <ul>
                        <li class="facebook">
                          <a href="#">
                            <i class="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li class="twitter">
                          <a href="#">
                            <i class="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li class="pinterest">
                          <a href="#">
                            <i class="fa fa-pinterest"></i>
                          </a>
                        </li>
                        <li class="google-plus">
                          <a href="#">
                            <i class="fa fa-google-plus"></i>
                          </a>
                        </li>
                        <li class="linkedin">
                          <a href="#">
                            <i class="fa fa-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="newletter-popup">
        <div id="boxes" class="newletter-container">
          <div id="dialog" class="window">
            <div id="popup2">
              <span class="b-close">
                <span>close</span>
              </span>
            </div>
            <div class="box">
              <div class="newletter-title">
                <h2>Newsletter</h2>
              </div>
              <div class="box-content newleter-content">
                <label class="newletter-label">
                  Enter your email address to subscribe our notification of our
                  new post &amp; features by email.
                </label>
                <div id="frm_subscribe">
                  <form name="subscribe" id="subscribe_popup">
                    <input
                      type="text"
                      value=""
                      name="subscribe_pemail"
                      id="subscribe_pemail"
                      placeholder="Enter you email address here..."
                    />
                    <input
                      type="hidden"
                      value=""
                      name="subscribe_pname"
                      id="subscribe_pname"
                    />
                    <div id="notification"></div>
                    <a
                      class="theme-btn-outlined"
                      onclick="email_subscribepopup()"
                    >
                      <span>Subscribe</span>
                    </a>
                  </form>
                  <div class="subscribe-bottom">
                    <input
                      type="checkbox"
                      id="newsletter_popup_dont_show_again"
                    />
                    <label for="newsletter_popup_dont_show_again">
                      Don't show this popup again
                    </label>
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
