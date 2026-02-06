import Google from "../images/google.png";
import Facebook from "../images/faceBook.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuthStore from "../pages/AuthStore";

export default function Login() {
  const initialValues = {
    email: "",
    password: "",
    remember: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("Please Enter Email"),
    password: Yup.string().required("Please Enter Password"),
  });

  const onSubmit = async (values, actions) => {
    try {
      const res = await axios.post(
        "https://bookstore.eraasoft.pro/api/login",
        values,
      );

      const { login } = useAuthStore.getState();
      const fullName = res.data.user?.name || "";
      const [firstName = "", lastName = ""] = fullName.split(" ");
      login({
        firstName,
        lastName,
        email: res.data.user?.email || values.email,
      });

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Welcome back!",
      });

      actions.resetForm();
      console.log(res.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.response?.data?.message || "Something went wrong",
      });
      console.log(error.response?.data || error.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-center grow gap-10 items-center">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="bg-white p-6 rounded-lg shadow-lg w-146.5 gap-10">
            <h2 className="text-xl mt-16 mb-10 text-center text-[#D9176C]">
              Welcome Back!
            </h2>

            <label>Email</label>
            <Field
              name="email"
              type="email"
              placeholder="example@gmail.com"
              className="w-xl mb-3 p-2 border border-[#22222233] rounded my-4"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />

            <label>Password</label>
            <Field
              name="password"
              type="password"
              placeholder="Enter password"
              className="w-xl mb-3 p-2 border border-[#22222233] rounded my-2"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500"
            />

            <div className="flex justify-between items-center my-4">
              <label className="flex gap-2 items-center">
                <Field type="checkbox" name="remember" />
                Remember Me
              </label>
              <Link to="/forgetPassword" className="text-[#D9176C]">
                Forget password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer bg-[#D9176C] text-white py-2 rounded my-10"
            >
              Submit
            </button>

            <div className="flex justify-center my-10">
              <span>Don't have an account?</span>
              <Link
                to="/register"
                className="text-[#D9176C] ml-1 font-semibold"
              >
                Sign Up
              </Link>
            </div>

            <h3 className="text-xs text-[#00000080] text-center mt-10">Or</h3>

            <div className="f-g-icons">
              <div className="google items-center  flex justify-center gap-2.5 mt-6 py-3 px-4">
                <div className="goggle-logo">
                  <img src={Google} alt="" />
                </div>
                <p className="text-[#222222]">
                  <a href=""> Sign up with Google</a>
                </p>
              </div>
              <div className="facebook items-center  flex justify-center gap-2.5 mt-3 py-3 px-4">
                <div className="face-icon">
                  <img src={Facebook} alt="" />
                </div>
                <p className="text-[#222222]">
                  <a href=""> Sign up with facebook</a>
                </p>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
