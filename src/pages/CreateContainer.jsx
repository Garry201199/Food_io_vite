import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  MdCloudUpload,
  MdDelete,
  MdFastfood,
  MdFoodBank,
  MdMoney,
} from "react-icons/md";
import { Menu } from "@headlessui/react";
import { categories } from "../utils/heroData";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { TailSpin } from "react-loader-spinner";
import { storage } from "../firebase.config";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { getAllItems, saveData } from "../utils/firebaseFunctions";
import { setAllItems } from "../store/items-Slice";

const CreateContainer = () => {
  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(false);
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("");
  const [msg, setMsg] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(category);
  }, [category]);

  const onUploadImage = (e) => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Images34/${Date.now()}-${imageFile.name}`);

    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        setFields(true);
        setAlertStatus("danger");
        switch (error.code) {
          case "storage/unauthorized":
            setMsg("User doesn't have permission to access the object");
            break;
          case "storage/canceled":
            setMsg("User canceled the upload");
            break;
          case "storage/unknown":
            setMsg("Unknown error occurred, inspect error.serverResponse");
            break;
        }
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            setImageAsset(downloadURL);
            setIsLoading(false);
            setFields(true);
            setAlertStatus("success");
            setMsg("Image Uploaded Successfully");
            setTimeout(() => {
              setFields(false);
              setIsLoading(false);
            }, 4000);
            console.log("File available at", downloadURL);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    );
  };
  const onDeleteImage = () => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setIsLoading(false);
      setFields(true);
      setMsg("Image Deleted Successfully!");
      setAlertStatus("success");
      setTimeout(() => {
        setFields(false);
      }, 4000);
    });
  };
  const saveDetails = () => {
    setIsLoading(true);
    window.scrollTo(0, 0);
    try {
      if (!imageAsset || !categories || !title || !price) {
        setFields(true);
        setMsg("Required fields must be not be empty ...");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      } else {
        //* data object creation
        const data = {
          id: Date.now(),
          title:title,
          calories:calories,
          categories: categories,
          price:price,
          imageUrl: imageAsset,
          qty: 1,
        };

        //* data object saving
        saveData(data)
        
        setIsLoading(false);
        setFields(true);
        setMsg("Data uploaded successfully!!");
        setAlertStatus("success");
        //* clearing fields
        clearData();
        setTimeout(() => {
          setFields(false);
        }, 4000);
  
        
      }
    } catch (error) {
      //* error catching - data upload
      setFields(true);
      setMsg("Error while uploading the details : Try Again..");
      setAlertStatus("danger");
      setTimeout(() => {
        setFields(false);
        setIsLoading(false);
      }, 4000);
    }
    getData()
  };
  const clearData = () => {
    setTitle("");
    setImageAsset(null);
    setCalories("");
    setPrice("");
    setCategory("Select Food Category");
  };

  const getData =async()=>{
    // ! setting all food items to the state 
    await getAllItems().then((data) => {
        dispatch(setAllItems(data) )
    })
  }

  return (
    <div className=" flex flex-col items-center justify-start w-full  h-fit mt-24">
      <div className=" w-[90%] md:w-[75%]   gap-4 border border-gray-300 p-4 flex flex-col rounded-xl items-center justify-between">
          <AnimatePresence>
          {fields && (
            <motion.div
              key="nov"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeIn" }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.3 } }}
              className={`trans md:py-4 md:px-12 py-2 px-2 rounded-md font-semibold  ${
                alertStatus === "danger"
                  ? "bg-[#FFBABA]  hover:bg-[#FFA4A4] text-[#D8000C] "
                  : "bg-[#B4F298] hover:bg-[#95ef6c] text-[#4F8A10]"
              } shadow-sm  shadow-slate-100 w-full  flex justify-evenly items-center md:text-normal text-sm md:text-lg `}
            >
              <div className="flex items-center justify-between w-full ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="flex-shrink-0 w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span className="max-w-[70%]">{msg} </span>
                <div
                  className={` ${
                    alertStatus === "danger"
                      ? "border-[#D8000C] "
                      : "border-[#4F8A10]"
                  } border-2  rounded-full p-1 cursor-pointer `}
                  onClick={() => {
                    setFields(false);
                    setIsLoading(false);
                  }}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </motion.div>
          )}
          </AnimatePresence>
        

          <div
            className="flex w-full p-2 border-b border-gray-200 rounded-lg focus:border-gray-50 first-letter:"
          >
            <MdFastfood size={25} />
            <input
              placeholder="Give me any name..."
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="w-full h-full px-3 text-lg text-white bg-transparent border-none outline-none placeholder:text-gray-500 "
            ></input>
          </div>

          {/* drop down */}
            <Menu as="div" className="w-full dropdown ">
              <Menu.Button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left dropdown-btn"
              >
                <div>
                  <div className="text-[15px] font-medium capitalize leading-tight">
                    {category !== null ? (
                      <span className="text-white">{category}</span>
                    ) : (
                      "Select Food Category"
                    )}
                  </div>
                  <div className="text-[13px]">Choose food type</div>
                </div>
                {isOpen ? (
                  <RiArrowDownSLine className="dropdown-icon-secondary" />
                ) : (
                  <RiArrowUpSLine className="dropdown-icon-secondary" />
                )}
              </Menu.Button>
            
              <Menu.Items className="text-sm duration-1000 ease-in-out scale-95 dropdown-menu trasition md:text-normal ">
                {categories.map((i) => {
                  return (
                    <Menu.Item
                      as="li"
                      key={i.id}
                      onClick={() => setCategory(i.urlParamName)}
                      className="px-8 py-2 transition delay-75 cursor-pointer hover:bg-gray-500 md:py-3 rounded-xl hover:text-white"
                    >
                      {i.name}
                    </Menu.Item>
                  );
                })}
              </Menu.Items>
            </Menu>

          {/* image Uploader */}
          <div 
            className="group p-5 flex justify-center transition-all duration-400 ease-linear group 
           hover:shadow-lg hover:shadow-slate-100/10 hover:bg-slate-800/70 items-center flex-col border-2 border-dotted border-gray-300 w-full
        h-[225px] cursor-pointer md:h-[350px] rounded-lg"
          >
            {isLoading ? (
              <TailSpin
                height="70"
                width="80"
                color="#14b8a6"
                ariaLabel="tail-spin-loading"
                radius="2"
                wrapperStyle={{}}
                wrapperclassName=""
              />
            ) : (
              <>
                {!imageAsset ? (
                  <>
                    <label
                      for="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-full"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center">
                        <MdCloudUpload
                          className="text-gray-500 group-hover:text-gray-100"
                          size={40}
                        />
                        <p className="mb-2 text-sm text-gray-500 md:text-xl group-hover:text-gray-100">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 group-hover:text-gray-100">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        onChange={(e) => onUploadImage(e)}
                        type="file"
                        accept="image/*"
                        className="hidden"
                      />
                    </label>
                  </>
                ) : (
                  <>
                    <div className="relative w-full h-full ">
                      <img
                        src={imageAsset}
                        alt="uploadedImage"
                        className="object-contain w-full h-full "
                      ></img>
                      <button
                        onClick={() => onDeleteImage()}
                        className="absolute right-0 flex items-center px-4 py-2 text-lg text-white align-middle transition-all duration-500 ease-in-out scale-95 bg-red-500 rounded-full outline-none md:py-3 hover:bg-red-600 bottom-1 md:text-xl hover:scale-100 "
                      >
                        <MdDelete size={20} /> Delete
                      </button>
                    </div>
                  </>
                )}
              </>
            )}
          </div>

          {/*calories and price  */}
          <div
           className="flex flex-col items-center w-full gap-3 md:flex-row ">
            <div className="flex items-center w-full gap-2 py-2 border-b border-gray-300 rounded-lg">
              <MdFoodBank size={30} className="" />
              <input
                type="text"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                required
                placeHolder="Calories"
                className="w-full h-full text-lg text-white bg-transparent outline-none "
              ></input>
            </div>
            <div className="flex items-center w-full gap-2 py-2 border-b border-gray-300 rounded-lg">
              <MdMoney size={30} className="" />
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                placeHolder="Price"
                className="w-full h-full text-lg text-white bg-transparent outline-none "
              ></input>
            </div>
          </div>

          {/* Save Button */}
          <div 
           className="flex justify-center w-full md:justify-end ">
            <button
              onClick={() => saveDetails()}
              className="
           py-2 px-6 md:py-3 bg-[#B4F298] hover:bg-[#95ef6c] text-[#42681a] 
           md:w-fit w-full  justify-center items-center flex rounded-full outline-none
           md:px-8  text-xl trans font-semibold
           "
            >
              Save
            </button>
          </div>
      
      </div>
    </div>
  );
};

export default CreateContainer;
