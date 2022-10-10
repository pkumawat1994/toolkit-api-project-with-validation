import React, { useEffect } from "react";
import { Formik } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/UserSlice";
import { Loader } from "@progress/kendo-react-indicators";
import { RiseLoader } from "react-spinners";
import { All_regex_Type } from "../../validation/RegexTypes";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// import RotateLoader from "react-spinners/RotateLoader";

const Login = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let data = useSelector((state) => state.reducer);
  console.log(data?.data?.data?.token);
  if (data.data.token !== null) {
    localStorage.setItem("userToken", data?.data?.data?.token);
  }

  useEffect(() => {
    if (data?.data?.status == 200) {
      toast.success(data.status, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        if (data.data.token !== null) {
          navigate("/dashboard");
        }
      }, 1000);
    } else {
      toast.error(data?.data?.response?.data?.msg, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [data]);

  return (
    <>
      <div className="mymainDiv">
        <h1>Login</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (!All_regex_Type.email.test(values.email)) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              dispatch(loginUser(values));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                sx={{ margin: "10px" }}
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                label="Enter Email"
                variant="outlined"
              />
              <br />
              {data.loading ? (
                <RiseLoader
                  color="#8b1310"
                  cssOverride={{}}
                  margin={5}
                  loading={data.loading}
                  size={20}
                  speedMultiplier={1}
                />
              ) : null}
              {errors.email && touched.email && errors.email}
              <TextField
                sx={{ margin: "10px" }}
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                label="Enter Password"
                variant="outlined"
              />
              <br />
              {errors.password && touched.password && errors.password}
              <Button
                sx={{
                  margin: "20px",
                  height: "57px",
                  marginLeft: "10px",
                  backgroundColor: "brown",
                  color: "aliceblue",
                }}
                size="large"
                variant="outlined"
                type="submit"
                disabled={isSubmitting}
              >
                LOGIN
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Login;
