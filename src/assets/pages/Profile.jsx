import Header from "../components/Header";
import profile from "../images/edit-profile.png";
import pen from "../images/pen-clip.png";
import Footer from "../components/Footer";
import useAuthStore from "../pages/AuthStore";

export default function Profile() {
  const { user } = useAuthStore();

  return (
    <>
      <div className="min-h-screen  bg-[#F5F5F5]">
        <div className="flex justify-center pt-40 relative">
          <div className="absolute -top-22.5">
            <div className="relative w-40 h-40" data-aos="zoom-out-down">
              <img
                src={profile}
                alt="Profile"
                className="w-40 h-40 rounded-full object-cover  shadow-lg"
              />

              <img
                src={pen}
                alt="Edit"
                className="absolute bottom-3 right-3 w-8 h-8 rounded-full  cursor-pointer"
              />
            </div>
          </div>

          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div className="info-box w-184 bg-[#FFFFFF] border border-[#22222233] rounded-[20px]">
              <form className="bg-white m-10 rounded-xl shadow-lg">
                <h2 className="text-xl text-[#222222] font-semibold text-center mb-10 mt-10">
                  General Information
                </h2>

                <div className="grid grid-cols-2 gap-6 mb-4">
                  <div className="flex flex-col">
                    <label className="mb-1 text-sm font-normal text-[#22222280]">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="border border-[#22222233] placeholder:text-[#222222] placeholder:text-[16px] placeholder:font-normal rounded-lg p-4"
                      value={user.firstName || ""}
                      placeholder="John"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="mb-1 text-sm font-normal text-[#22222280]">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="border border-[#22222233] placeholder:text-[#222222] placeholder:text-[16px] placeholder:font-normal rounded-lg p-4"
                      value={user.lastName || ""}
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div className="flex flex-col mb-4 w-full">
                  <label className="mb-1 text-sm font-normal text-[#22222280]">
                    Email
                  </label>
                  <input
                    type="email"
                    className="border border-[#22222233] placeholder:text-[#222222] placeholder:text-[16px] placeholder:font-normal p-4 rounded-lg"
                    value={user.email || ""}
                    placeholder="johnsmith@gmail.com"
                  />
                </div>

                <div className="flex flex-col mb-6">
                  <label className="mb-1 text-sm font-normal text-[#22222280]">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="border border-[#22222233] placeholder:text-[#222222] placeholder:text-[16px] placeholder:font-normal p-4 rounded-lg"
                    placeholder="01123456789"
                  />
                </div>
                <div className="flex flex-col mb-6">
                  <label className="mb-1 text-sm font-normal text-[#22222280]">
                    Address
                  </label>
                  <input
                    type="text"
                    className="border border-[#22222233] placeholder:text-[#222222] placeholder:text-[16px] placeholder:font-normal p-4 rounded-lg"
                    placeholder="Maadi, Cairo, Egypt."
                  />
                </div>
              </form>
            </div>

            <button className="w-70 mt-10 pt-3 pr-4 pb-3 pl-4 bg-[#D9176C] text-white rounded cursor-pointer transition transform hover:bg-[#c40756] hover:scale-107">
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
