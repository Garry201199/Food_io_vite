import I5 from "../img/i5.png";
import F10 from "../img/f10.png";
import FI5 from "../img/fi3.png";
import CU4 from "../img/cu4.png";
import {GiChickenLeg ,GiBowlOfRice} from 'react-icons/gi'
import {MdRamenDining} from 'react-icons/md'
import {FaFish ,FaAppleAlt ,FaIceCream} from 'react-icons/fa'
import {BiDrink} from 'react-icons/bi'
export  const heroData =[
    {id:1 , name:'Icecream', price:5.25 , desc:'Strawberry & Vanilla' ,imgsrc:I5 },
    {id:2 , name:'Fruits', price:4.50 , desc:'Watermelon', imgsrc:F10 },
    {id:3 , name:'Fish', price:9.32 , desc:'Fish Fry', imgsrc:FI5 },
    {id:4 , name:'Chicken', price:12 , desc:'Butter Chicken', imgsrc:CU4 },
  ]

// < GiChickenLeg  className="text-slate-800 text-lg group-hover:text-slate-800    " />
 
export const categories = [
    {
      id: 1,
      name: "Chicken",
      urlParamName: "chicken",
      icon: (< GiChickenLeg  className=" text-slate-800 text-lg group-hover:text-slate-800    " />)
    },
    {
      id: 2,
      name: "Curry",
      urlParamName: "curry",
      icon:(<MdRamenDining  className="text-slate-800 text-lg group-hover:text-slate-800    " />)
    },
    {
      id: 3,
      name: "Rice",
      urlParamName: "rice",
      icon : (<GiBowlOfRice  className="text-slate-800 text-lg group-hover:text-slate-800    " />)
    },
    {
      id: 4,
      name: "Fish",
      urlParamName: "fish",
      icon: (<FaFish  className="text-slate-800 text-lg group-hover:text-slate-800    " />)
    },
    {
      id: 5,
      name: "Fruits",
      urlParamName: "fruits",
      icon: (<FaAppleAlt  className="text-slate-800 text-lg group-hover:text-slate-800    " />)

    },
    {
      id: 6,
      name: "Icecreams",
      urlParamName: "icecreams",
      icon: (<FaIceCream  className="text-slate-800 text-lg group-hover:text-slate-800    " />)

    },
    {
      id: 7,
      name: "Soft Drinks",
      urlParamName: "soft drinks",
      icon: (<BiDrink    className="text-slate-800 text-lg group-hover:text-slate-800    " />)
    },
  ];