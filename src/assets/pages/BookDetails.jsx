import { useState } from "react";
import Footer from "../components/Footer";
import Cover from "../images/frontBookDetails.png";
import backBook from "../images/backBookD.png";
import CoverShadow from "../images/frontBookDShadow.png";
import BookRev from "../images/BookDetailsP.png";
import facebook from "../images/faceBook-D.png";
import insta from "../images/instaD.png";
import x from "../images/Xd.png";
import whatsapp from "../images/whatsAppD.png";
import share from "../images/share.png";
import verfy from "../images/verfyied-icon.png";
import avatar from "../images/johnSmith-customer.png";
import shippingCar from "../images/sgiping-card.png";
import dencreaies from "../images/dencrease.png";
import increasies from "../images/increasess.png";
import { FaStar, FaHeart, FaRegStar, FaShoppingCart } from "react-icons/fa";
import flashSale from "../images/flashSale-img.png";
import nextBookD from "../images/nextBookD.png";
import { HiOutlineShoppingCart } from "react-icons/hi";

export default function BookDetails() {
  const [activeTab, setActiveTab] = useState("details");
  return (
    <>
      <div className="w-full px-20 py-10">
        <div className="flex gap-6">
          <div>
            <img src={BookRev} alt="Book" className="w-70 rounded-lg mb-4" />

            <div className="flex gap-3">
              {[Cover, backBook, CoverShadow].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="w-20 h-28 rounded border cursor-pointer hover:border-[#D9176C]"
                />
              ))}
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2">Rich Dad And Poor Dad</h1>
            <div className="content flex justify-between">
              <p className="text-[#22222280] max-w-189.5 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                et ultricies est. Aliquam in justo varius, sagittis neque ut,
                malesuada leo. Aliquam in justo varius, sagittis neque ut,
                malesuada leo.Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Mauris et ultricies est. Aliquam in justo varius, sagittis
                neque ut, malesuada leo. Aliquam in justo varius, sagittis neque
                ut, malesuada leo.
              </p>
              <div className="icon flex gap-3">
                <div>
                  <img src={facebook} alt="" />
                </div>
                <div>
                  <img src={insta} alt="" />
                </div>
                <div>
                  <img src={x} alt="" />
                </div>
                <div>
                  <img src={whatsapp} alt="" />
                </div>
                <div>
                  <img src={share} alt="" />
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-6 text-sm mb-4 max-w-116.5">
              <div>
                <p className="text-[#22222280]">Author</p>
                <p className="font-semibold text-[#222222]">
                  Robert T. Kiyosaki
                </p>
              </div>
              <div>
                <p className="text-[#22222280]">Publication Year</p>
                <p className="font-semibold text-[#222222]">1997</p>
              </div>
              <div>
                <p className="text-[#22222280]">Book</p>
                <p className="font-semibold text-[#222222]">01 of 1</p>
              </div>
              <div>
                <p className="text-[#22222280]">Pages</p>
                <p className="font-semibold text-[#222222]">336</p>
              </div>
              <div>
                <p className="text-[#22222280]">Language</p>
                <p className="font-semibold text-[#222222]">English</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-12 mb-2">
              <div className="flex text-[#EBC305]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>
              <span className="text-[#00000080]">(210 Review)</span>
            </div>

            <p className="text-sm mb-6">
              Rate: <span className="font-semibold">4.2</span>
            </p>

            <div className="flex items-center justify-end mb-6">
              <div className="padges flex flex-wrap max-w-73.25 gap-3 flex-row-reverse ">
                <div className="stock flex px-2 py-3 border border-[#22222233] bg-[#FFFFFF] rounded-lg items-center">
                  <div className="icon">
                    <img src={shippingCar} alt="" />
                  </div>
                  <p className="text-[#22222280] ml-2 text-sm">
                    Free Shipping Today
                  </p>
                </div>
                <div className="stock flex px-2 py-3 border border-[#22222233] bg-[#FFFFFF] rounded-lg items-center">
                  <div className="icon">
                    <img src={verfy} alt="" />
                  </div>
                  <p className="text-[#25D994] ml-2 text-sm">In Stock</p>
                </div>

                <span className="text-[#EAA451] border px-3 py-1 rounded-full text-sm">
                  Discount code: Ne212
                </span>
              </div>
            </div>

            <div className="flex justify-between items-end">
              <div className="flex gap-4 items-center">
                <p className="text-[36px] text-[#222222] font-semibold">
                  $40.00
                </p>
                <p className="line-through text-[24px] text-[#22222280]">
                  $40.00
                </p>
              </div>

              <div className="flex items-center justify-end mt-12.25 gap-4 max-w-99.5">
                <div className="flex items-center px-4 py-2 gap-4">
                  <button className="cursor-pointer">
                    <img src={dencreaies} alt="" />
                  </button>
                  <p className="text-[#222222] text-[30px] font-semibold">1</p>
                  <button className="cursor-pointer">
                    <img src={increasies} alt="" />
                  </button>
                </div>

                <button className="bg-[#D9176C] text-[#FFFFFF] w-45 h-12 px-3 py-4  justify-center rounded-lg flex items-center gap-2 cursor-pointer">
                  Add To Cart
                  <HiOutlineShoppingCart size={20} />
                </button>

                <button className="border border-[#D9176C] text-[#D9176C] w-12 h-12 rounded-lg flex items-center justify-center">
                  <FaHeart />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex gap-20 border-b-2 border-[#2222221A] mb-6">
            <button
              onClick={() => setActiveTab("details")}
              className={`pb-3 w-56.75 text-[26px] font-bold cursor-pointer ${
                activeTab === "details"
                  ? "border-b-2 border-[#EAA451] text-[#222222]"
                  : "text-[#22222280]"
              }`}
            >
              Product Details
            </button>

            <button
              onClick={() => setActiveTab("reviews")}
              className={`pb-3 text-[26px] font-bold cursor-pointer ${
                activeTab === "reviews"
                  ? "border-b-2 border-[#EAA451] text-[#222222]"
                  : "text-[#22222280]"
              }`}
            >
              Customer Reviews
            </button>

            <button
              onClick={() => setActiveTab("recommended")}
              className={`pb-3 text-[26px] font-bold cursor-pointer ${
                activeTab === "recommended"
                  ? "border-b-2 border-[#EAA451] text-[#222222]"
                  : "text-[#22222280]"
              }`}
            >
              Recommended For You
            </button>
          </div>

          {activeTab === "details" && (
            <div className="space-y-2 text-sm">
              <div className="flex gap-2">
                <p className="text-[#000000] text-[20px] font-bold">
                  Book Title:
                </p>
                <span className="text-[#000000] text-[20px]">
                  Rich Dad And Poor Dad
                </span>
              </div>

              <div className="flex gap-2">
                <p className="text-[#000000] text-[20px] font-bold">Author:</p>
                <span className="text-[#000000] text-[20px]">
                  Robert T. Kiyosaki
                </span>
              </div>

              <div className="flex gap-2">
                <p className="text-[#000000] text-[20px] font-bold">
                  Publication Date:
                </p>
                <span className="text-[#000000] text-[20px]">1997</span>
              </div>

              <div className="flex gap-2">
                <p className="text-[#000000] text-[20px] font-bold">ASIN:</p>
                <span className="text-[#000000] text-[20px]">B09TWSRMCB</span>
              </div>

              <div className="flex gap-2">
                <p className="text-[#000000] text-[20px] font-bold">
                  Language:
                </p>
                <span className="text-[#000000] text-[20px]">English</span>
              </div>

              <div className="flex gap-2">
                <p className="text-[#000000] text-[20px] font-bold">
                  Publisher:
                </p>
                <span className="text-[#000000] text-[20px]">Printer</span>
              </div>

              <div className="flex gap-2">
                <p className="text-[#000000] text-[20px] font-bold">Pages:</p>
                <span className="text-[#000000] text-[20px]">336</span>
              </div>

              <div className="flex gap-2">
                <p className="text-[#000000] text-[20px] font-bold">
                  Book Format:
                </p>
                <span className="text-[#000000] text-[20px]">Hard Cover</span>
              </div>

              <div className="flex gap-2">
                <p className="text-[#000000] text-[20px] font-bold">
                  Best Seller Rank:
                </p>
                <span className="text-[#000000] text-[20px]">#3</span>
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="grid grid-cols-2 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="bg-[#FFFFFF] px-3 py-4 mt-10 w-162 h-57 rounded-lg"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <img src={avatar} className="w-12 h-12 rounded-full" />

                    <div>
                      <p className="font-bold text-[#222222] text-lg">
                        John Smith
                      </p>
                      <p className="text-[#25D994] text-sm">
                        Verified Purchase
                      </p>
                    </div>
                  </div>

                  <p className="text-[#22222280] mt-4 text-sm mb-2">
                    Reviewed On 28/07/2024
                  </p>

                  <div className="flex items-center gap-3 mb-2">
                    <p className="font-bold text-[#222222]">
                      Excellent Book <span>5.0</span>
                    </p>
                    <div className="text-[#EBC305] flex gap-1 ">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>

                  <p className="text-[#222222] leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris et ultricies est. Aliquam in justo varius, sagittis
                    neque ut,
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "recommended" && (
            <div className="">
              <div
                className="flex items-center justify-center gap-8 mt-20"
                data-aos="fade-up-left"
              >
                <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  ‹
                </button>

                {[1, 2].map((item) => (
                  <div
                    key={item}
                    className="bg-[#3f3356] rounded-xl p-5 flex gap-5 text-white w-106 h-73.5"
                  >
                    <img
                      src={flashSale}
                      alt="Book"
                      className="w-44 h-65.5 object-cover rounded-sm"
                    />

                    <div className="flex flex-col justify-between flex-1">
                      <div>
                        <h3 className="font-semibold text-lg">
                          Rich Dad And Poor Dad
                        </h3>
                        <p className="text-sm text-gray-300 mb-2">
                          Author: Robert T. Kiyosaki
                        </p>

                        <div className="flex items-center  gap-2 text-sm mb-2">
                          <span className="text-[#EBC305] flex">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                          </span>
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
                <div>
                  <img src={nextBookD} alt="" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
