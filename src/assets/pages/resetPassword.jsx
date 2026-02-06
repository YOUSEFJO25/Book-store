import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function ResetPassword() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/createNewPassword");
  };

  return (
    <>
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-center items-center">
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <div className="title">
            <h2 className="text-xl mt-16 text-center text-[#D9176C]">
              Reset your password!
            </h2>
            <p className="text-[#22222280] text-center mb-10 text-[14px] mt-4">
              Enter the 4 dights code that you received on your email
            </p>
          </div>

          <div className="flex gap-4 justify-center mt-10">
            <input
              className="w-15 h-15 px-4 py-6 text-center border border-[#222222] placeholder:text-[#000000] placeholder:text-[22px] placeholder:font-bold rounded-lg text-xl"
              placeholder="1"
            />
            <input
              className="w-15 h-15 px-4 py-6 text-center border border-[#222222] placeholder:text-[#000000] placeholder:text-[22px] placeholder:font-bold rounded-lg text-xl"
              placeholder="2"
            />
            <input className="w-15 h-15 px-4 py-6 text-center border border-[#2222224D] placeholder:text-[#000000] placeholder:text-[22px] placeholder:font-bold rounded-lg text-xl" />
            <input className="w-15 h-15 px-4 py-6 text-center border border-[#2222224D] placeholder:text-[#000000] placeholder:text-[22px] placeholder:font-bold rounded-lg text-xl" />
          </div>

          <button
            type="submit"
            className="text-[#FFFFFF] bg-[#D9176C] text-lg w-78 h-[41] px-3 py-3 rounded-lg mt-10 cursor-pointer"
          >
            Reset password
          </button>

          <div className="mt-10">
            <p className="text-[#222222] text-center">
              Didn’t receive a code?{" "}
              <span className="text-[#D9176C] cursor-pointer">Send again</span>
            </p>
          </div>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default ResetPassword;
