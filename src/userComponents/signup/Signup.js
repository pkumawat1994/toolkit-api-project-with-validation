import { Formik } from "formik";
import "./singup.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import React, { useEffect, useState } from "react";
import { Regiter_User } from "../../redux/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { RiseLoader } from "react-spinners";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { SignupSchema } from "../../validation/Form_validation_schema";

//-----------------------Schema validation------------------>

const Signup = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let data = useSelector((state) => state.reducer);
  console.log("useSelectore_register_api_response", data?.data?.data?.message);

  useEffect(() => {
    if (data?.data.status == 201) {
      toast.success(data?.data?.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        window.location = "/login";
      }, 1000);
    } else {
      toast.error(data?.data?.response?.data?.error, {
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
      <div className="Form-Wrapper-div">
        <h1 className="Form-heading">Signup</h1>
        <Formik
          //(1) ---->  INITIAL FIELD VALUE
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={SignupSchema}
          //(2)------>VALIDATE

          // validate={(values) => {
          //   const errors = {};
          //   if (!values.email) {
          //     errors.email = "Required";
          //   } else if (!All_regex_Type.email.test(values.email)) {
          //     errors.email = (
          //       <h3 className="Error-style">Invalid email address</h3>
          //     );
          //   }
          //   return errors;
          // }}
          //(3)------->ONSUBMIT
          onSubmit={(values, { setSubmitting }) => {
            console.log(setSubmitting);
            dispatch(Regiter_User(values));
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
            <div className="Form-Wrapper-div">
              <form onSubmit={handleSubmit}>
                <TextField
                  sx={{ margin: "20px" }}
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  label="Enter Name"
                  variant="outlined"
                />
                {errors.name && touched.name && errors.name}
                <br />

                <TextField
                  sx={{ margin: "20px" }}
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  label="Enter Email"
                  variant="outlined"
                />
                {/* ------------------LOADER----------------- */}
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
                {/* ---------------END LOADER----------------- */}
                {errors.email && touched.email && errors.email}
                <br />

                <TextField
                  sx={{ margin: "20px" }}
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  label="Enter Password"
                  variant="outlined"
                />
                {errors.password && touched.password && errors.password}
                <br />
                <Button
                  sx={{
                    margin: "20px",
                    height: "55px",
                    marginLeft: "10px",
                    backgroundColor: "brown",
                    color: "aliceblue",
                  }}
                  size="large"
                  variant="outlined"
                  type="submit"
                  onClick={isSubmitting}
                >
                  Register
                </Button>
              </form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Signup;
