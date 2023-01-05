import React from 'react';
import NavBar from '../Layout/NavBar';
import Footer from '../Layout/Footer';
 
import { useTranslation } from 'react-i18next';
import { useNavigate, Link } from 'react-router-dom';
export default function AboutUs() {

  const { t } = useTranslation();
  
  return (
    <div>
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
                  <li>About Us </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                    <h1>{t('about_us_head')}</h1>
                    <p>{t('about_us_desc')}</p>
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
                        <h3>{t('what_we_do')}</h3>
                        <p>{t('about_us_desc')}</p>
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
                        <h3>{t('mission')}</h3>
                        <p>{t('about_us_desc')}</p>
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
                        <h3>{t('history')}</h3>
                        <p>{t('about_us_desc')}</p>
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
