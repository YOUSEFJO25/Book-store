import BookCart from "../images/Book-Cart.png";
import CarShipping from "../images/shipping-fast .png";
import dencreaies from "../images/dencrease.png";
import increasies from "../images/increasess.png";
import Trash from "../images/trash.png";
import Arrow from '../images/goToCheck.png'
import Footer from "../components/Footer";

export default function whishlist() {
  const items = [1, 2];

  return (
    <>
      <div className="flex justify-center pt-10">
        <div className="w-330 flex flex-col gap-6.25 bg-[#FFFFFF]">
          <div
            className="
                grid
                grid-cols-[550px_140px_140px_160px_60px]
                bg-[#F5F5F5]
                px-6
                py-4
              "
          >
            <p className="font-semibold text-[20px] text-[#000000]">Item</p>
            <p className="text-center font-semibold text-[20px] text-[#000000]">
              Quantity
            </p>
            <p className="text-center font-semibold text-[20px] text-[#000000]">
              Price
            </p>
            <p className="text-center font-semibold text-[20px] text-[#000000]">
              Total Price
            </p>
            <div></div>
          </div>

          {items.map((_, index) => (
            <div
              key={index}
              className="
                  grid
                  grid-cols-[550px_140px_140px_160px_180px]
                  bg-white
                  px-6
                  py-6
                  h-75.25
                "
            >
              <div className="flex h-65.25 w-133.75">
                <img
                  src={BookCart}
                  alt="book"
                  className="w-43.25 h-65.75 object-cover"
                />

                <div className="ml-6">
                  <h3 className="text-[#222222] text-lg font-bold mb-1">
                    Rich Dad And Poor Dad
                  </h3>

                  <p className="text-sm text-[#22222280] mb-2">
                    Author{" "}
                    <span className="text-[#222222]">Robert T. Kiyosanki</span>
                  </p>

                  <p className="text-sm text-[#22222280] mt-2 max-w-62.75 mb-8.75">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris et ultricies est. Aliquam in justo varius.
                  </p>

                  <div className="fastShiping flex items-center gap-2 bg-[#FFFFFF] rounded-lg px-2 py-3 border border-[#22222233] w-34.5 h-8.75">
                    <div className="icon w-4 h-4">
                      <img src={CarShipping} alt="" />
                    </div>
                    <p className="text-[#22222280] text-sm">Fast Shipping</p>
                  </div>

                  <div className="discount mt-8">
                    <p className="text-[#22222280] text-sm font-bold">
                      ASIN :{" "}
                      <span className="font-semibold text-sm">B09TWSRMCB</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <div className="flex items-center gap-3">
                  <button className="cursor-pointer">
                    <img src={dencreaies} alt="" />
                  </button>
                  <span>1</span>
                  <button className="cursor-pointer">
                    <img src={increasies} alt="" />
                  </button>
                </div>
              </div>

              <div className="flex justify-center items-center font-medium">
                <p className="text-[#000000] text-[30px]">$40</p>
              </div>

              <div className="flex justify-center items-center font-semibold">
                <p className="text-[#000000] text-[30px]">$40</p>
              </div>

              <div className="flex justify-center items-center cursor-pointer ml-36.75">
                <img src={Trash} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="btns flex justify-center mt-13.5 mb-136.75">
        <div className="flex gap-4"> 
        <button className="bg-[#D9176C1A] border border-[#D9176C]  text-[#D9176C] w-36.5 h-12.5 rounded-lg px-6 py-3.5 text-[16px] cursor-pointer">Move to cart</button>
        <div className="check flex justify-between items-center w-[320px] h-12  bg-[#D9176C] rounded-lg py-3 px-6 cursor-pointer">
          <p className="text-[#FFFFFF] text-[14px]">2 Item <br /> <span className="text-[#FFFFFF] text-[14px] font-semibold">$80</span></p>
          <p className="text-[#FFFFFF] text-[16px] font-bold">Check out</p>
          <div className="icon"><img src={Arrow} alt="" /></div>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
