import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Footer from "../components/Footer";
function CreateNewPassword() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex justify-center items-center w-full">
          <form className="w-xl  px-4">
            <div className="title">
              <h2 className="text-xl mt-16 text-center text-[#D9176C]">
                Create new password!
              </h2>
              <p className="text-[#22222280] text-center mb-10 text-[14px] mt-4">
                Create a strong password <br /> Your new password must be
                different from previous one
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="relative">
                <label className="text-[#222222] text-lg">Password</label>
                <input
                  placeholder="Enter Password"
                  className="w-xl border border-[#22222233] h-13.5 bg-[#FFFFFF] placeholder:text-[#22222280] mt-2 p-4 rounded-lg pr-10"
                />
                <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[#22222280] cursor-pointer">
                  <AiOutlineEye size={20} />
                </span>
                <p className="text-[#22222280] mt-2">
                  Must be at least 8 characters
                </p>
              </div>

              <div className="relative">
                <label className="text-[#222222] text-lg">
                  Confirm password
                </label>
                <input
                  placeholder="Confirm password"
                  className="w-xl border border-[#22222233] h-13.5 bg-[#FFFFFF] placeholder:text-[#22222280] mt-2 p-4 rounded-lg pr-10"
                />
                <span className="absolute right-0 top-[55%] -translate-y-1/2 text-[#22222280] cursor-pointer">
                  <AiOutlineEye size={20} />
                </span>
                <div className="flex  items-baseline gap-2">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="mt-4 w-4 h-4"
                  />
                  <label className="text-[#222222]">Remeber Me</label>
                </div>
              </div>
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

export default CreateNewPassword;
