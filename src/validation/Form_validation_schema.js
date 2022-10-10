import * as Yup from "yup";
export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, <h5 className="Error-style">Too Short!</h5>)
    .max(50, <h5 className="Error-style">Too Long!</h5>)
    .required(<h5 className="Error-style">--Name field is required--</h5>),
  password: Yup.string().required(
    <h5 className="Error-style">--Password field is required--</h5>
  ),
  email: Yup.string()
    .email(<h5 className="Error-style">--Email is invalid--</h5>)
    .required(<h5 className="Error-style">email is Required</h5>),
});

export const formdataValidate = Yup.object().shape({
  name: Yup.string()
    .min(2, <h5 className="Error-style">Too Short!</h5>)
    .max(50, <h5 className="Error-style">Too Long!</h5>)
    .required(<h5 className="Error-style">--Name field is required--</h5>),
  age: Yup.number().max(
    100,
    <h5 className="Error-style">No eligible over 100 age!</h5>
  ),
});