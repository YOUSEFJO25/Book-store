import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import bgHeader from "../images/bg-header.png";
import bgHome from "../images/Home-img.png";
import profileImg from "../images/profile-img.png";
import { FiSearch, FiMic, FiHeart, FiShoppingCart } from "react-icons/fi";
import useAuthStore from "../pages/AuthStore";

function Header({ variant }) {
  const isHome = variant === "home";
  const isAbout = variant === "about";
  const isBooks = variant === "books";
  const isProfile = variant === "profile";
  const { isLoggedIn, user, logout } = useAuthStore();

  const isAuthPages =
    variant === "login" ||
    variant === "register" ||
    variant === "forgetPassword" ||
    variant === "resetPassword" ||
    variant === "createPassword";

  const headerBg = isHome || isAbout ? bgHome : bgHeader;

  const imageHeight =
    isHome || isAbout
      ? "h-screen"
      : isProfile || isAuthPages
        ? "h-[338px]"
        : isBooks
          ? "h-[120px]"
          : "h-auto";

  return (
    <div className="relative w-full">
      <div className="relative">
        <img
          src={headerBg}
          alt=""
          className={`w-full ${imageHeight} object-cover object-center`}
        />

        {(isHome || isAbout || isProfile) && (
          <div className="absolute inset-0 bg-black/60" />
        )}

        {isHome && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="flex items-center gap-3 bg-white rounded-[50px] shadow-lg w-140.75 h-14.75">
              <input
                type="text"
                placeholder="Search"
                className="grow outline-none border-none text-xl text-[#22222280] bg-white rounded-full px-4"
              />
              <FiMic className="text-[#22222280] text-xl cursor-pointer" />
              <div className="bg-[#D9176C] w-17.75 h-14.75 flex justify-center items-center rounded-tr-[50px] rounded-br-[50px]">
                <FiSearch className="text-white text-xl cursor-pointer" />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="absolute top-0 left-0 w-full h-22 bg-white/20 z-40" />

      <div className="absolute top-0 left-0 w-full z-50 flex items-center px-35 py-6 h-22">
        <img src={logo} alt="Logo" />

        <ul className="flex gap-10 mx-12">
          <li>
            <Link to="/" className="text-white font-semibold">
              Home
            </Link>
          </li>
          <li>
            <Link to="/books" className="text-white font-semibold">
              Books
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white font-semibold">
              About
            </Link>
          </li>
        </ul>

        <div className="ml-auto flex items-center gap-6 text-white ">
          {isAbout || isBooks || isProfile ? (
            <>
              <div className="relative cursor-pointer">
                <Link to="/wishlist">
                  <FiHeart size={24} />
                </Link>

                <span className="absolute -top-2 -right-2 bg-[#D9176C] border border-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  10
                </span>
              </div>

              <div className="relative cursor-pointer">
                <Link to="/Cart">
                  <FiShoppingCart size={24} />
                </Link>
                <span className="absolute -top-2 -right-2 bg-[#D9176C] border border-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  12
                </span>
              </div>

              <Link to="/profile" className="relative flex items-center gap-3">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-12 h-12 rounded-full object-cover"
                />

                <span className="absolute bottom-0 left-8 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />

                <div className="text-sm leading-tight">
                  <p className="font-semibold">
                    {isLoggedIn ? user.email : "Johnsmith@gmail.com"}
                  </p>
                  <p className="text-[#FFFFFF80]">
                    {isLoggedIn
                      ? `${user.firstName} ${user.lastName}`
                      : "John Smith"}
                  </p>
                </div>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <button
                  className="bg-[#D9176C] w-20 h-11 rounded-lg font-bold"
                  onClick={() => {
                    if (isLoggedIn) logout();
                  }}
                >
                  Log in
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-white w-20 h-11 rounded-lg text-[#D9176C] font-bold border border-[#D9176C]">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
