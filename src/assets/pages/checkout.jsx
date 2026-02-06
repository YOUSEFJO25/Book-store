import CarShipping from "../images/shipping-fast .png";
import BookCart from "../images/Book-Cart.png";
import dencreaies from "../images/dencrease.png";
import increasies from "../images/increasess.png";
import ticket from "../images/ticket.png";

export default function Checkout() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] py-12">
      {/* Main Container */}
      <div className="container mx-auto px-6">
        {/* Grid Wrapper */}
        <div className="grid grid-cols-12 gap-6 items-stretch">
          {/* ================= LEFT COLUMN ================= */}
          <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
            {/* ====== WRAPPER (Shipping + Payment) بخلفية واحدة ====== */}
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col gap-10">
              {/* -------- Shipping Information Section -------- */}
              <div>
                <h2 className="text-lg font-semibold mb-10 mt-10">
                  Shipping information
                </h2>

                <div className="flex flex-col gap-4 w-170">
                  {/* Name + Phone */}
                  <div className="flex gap-4">
                    <div className="flex flex-col">
                      <label className="text-sm text-gray-500">Name</label>
                      <input
                        type="text"
                        placeholder="John Smith"
                        className="w-83 border border-[#22222233] placeholder:text-[#222222] rounded-lg px-3 py-2 mt-1 outline-none focus:border-pink-500"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="text-sm text-gray-500">Phone</label>
                      <input
                        type="text"
                        placeholder="123456789"
                        className="w-83 border border-[#22222233] placeholder:text-[#222222] rounded-lg px-3 py-2 mt-1 outline-none focus:border-pink-500"
                      />
                    </div>
                  </div>

                  {/* Email + City */}
                  <div className="flex gap-4 mt-6">
                    <div className="flex flex-col">
                      <label className="text-sm text-gray-500">Email</label>
                      <input
                        type="email"
                        placeholder="johnsmith@gmail.com"
                        className="w-83 border border-[#22222233] placeholder:text-[#222222] rounded-lg px-3 py-2 mt-1 outline-none focus:border-pink-500"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="text-sm text-gray-500">City</label>
                      <input
                        type="text"
                        placeholder="Maadi"
                        className="w-83 border border-[#22222233] placeholder:text-[#222222] rounded-lg px-3 py-2 mt-1 outline-none focus:border-pink-500"
                      />
                    </div>
                  </div>

                  {/* State + Zip */}
                  <div className="flex gap-4 mt-6">
                    <div className="flex flex-col">
                      <label className="text-sm text-gray-500">State</label>
                      <input
                        type="text"
                        placeholder="Cairo"
                        className="w-83 border border-[#22222233] placeholder:text-[#222222] rounded-lg px-3 py-2 mt-1 outline-none focus:border-pink-500"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="text-sm text-gray-500">Zip</label>
                      <input
                        type="text"
                        placeholder="11311"
                        className="w-83 border border-[#22222233] placeholder:text-[#222222] rounded-lg px-3 py-2 mt-1 outline-none focus:border-pink-500"
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex flex-col mt-6">
                    <label className="text-sm text-gray-500">Address</label>
                    <input
                      type="text"
                      placeholder="Maadi, Cairo, Egypt"
                      className="w-170 border border-[#22222233] placeholder:text-[#222222] rounded-lg px-3 py-2 mt-1 outline-none focus:border-pink-500"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* -------- Payment Method Section -------- */}
            <div className="bg-[#FFFFFF] h-50.5 rounded-[20px] p-10 mt-6">
              <h2 className="text-lg font-semibold mb-4 ">Payment Method</h2>

              <div className="flex flex-col md:flex-row gap-4 mt-10">
                <label className="flex items-center gap-2 border border-[#22222233] rounded-lg px-4 py-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    className=" accent-[#D9176C]"
                  />
                  <span>Online payment</span>
                </label>

                <label className="flex items-center gap-2 border border-[#D9176C1A] bg-[#D9176C1A] rounded-lg px-4 py-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    defaultChecked
                    className=" accent-[#D9176C]"
                  />
                  <span className="text-[#D9176C]">Cash on delivery</span>
                </label>

                <label className="flex items-center gap-2 border border-[#22222233] rounded-lg px-4 py-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    className=" accent-[#D9176C]"
                  />
                  <span>POS on delivery</span>
                </label>
              </div>
            </div>

            {/* -------- Note Section -------- */}
            <div className="bg-white rounded-[20px] shadow p-10 mt-6 h-82">
              <h2 className="text-lg font-semibold mb-4">Note</h2>

              <textarea
                rows="4"
                placeholder="Add note"
                className="w-170 h-45 border border-[#22222233] rounded-lg p-10 outline-none focus:border-[#D9176C]"
              />
            </div>
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="col-span-12 lg:col-span-4 flex">
            <div className="bg-[#FFFFFF] rounded-2xl shadow p-6 h-full w-134">
              <h2 className="text-lg font-semibold mb-4">Order summary</h2>
              {/* Order Items */}
              <div className="check">
                {[
                  {
                    id: 1,
                    title: "Rich Dad And Poor Dad",
                    author: "Robert T. Kiyosanki",
                    price: 40,
                    qty: 1,
                    image: BookCart,
                  },
                  {
                    id: 2,
                    title: "Rich Dad And Poor Dad",
                    author: "Robert T. Kiyosanki",
                    price: 40,
                    qty: 1,
                    image: BookCart,
                  },
                ].map((item) => (
                  <div key={item.id} className="flex items-start gap-4 mb-12">
                    <div className="w-27.75 h-40">
                      <img src={item.image} alt="" />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-bold text-[16px] text-[#222222]">
                        {item.title}
                      </h3>

                      <p className="text-sm text-[#22222280]">
                        Author:{" "}
                        <span className="text-[#222222]">{item.author}</span>
                      </p>

                      <div className="fastShiping flex items-center gap-2 bg-[#FFFFFF] rounded-lg px-2 py-3 border border-[#22222233] w-34.5 h-8.75 mt-4">
                        <div className="icon w-4 h-4">
                          <img src={CarShipping} alt="" />
                        </div>
                        <p className="text-[#22222280] text-sm">
                          Fast Shipping
                        </p>
                      </div>

                      <div className="flex justify-between items-end">
                        <p className="font-bold text-[#222222] text-[24px] mt-3.75">
                          ${item.price}
                        </p>

                        <div className="flex justify-center items-center">
                          <div className="flex items-center gap-3">
                            <button className="cursor-pointer">
                              <img src={dencreaies} alt="" />
                            </button>
                            <span>{item.qty}</span>
                            <button className="cursor-pointer">
                              <img src={increasies} alt="" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="promo-code mb-10  flex items-end gap-4">
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
                      className="border border-[#22222233] px-3.5 py-4.75 w-88 h-13 rounded-lg pl-14"
                    />
                  </div>
                </div>

                <div className="btn bg-[#3B2F4A] w-22 h-13 rounded-lg flex items-center justify-center">

                  <button className="text-[#FFFFFF]">Apply</button>
                </div>
              </div>

              <div className=" pt-4 text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#22222280] text-[16px]">Subtotal</span>
                  <span className="text-[#222222] text-[20px]">$80</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#22222280] text-[16px]" >Tax</span>
                  <span className="text-[#222222] text-[20px]">$4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#22222280] text-[16px]">Shipping</span>
                  <span>$0</span>
                </div>

                <div className="flex justify-between font-semibold text-pink-600 text-base pt-2">
                  <span className="text-[#22222280] text-[20px]">Total (USD)</span>
                  <span className="text-[#D9176C] text-[26px]">$84</span>
                </div>
              </div>

              <button className="w-114 h-12 cursor-pointer bg-[#D9176C] text-[#FFFFFF] rounded-lg hover:bg-pink-700 transition mt-10">
                Confirm order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
