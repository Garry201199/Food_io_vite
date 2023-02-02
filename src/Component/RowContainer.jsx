import React, { forwardRef } from "react";
import { BsBucketFill } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import Page_Not_Found from "../img/NotFound.svg";
const RowContainer = forwardRef(({ foodItems, flag }, ref) => {

  // const ref = useRef(null);
  // const { scrollXProgress } = useScroll({ container: ref })
  // console.log(scrollXProgress);
  // useMotionValueEvent(scrollXProgress, "change", (latest) => {
  //   console.log("Page scroll: ", latest)
  // })
  // const scaleX = useSpring(scrollXProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001
  // });
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: "tween",
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const listVariants = {
    hidden: (i) => ({
      opacity: 0,
      y: 50 * i,
    }),
    animate: () => ({
      opacity: 1,
      y: 0,
    }),
    exit: (i) => ({
      opacity: 0,
      y: -50 * i,
    }),
  };
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        layout
        variants={container}
        initial={"hidden"}
        animate={"visible"}
        ref={ref}
        className={`${
          flag
            ? "overflow-x-scroll justify-between"
            : "flex-wrap justify-center space-x-4 space-y-4 "
        }  scroll-x-4 px-4 transition-all   rounded-lg ease-linear duration-300 place-items-center  scroll-smooth scrollbar-none flex     my-4 text-slate-100 py-12 space-x-2 md:gap-3  `}
      >
        {foodItems && foodItems.length > 1 ? (
          foodItems?.map((i, index) => (
            <motion.div
              positionTransition
              variants={listVariants}
              initial={listVariants.hidden(index)}
              animate={listVariants.animate}
              exit={listVariants.exit(index)}
              transition={{ type: "linear", ease: "easeIn", duration: 0.6 }}
              key={i.id}
              className="bg-bgTwo shadow-neo  min-w-[200px] max-h-fit   md:min-w-[380px]   md:min-h-[240px]  
            border-r border-whiteAlpha border-b
           hover:shadow-neo2  group p-2  md:p-4  rounded-lg  mx-3   "
            >
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex  justify-between w-full    ">
                  <img
                    className="object-scale-down   trans w-28 h-28 md:w-40 md:h-40 -mt-12 md:-mt-24 rouded-full group-hover:scale-125  duration-600"
                    src={i?.imageUrl}
                    alt={i.title}
                  />
                  <motion.div
                    whileTap={{ scale: 0.8 }}
                    className=" md:hidden -mt-4  w-10 self-start h-10 cursor-pointer flex items-center justify-center bg-[#eb2f06] text-white rounded-full"
                  >
                    <BsBucketFill size={25} />
                  </motion.div>
                </div>

                <div className="flex   flex-col h-full  w-2/3 justify-between  gap-y-4 ">
                  <motion.div
                    whileTap={{ scale: 0.8 }}
                    className=" hidden w-10 self-end h-10 cursor-pointer md:flex items-center justify-center bg-[#eb2f06] text-white rounded-full"
                  >
                    <BsBucketFill size={25} />
                  </motion.div>
                  <div className="md:text-lg text-sm mt-2 md:mt-8  font-semibold">
                    <p className="text-end truncate ">{i?.title}</p>
                    <p className="text-sm text-slate-400 text-end mb-1 ">
                      {i?.calories} calories
                    </p>
                    <p className="flex   font-bold  text-normal text-slate-800 text-end justify-end ml-auto w-fit bg-sky-100/80   px-2 py-1  rounded-full ">
                      <span className=" mr-2 text-[#eb2f06] ">$</span>{" "}
                      {i?.price}{" "}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="flex flex-col justify-center w-full items-center ">
            <p className="font-Pop text-2xl md:text-4xl">No data found</p>
            <img
              className=" w-56  h-56 overflow-hidden md:w-96 md:h-96"
              src={Page_Not_Found}
              alt="no data found"
            />
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
});

export default RowContainer;
