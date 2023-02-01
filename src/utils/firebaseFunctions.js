import { collection, doc, getDocs, orderBy, query, setDoc } from "firebase/firestore";
import { db } from "../firebase.config";

//!  set Item function
export const saveData = async (data)=>{
     await setDoc(doc(db, "FoodItems",
     `${Date.now()}`), data , {merge : true} )
 
}

//! get All Item function 
export const getAllItems =async()=>{
     const result = 
     await getDocs(query(collection( db,'FoodItems'),
      orderBy('id' ,'desc') ))
      .then((res) =>  res.docs.map((doc) =>  doc.data()))
      .then(data => data)
     //  console.log(result);
      
     return result 
}











