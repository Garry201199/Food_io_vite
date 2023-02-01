import { motion, useMotionValue ,useTransform } from "framer-motion"

const items = ["Hi" ,'Haryy','How']

const List = () => {
 

  return (
    <motion.ul
 
     className="bg-slate-300 text-gray-900">
      {items.map((item, index) => (
        <motion.li
            className="text-4xl text-gray-900 "
          key={item}
          whileHover={{ color: "#00b3ff" }}
          whileTap={{ color: "#ffa500" }}
           
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  )
}

export default List