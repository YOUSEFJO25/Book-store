import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
function ForgetPassword() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/resetPassword");
  };

  return (
    <>
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit}>
          <div className="title">
            <h2 className="text-xl mt-16 text-center text-[#D9176C]">
              Forget Password?
            </h2>
            <p className="text-[#22222280] text-center mb-10 text-[14px] mt-4">
              Enter your email to reset your password
            </p>
          </div>

          <div className="flex flex-col">
            <label className="text-[#222222] text-lg">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-xl border border-[#22222233] h-13.5 bg-[#FFFFFF] placeholder:text-[#22222280] mt-2 p-4 rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="text-[#FFFFFF] bg-[#D9176C] text-lg w-xl h-12 px-3 py-3 rounded-lg mt-10 cursor-pointer"
          >
            Send reset code
          </button>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default ForgetPassword;
