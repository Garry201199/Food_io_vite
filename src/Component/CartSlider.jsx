import React from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { MdRemoveShoppingCart } from "react-icons/md";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { handleOpenCartState, openCart } from "../store/items-Slice";
const CartSlider = () => {
  // const isCartOpen = useSelector(openCart)
  const disatch = useDispatch()
  return (
    <motion.div
      initial={{ opacity: 0, x: 1000 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { ease: [0.34, 1.56, 0.64, 1], duration: 0.3 },
      }}
      exit={{
        opacity: 0,
        x: 1000,
        transition: { ease: [0.16, 1, 0.3, 1],type: 'tween' , duration: 0.8 },
      }}
      className="fixed bg-[#242424] rounded-l-[3rem] pt-12 z-20  md:max-w-screen-sm min-w-[500px] trans drop-shadow-sm backdrop-blur-lg  overflow-hidden  right-0 top-0   h-screen   "
    >
      <div className="w-full text-fuchsia-200  min-h-screen  ">
        {/* //? top section */}

        <div className=" flex mb-6 justify-between items-center w-full px-8 ">
          <div className="cursor-pointer hover:text-fuchsia-500 trans duration-100 " onClick={()=> disatch( handleOpenCartState() )} >
            {" "}
            <IoArrowBackCircleSharp size={45} />{" "}
          </div>
          <div className="">
            <p className="text-2xl font-bold  ">Cart</p>{" "}
          </div>
          <button className="flex justify-center border border-fuchsia-400/80 hover:text-fuchsia-50 text-fuchsia-900 bg-fuchsia-200 hover:bg-fuchsia-700 duration-100 trans rounded-2xl px-3 py-2 items-center space-x-2 ">
            {" "}
            <p className="text-lg font-semibold">Clear</p>{" "}
            <MdRemoveShoppingCart size={25} />{" "}
          </button>
        </div>

        {/* //? Below section */}
        <div className="  pt-6 w-full relative bg-[#2d2d2d]  h-screen flex flex-col  rounded-t-[3rem] ">
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
          <div className="px-16 pt-8 h-[400px]   gap-y-6 bg-[#484848] drop-shadow-xl divide-y-2 flex flex-col w-full rounded-t-[3rem] ">
            <div className="w-full   gap-y-6 flex flex-col">
              <div className="flex w-full justify-between text-xl  items-center ">
                <p>Sub Total : </p>
                <p>$ 57</p>
              </div>
              <div className="flex w-full justify-between text-xl  items-center ">
                <p>Delivery : </p>
                <p>$ 57</p>
              </div>
            </div>
            <div className="w-full pt-8">
              <div className="flex w-full font-bold justify-between text-xl  items-center ">
                <p>Total : </p>
                <p>$ 57</p>
              </div>
              <div className="flex justify-center w-full  ">
                <button className="relative flex items-center justify-center py-4 font-semibold leading-none bg-orange-500 rounded-full px-7 text-slate-100 ">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CartSlider;
