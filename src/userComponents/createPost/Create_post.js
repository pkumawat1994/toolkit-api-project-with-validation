import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Formik } from "formik";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { postbyUser } from "../../redux/UserSlice";
import { formdataValidate } from "../../validation/Form_validation_schema";
const CreatePost = () => {
  let dispatch = useDispatch();

  let data = useSelector((state) => state.reducer);
  console.log("useSelectore_register_api_response", data);
  const [er, setEr] = useState(false);
  //  useEffect(() => {
  //    if (data?.data.status == 201) {
  //      toast.success(data?.data?.data.message, {
  //        position: "top-center",
  //        autoClose: 5000,
  //        hideProgressBar: false,
  //        closeOnClick: true,
  //        pauseOnHover: true,
  //        draggable: true,
  //        progress: undefined,
  //      });
  //      setTimeout(() => {
  //        window.location = "/login";
  //      }, 1000);
  //    } else {
  //      toast.error(data?.data?.response?.data?.error, {
  //        position: "top-center",
  //        autoClose: 5000,
  //        hideProgressBar: false,
  //        closeOnClick: true,
  //        pauseOnHover: true,
  //        draggable: true,
  //        progress: undefined,
  //      });
  //    }
  //  }, [data]);
  return (
    <>
      {" "}
      <div className="Form-Wrapper-div">
        <h1 className="m-5 ">CREATE POST</h1>
        <Formik
          //-----(1)----------->
          initialValues={{ name: "", age: "", city: "" }}
          //-----(2)----------->
          validationSchema={formdataValidate}
          //-----(3)----------->
          onSubmit={(values, { setSubmitting }) => {
            dispatch(postbyUser(values));
            console.log("FormValieee", values);
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
            <>
              {" "}
              <form onSubmit={handleSubmit}>
                <TextField
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={er}
                  sx={{ margin: "20px" }}
                  id="outlined-basic"
                  label="Enter Name"
                  variant="outlined"
                />
                {errors.name && touched.name && errors.name}
                <br />
                <TextField
                  name="age"
                  value={values.age}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={er}
                  sx={{ margin: "20px" }}
                  id="outlined-basic"
                  label="Age"
                  variant="outlined"
                />
                {errors.age && touched.age && errors.age}
                <br />
                <TextField
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={er}
                  sx={{ margin: "20px" }}
                  label=" Enter City"
                />
                {errors.city && touched.city && errors.city}
                <br />
                <Button
                  type="submit"
                  onClick={isSubmitting}
                  variant="outlined"
                  sx={{
                    margin: "20px",
                    border: "2px solid #8b1310",
                    color: "#8b1310",
                  }}
                >
                  CREATE
                </Button>
              </form>{" "}
            </>
          )}
        </Formik>
      </div>
    </>
  );
};

export default CreatePost;
