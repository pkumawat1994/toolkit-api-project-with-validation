import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
  return (
    <>
      <div id="mySidepanel" className="sidepanel">
        <a
          href="javascript:void(0)"
          className="closebtn"
          onClick={() => closeNav()}
        >
          ×
        </a>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/service">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/signup">Signup</Link>
      </div>{" "}
      <header>
        <div className="head-top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-3">
                <div className="logo">
                  <a href="javascript:void(0)">
                    <img src="userAssets/images/logo_footer.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-sm-9">
                <ul className="email text_align_right">
                  {/* <li className="d_none"> <i className="fa fa-map-marker" aria-hidden="true"></i>Location</a></li> */}
                  {/* <li className="d_none"><i className="fa fa-phone" aria-hidden="true"></i>+71  1234567890</a></li> */}
                  <li className="d_none">
                    {" "}
                    <a href="javascript:void(0)">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                      demo@gmail.com
                    </a>
                  </li>
                  <li className="d_none">
                    {" "}
                    <Link to="/login">
                      Login <i className="fa fa-user" aria-hidden="true"></i>
                    </Link>{" "}
                  </li>
                  <li className="d_none">
                    {" "}
                    <NavLink to="/signup">
                      SignUp <i className="fa fa-user" aria-hidden="true"></i>
                    </NavLink>{" "}
                  </li>
                  <li className="d_none">
                    <i
                      className="fa fa-search"
                      style={{ cursor: "pointer" }}
                      aria-hidden="true"
                    ></i>
                  </li>
                  <li>
                    {" "}
                    <button className="openbtn">
                      <img
                        src="userAssets/images/menu_btn.png"
                        onClick={() => openNav()}
                      />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
