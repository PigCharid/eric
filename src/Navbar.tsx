import logo from "./assets/logo.png";
import close from "./assets/close.svg";
import menu from "./assets/menu.svg";
import { navlist } from "./assets/constant";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
interface NavbarProps {
  scrolled: any;
  isActive: any;
  setIsActive: any;
  refreshEric: boolean;
  setRefreshEric: any;
  scrollRef: any;
}

const Navbar = ({
  scrolled,
  isActive,
  setIsActive,
  refreshEric,
  setRefreshEric,
  scrollRef,
}: NavbarProps) => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className={`${
        scrolled ? "py-0 glass" : "bg-transparent py-2"
      } z-10 fixed px-8  text-white w-full flex justify-between items-center`}
    >
      <div className="flex gap-[60px]">
        <div
          onClick={() => {
            navigate("/");
            scrollRef.current.scrollTo(0, 0);
          }}
          className="flex items-center gap-2 "
        >
          <img src={logo} alt="logo" className="w-[80px] cursor-pointer"></img>
          <p className="text-lg font-bold cursor-pointer">EricToken</p>
        </div>
        <div className=" xl:flex hidden gap-6 justify-center items-center">
          {navlist.map((el, i) => (
            <a
              key={i}
              className="hover:bg-[#ef3648] font-bold   rounded-md hover:border-b-2 p-2  text-lg "
              href={el.link}
            >
              {el.name}
            </a>
          ))}
        </div>
      </div>
      <div
        className="xl:flex hidden cursor-pointer text-lg font-bold"
        onClick={() => setRefreshEric(!refreshEric)}
      >
        Refresh
      </div>

      <div className="xl:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
            <div
              className="bg-[#ef3648] font-bold p-2  rounded-md border-b-2 cursor-pointer text-lg "
              onClick={() => setRefreshEric(!refreshEric)}
            >
              Refresh
            </div>
            {navlist.map((el, i) => (
              <a
                key={i}
                className="bg-[#ef3648] font-bold   rounded-md border-b-2 p-2  text-lg "
                href={el.link}
              >
                {el.name}
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
