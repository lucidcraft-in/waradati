import React from 'react'

export default function ProductFilter({ setPriceRange }) {
  return (
    <div class="col-lg-3 col-md-12">
      <aside class="sidebar_widget">
        <div class="widget_inner">
          <div class="widget_list widget_manu">
            <h3>PRICE RANGE</h3>
            <ul>
              <li>
                <a href="#">
                  <input
                    type="radio"
                    id="under_50"
                    name="price_range"
                    value="0-50"
                    onChange={(e) => setPriceRange(e.target.value)}
                  />
                  &nbsp;&nbsp; &nbsp; UNDER AED 50
                </a>
              </li>
              <li>
                <a href="#">
                  <input
                    type="radio"
                    id="50-70"
                    name="price_range"
                    value="50-70"
                    onChange={(e) => setPriceRange(e.target.value)}
                  />
                  &nbsp;&nbsp; &nbsp; AED 50-70
                </a>
              </li>
              <li>
                <a href="#">
                  <input
                    type="radio"
                    id="70-90"
                    name="price_range"
                    value="70-90"
                    onChange={(e) => setPriceRange(e.target.value)}
                  />
                  &nbsp;&nbsp; &nbsp; AED 70-90
                </a>
              </li>
              <li>
                <a href="#">
                  <input
                    type="radio"
                    id="90-150"
                    name="price_range"
                    value="90-150"
                    onChange={(e) => setPriceRange(e.target.value)}
                  />
                  &nbsp;&nbsp; &nbsp; AED 90-150
                </a>
              </li>
              <li>
                <a href="#">
                  <input
                    type="radio"
                    id="above_150"
                    name="price_range"
                    value="150"
                    onChange={(e) => setPriceRange(e.target.value)}
                  />
                  &nbsp;&nbsp; &nbsp; ABOVE AED 150
                </a>
              </li>
            </ul>
          </div>

          <div class="widget_list">
            <h3>Compare</h3>
            <div class="shop_sidebar_product">
              <article class="single_product">
                <figure>
                  <div class="product_thumb">
                    <a class="primary_img" href="product-details.html">
                      <img src="assets/img/product/product10.jpg" alt="" />
                    </a>
                    <a class="secondary_img" href="product-details.html">
                      <img src="assets/img/product/product2.jpg" alt="" />
                    </a>
                  </div>
                  <figcaption class="product_content">
                    <h4 class="product_name">
                      <a href="product-details.html">Donec Non Est</a>
                    </h4>
                    <div class="product_rating">
                      <ul>
                        <li>
                          <a href="#">
                            <i class="icon-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="icon-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="icon-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="icon-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="icon-star"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="price_box">
                      <span class="current_price">$80.00</span>
                      <span class="old_price">$20.00</span>
                    </div>
                  </figcaption>
                </figure>
              </article>
              <article class="single_product">
                <figure>
                  <div class="product_thumb">
                    <a class="primary_img" href="product-details.html">
                      <img src="assets/img/product/product9.jpg" alt="" />
                    </a>
                    <a class="secondary_img" href="product-details.html">
                      <img src="assets/img/product/product3.jpg" alt="" />
                    </a>
                  </div>
                  <figcaption class="product_content">
                    <h4 class="product_name">
                      <a href="product-details.html">Cas Meque Metus</a>
                    </h4>
                    <div class="product_rating">
                      <ul>
                        <li>
                          <a href="#">
                            <i class="icon-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="icon-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="icon-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="icon-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="icon-star"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="price_box">
                      <span class="current_price">$70.00</span>
                      <span class="old_price">$40.00</span>
                    </div>
                  </figcaption>
                </figure>
              </article>
              <article class="single_product">
                <figure>
                  <div class="product_thumb">
                    <a class="primary_img" href="product-details.html">
                      <img src="assets/img/product/product8.jpg" alt="" />
                    </a>
                    <a class="secondary_img" href="product-details.html">
                      <img src="assets/img/product/product4.jpg" alt="" />
                    </a>
                  </div>
                  <figcaption class="product_content">
                    <h4 class="product_name">
                      <a href="product-details.html"> commodo augue</a>
                    </h4>
                    <div class="product_rating">
                      <ul>
                        <li>
                          <a href="#">
                            <i class="icon-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="icon-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="icon-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="icon-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="icon-star"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="price_box">
                      <span class="current_price">$80.00</span>
                      <span class="old_price">$20.00</span>
                    </div>
                  </figcaption>
                </figure>
              </article>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
