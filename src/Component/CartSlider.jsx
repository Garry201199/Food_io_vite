import { motion } from "framer-motion";
import React from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { MdRemoveShoppingCart } from "react-icons/md";
import { FaMinusCircle ,FaPlusCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { handleOpenCartState } from "../store/items-Slice";

const container = {
  hidden: {
    opacity:0
  },
  show: {
    opacity:1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
      when : 'afterChildren'
    },
  },
};
const CartSlider = ({isSmallDev}) => {
  const dispatch = useDispatch();
  return (
    <motion.div
      initial={{ opacity: 0, x: isSmallDev ? -500 : 500 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { ease: [0.16, 1, 0.3, 1], duration: 0.5 },
      }}
      exit={{
        opacity: 0, x : isSmallDev ? -500 : 500,
        transition: { ease: [0.64, 0, 0.78, 0], duration: 0.5 },
      }}
      variants={container}
      className="fixed bg-bgOne rounded-tr-[3rem] md:rounded-l-[3rem] pt-12 z-20  md:max-w-screen-sm md:min-w-[500px] w-screen max-w-screen  drop-shadow-sm backdrop-blur-lg  overflow-hidden  right-0 top-0   h-screen   "
    >
      <div className="w-full text-fuchsia-200  min-h-screen  ">
        {/* //? top section */}

        <div className=" flex mb-6 justify-between items-center w-full px-8 ">
          <div
            className="cursor-pointer hover:text-fuchsia-500  duration-100 "
            onClick={() => dispatch(handleOpenCartState())}
          >
            {" "}
            <IoArrowBackCircleSharp size={45} />{" "}
          </div>
          <div className="">
            <p className="text-2xl font-bold  ">Cart</p>{" "}
          </div>
          <button className="flex justify-center border transition-colors duration-300 border-fuchsia-400/80 hover:text-fuchsia-50 text-fuchsia-900 bg-fuchsia-200 hover:bg-fuchsia-700  ease-in-out rounded-2xl px-3 py-2 items-center space-x-2 ">
            {" "}
            <p className="text-lg font-semibold">Clear</p>{" "}
            <MdRemoveShoppingCart size={25} />{" "}
          </button>
        </div>

        {/* //? Below section */}
        <div className="  pt-6 w-full relative bg-[#2d2d2d]  h-screen flex flex-col justify-between  rounded-t-[3rem] ">
          {/* //? Individual Item container  */}
          <div className="px-8 flex flex-col gap-y-3 overflow-y-auto scrollbar-none  ">
            {/* //? Individual Item  */}
            <div className=" bg-[#383838] drop-shadow-xl flex min-h-[5rem] items-center  px-4  rounded-2xl ">
              <div className=" w-1/3 flex justify-center ">
                {" "}
                <img
                  className="w-16 h-16   object-cover "
                  src="https://firebasestorage.googleapis.com/v0/b/food-io-71962.appspot.com/o/Images34%2F1674754590772-f10.png?alt=media&token=7ec000f7-4da7-4a98-afcd-eafb83d8fc83"
                  alt="image"
                />
              </div>
              <div className="flex w-2/3 flex-col items-start ">
                {" "}
                <p className="text-lg truncate ">Water Melon </p>{" "}
                <p className="font-semibold text-sm "> $ 120</p>{" "}
              </div>
              <div className="w-1/3 text-xl   flex space-x-2 justify-center items-center   ">
                {" "}
                <motion.button whileTap={{scale: 0.80}}  className="text-2xl text-white cursor-pointer "> <FaMinusCircle/> </motion.button>{" "}
                <p>5</p>{" "}
                <motion.button whileTap={{scale: 0.80}} className="text-2xl text-white cursor-pointer "> <FaPlusCircle/> </motion.button>{" "}
              </div>
            </div>
            <div className=" bg-[#383838] drop-shadow-xl flex min-h-[5rem] items-center  px-4  rounded-2xl ">
              <div className=" w-1/3 flex justify-center ">
                {" "}
                <img
                  className="w-16 h-16   object-cover "
                  src="https://firebasestorage.googleapis.com/v0/b/food-io-71962.appspot.com/o/Images34%2F1674754590772-f10.png?alt=media&token=7ec000f7-4da7-4a98-afcd-eafb83d8fc83"
                  alt="image"
                />
              </div>
              <div className="flex w-2/3 flex-col items-start ">
                {" "}
                <p className="text-lg truncate ">Water Melon </p>{" "}
                <p className="font-semibold text-sm "> $ 120</p>{" "}
              </div>
              <div className="w-1/3 text-xl   flex space-x-2 justify-center items-center   ">
                {" "}
                <button className="text-2xl cursor-pointer "> - </button>{" "}
                <p>5</p>{" "}
                <button className="text-2xl cursor-pointer "> + </button>{" "}
              </div>
            </div>
            <div className=" bg-[#383838] drop-shadow-xl flex min-h-[5rem] items-center  px-4  rounded-2xl ">
              <div className=" w-1/3 flex justify-center ">
                {" "}
                <img
                  className="w-16 h-16   object-cover "
                  src="https://firebasestorage.googleapis.com/v0/b/food-io-71962.appspot.com/o/Images34%2F1674754590772-f10.png?alt=media&token=7ec000f7-4da7-4a98-afcd-eafb83d8fc83"
                  alt="image"
                />
              </div>
              <div className="flex w-2/3 flex-col items-start ">
                {" "}
                <p className="text-lg truncate ">Water Melon </p>{" "}
                <p className="font-semibold text-sm "> $ 120</p>{" "}
              </div>
              <div className="w-1/3 text-xl   flex space-x-2 justify-center items-center   ">
                {" "}
                <button className="text-2xl cursor-pointer "> - </button>{" "}
                <p>5</p>{" "}
                <button className="text-2xl cursor-pointer "> + </button>{" "}
              </div>
            </div>
            <div className=" bg-[#383838] drop-shadow-xl flex min-h-[5rem] items-center  px-4  rounded-2xl ">
              <div className=" w-1/3 flex justify-center ">
                {" "}
                <img
                  className="w-16 h-16   object-cover "
                  src="https://firebasestorage.googleapis.com/v0/b/food-io-71962.appspot.com/o/Images34%2F1674754590772-f10.png?alt=media&token=7ec000f7-4da7-4a98-afcd-eafb83d8fc83"
                  alt="image"
                />
              </div>
              <div className="flex w-2/3 flex-col items-start ">
                {" "}
                <p className="text-lg truncate ">Water Melon </p>{" "}
                <p className="font-semibold text-sm "> $ 120</p>{" "}
              </div>
              <div className="w-1/3 text-xl   flex space-x-2 justify-center items-center   ">
                {" "}
                <button className="text-2xl cursor-pointer "> - </button>{" "}
                <p>5</p>{" "}
                <button className="text-2xl cursor-pointer "> + </button>{" "}
              </div>
            </div>
          </div>

          {/* //? total section */}
          <motion.div
          initial={{y : 500 , opacity :0}}
          animate={{y:0 , opacity :1 }}
          exit={{y : 500 , opacity :0}}
          transition={{duration : 0.5 }}
           className="px-16 pt-8 h-[400px]   gap-y-6 bg-[#484848] drop-shadow-xl divide-y-2 flex flex-col w-full rounded-t-[3rem] ">
            <div className="w-full   gap-y-6 flex flex-col">
              <div className="flex w-full text-gray-300 justify-between text-xl  items-center ">
                <p>Sub Total : </p>
                <p>$ 57</p>
              </div>
              <div className="flex w-full text-gray-300 justify-between text-xl  items-center ">
                <p>Delivery : </p>
                <p>$ 57</p>
              </div>
            </div>
            <div className="w-full pt-8">
              <div className="flex w-full text-gray-50 font-bold justify-between text-xl  items-center ">
                <p>Total : </p>
                <p>$ 57</p>
              </div>
              <div className="flex justify-center w-full  ">
                <button className="relative flex items-center  justify-center py-4 font-semibold leading-none transition-all duration-300 ease-in-out  bg-orange-500 hover:bg-orange-600 rounded-full px-7 text-slate-100 ">
                  Order Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CartSlider;
