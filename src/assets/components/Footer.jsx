import logo from "../images/logo.png";
import facebook from "../images/faceBookIcon.png";
import insta from "../images/insta.png";
import youtube from "../images/youtube.png";
import X from "../images/xtweeter.png";

export default function Footer() {
  return (
    <footer className="bg-[#3f3356] text-white pt-14 mt-29.75">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/20 pb-8">
          <div className="flex items-center gap-10 flex-wrap">
            <div className="flex items-center gap-2 font-semibold text-lg">
              <span>
                <img src={logo} alt="" />
              </span>
            </div>

            <nav className="flex gap-6 text-sm text-gray-300">
              <a href="#" className="text-[#EAA451]">
                Home
              </a>
              <a href="#" className="hover:text-white">
                Books
              </a>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-orange-400">
              <img src={facebook} alt="" />
            </a>
            <a href="#" className="hover:text-orange-400">
              <img src={insta} alt="" />
            </a>
            <a href="#" className="hover:text-orange-400">
              <img src={youtube} alt="" />
            </a>
            <a href="#" className="hover:text-orange-400">
              <img src={X} alt="" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6 text-sm text-gray-300">
          <p>&lt;Developed By: EraaSoft&gt; All Copy Rights Reserved ©2024</p>
        </div>
      </div>
    </footer>
  );
}
