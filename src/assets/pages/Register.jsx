import Google from '../images/google.png'
import Facebook from '../images/faceBook.png'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Swal from 'sweetalert2';

export default function Register() {
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    agree: false
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().required("Please Enter First Name"),
    last_name: Yup.string().required("Please Enter Last Name"),
    email: Yup.string().email("Invalid Email").required("Please Enter Email"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Please Enter Password"),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Please Confirm Password"),
    agree: Yup.boolean().oneOf([true], "You must agree to Terms & Conditions")
  });

  const onSubmit = async (values, actions) => {
    try {
      const res = await axios.post(
        "https://bookstore.eraasoft.pro/api/register",
        {
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
          password: values.password,
          password_confirmation: values.password_confirmation
        }
      );

      Swal.fire({
        icon: "success",
        title: "Register Successful",
        text: "Welcome",
      });
      actions.resetForm();
      console.log(res.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Register Failed",
        text: error.response?.data?.message || error.message,
      });
      console.log(error.response.data);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-center grow gap-10 items-center mt-10">
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          <Form className="bg-white p-6 rounded-lg shadow-lg w-146.5 gap-10">
            <div className="flex gap-4">
              <div className="flex flex-col">
                <label className="mb-1">First Name</label>
                <Field name="first_name" className="mb-3 p-2 border border-[#22222233] rounded my-2 w-70" />
                <ErrorMessage name="first_name" component="div" className="text-red-500"/>
              </div>

              <div className="flex flex-col">
                <label className="mb-1">Last Name</label>
                <Field name="last_name" className="mb-3 p-2 border border-[#22222233] rounded my-2 w-70" />
                <ErrorMessage name="last_name" component="div" className="text-red-500"/>
              </div>
            </div>

            <label>Email</label>
            <Field name="email" className="w-xl mb-3 p-2 border border-[#22222233] rounded my-4" />
            <ErrorMessage name="email" component="div" className="text-red-500"/>

            <label>Password</label>
            <Field name="password" type="password" className="w-xl mb-3 p-2 border border-[#22222233] rounded my-2" />
            <ErrorMessage name="password" component="div" className="text-red-500"/>

            <label>Confirm Password</label>
            <Field name="password_confirmation" type="password" className="w-xl mb-3 p-2 border border-[#22222233] rounded my-2" />
            <ErrorMessage name="password_confirmation" component="div" className="text-red-500"/>

            <div className="check flex items-center gap-2 my-4">
              <Field type="checkbox" name="agree" />
              <p>Agree with <span className='text-[#D9176C]'>Terms & Conditions</span></p>
            </div>
            <ErrorMessage name="agree" component="div" className="text-red-500"/>

            <button type="submit"  className="w-xl cursor-pointer bg-[#D9176C] text-white py-2 rounded my-10">
              Sign Up
            </button>

            <h3 className='text-xs text-[#00000080] text-center mt-10'>Or</h3>
              
            <div className="f-g-icons">
              <div className="google items-center  flex justify-center gap-2.5 mt-6 py-3 px-4">
                <div className="goggle-logo">
                  <img src={Google} alt="" />
                </div>
                <p className='text-[#222222]'><a href=""> Login with Google</a></p>
              </div>
              <div className="facebook items-center  flex justify-center gap-2.5 mt-3 py-3 px-4">
                <div className="face-icon">
                  <img src={Facebook} alt="" />
                </div>
                <p className='text-[#222222]'><a href=""> Login with facebook</a></p>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
