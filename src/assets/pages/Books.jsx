import Header from "../components/Header";
import Footer from "../components/Footer";
import filter from "../images/filter-icon.png";
import Arrow from "../images/Arrow - Left 2.png";
import lArrow from "../images/Arrow Left .png";
import BookCard from "../images/Book-Card.png";
import { FaStar, FaRegStar, FaHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FiSearch, FiMic, FiHeart, FiShoppingCart } from "react-icons/fi";

export default function Books() {
  return (
    <>
      <Header variant="books" customHeight="h-[120px]" />

      <div className="books-container h-359.75 bg-[#F5F5F5] w-full flex">
        <div className="left-side w-135.5 h-151.75 pt-15 pr-4 pb-0 pl-15">
          <div className="filter flex items-center gap-[4.5px] w-25 justify-between">
            <div className="icon">
              <img src={filter} alt="" />
            </div>
            <h2 className="text-[#222222] text-[24px] font-semibold">Filter</h2>
          </div>
          <div className="bg-white mt-6 rounded-lg shadow-sm w-full flex flex-col gap-3 p-6">
            <div className="cat w-full bg-white p-2 rounded">
              <div className="flex justify-between items-center">
                <p className="text-[#D9176C80] text-lg font-semibold">
                  Categories
                </p>
                <div className="arow-icon cursor-pointer">
                  <img src={Arrow} alt="" />
                </div>
              </div>
            </div>
            <div className="kinds flex flex-col gap-2 mt-2">
              {[
                ["All Categories", 1450],
                ["Business", 140],
                ["Kids", 309],
                ["Art", 102],
                ["History", 204],
                ["Romance", 89],
                ["Fantasy", 47],
                ["Self Help", 163],
                ["Cooking", 211],
                ["Sports", 97],
              ].map(([title, count], i) => (
                <div
                  key={i}
                  className="cat-books flex justify-between items-center w-full px-2 py-1"
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="cursor-pointer accent-[#D9176C]"
                    />
                    <p className="text-[#222222] text-[14px]">{title}</p>
                  </div>
                  <p className="text-[#22222280] text-[14px]">{`(${count})`}</p>
                </div>
              ))}
            </div>

            <div className="bore-btn flex justify-center mt-4">
              <button className="text-[#D9176C] cursor-pointer">
                Load More
              </button>
            </div>

            <div className="puplisher-cat mt-4 p-4 cursor-pointer rounded-lg flex justify-between items-center w-full bg-white">
              <p className="text-[#222222]">Publisher</p>
              <img src={lArrow} alt="" />
            </div>

            <div className="puplisher-cat mt-4 p-4 cursor-pointer rounded-lg flex justify-between items-center w-full bg-white">
              <p className="text-[#222222]">Year</p>
              <img src={lArrow} alt="" />
            </div>
          </div>
        </div>

        <div className="right-side flex-1 pt-15 pr-15">
          <div className="search-container ml-10 flex justify-start items-center gap-6.75">
            <div className="relative w-189.5">
              <input
                type="text"
                placeholder="Search"
                className="w-full h-14.75 pl-6 pr-16 placeholder:text-[#22222280] rounded-[50px] outline-none border border-[#22222233] bg-[#FFFFFF]"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                <FiMic className="text-[#22222280] text-[24px] cursor-pointer" />
                <div className="search-icon p-4.5 flex  items-center border-l h-15 border-[#22222233] ">
                  <FiSearch className="text-[#D9176C] text-[22px] cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="sort-input border border-[#0000001A] rounded-2xl flex justify-end h-11.25 p-2.5">
              <input
                type="search"
                name=""
                id=""
                placeholder="Sort by"
                className="outline-none text-[20px] "
              />
              <img src={lArrow} alt="" />{" "}
            </div>
          </div>

          <div className="content-area mt-10 flex justify-center">
            <div className="banner flex justify-center gap-3">
              <div className="type flex justify-center items-center w-28.5 h-10.5 px-2.5 py-6 rounded-lg cursor-pointer bg-[#D9176C80]">
                <p className="text-[#FFFFFF] text-[16px]">Business</p>
              </div>
              <div className="type flex justify-center items-center w-28.5 h-10.5 px-2.5 py-6 rounded-lg border cursor-pointer border-[#00000033]">
                <p className="text-[#222222] text-[16px]">Self Help</p>
              </div>
              <div className="type flex justify-center items-center w-28.5 h-10.5 px-2.5 py-6 rounded-lg border cursor-pointer border-[#00000033]">
                <p className="text-[#222222] text-[16px]">History</p>
              </div>
              <div className="type flex justify-center items-center w-28.5 h-10.5 px-2.5 py-6 rounded-lg border cursor-pointer border-[#00000033]">
                <p className="text-[#222222] text-[16px]">Romance</p>
              </div>
              <div className="type flex justify-center items-center w-28.5 h-10.5 px-2.5 py-6 rounded-lg border cursor-pointer border-[#00000033]">
                <p className="text-[#222222] text-[16px]">Fantasy</p>
              </div>
              <div className="type flex justify-center items-center w-28.5 h-10.5 px-2.5 py-6 rounded-lg border cursor-pointer border-[#00000033]">
                <p className="text-[#222222] text-[16px]">Art</p>
              </div>
              <div className="type flex justify-center items-center w-28.5 h-10.5 px-2.5 py-6 rounded-lg border cursor-pointer border-[#00000033]">
                <p className="text-[#222222] text-[16px]">Kids</p>
              </div>
              <div className="type flex justify-center items-center w-28.5 h-10.5 px-2.5 py-6 rounded-lg border cursor-pointer border-[#00000033]">
                <p className="text-[#222222] text-[16px]">Music</p>
              </div>
              <div className="type flex justify-center items-center w-28.5 h-10.5 px-2.5 py-6 rounded-lg border cursor-pointer border-[#00000033]">
                <p className="text-[#222222] text-[16px]">Cooking</p>
              </div>
            </div>
          </div>

          <div className="w-220.5 h-63.75 ml-20 mt-10 mb-15 rounded-xl   flex p-4 gap-6">
            <div>
              <img src={BookCard} alt="Book" />
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <h2 className="text-xl mb-2 font-bold text-[#222]">
                Rich Dad And Poor Dad
              </h2>

              <p className="text-[#22222280] mb-6 text-[16px] leading-relaxed max-w-130">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                et ultricies est. Aliquam in justo varius, sagittis neque ut,
                malesuada leo.
              </p>

              <div className="flex mb-2 items-center gap-4">
                <div className="flex text-yellow-400 text-lg">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                </div>

                <span className="text-[#22222280]">(210 Review)</span>
                <span className="text-sm text-[#222]"></span>
              </div>
              <div className="rate-num mb-4">
                <p className="text-[#00000080]">
                  Rate:<span className="text-[#222222]">4.2</span>
                </p>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <div className="flex gap-10">
                    <div>
                      <p className="text-sm text-[#22222280] mb-1">Author</p>
                      <p className="font-semibold text-[#222]">
                        Robert T. Kiyosaki
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-[#22222280] mb-1">Year</p>
                      <p className="font-semibold text-[#222]">1997</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-18 justify-between items-end ">
              <div className="disc bg-[#FFFFFF] rounded-lg  w-49.5 h-8.75 border py-2 px-3 border-[#EBC305] ">
                <p className="  text-[#EBC305]  text-[14px] ">
                  25% Discount code: Ne212
                </p>
              </div>

              <p className="text-2xl font-bold text-[#222]">$40.00</p>
              <div className="flex items-center gap-3">
                <button className="bg-[#D9176C] cursor-pointer hover:bg-pink-700 transition text-white w-45 h-12  px-3 py-4 rounded-lg flex justify-center gap-2">
                  Add To Cart
                  <HiOutlineShoppingCart size={20} />
                </button>

                <button className="w-12 h-12 border border-pink-600 rounded-lg flex items-center justify-center text-pink-600 hover:bg-pink-50 transition">
                  <FaHeart size={20} />
                </button>
              </div>
            </div>
          </div>
          <div className="w-220.5 h-63.75 ml-20 mt-10 mb-15 rounded-xl   flex p-4 gap-6">
            <div>
              <img src={BookCard} alt="Book" />
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <h2 className="text-xl mb-2 font-bold text-[#222]">
                Rich Dad And Poor Dad
              </h2>

              <p className="text-[#22222280] mb-6 text-[16px] leading-relaxed max-w-130">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                et ultricies est. Aliquam in justo varius, sagittis neque ut,
                malesuada leo.
              </p>

              <div className="flex mb-2 items-center gap-4">
                <div className="flex text-yellow-400 text-lg">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                </div>

                <span className="text-[#22222280]">(210 Review)</span>
                <span className="text-sm text-[#222]"></span>
              </div>
              <div className="rate-num mb-4">
                <p className="text-[#00000080]">
                  Rate:<span className="text-[#222222]">4.2</span>
                </p>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <div className="flex gap-10">
                    <div>
                      <p className="text-sm text-[#22222280] mb-1">Author</p>
                      <p className="font-semibold text-[#222]">
                        Robert T. Kiyosaki
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-[#22222280] mb-1">Year</p>
                      <p className="font-semibold text-[#222]">1997</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-18 justify-between items-end ">
              <div className="disc bg-[#FFFFFF] rounded-lg  w-49.5 h-8.75 border py-2 px-3 border-[#EBC305] ">
                <p className="  text-[#EBC305]  text-[14px] ">
                  25% Discount code: Ne212
                </p>
              </div>

              <p className="text-2xl font-bold text-[#222]">$40.00</p>
              <div className="flex items-center gap-3">
                <button className="bg-[#D9176C] cursor-pointer hover:bg-pink-700 transition text-white w-45 h-12  px-3 py-4 rounded-lg flex justify-center gap-2">
                  Add To Cart
                  <HiOutlineShoppingCart size={20} />
                </button>

                <button className="w-12 h-12 border border-pink-600 rounded-lg flex items-center justify-center text-pink-600 hover:bg-pink-50 transition">
                  <FaHeart size={20} />
                </button>
              </div>
            </div>
          </div>
          <div className="w-220.5 h-63.75 ml-20 mt-10 mb-15 rounded-xl   flex p-4 gap-6">
            <div>
              <img src={BookCard} alt="Book" />
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <h2 className="text-xl mb-2 font-bold text-[#222]">
                Rich Dad And Poor Dad
              </h2>

              <p className="text-[#22222280] mb-6 text-[16px] leading-relaxed max-w-130">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                et ultricies est. Aliquam in justo varius, sagittis neque ut,
                malesuada leo.
              </p>

              <div className="flex mb-2 items-center gap-4">
                <div className="flex text-yellow-400 text-lg">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                </div>

                <span className="text-[#22222280]">(210 Review)</span>
                <span className="text-sm text-[#222]"></span>
              </div>
              <div className="rate-num mb-4">
                <p className="text-[#00000080]">
                  Rate:<span className="text-[#222222]">4.2</span>
                </p>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <div className="flex gap-10">
                    <div>
                      <p className="text-sm text-[#22222280] mb-1">Author</p>
                      <p className="font-semibold text-[#222]">
                        Robert T. Kiyosaki
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-[#22222280] mb-1">Year</p>
                      <p className="font-semibold text-[#222]">1997</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-18 justify-between items-end ">
              <div className="disc bg-[#FFFFFF] rounded-lg  w-49.5 h-8.75 border py-2 px-3 border-[#EBC305] ">
                <p className="  text-[#EBC305]  text-[14px] ">
                  25% Discount code: Ne212
                </p>
              </div>

              <p className="text-2xl font-bold text-[#222]">$40.00</p>
              <div className="flex items-center gap-3">
                <button className="bg-[#D9176C] cursor-pointer hover:bg-pink-700 transition text-white w-45 h-12  px-3 py-4 rounded-lg flex justify-center gap-2">
                  Add To Cart
                  <HiOutlineShoppingCart size={20} />
                </button>

                <button className="w-12 h-12 border cursor-pointer border-pink-600 rounded-lg flex items-center justify-center text-pink-600 hover:bg-pink-50 transition">
                  <FaHeart size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navigat flex justify-center gap-4 items-center cursor-pointer">
        <p className="text-[#D9176C] text-[16px] font-semibold"> Previous </p>
        <div className="pages-n flex ">
          <div className="pageOne items-center cursor-pointer flex justify-center bg-[#D9176C] w-10 rounded-lg h-10 px-3 py-4 ">
            <p className="text-[#FFFFFF] text-lg text-center ">1</p>
          </div>
          <div className="pageOne items-center cursor-pointer flex justify-center  w-10 rounded-lg h-10 px-3 py-4 ">
            <p className="text-[#D9176C] text-lg text-center ">2</p>
          </div>
          <div className="pageOne items-center cursor-pointer flex justify-center  w-10 rounded-lg h-10 px-3 py-4 ">
            <p className="text-[#D9176C] text-lg text-center ">3</p>
          </div>
          <div className="pageOne items-center cursor-pointer flex justify-center  w-10 rounded-lg h-10 px-3 py-4 ">
            <p className="text-[#D9176C] text-lg text-center ">....</p>
          </div>
        </div>
        <p className="text-[#D9176C] text-[16px] font-semibold cursor-pointer">
          {" "}
          Next{" "}
        </p>
      </div>
      <p className="text-[#22222280] mt-2.5 text-center">
        1-20 of 5000+ Book available
      </p>
      <Footer />
    </>
  );
}
