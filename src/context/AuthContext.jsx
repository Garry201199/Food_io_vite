import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate  } from "react-router-dom";
import { toast } from "react-toastify";
import { app } from "../firebase.config";
import useAuthStatus from "../hooks/useAuthStatus";
import {  handleClearCart } from "../store/cart-slice";
import { removeUser, setInitialUser, User } from "../store/user-Slice";

const AuthContext = createContext();

export const AuthcontextProvider = ({ children }) => {

  const auth = getAuth(app);
  const [loginInfo, setLoginInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  

  const {  currentUser,loggedIn, checkingStatus } = useAuthStatus()
  const loggedUser = useSelector(User)

  const handleFormInfo = (e) => {
    setLoginInfo((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const provider = new GoogleAuthProvider();

  const onLogin = (auth, email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem('user' , JSON.stringify(user.providerData[0]) )
        dispatch(setInitialUser(user.providerData[0]))
        toast.success(`${user.providerData[0].displayName ?? email } logged in !!  `);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  const onSignUp = (auth, name , email, password) => {
    createUserWithEmailAndPassword(auth,  email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem('user' , JSON.stringify(user.providerData[0]))
        dispatch(setInitialUser(user.providerData[0]))
        navigate("/login");
        toast.success(`${user.providerData[0].displayName} Signed Up !!, Redirecting to Login Page `);
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  const onLogout=  ()=>{
    dispatch(handleClearCart());
    signOut(auth).
    then(() => {
      localStorage.removeItem('user')
      toast.warn(`${loggedUser.user[0].displayName ?? loggedUser.user[0].email } logged out !!  `);
      dispatch(removeUser());
      
      navigate('/login')
    }).catch((error) => {
      toast.warn(error);
    });
   }

  const onGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        localStorage.setItem('user' , JSON.stringify(result.user.providerData[0]) )
        dispatch(setInitialUser(result.user.providerData[0]))
        toast.success(`${result.user.providerData[0].displayName } logged in !!  `);
        navigate("/");
      })
      .catch((error) => {
        toast.error(`${error}`);
      });
  };

  const forgotPassword=(email)=>{
    sendPasswordResetEmail(auth, email,{url:'http://localhost:3000/login'})
  .then(() => {
    toast.info(`Password reset link sent to ${email}`)
    setTimeout(() => {
      navigate('/login')
    }, 2000);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    toast.error(`${error} not found`)
  });
  }
  return (
    <AuthContext.Provider
      value={{
        onLogin,
        handleFormInfo,
        loginInfo,
        onGoogleLogin,
        setLoginInfo,
        onSignUp,
        currentUser,
        onLogout,
        forgotPassword,
        loggedIn, checkingStatus
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
