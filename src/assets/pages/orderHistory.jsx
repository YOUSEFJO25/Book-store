import { useNavigate, useSearchParams } from "react-router-dom";
import trash from "../images/trash.png";
import OrderLineProgress from "../components/OrderFollow";
import view from "../images/viewOrderDetails.png";
import Footer from "../components/Footer";
import OrderTracked from "../components/OrderTracked";
function OrderHistory() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const status = searchParams.get("status") || "all";

  return (
    <>
      <div className="banner flex gap-6 mt-15 ml-15">
        <div
          onClick={() => navigate("/OrderHistory?status=all")}
          className={`type flex justify-center items-center w-16.75 h-12 px-2.5 py-6 rounded-lg cursor-pointer
            ${status === "all" ? "bg-[#D9176C80] text-white" : "border border-[#00000033]"}`}
        >
          <p>All</p>
        </div>

        <div
          onClick={() => navigate("/OrderHistory?status=progress")}
          className={`type flex justify-center items-center w-33 h-10.5 px-2.5 py-6 rounded-lg cursor-pointer
            ${status === "progress" ? "bg-[#D9176C80] text-white" : "border border-[#00000033]"}`}
        >
          <p>In Progress</p>
        </div>

        <div
          onClick={() => navigate("/OrderHistory?status=completed")}
          className={`type flex justify-center items-center w-32.5 h-10.5 px-2.5 py-6 rounded-lg cursor-pointer
            ${status === "completed" ? "bg-[#D9176C80] text-white" : "border border-[#00000033]"}`}
        >
          <p>Completed</p>
        </div>

        <div
          onClick={() => navigate("/OrderHistory?status=canceled")}
          className={`type flex justify-center items-center w-29.5 h-10.5 px-2.5 py-6 rounded-lg cursor-pointer
            ${status === "canceled" ? "bg-[#D9176C80] text-white" : "border border-[#00000033]"}`}
        >
          <p>Canceled</p>
        </div>
      </div>

      <div className="mt-10 px-15">
        {status === "all" && (
          <>
            <div className="h-102.25 bg-[#FFFFFF] border border-[#D9176C33] rounded-[20px] ">
              <div className="trash flex justify-end m-6 cursor-pointer">
                <img src={trash} alt="" />
              </div>
              <div className="flex justify-between  mx-5 my-5">
                <p className="text-[#22222280] text-[20px]">Order No.</p>
                <p className="text-[#222222] text-[20px] font-semibold">
                  #123456
                </p>
              </div>
              <div className="flex justify-between mx-5 my-5 ">
                <p className="text-[#22222280] text-[20px]">Status</p>
                <p className="text-[#222222] text-[20px] font-semibold">
                  In progress
                </p>
              </div>
              <div className="flex justify-between mx-5 my-5 ">
                <p className="text-[#22222280] text-[20px]">Date</p>
                <p className="text-[#222222] text-[20px] font-semibold">
                  jul, 31 2024
                </p>
              </div>
              <div className="flex justify-between mx-5 my-5 ">
                <p className="text-[#22222280] text-[20px]">Address</p>
                <p className="text-[#222222] text-[20px] font-semibold">
                  Maadi, Cairo, Egypt.
                </p>
              </div>
              <div className="follow">
                <OrderLineProgress />
              </div>
            </div>

            <div className="more mt-10">
              <div className="h-75 bg-[#FFFFFF] border border-[#D9176C33] rounded-[20px] ">
                <div className="flex justify-between  mx-5 my-5">
                  <p className="text-[#22222280] text-[20px]">Order No.</p>
                  <p className="text-[#222222] text-[20px] font-semibold">
                    #123456
                  </p>
                </div>
                <div className="flex justify-between mx-5 my-5 ">
                  <p className="text-[#22222280] text-[20px]">Status</p>
                  <p className="text-[#222222] text-[20px] font-semibold">
                    Completed
                  </p>
                </div>
                <div className="flex justify-between mx-5 my-5 ">
                  <p className="text-[#22222280] text-[20px]">Date</p>
                  <p className="text-[#222222] text-[20px] font-semibold">
                    jul, 31 2024
                  </p>
                </div>
                <div className="flex justify-between mx-5 my-5 ">
                  <p className="text-[#22222280] text-[20px]">Address</p>
                  <p className="text-[#222222] text-[20px] font-semibold">
                    Maadi, Cairo, Egypt.
                  </p>
                </div>
                <div className="more-details mx-5 my-5 mt-9.75 w-57.25 flex gap-6 items-center cursor-pointer">
                  <a href="" className="text-[#D9176C] text-[22px]">
                    View order detail
                  </a>
                  <div className="icon">
                    <img src={view} alt="" />
                  </div>
                </div>
              </div>
              <div className="h-75 mb-55.5 bg-[#FFFFFF] border mt-4 border-[#D9176C33] rounded-[20px] ">
                <div className="flex justify-between  mx-5 my-5">
                  <p className="text-[#22222280] text-[20px]">Order No.</p>
                  <p className="text-[#222222] text-[20px] font-semibold">
                    #123456
                  </p>
                </div>
                <div className="flex justify-between mx-5 my-5 ">
                  <p className="text-[#22222280] text-[20px]">Status</p>
                  <p className="text-[#222222] text-[20px] font-semibold">
                    Canceled
                  </p>
                </div>
                <div className="flex justify-between mx-5 my-5 ">
                  <p className="text-[#22222280] text-[20px]">Date</p>
                  <p className="text-[#222222] text-[20px] font-semibold">
                    jul, 31 2024
                  </p>
                </div>
                <div className="flex justify-between mx-5 my-5 ">
                  <p className="text-[#22222280] text-[20px]">Address</p>
                  <p className="text-[#222222] text-[20px] font-semibold">
                    Maadi, Cairo, Egypt.
                  </p>
                </div>
                <div className="more-details mx-5 my-5 mt-9.75 w-57.25 flex gap-6 items-center cursor-pointer">
                  <a href="" className="text-[#D9176C] text-[22px]">
                    View order detail
                  </a>
                  <div className="icon">
                    <img src={view} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {status === "progress" && (
          <>
            <div className="h-102.25 bg-[#FFFFFF] border border-[#D9176C33] rounded-[20px] ">
              <div className="trash flex justify-end m-6 cursor-pointer">
                <img src={trash} alt="" />
              </div>
              <div className="flex justify-between  mx-5 my-5">
                <p className="text-[#22222280] text-[20px]">Order No.</p>
                <p className="text-[#222222] text-[20px] font-semibold">
                  #123456
                </p>
              </div>
              <div className="flex justify-between mx-5 my-5 ">
                <p className="text-[#22222280] text-[20px]">Status</p>
                <p className="text-[#222222] text-[20px] font-semibold">
                  In progress
                </p>
              </div>
              <div className="flex justify-between mx-5 my-5 ">
                <p className="text-[#22222280] text-[20px]">Date</p>
                <p className="text-[#222222] text-[20px] font-semibold">
                  jul, 31 2024
                </p>
              </div>
              <div className="flex justify-between mx-5 my-5 ">
                <p className="text-[#22222280] text-[20px]">Address</p>
                <p className="text-[#222222] text-[20px] font-semibold">
                  Maadi, Cairo, Egypt.
                </p>
              </div>
              <div className="follow">
                <OrderLineProgress />
              </div>
            </div>
            <div className="h-102.25 bg-[#FFFFFF] border border-[#D9176C33] rounded-[20px] mt-10">
              <div className="trash flex justify-end m-6 cursor-pointer">
                <img src={trash} alt="" />
              </div>
              <div className="flex justify-between  mx-5 my-5">
                <p className="text-[#22222280] text-[20px]">Order No.</p>
                <p className="text-[#222222] text-[20px] font-semibold">
                  #123456
                </p>
              </div>
              <div className="flex justify-between mx-5 my-5 ">
                <p className="text-[#22222280] text-[20px]">Status</p>
                <p className="text-[#222222] text-[20px] font-semibold">
                  In progress
                </p>
              </div>
              <div className="flex justify-between mx-5 my-5 ">
                <p className="text-[#22222280] text-[20px]">Date</p>
                <p className="text-[#222222] text-[20px] font-semibold">
                  jul, 31 2024
                </p>
              </div>
              <div className="flex justify-between mx-5 my-5 ">
                <p className="text-[#22222280] text-[20px]">Address</p>
                <p className="text-[#222222] text-[20px] font-semibold">
                  Maadi, Cairo, Egypt.
                </p>
              </div>
              <div className="follow">
                <OrderTracked />
              </div>
            </div>
          </>
        )}

        {status === "completed" && (
          <>
            <div className="h-75 bg-[#FFFFFF] border border-[#D9176C33] rounded-[20px] mt-4 ">
              <div className="flex justify-between  mx-5 my-5">
                <p className="text-[#22222280] text-[20px]">Order No.</p>
                <p className="text-[#222222] text-[20px] font-semibold">
                  #123456
                </p>
              </div>
              <div className="flex justify-between mx-5 my-5 ">
                <p className="text-[#22222280] text-[20px]">Status</p>
                <p className="text-[#222222] text-[20px] font-semibold">
                  Completed
                </p>
              </div>
              <div className="flex justify-between mx-5 my-5 ">
                <p className="text-[#22222280] text-[20px]">Date</p>
                <p className="text-[#222222] text-[20px] font-semibold">
                  jul, 31 2024
                </p>
              </div>
              <div className="flex justify-between mx-5 my-5 ">
                <p className="text-[#22222280] text-[20px]">Address</p>
                <p className="text-[#222222] text-[20px] font-semibold">
                  Maadi, Cairo, Egypt.
                </p>
              </div>
              <div className="more-details mx-5 my-5 mt-9.75 w-57.25 flex gap-6 items-center cursor-pointer">
                <a href="" className="text-[#D9176C] text-[22px]">
                  View order detail
                </a>
                <div className="icon">
                  <img src={view} alt="" />
                </div>
              </div>
            </div>
            <div className="h-75 bg-[#FFFFFF] border border-[#D9176C33] rounded-[20px] mt-4 ">
              <div className="flex justify-between  mx-5 my-5">
                <p className="text-[#22222280] text-[20px]">Order No.</p>
                <p className="text-[#222222] text-[20px] font-semibold">
                  #123456
                </p>
              </div>
              <div className="flex justify-between mx-5 my-5 ">
                <p className="text-[#22222280] text-[20px]">Status</p>
                <p className="text-[#222222] text-[20px] font-semibold">
                  Completed
                </p>
              </div>
              <div className="flex justify-between mx-5 my-5 ">
                <p className="text-[#22222280] text-[20px]">Date</p>
                <p className="text-[#222222] text-[20px] font-semibold">
                  jul, 31 2024
                </p>
              </div>
              <div className="flex justify-between mx-5 my-5 ">
                <p className="text-[#22222280] text-[20px]">Address</p>
                <p className="text-[#222222] text-[20px] font-semibold">
                  Maadi, Cairo, Egypt.
                </p>
              </div>
              <div className="more-details mx-5 my-5 mt-9.75 w-57.25 flex gap-6 items-center cursor-pointer">
                <a href="" className="text-[#D9176C] text-[22px]">
                  View order detail
                </a>
                <div className="icon">
                  <img src={view} alt="" />
                </div>
              </div>
            </div>
            <div className="h-75 bg-[#FFFFFF] border border-[#D9176C33] rounded-[20px] mt-4 ">
              <div className="flex justify-between  mx-5 my-5">
                <p className="text-[#22222280] text-[20px]">Order No.</p>
                <p className="text-[#222222] text-[20px] font-semibold">
                  #123456
                </p>
              </div>
              <div className="flex justify-between mx-5 my-5 ">
                <p className="text-[#22222280] text-[20px]">Status</p>
                <p className="text-[#222222] text-[20px] font-semibold">
                  Completed
                </p>
              </div>
              <div className="flex justify-between mx-5 my-5 ">
                <p className="text-[#22222280] text-[20px]">Date</p>
                <p className="text-[#222222] text-[20px] font-semibold">
                  jul, 31 2024
                </p>
              </div>
              <div className="flex justify-between mx-5 my-5 ">
                <p className="text-[#22222280] text-[20px]">Address</p>
                <p className="text-[#222222] text-[20px] font-semibold">
                  Maadi, Cairo, Egypt.
                </p>
              </div>
              <div className="more-details mx-5 my-5 mt-9.75 w-57.25 flex gap-6 items-center cursor-pointer">
                <a href="" className="text-[#D9176C] text-[22px]">
                  View order detail
                </a>
                <div className="icon">
                  <img src={view} alt="" />
                </div>
              </div>
            </div>
          </>
        )}

        {status === "canceled" && (
          <>
            <div className="h-75  bg-[#FFFFFF] border mt-4 border-[#D9176C33] rounded-[20px]  ">
              <div className="flex justify-between  mx-5 my-5">
                <p className="text-[#22222280] text-[20px]">Order No.</p>
                <p className="text-[#222222] text-[20px] font-semibold">
                  #123456
                </p>
              </div>
              <div className="flex justify-between mx-5 my-5 ">
                <p className="text-[#22222280] text-[20px]">Status</p>
                <p className="text-[#222222] text-[20px] font-semibold">
                  Canceled
                </p>
              </div>
              <div className="flex justify-between mx-5 my-5 ">
                <p className="text-[#22222280] text-[20px]">Date</p>
                <p className="text-[#222222] text-[20px] font-semibold">
                  jul, 31 2024
                </p>
              </div>
              <div className="flex justify-between mx-5 my-5 ">
                <p className="text-[#22222280] text-[20px]">Address</p>
                <p className="text-[#222222] text-[20px] font-semibold">
                  Maadi, Cairo, Egypt.
                </p>
              </div>
              <div className="more-details mx-5 my-5 mt-9.75 w-57.25 flex gap-6 items-center cursor-pointer">
                <a href="" className="text-[#D9176C] text-[22px]">
                  View order detail
                </a>
                <div className="icon">
                  <img src={view} alt="" />
                </div>
              </div>
            </div>
            <div className="h-75  bg-[#FFFFFF] border mt-4 border-[#D9176C33] rounded-[20px]  ">
              <div className="flex justify-between  mx-5 my-5">
                <p className="text-[#22222280] text-[20px]">Order No.</p>
                <p className="text-[#222222] text-[20px] font-semibold">
                  #123456
                </p>
              </div>
              <div className="flex justify-between mx-5 my-5 ">
                <p className="text-[#22222280] text-[20px]">Status</p>
                <p className="text-[#222222] text-[20px] font-semibold">
                  Canceled
                </p>
              </div>
              <div className="flex justify-between mx-5 my-5 ">
                <p className="text-[#22222280] text-[20px]">Date</p>
                <p className="text-[#222222] text-[20px] font-semibold">
                  jul, 31 2024
                </p>
              </div>
              <div className="flex justify-between mx-5 my-5 ">
                <p className="text-[#22222280] text-[20px]">Address</p>
                <p className="text-[#222222] text-[20px] font-semibold">
                  Maadi, Cairo, Egypt.
                </p>
              </div>
              <div className="more-details mx-5 my-5 mt-9.75 w-57.25 flex gap-6 items-center cursor-pointer">
                <a href="" className="text-[#D9176C] text-[22px]">
                  View order detail
                </a>
                <div className="icon">
                  <img src={view} alt="" />
                </div>
              </div>
            </div>
            <div className="h-75  bg-[#FFFFFF] border mt-4 border-[#D9176C33] rounded-[20px]  ">
              <div className="flex justify-between  mx-5 my-5">
                <p className="text-[#22222280] text-[20px]">Order No.</p>
                <p className="text-[#222222] text-[20px] font-semibold">
                  #123456
                </p>
              </div>
              <div className="flex justify-between mx-5 my-5 ">
                <p className="text-[#22222280] text-[20px]">Status</p>
                <p className="text-[#222222] text-[20px] font-semibold">
                  Canceled
                </p>
              </div>
              <div className="flex justify-between mx-5 my-5 ">
                <p className="text-[#22222280] text-[20px]">Date</p>
                <p className="text-[#222222] text-[20px] font-semibold">
                  jul, 31 2024
                </p>
              </div>
              <div className="flex justify-between mx-5 my-5 ">
                <p className="text-[#22222280] text-[20px]">Address</p>
                <p className="text-[#222222] text-[20px] font-semibold">
                  Maadi, Cairo, Egypt.
                </p>
              </div>
              <div className="more-details mx-5 my-5 mt-9.75 w-57.25 flex gap-6 items-center cursor-pointer">
                <a href="" className="text-[#D9176C] text-[22px]">
                  View order detail
                </a>
                <div className="icon">
                  <img src={view} alt="" />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default OrderHistory;
