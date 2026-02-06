import BookCart from "../images/Book-Cart.png";
import CarShipping from "../images/shipping-fast .png";
import dencreaies from "../images/dencrease.png";
import increasies from "../images/increasess.png";
import Trash from "../images/trash.png";
import ticket from "../images/ticket.png";
import Footer from "../components/Footer";
export default function Cart() {
  const items = [1, 2, 3];
  return (
    <>
      <div className="main bg-[#F5F5F5]">
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
                      <span className="text-[#222222]">
                        Robert T. Kiyosanki
                      </span>
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
                        <span className="font-semibold text-sm">
                          B09TWSRMCB
                        </span>
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
        <div className="flex justify-center mt-15">
          <div className="payment-section bg-[#3B2F4A1A] w-330 h-130.5 p-10 flex justify-between">
            <div className="left-side max-w-150">
              <div className="title">
                <h2 className="text-[26px] text-[#222222] font-bold mt-10 mr-39 mb-4 ml-28">
                  Payment Summary
                </h2>
              </div>

              <div className="des ml-28">
                <p className="text-[#22222280] text-[16px] mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris et ultricies est. Aliquam in justo varius, sagittis
                  neque ut, malesuada leo.
                </p>
              </div>

              <div className="promo-code mt-20 ml-28 flex items-end gap-4">
                <div className="code">
                  <p className="text-[#22222280] text-[18px]">
                    Have a discount code?
                  </p>

                  <div className="relative mt-6">
                    <div className="absolute left-5.25 top-1/2 -translate-y-1/2">
                      <img src={ticket} alt="" />
                    </div>

                    <input
                      type="text"
                      placeholder="Enter Promo Code"
                      className="border border-[#22222233] px-3.5 py-4.75 w-71 h-13 rounded-lg pl-14"
                    />
                  </div>
                </div>

                <div className="btn bg-[#3B2F4A] w-22 h-13 rounded-lg flex items-center justify-center">
                  <button className="text-[#FFFFFF]">Apply</button>
                </div>
              </div>
            </div>

            <div className="right-side w-106 h-93.75 flex flex-col justify-between">
              <div className="flex flex-col gap-6 mt-10">
                <div className="flex justify-between">
                  <p className="text-[#22222280] text-[20px]">Subtotal</p>
                  <p className="text-[#222222] text-[24px]">$120</p>
                </div>

                <div className="flex justify-between">
                  <p className="text-[#22222280] text-[20px]]">Shipping</p>
                  <p className="text-[#222222] text-[20px]">Free Delivery</p>
                </div>

                <div className="flex justify-between ">
                  <p className="text-[#22222280] text-[20px]">Tax</p>
                  <p className="text-[#222222] text-[24px]">$4</p>
                </div>
              </div>

              <div className="border-t border-[#22222233] my-6 w-106"></div>
              <div className="flex justify-between mt-6 mb-10">
                <p className="text-[#22222280] text-[20px]"> Total</p>
                <p className="text-[#D9176C] text-[28px] font-bold">$140</p>
              </div>
              <div className="flex flex-col gap-4">
                <button className="bg-[#D9176C] text-white h-13 rounded-lg">
                  Checkout
                </button>

                <button className="border border-[#3B2F4A] text-[#3B2F4A] h-13 rounded-lg">
                  Keep Selling
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
