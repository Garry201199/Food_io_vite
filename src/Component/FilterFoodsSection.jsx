import React, { useState } from "react";
import { categories } from "../utils/heroData";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import RowContainer from "./RowContainer";
import { useSelector } from "react-redux";
import { Items } from "../store/items-Slice";

// const container ={
//   hidden:{},
//   show:{
//     opacity:1,
//     transition: {
//       staggerChildren: 0.3,
//       delayChildren: 0.5,
//       when:'afterChildren'
//     },
//   }
// }
const FilterFoodsSection = () => {
  const [filter, setFilter] = useState("Chicken");

  const items = useSelector(Items);

  return (
    <section className="md:mx-16 bg-gradient-to-t  from-[#010101] to-[#121213]  px-4  text-[#cbcbcb]  md:py-8  ">
      <div className="flex items-center  justify-between">
        <p className="font-semibold w-fit text-[1.8rem] lg:text-[2.1rem] md:text-[2rem] relative ">
          Our <span className="text-[#f97316]">Hot</span> Dishes
          <span className="w-[60%] h-[6px] md:h-2 absolute left-0 rounded-full -bottom-2 bg-[#f97316] ">
            {" "}
          </span>
        </p>
      </div>
      <AnimateSharedLayout type="crossfade">
        <div
          layoutid="row"
          className=" flex  px-4 gap-6  rounded-lg mt-3 drop-shadow-lg justify-start  py-6 scrollbar-none lg:justify-center items-center overflow-x-auto scroll-smooth  w-full  "
        >
          {categories &&
            categories.map((category, index) => (
              <motion.div
                whileTap={{ scale: 0.85 }}
                key={category.id}
                className={`group   ${
                  filter === category.urlParamName ? "bg-[#918ced]" : "bg-bgTwo"
                }   cursor-pointer w-24 md:w-28 min-w-[94px] h-28 hover:bg-[#918ced]  rounded-lg drop-shadow-xl  flex flex-col gap-3 items-center justify-center   `}
                onClick={() => setFilter(category.urlParamName)}
              >
                <div
                  className={`w-10 h-10 rounded-full shadow-lg ${
                    filter === category.urlParamName
                      ? "bg-white "
                      : "bg-[#918ced]"
                  } group-hover:bg-[white]  flex items-center justify-center`}
                >
                  {category.icon}
                </div>
                <p
                  className={`text-sm font-semibold ${
                    filter === category.urlParamName
                      ? "text-slate-900 "
                      : "text-white"
                  }  group-hover:text-slate-900`}
                >
                  {category.name}
                </p>
              </motion.div>
            ))}
        </div>
        <div layoutid="row" className="w-full">
          <RowContainer
            foodItems={items.filter(
              (i) => i.categories.toLowerCase() == filter.toLowerCase()
            )}
            isSmallDev={window.innerWidth <= 768 ? true : false}
            flag={false}
          />
        </div>
      </AnimateSharedLayout>

    </section>
  );
};

export default FilterFoodsSection;
// const variants = {
//   hidden: (i) => ({
//     opacity: 0,
//     // y: -50 * i,
//   }),
//   visible: (i) => ({
//     opacity: 1,
//     // y: 0,
//     transition:{

//       delay: i * 0.5,
//     },
//   }),

//   removed: {
//     opacity: 0,
//   },
// }
{
  /* <div
              key={category.id}
              className="group shadow-inner cursor-pointer border border-gray-100/20 transition-all 
              duration-200 ease-in-out w-[100px] h-[140px] md:w-[150px] lg:mb-12  flex  flex-col items-center justify-center 
            bg-[#24252b] hover:bg-[#918ced] backdrop-blur-xl lg:p-4 md:p-3 p-2 rounded-2xl "
            >
              <div className="w-14  p-1 h-14 rounded-full bg-[#918ced] shadow-2xl  group-hover:bg-[#24252b]   drop-shadow-2xl flex items-center justify-center ">
                {category.icon}
              </div>
              <p className="text-base text-gray-300 group-hover:text-white  mt-4 font-semibold ">
                {category.name}
              </p>
            </div> */
}
