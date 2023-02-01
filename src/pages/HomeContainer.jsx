import React from "react";
import bike from "../img/delivery.png";
import bg from "../img/heroBg.png";
import { heroData } from "../utils/heroData";
import { AnimatePresence, motion } from "framer-motion";
import {fadeIn} from '../variants/variants'
import FoodSection from "../Component/FoodSection";
import FilterFoodsSection from "../Component/FilterFoodsSection";
import CartSlider from "../Component/CartSlider";
import { useSelector } from "react-redux";
import { openCart } from "../store/items-Slice";
const container = {
    hidden: {
      opacity:0
    },
    show: {
      opacity:1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  };
const HomeContainer = () => {
 

  const isCartOpen = useSelector( openCart )
  console.log(isCartOpen);
  // if (checkingStatus) {
  //   <h1 className="mt-24 text-2xl whitespace-pre-wrap text-cyan-100">
  //     Wait for it GUys
  //   </h1>;
  // }
  return (
    <>
    <motion.section
      variants={container}
      initial='hidden'
      whileInView={'show'}
      id="home"
      className="flex flex-col items-center justify-center w-full mt-24 md:px-16 md:py-2"
    >
      <div className="grid w-full grid-cols-1 gap-4 px-4 md:grid-cols-2 ">
      <div className="flex flex-col items-center justify-center flex-1 gap-6 py-2 md:items-start">
        {/* Bike Delivery */}
        <motion.div variants={fadeIn('down')} className="flex items-center justify-center p-1 font-semibold bg-orange-100 rounded-full text-slate-800 ">
          <p className="px-1 text-orange-600">Bike Delivery</p>
          <div className="w-10 h-10 overflow-hidden bg-white rounded-full shadow-2xl drop-shadow-2xl">
            <img lazy="true"
              className="object-contain w-full h-full"
              src={bike}
              alt="bike"
            />
          </div>
        </motion.div>
        {/* Fastest text  */}
 
        <motion.p variants={fadeIn('down')} className="text-[2.5rem] font-semibold  md:tracking-wide  tracking-wider  text-white  md:text-start text-center md:text-[3.5rem] lg:text-[4rem] ">
          The Fastest Delivery In{" "}
          <span className="text-[3rem] text-orange-500 md:text-[4rem]  lg:text-[4.5rem]  ">
            Your City
          </span>
        </motion.p>
        {/* faltu paragraph */}
        <motion.p variants={fadeIn('down')} className="text-center md:text-left md:w-3/4">
          Rare nepenthe on yore sainted heart god nothing many, an and nothing
          the placid, angels upon some something till human to will but sad.
          Here and floor thing my and it than, the to out forgotten this cried
          said on.
        </motion.p>
        {/* order now button */}

        <motion.div variants={fadeIn('down')} className="flex justify-center w-full md:justify-start ">
          <div className="grid items-start justify-center gap-8">
            <div className="relative group">
              <div className="absolute  -inset-0.5 bg-gradient-to-r from-yellow-100 to-orange-300 rounded-full blur opacity-75 group-hover:opacity-95 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <button
                className="relative flex items-center justify-center py-4 font-semibold leading-none bg-orange-500 rounded-full px-7 text-slate-100 "
              >
                Order Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      {/* right section */}
      <motion.div variants={fadeIn('left')} className="relative flex items-center flex-1 py-2 md:overflow-hidden">
        {/* bg image */}
        <img
          className="h-[420px] ml-auto w-full md:h-[500px] lg:w-auto lg:h-[650px]  "
          lazy="true"
          src={bg}
          alt="bg"
        />
        {/* overlay cards section */}
        <div className="absolute flex flex-wrap items-center justify-center w-full h-full gap-2 py-2 md:gap-4 lg:gap-14 lg:py-16 lg:px-16 ">
          {/* cards */}
          {heroData &&
            heroData.map((i , index) => (
              <div
    
                key={i.id}
                className=" w-[140px] mb-4 md:w-[190px] shadow-2xl 
            lg:even:mb-12  flex  flex-col items-center 
            justify-center  bg-whiteAlpha backdrop-blur-sm 
            lg:p-4 md:p-3 p-2 rounded-2xl "
              >
                <img lazy='true'
                  src={i.imgsrc}
                  className="w-20 -mt-10 lg:w-40 md:w-32 md:-mt-16 lg:-mt-24"
                  alt="I5"
                />
                <p className="font-semibold text-center sm:text-lg lg:text-xl sm:mt-1 lg:mt-4 dropshadow-2xl text-slate-50">
                  {i.name}
                </p>
                <p className="my-1 tracking-tight text-center sm:text-sm dropshadow-2xl md:my-2 text-slate-200">
                  {i.desc}
                </p>
                <span className="px-3 py-1 text-base font-semibold uppercase bg-blue-200 rounded-full text-slate-800">
                  <span className="font-bold text-red-500">$</span> {i.price}
                </span>
              </div>
            ))}
        </div>
      </motion.div>
      </div>
    </motion.section>
    <FoodSection/>
    <FilterFoodsSection/>
    <AnimatePresence mode='wait' >
    {
      isCartOpen && <CartSlider />
    }
    </AnimatePresence>
    </>
  );
};

export default HomeContainer;
