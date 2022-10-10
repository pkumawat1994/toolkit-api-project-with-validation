import React from "react";

const Slider = () => {
  return (
    <>
      <div className=" banner_main">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="carousel-caption relative">
                  <div className="bg_white">
                    <h1>
                      Welcome To our{" "}
                      <span className="yello">Interior Design</span>
                    </h1>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                    </p>
                  </div>
                  <a className="read_more ban_btn" href="Javascript:void(0)">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="carousel-caption relative">
                  <div className="bg_white">
                    <h1>
                      Welcome To our{" "}
                      <span className="yello">Interior Design</span>
                    </h1>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                    </p>
                  </div>
                  <a className="read_more ban_btn" href="Javascript:void(0)">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="carousel-caption relative">
                  <div className="bg_white">
                    <h1>
                      Welcome To our{" "}
                      <span className="yello">Interior Design</span>
                    </h1>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                    </p>
                  </div>
                  <a className="read_more ban_btn" href="Javascript:void(0)">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="Javascript:void(0)"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="Javascript:void(0)"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Slider;
