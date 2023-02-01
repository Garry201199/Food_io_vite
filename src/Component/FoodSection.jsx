import React, { useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { motion } from "framer-motion";
import RowContainer from "./RowContainer";
import { useSelector } from "react-redux";
import { Items } from "../store/items-Slice";

const FoodSection = () => {
  const foodItems = useSelector(Items);

  const containerRef = useRef();

  const scrollTo = (scrollOffset) => {
    containerRef.current.scrollLeft += scrollOffset;
  };
  return (
    <section className="md:mx-16  px-4  text-[#cbcbcb]  md:py-8  ">
      <div className="flex items-center justify-between">
        <p className="font-semibold flex w-fit text-[1.8rem] lg:text-[2.1rem] md:text-[2rem] relative ">
          Our <span className="text-[#f97316] px-1">Fresh & Healthy</span> Foods
          <span className="w-[60%] h-[6px] md:h-2 absolute left-0 rounded-full -bottom-2 bg-[#f97316] ">
            {" "}
          </span>
        </p>

        <div className="hidden md:flex gap-x-4">
          <motion.div
            onClick={() => scrollTo(-200)}
            whileTap={{ scale: 0.5 }}
            className="flex items-center justify-center w-8 h-8 text-orange-600 transition-all duration-100 ease-linear bg-orange-300 rounded-lg hover:bg-orange-400 hover:text-white hover:border-1 hover:border hover:border-orange-600 "
          >
            <MdChevronLeft size={28} />{" "}
          </motion.div>
          <motion.div
            onClick={() => scrollTo(+200)}
            whileTap={{ scale: 0.5 }}
            className="flex items-center justify-center w-8 h-8 text-orange-600 transition-all duration-100 ease-linear bg-orange-300 rounded-lg hover:bg-orange-400 hover:text-white hover:border-1 hover:border hover:border-orange-600 "
          >
            <MdChevronRight size={28} />{" "}
          </motion.div>
        </div>
      </div>
      <RowContainer
        ref={containerRef}
        foodItems={foodItems.filter((i) => i.categories == "Curry")}
        flag={true}
      />
    </section>
  );
};

export default FoodSection;
