import React from 'react';
import NavBar from '../Layout/NavBar';
import Footer from '../Layout/Footer';
import Breadcrumb from '../Common/Breadcrumb';
export default function AboutUs() {
  return (
    <div>
      <NavBar />
      <Breadcrumb />
      <div>
        <section className="about_section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <figure>
                  <div className="about_thumb">
                    <img src="assets/img/about/about1.jpg" alt="" />
                  </div>
                  <figcaption className="about_content">
                    <h1>
                      We are a flower, gift and food agency focused on
                      delivering content and utility user-experiences.
                    </h1>
                    <p>
                      Beautifully sculpted and nurtured with care, our unique
                      Juniper bonsai is more than just a tree—it’s an inspired
                      work of art! One of the most popular of all bonsai
                      varieties, this exceptional evergreen provides a sense of
                      calm and serenity, and with proper attention it can last
                      for years. Make their space even more Zen with our
                      peaceful, illuminated water fountain.
                    </p>
                    <div className="about_signature">
                      <img
                        src="assets/img/about/about-us-signature.png"
                        alt=""
                      />
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* <!--chose us area start--> */}
        {/* <div
          className="choseus_area"
          data-bgimg="assets/img/about/about-us-policy-bg.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="single_chose">
                  <div className="chose_icone">
                    <img src="assets/img/about/About_icon1.png" alt="" />
                  </div>
                  <div className="chose_content">
                    <h3>Creative Design</h3>
                    <p>
                      Erat metus sodales eget dolor consectetuer, porta ut purus
                      at et alias, nulla ornare velit amet
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="single_chose">
                  <div className="chose_icone">
                    <img src="assets/img/about/About_icon2.png" alt="" />
                  </div>
                  <div className="chose_content">
                    <h3>100% Money Back Guarantee</h3>
                    <p>
                      Erat metus sodales eget dolor consectetuer, porta ut purus
                      at et alias, nulla ornare velit amet
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="single_chose">
                  <div className="chose_icone">
                    <img src="assets/img/about/About_icon3.png" alt="" />
                  </div>
                  <div className="chose_content">
                    <h3>Online Support 24/7</h3>
                    <p>
                      Erat metus sodales eget dolor consectetuer, porta ut purus
                      at et alias, nulla ornare velit amet
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <!--chose us area end--> */}

        {/* <!--services img area--> */}
        <div className="about_gallery_section">
          <div className="container">
            <div className="about_gallery_container">
              <div className="row">
                <div className="col-lg-4 col-md-4">
                  <article className="single_gallery_section">
                    <figure>
                      <div className="gallery_thumb">
                        <img src="assets/img/about/about2.jpg" alt="" />
                      </div>
                      <figcaption className="about_gallery_content">
                        <h3>What do we do?</h3>
                        <p>
                          Beautifully sculpted and nurtured with care, our
                          unique Juniper bonsai is more than just a tree—it’s an
                          inspired work of art! One of the most popular of all
                          bonsai varieties, this exceptional evergreen provides
                          a sense of calm and serenity, and with proper
                          attention it
                        </p>
                      </figcaption>
                    </figure>
                  </article>
                </div>
                <div className="col-lg-4 col-md-4">
                  <article className="single_gallery_section">
                    <figure>
                      <div className="gallery_thumb">
                        <img src="assets/img/about/about3.jpg" alt="" />
                      </div>
                      <figcaption className="about_gallery_content">
                        <h3>Our Mission</h3>
                        <p>
                          Beautifully sculpted and nurtured with care, our
                          unique Juniper bonsai is more than just a tree—it’s an
                          inspired work of art! One of the most popular of all
                          bonsai varieties, this exceptional evergreen provides
                          a sense of calm and serenity, and with proper
                          attention it
                        </p>
                      </figcaption>
                    </figure>
                  </article>
                </div>
                <div className="col-lg-4 col-md-4">
                  <article className="single_gallery_section">
                    <figure>
                      <div className="gallery_thumb">
                        <img src="assets/img/about/about4.jpg" alt="" />
                      </div>
                      <figcaption className="about_gallery_content">
                        <h3>History Of Us</h3>
                        <p>
                          Beautifully sculpted and nurtured with care, our
                          unique Juniper bonsai is more than just a tree—it’s an
                          inspired work of art! One of the most popular of all
                          bonsai varieties, this exceptional evergreen provides
                          a sense of calm and serenity, and with proper
                          attention it
                        </p>
                      </figcaption>
                    </figure>
                  </article>
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
