import React, { useContext, useState } from "react";
import avatar from "../img/avatar.png";
import icon from "../img/Icons/dosa.png";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import UserProfile from "./UserProfile";
import { AnimatePresence, motion } from "framer-motion";
import {
  MdAdd,
  MdLogout,
  MdLogin,
  MdMenu,
  MdRestaurantMenu,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { handleOpenCartState } from "../store/items-Slice";
const menuItems = [
  { id: 0, title: "Home" },
  { id: 1, title: "Menu" },
  {
    id: 2,
    title: (
      <p className="flex gap-x-1">
        About <span>Us</span>
      </p>
    ),
  },
  { id: 3, title: "Services" },
];
const Header = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { currentUser, loggedIn, onlogOut } = useContext(AuthContext);
  return (
    <div>
      {/* Desktop AppBar  */}
      <div className=" w-full py-3 justify-between  z-10 top-0 fixed hidden px-8  md:flex bg-bgTwo shadow-slate-600/50 shadow-lg  ">
        <Link to="/" className="relative flex items-center justify-center ml-8">
          <img src={icon} className="w-12 h-12 bg-inherit" alt="icons"></img>
          <button className="px-3 text-2xl font-semibold text-white normal-case font-Pop">
            Food.io
          </button>
          <div
            className=" absolute top-0 -z-10 h-[80%] left-0 rotate-3
             animate-pulse  rounded-full opacity-60
             blur-xl  w-full bg-gradient-to-r from-[#7303c0] via-[#ec38bc] to-[#fdeff9]
               "
          ></div>
        </Link>
        <div className="flex items-center justify-center mr-8">
          <ul className="flex items-center justify-center text-lg normal-case gap-x-12">
            <AnimatePresence mode='wait'>
              {menuItems &&
                menuItems.map((i, index) => (
                  <motion.li
                    initial={variants.hidden(index)}
                    animate={variants.visible(index)}
                    exit={variants.removed}
                    transition={{ duration: 2, type: "tween" }}
                    key={i.id}
                    className="transition-all duration-300 cursor-pointer hover:text-white"
                  >
                    {i.title}
                  </motion.li>
                ))}
            </AnimatePresence>
          </ul>
    
              <div className="hover:bg-gray-500/50 trans rounded-full p-2 mx-3 " onClick={()=> dispatch(handleOpenCartState()) }  >
                <div className="relative  ">
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 cursor-pointer h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className=" bg-orange-400 text-gray-100 rounded-full flex items-center justify-center absolute -top-1 -right-2 h-5  min-w-min w-5  font-semibold ">8</span>
                </div>
                
              </div>
         

          <div
            onClick={() => setOpenProfile(!openProfile)}
            className="dropdown dropdown-end"
          >
            <label
              tabIndex="0"
              htmlFor="my-modal-3"
              className="btn modal-button btn-ghost btn-circle avatar"
            >
              <div className="w-12 h-12 rounded-full">
                <img
                  className="scale-100 focus:scale-95"
                  src={` 
                  ${currentUser?.photoURL ?? avatar}`}
                  alt="not"
                />
              </div>
            </label>
            {/* User Profile Card for desktop */}
            {openProfile && <UserProfile />}
          </div>
        </div>
      </div>

      {/* Mobile AppBar  */}
      <div className=" w-full shadow-slate-600/70 shadow-lg bg-[#1b1d20]  h-[80px] py-3 z-10 fixed  flex justify-between items-center px-2 md:hidden ">
        <div className="">
        <div className="hover:bg-gray-500/50 trans rounded-full p-2 mx-3 " onClick={()=> dispatch(handleOpenCartState()) }  >
                <div className="relative  ">
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 cursor-pointer h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className=" bg-orange-400 text-gray-100 rounded-full flex items-center justify-center absolute -top-1 -right-2 h-5  min-w-min w-5  font-semibold ">8</span>
                </div>
                
              </div>
        </div>
        <div className="flex items-center justify-center ">
          <img src={icon} className="w-12 h-12" alt="icons"></img>
          <Link
            to="/"
            className="relative px-3 text-2xl font-semibold text-white normal-case font-Pop"
          >
            Food.io
            <div
              className="absolute top-0 left-0 w-full h-full rounded-full -z-10 rotate-3 animate-pulse opacity-80 blur-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "
            ></div>
          </Link>
        </div>

        <div className="">
          <div
            className="text-white"
            onClick={() => setOpenProfile(!openProfile)}
          >
            {openProfile ? (
              <motion.div
                key={"rest"}
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.5 }}
                className=""
              >
                <MdRestaurantMenu fontSize={35} />
              </motion.div>
            ) : (
              <motion.div
                key={"menu"}
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 180 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.5 }}
                className=""
              >
                <MdMenu fontSize={35} />
              </motion.div>
            )}
          </div>

          <AnimatePresence>
            {openProfile && (
              <motion.div
                initial={{ opacity: 0, x: 1000 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { ease:[0.25, 1, 0.5, 1] , duration: 0.5 },
                }}
                exit={{
                  opacity: 0,
                  x: 1000,
                  transition: { ease : [0.32, 0, 0.67, 0],type: "linear", duration: 1 },
                }}
                className="absolute z-20 w-screen max-w-screen px-8  top-[80px] -right-2  h-screen bg-gray-900 "
              >
                <div className="flex flex-col items-center justify-center w-full py-12 space-y-9 ">
                  <div className="relative w-16 h-16 rounded-full md:w-24 drop-shadow-2xl">
                    <img
                      className="rounded-full "
                      alt="none"
                      src={`  ${currentUser?.photoURL ?? avatar}`}
                    ></img>
                    <div className=" absolute w-[10px] right-1 top-2 h-[10px] ring-2 ring-gray-900/70 bg-green-500 rounded-full "></div>
                    <div className="absolute inset-0 -z-10 h-[70px] animate-pulse rounded-full opacity-80 blur-lg  w-[70px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "></div>
                  </div>
                  {/* Name */}
                  <div className="">
                    <p className="flex text-xl text-white md:text-2xl">
                      {" "}
                      Hi{" "}
                      <motion.span
                        className=" text-3xl md:text-6xl mb-[-20px] mr-[-45px] pb-[20px] pr-[45px] inline-block "
                        animate={{ rotate: 20 }}
                        transition={{
                          repeat: Infinity,
                          from: 0,
                          duration: 0.2,
                          ease: "easeInOut",
                          repeatType: "reverse",
                        }}
                      >
                        👋
                      </motion.span>{" "}
                      , {currentUser.displayName ?? currentUser.email ?? "user"}
                    </p>
                  </div>

                  {/* menu items */}
                  <ul className="flex flex-col items-center justify-center w-full space-y-3 trans text-semibold text-slate-100 ">
                    <AnimatePresence mode='wait'>
                      {menuItems &&
                        menuItems.map((i, index) => (
                          <motion.li
                            initial={variants.hidden(i.id)}
                            animate={variants.visible(i.id)}
                            exit={variants.removed}
                            transition={{ duration: 1, type: "spring" }}
                            key={i.id}
                            className="cursor-pointer hover:text-white trans py-3 w-[80%] flex justify-center rounded-full  bg-violet-200/10 "
                          >
                            {i.title}
                          </motion.li>
                        ))}
                    </AnimatePresence>
                  </ul>

                  <div className="flex flex-col gap-y-2">
                    <button
                      onClick={() => {
                        navigate("/createItem");
                        setOpenProfile(!openProfile);
                      }}
                      className="inline-flex items-center justify-center 
w-full  h-8 md:h-12 px-6 font-semibold md:tracking-wide
text-gray-900 hover:text-gray-900 transition duration-300 ease-in-out  rounded
shadow-md bg-[#3abff8] hover:bg-[#e1f6ff] 
focus:shadow-outline focus:outline-none"
                    >
                      New Item <MdAdd size={25} className="ml-3" />
                    </button>

                    <button
                      onClick={() => {
                        loggedIn ? onlogOut() : navigate("/login");
                      }}
                      className="inline-flex items-center justify-center 
       w-full h-8 md:h-12 px-6 font-semibold md:tracking-wide
        text-gray-900 hover:text-gray-900 transition duration-300 ease-in-out rounded
         shadow-md bg-[#3abff8] hover:bg-[#e1f6ff]
          focus:shadow-outline focus:outline-none"
                    >
                      {loggedIn ? (
                        <>
                          Log Out <MdLogout className="ml-3" size={25} />
                        </>
                      ) : (
                        <>
                          Log In <MdLogin size={25} className="ml-3" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Header;

const variants = {
  hidden: (i) => ({
    opacity: 0,
    // y: -50 * i,
  }),
  visible: (i) => ({
    opacity: 1,
    // y: 0,
    transition: {
      delay: i * 0.5,
    },
  }),
 
  removed: {
    opacity: 0,
  },
};
