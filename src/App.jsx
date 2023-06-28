import { Routes, Route, useLocation } from "react-router-dom";
import CreateContainer from "./pages/CreateContainer";
import { AnimatePresence, motion } from "framer-motion";
import LoginPage from "./Component/Auth/LoginPage";
import SignUpPage from "./Component/Auth/SignUpPage";
import ForgotPassword from "./Component/Auth/ForgotPassword";
import { AuthcontextProvider } from "./context/AuthContext";
import ProtectedRoutes from "./Component/Auth/ProtectedRoutes";
import MainContainer from "./Component/MainContainer";
import HomeContainer from "./pages/HomeContainer";
import { variants } from "./variants/variants";
import { useDispatch } from "react-redux";
import { getAllItems } from "./utils/firebaseFunctions";
import { useEffect } from "react";
import { setAllItems } from "./store/items-Slice";
import { fetchLocalStorageData } from "./utils/fetchLocalStorage";
import { setInitialUser } from "./store/user-Slice";
import "./App.css";
function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  const getData = async () => {
    // ! setting all food items to the state
    await getAllItems().then((data) => {
      dispatch(setAllItems(data));
    });
    // ! setting  initial User to the state
    const initialUser = await fetchLocalStorageData();
    dispatch(setInitialUser(initialUser));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <AuthcontextProvider>
      <div className="relative   w-screen  overflow-hidden min-h-screen select-none  bg-[#000000] flex flex-col ">
        <AnimatePresence mode="sync">
          <Routes location={location} key={location.pathname}>
            <Route element={<ProtectedRoutes />}>
              <Route
                exact
                path="/"
                element={
                  <motion.div
                    className="overflow-y-hidden"
                    initial={variants.initial}
                    animate={variants.animate}
                    exit={variants.exit}
                  >
                    <MainContainer children={<HomeContainer />} />
                  </motion.div>
                }
              />
              <Route
                path="/createItem"
                element={
                  <motion.div
                    initial={variants.initial}
                    animate={variants.animate}
                    exit={variants.exit}
                  >
                    <MainContainer children={<CreateContainer />} />
                  </motion.div>
                }
              />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
          </Routes>
        </AnimatePresence>
      </div>
    </AuthcontextProvider>
  );
}

export default App;
