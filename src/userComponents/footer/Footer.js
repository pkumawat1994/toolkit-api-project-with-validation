import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <ul className="social_icon text_align_center">
                  <li>
                    {" "}
                    <a href="javascript:void(0)">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="javascript:void(0)">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="javascript:void(0)">
                      <i
                        className="fa fa-linkedin-square"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="javascript:void(0)">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="reader">
                  <a href="javascript:void(0)">
                    <img src="userAssets/images/logo_footer.png" alt="#" />
                  </a>
                  <p className="padd_flet40">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters,
                  </p>
                </div>
              </div>
              <div className="col-md-2 col-sm-6">
                <div className="reader">
                  <h3>Explore</h3>
                  <ul className="xple_menu">
                    <li>
                      <a href="javascript:void(0)">Home</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">About</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Services</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="reader">
                  <h3>Recent Posts</h3>
                  <ul className="re_post">
                    <li>
                      <img src="userAssets/images/re_img1.jpg" alt="" />
                    </li>
                    <li>
                      <img src="userAssets/images/re_img2.jpg" alt="" />
                    </li>
                    <li>
                      <img src="userAssets/images/re_img3.jpg" alt="" />
                    </li>
                    <li>
                      <img src="userAssets/images/re_img4.jpg" alt="" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="reader">
                  <h3>Contact Us</h3>
                  <p>
                    It is a lon <br /> g established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright text_align_center">
            <div className="container">
              <div className="row">
                <div className="col-md-10 offset-md-1">
                  <p>
                    Copyright 2020 All Right Reserved By{" "}
                    <a href="javascript:void(0)"> Free Html Template</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
