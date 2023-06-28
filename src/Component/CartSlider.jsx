import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useMemo, useRef } from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { MdRemoveShoppingCart } from "react-icons/md";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  cartItems,
  decrementItemQty,
  handleClearCart,
  handleOpenCartState,
  incrementItemQty,
  openCart,
} from "../store/cart-slice";
const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
      when: "beforeChildren",
    },
  },
};
const CartSlider = ({ isSmallDev }) => {
  const dispatch = useDispatch();
  const currentCartItems = useSelector(cartItems);
  const openCurrentCart = useSelector(openCart);
  let hasRenderedCartItemsRef = useRef(false);

  const subTotal = useMemo(
    () => currentCartItems.reduce((acc, itr) => acc + itr.qty * +itr.price, 0),
    [currentCartItems]
  );

  const Total = useMemo(
    () => (subTotal >= 500 ? subTotal : subTotal - 40),
    [subTotal]
  );
  console.log("🚀 ~ file: CartSlider.jsx:28 ~ CartSlider ~ subTotal", subTotal);

  useEffect(() => {
    if (openCurrentCart) {
      hasRenderedCartItemsRef.current = true;
    } else {
      hasRenderedCartItemsRef.current = false;
    }
  }, [openCurrentCart]);

  return (
    <motion.div
      initial={{ opacity: 0, x: isSmallDev ? -500 : 500 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { ease: [0.16, 1, 0.3, 1], duration: 0.5 },
      }}
      exit={{
        opacity: 0,
        x: isSmallDev ? -500 : 500,
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
          <button
            onClick={() => dispatch(handleClearCart())}
            className="flex justify-center border transition-colors duration-300 border-fuchsia-400/80 hover:text-fuchsia-50 text-fuchsia-900 bg-fuchsia-200 hover:bg-fuchsia-700  ease-in-out rounded-2xl px-3 py-2 items-center space-x-2 "
          >
            {" "}
            <p className="text-lg font-semibold">Clear</p>{" "}
            <MdRemoveShoppingCart size={25} />{" "}
          </button>
        </div>

        {/* //? Below section */}
        <div className="  pb-14 sm:pb-1 pt-6 w-full relative bg-[#2d2d2d]/60  h-screen flex flex-col justify-between  rounded-t-[3rem] ">
          {/* //? Individual Item container  */}
          <div className="px-8 flex flex-col gap-y-3 overflow-y-auto scrollbar-none  ">
            {/* //? Individual Item  */}
            <AnimatePresence mode="wait">
              {currentCartItems &&
                currentCartItems.map((cartItem, i) => (
                  <motion.div
                    variants={{
                      hidden: (i) => ({
                        opacity: 0,
                        y: -50 * i,
                      }),
                      visible: (i) => ({
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: i * 0.5,
                        },
                      }),
                      removed: {
                        opacity: 0,
                        x: 100,
                        transition: {
                          type: "tween",
                          ease: "easeOut",
                        },
                      },
                    }}
                    initial={
                      hasRenderedCartItemsRef.current ? "visible" : "hidden"
                    }
                    animate="visible"
                    exit="removed"
                    custom={i}
                    key={cartItem.id}
                    className=" bg-[#353535] drop-shadow-xl backdrop-blur-sm flex min-h-[5rem] items-center  px-4  rounded-2xl "
                  >
                    <div className=" w-1/5    flex justify-center ">
                      {" "}
                      <img
                        className="w-16 h-16   object-contain "
                        src={cartItem?.imageUrl}
                        alt={cartItem?.title}
                      />
                    </div>
                    <div className="flex px-1 w-3/5 truncate flex-col items-start ">
                      {" "}
                      <p className="md:text-lg text-base   truncate ">
                        {cartItem?.title}{" "}
                      </p>{" "}
                      <p className="font-semibold text-sm ">
                        {" "}
                        $ {cartItem.price}
                      </p>{" "}
                    </div>
                    <div className="w-1/5 text-xl  backdrop-blur-xl flex space-x-2 justify-center items-center   ">
                      {" "}
                      <motion.button
                        onClick={() => dispatch(decrementItemQty(cartItem))}
                        whileTap={{ scale: 0.8 }}
                        className="text-2xl text-white cursor-pointer "
                      >
                        {" "}
                        <FaMinusCircle />{" "}
                      </motion.button>{" "}
                      <p>{cartItem?.qty}</p>{" "}
                      <motion.button
                        onClick={() => dispatch(incrementItemQty(cartItem))}
                        whileTap={{ scale: 0.8 }}
                        className="text-2xl text-white cursor-pointer "
                      >
                        {" "}
                        <FaPlusCircle />{" "}
                      </motion.button>{" "}
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>

          {/* //? total section */}
          {currentCartItems && currentCartItems.length > 0 && (
            <motion.div
              initial={{ y: 500, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 500, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className=" md:px-16 px-8 pt-8 h-[400px]   gap-y-6 bg-[#484848] drop-shadow-xl  flex flex-col w-full rounded-t-[3rem] "
            >
              {subTotal >= 500 ? (
                <motion.div
                  initial={{ opacity: 0, x: 100, scale: 0 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex w-full rounded-full text-base justify-center  text-white bg-[#32cd32]/80    items-center"
                >
                  🎊Your are now eligible for free delivery !🎊
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex w-full rounded-full justify-center  text-white bg-gradient-to-t from-[#255CD2]  to-[#1D52C1] text-base   items-center"
                >
                  Free delivery above cart worth $ 500
                </motion.div>
              )}

              <div className="w-full divide-y-2  gap-y-6 flex flex-col">
                <div>
                  <div className="flex w-full text-gray-300 justify-between text-xl  items-center ">
                    <p>Sub Total : </p>
                    <p>$ {subTotal}</p>
                  </div>
                  <div
                    className={`flex ${
                      subTotal >= 500 ? "line-through" : ""
                    }  w-full text-gray-300 justify-between text-xl  items-center`}
                  >
                    <p>Delivery : </p>
                    <p>$ 40</p>
                  </div>
                </div>
                <div>
                  <div className="flex trans w-full text-gray-50 font-bold justify-between text-xl  items-center ">
                    <p>Total : </p>
                    <p>$ {Total}</p>
                  </div>
                  <div className="flex justify-center w-full  ">
                    <button className="relative flex items-center  justify-center py-4 font-semibold leading-none transition-all duration-300 ease-in-out  bg-orange-500 hover:bg-orange-600 rounded-full px-7 text-slate-100 ">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CartSlider;
