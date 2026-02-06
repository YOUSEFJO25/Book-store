import abouImg from "../images/about-question-bg.png";
import call from "../images/call-icon.png";
import messege from "../images/messeg-icon.png";
import location from "../images/locatuin-icon.png";
import fastShipping from "../images/shipping-fast .png";
import payment from "../images/credit-card-buyer 1.png";
import easyReturn from "../images/return.png";
import customServices from "../images/user-headset 1.png";
import useAuthStore from "../pages/AuthStore";

export default function About() {
  const { isLoggedIn, user } = useAuthStore();

  return (
    <>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-[48px] text-[#FFFFFF] font-bold mb-4">
          About Our Book Store
        </h1>
        <div className="dec max-w-163">
          <p className="text-[24px] text-[#FFFFFF] font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>
        </div>
      </div>

      <div className="our-misiion">
        <div className="title flex justify-center mt-30 mb-20">
          <h2 className="text-[#222222] text-[34px] font-bold">Our Mission</h2>
        </div>

        <div className="cards flex justify-center gap-6" data-aos="zoom-in-up">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="w-90 p-6 border bg-white border-[#22222233] rounded-xl"
            >
              <h3 className="text-[#222222] text-[22px] font-bold mb-6">
                Quality Selection
              </h3>
              <p className="text-[16px] text-[#22222280] mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                et ultricies est. Aliquam in justo varius, sagittis neque ut,
                malesuada leo.
              </p>
              <a href="#" className="text-[#D9176C]">
                View More
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="relative h-196.5 mt-30">
        <img src={abouImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#3B2F4A] opacity-89"></div>

        <div className="absolute inset-0 flex justify-between items-center px-20">
          <div className="text-white" data-aos="zoom-in-right">
            <h2 className="text-4xl font-bold mb-4">
              Have a Questions? <br /> Get in Touch
            </h2>
            <p className="text-[#FFFFFF80] mb-6 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <form className="flex flex-col gap-6">
              <div className="flex gap-4">
                <input
                  type="text"
                  defaultValue={
                    isLoggedIn ? `${user.firstName} ${user.lastName}` : ""
                  }
                  placeholder="Name"
                  disabled={isLoggedIn}
                  className="flex-1 border border-[#FFFFFF33] bg-transparent text-white rounded-lg p-2"
                />

                <input
                  type="email"
                  defaultValue={isLoggedIn ? user.email : ""}
                  placeholder="Email Address"
                  disabled={isLoggedIn}
                  className="flex-1 border border-[#FFFFFF33] bg-transparent text-white rounded-lg p-2"
                />
              </div>

              <textarea
                placeholder="Your Message"
                className="border border-[#FFFFFF33] bg-transparent text-white rounded-lg p-2 h-38"
              />

              <button
                type="submit"
                className="bg-[#D9176C] text-white py-2 px-4 rounded-lg w-50"
              >
                Send Message
              </button>
            </form>
          </div>

          <div
            className="flex flex-col gap-8 text-white"
            data-aos="zoom-in-left"
          >
            <div className="flex items-center gap-4">
              <img src={call} alt="" />
              <span>01123456789</span>
            </div>
            <div className="flex items-center gap-4">
              <img src={messege} alt="" />
              <span>{isLoggedIn ? user.email : "Example@gmail.com"}</span>
            </div>
            <div className="flex items-center gap-4">
              <img src={location} alt="" />
              <span>Maadi, Cairo, Egypt</span>
            </div>
          </div>
        </div>
      </div>

      <div className="services bg-[#F5F5F5] flex justify-evenly items-center h-101.75">
        {[
          { img: fastShipping, title: "Fast & Reliable Shipping" },
          { img: payment, title: "Secure Payment" },
          { img: easyReturn, title: "Easy Returns" },
          { img: customServices, title: "24/7 Customer Support" },
        ].map((item, index) => (
          <div key={index} className="w-68.75">
            <img src={item.img} alt="" className="mb-4" />
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-[#22222280]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
