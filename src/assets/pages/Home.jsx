import { FaStar, FaHeart, FaShoppingCart } from "react-icons/fa";
import richDad from "../images/richDad.png";
import designEveryThing from "../images/design-every-day.png";
import powerBook from "../images/power.png";
import craftBook from "../images/the-craft.png";
import theDesinBook from "../images/the-design-books.png";
import sevenBooks from "../images/seven-helighy.png";
import aliceBook from "../images/alch.png";
import CrdImg from "../images/richDad-card.png";
import flashSale from "../images/flashSale-img.png";
import fastShipping from "../images/shipping-fast .png";
import payment from "../images/credit-card-buyer 1.png";
import easyReturn from "../images/return.png";
import customServices from "../images/user-headset 1.png";

export default function Home() {
  return (
    <>
      <div className="services w-full h-101.75 bg-[#F5F5F5] flex gap-15 justify-evenly items-center ">
        <div className="card w-68.75  " data-aos="zoom-in">
          <div className="img-content mb-4">
            <img src={fastShipping} alt="" />
          </div>
          <div className="main-text mb-2">
            {" "}
            <h3 className="tex-[#222222] text-xl font-bold">
              Fast & Reliable Shipping
            </h3>
          </div>
          <div className="description w-68.75 h-20.75">
            <p className="text-[#22222280] font-normal text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.
            </p>
          </div>
        </div>
        <div className="card w-68.75  " data-aos="zoom-in">
          <div className="img-content mb-4">
            <img src={payment} alt="" />
          </div>
          <div className="main-text mb-2">
            {" "}
            <h3 className="tex-[#222222] text-xl font-bold">Secure Payment</h3>
          </div>
          <div className="description w-68.75 h-20.75">
            <p className="text-[#22222280] font-normal text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.
            </p>
          </div>
        </div>
        <div className="card w-68.75  " data-aos="zoom-in">
          <div className="img-content mb-4">
            <img src={easyReturn} alt="" />
          </div>
          <div className="main-text mb-2">
            {" "}
            <h3 className="tex-[#222222] text-xl font-bold">Easy Returns</h3>
          </div>
          <div className="description w-68.75 h-20.75">
            <p className="text-[#22222280] font-normal text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.
            </p>
          </div>
        </div>
        <div className="card w-68.75  " data-aos="zoom-in">
          <div className="img-content mb-4">
            <img src={customServices} alt="" />
          </div>
          <div className="main-text mb-2">
            {" "}
            <h3 className="tex-[#222222] text-xl font-bold">
              24/7 Customer Support
            </h3>
          </div>
          <div className="description">
            <p className="text-[#22222280] font-normal text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.
            </p>
          </div>
        </div>
      </div>
      <div
        className="best-seller bg-[#3B2F4A] py-16 px-4"
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
      >
        <div className="content text-center max-w-2xl mx-auto">
          <h2 className="text-[#FFFFFF] text-[26px] font-bold mb-4">
            Best Seller
          </h2>
          <p className="text-[#FFFFFF80] text-[16px] font-normal mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>
        </div>
        <div className="flex justify-between mt-20 cursor-pointer">
          <img src={richDad} alt="" className="" />
          <img src={designEveryThing} alt="" className="" />
          <img src={powerBook} alt="" className="" />
          <img src={craftBook} alt="" className="" />
          <img src={theDesinBook} alt="" className="" />
          <img src={sevenBooks} alt="" className="" />
          <img src={aliceBook} alt="" className=" " />
        </div>
        <div className="shop flex justify-center mt-20">
          <button className="w-45 h-12 bg-[#D9176C] rounded-lg  text-[#FFFFFF] text-lg font-semibold cursor-pointer transition transform hover:bg-[#c40756] hover:scale-107" >
            Shop Now
          </button>
        </div>
      </div>

      <div className="recommend">
        <h3 className="text-[#222222] text-[26px] font-bold mt-30 mb-10 mx-15">
          Recomended For You
        </h3>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          data-aos="fade-up"
        >
          <div className="flex bg-white rounded-xl w-162 m-14.75 shadow-lg p-6 gap-6">
            <div className="w-37.5 shrink-0">
              <img src={CrdImg} alt="" className="w-full rounded-lg" />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-[18px] font-bold mb-1 text-[#222222]">
                  Rich Dad And Poor Dad
                </h3>

                <p className="text-sm text-[#222222] mb-2">
                  Author:{" "}
                  <span className="text-[#22222280]">Robert T. Kiyosaki</span>
                </p>

                <p className="text-sm text-[#22222280] mb-4 line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris et ultricies est. Aliquam in justo varius, sagittis
                  neque ut, malesuada leo. Aliquam in justo varius, Aliquam in
                  justo varius,
                </p>

                <div className="flex items-center gap-23.5 mb-2">
                  <div className="flex text-yellow-400 gap-1 items-center">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar className="text-gray-300" />
                    <div className="rate-number">
                      <p className="text-[#22222280] text-[12px] font-semibold">
                        (180)review
                      </p>
                    </div>
                  </div>

                  <span className="text-[26px] text-[#222222] font-semibold">
                    $30.00
                  </span>
                </div>

                <p className="text-sm text-gray-500 mb-4">
                  Rate: <span className="font-semibold">4.5 / 5</span>
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex justify-center gap-3">
                  <button className="bg-[#D9176C] text-[#FFFFFF] flex justify-center items-center gap-2.5 w-74.5 h-12 rounded-lg text-[16px] cursor-pointer transition transform hover:bg-[#c40756] hover:scale-107">
                    Add to Cart
                    <span>
                      <FaShoppingCart />
                    </span>
                  </button>
                </div>

                <button className="p-2 border rounded-lg text-[#D9176C] hover:bg-pink-50 ">
                  <FaHeart />
                </button>
              </div>
            </div>
          </div>

          <div className="flex bg-white rounded-xl w-162 m-14.75 shadow-lg p-6 gap-6">
            <div className="w-37.5 shrink-0">
              <img src={theDesinBook} alt="" className="w-full rounded-lg" />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-[18px] font-bold mb-1 text-[#222222]">
                  The Design Of Books
                </h3>

                <p className="text-sm text-[#222222] mb-2">
                  Author:{" "}
                  <span className="text-[#22222280]"> Debbie Berne</span>
                </p>

                <p className="text-sm text-[#22222280] mb-4 line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris et ultricies est. Aliquam in justo varius, sagittis
                  neque ut, malesuada leo. Aliquam in justo varius, Aliquam in
                  justo varius,
                </p>

                <div className="flex items-center gap-23.5 mb-2">
                  <div className="flex text-[#EBC305] gap-1 items-center">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar className="text-gray-300" />
                    <div className="rate-number">
                      <p className="text-[#22222280] text-[12px] font-semibold">
                        (210)review
                      </p>
                    </div>
                  </div>

                  <span className="text-[26px] text-[#222222] font-semibold">
                    $40.00
                  </span>
                </div>

                <p className="text-sm text-gray-500 mb-4">
                  Rate: <span className="font-semibold">4.2 / 5</span>
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex justify-center gap-3">
                  <button className="bg-[#D9176C] text-[#FFFFFF] flex justify-center items-center gap-2.5 w-74.5 h-12 rounded-lg text-[16px] cursor-pointer transition transform hover:bg-[#c40756] hover:scale-107">
                    Add to Cart
                    <span>
                      <FaShoppingCart />
                    </span>
                  </button>
                </div>

                <button className="p-2 border rounded-lg text-[#D9176C] hover:bg-pink-50">
                  <FaHeart />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flashSale">
        <section className="w-full bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-start mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-3">Flash Sale</h2>
                <p className="text-gray-500 max-w-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris et ultricies est. Aliquam in justo varius, sagittis
                  neque ut, malesuada leo.
                </p>
              </div>

              <div className="relative w-28 h-28 rounded-full border-4 border-pink-500 flex items-center justify-center">
                <span className="text-lg font-bold">30:00:00</span>
                <span className="absolute bottom-2 w-3 h-3 bg-pink-500 rounded-full"></span>
              </div>
            </div>

            <div
              className="flex items-center justify-center gap-8"
              data-aos="fade-up-left"
            >
              <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                ‹
              </button>

              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="bg-[#3f3356] rounded-xl p-5 flex gap-5 text-white w-105"
                >
                  <img
                    src={flashSale}
                    alt="Book"
                    className="w-32 h-44 object-cover rounded-md"
                  />

                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="font-semibold text-lg">
                        Rich Dad And Poor Dad
                      </h3>
                      <p className="text-sm text-gray-300 mb-2">
                        Author: Robert T. Kiyosaki
                      </p>

                      <div className="flex items-center gap-2 text-sm mb-2">
                        <span className="text-yellow-400">★★★★★</span>
                        <span className="text-gray-300">(180 Review)</span>
                      </div>

                      <div className="flex items-center gap-3 mb-3">
                        <span className="line-through text-gray-400">
                          $45.00
                        </span>
                        <span className="text-xl font-bold">$30.00</span>
                      </div>

                      <div className="w-full bg-gray-600 h-2 rounded-full mb-1">
                        <div className="bg-[#EAA451] h-2 w-1/2 rounded-full"></div>
                      </div>
                      <p className="text-xs text-gray-300">4 books left</p>
                    </div>

                    <button className="self-end bg-pink-500 hover:bg-pink-600 p-3 rounded-lg cursor-pointer">
                      <FaShoppingCart />
                    </button>
                  </div>
                </div>
              ))}

              <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                ›
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
