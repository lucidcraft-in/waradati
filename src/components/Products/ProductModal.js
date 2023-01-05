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

     
  return (
    <div
      className="modal fade"
      id="modal_box"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <button
            type="button"
            className="close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">
              <i className="icon-x"></i>
            </span>
          </button>
          <div className="modal_body">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-12">
                  <div className="modal_tab">
                    <div className="tab-content product-details-large">
                      <div
                        className="tab-pane fade show active"
                        id="tab1"
                        role="tabpanel"
                      >
                        <div className="modal_tab_img">
                          <a href="#">
                            <img src={`${images.url}`} />
                          </a>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="tab2" role="tabpanel">
                        <div className="modal_tab_img">
                          <a href="#">
                            <img
                              src="assets/img/product/productbig2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="tab3" role="tabpanel">
                        <div className="modal_tab_img">
                          <a href="#">
                            <img
                              src="assets/img/product/productbig3.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="tab4" role="tabpanel">
                        <div className="modal_tab_img">
                          <a href="#">
                            <img
                              src="assets/img/product/productbig4.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                   
                  </div>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-12 " style={{alignItems :"center", marginTop: "17%"}}>
                  <div className="modal_right">
                    <div className="modal_title mb-10">
                      {/* <h2>{productData?.product_items[0]?.name}</h2> */}
                    </div>
                    <div className="modal_price mb-10">
                      <span className="new_price">
                        AED {product?.sellingPrice}
                      </span>
                      <span className="old_price">AED {product?.price}</span>
                    </div>
                    <div className="modal_description mb-15">
                      <p>
                        {product?.product_items &&
                          product?.product_items[0].description}
                      </p>
                    </div>
                  
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
