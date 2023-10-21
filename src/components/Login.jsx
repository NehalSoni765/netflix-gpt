import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { userSchema } from "../utils/validate";
import { Formik } from "formik";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { BG_IMAGE_URL, USER_AVATAR } from "../utils/constant";
import { addUser } from "../redux/userReducer";
import { useDispatch } from "react-redux";
import { getUserObject } from "../utils/methods";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  // const name = useRef(null);
  // const email = useRef(null);
  // const password = useRef(null);

  const title = isSignInForm ? "Sign In" : "Sign Up";
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  // const handleButtonClick = () => {
  //   //validate for form data
  //   const message = checkValidData(
  //     name?.current?.value,
  //     email.current.value,
  //     password.current.value,
  //     isSignInForm
  //   );
  //   setErrorMessage(message);
  // };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_IMAGE_URL} />
      </div>
      <h1 className="text-fuchsia-50 text-3xl font-semibold mb-4 text-start rounded-lg">
        {title}
      </h1>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={userSchema(isSignInForm)}
        onSubmit={(values, { setSubmitting }) => {
          if (isSignInForm) {
            //Sign In Logic
            signInWithEmailAndPassword(auth, values.email, values.password)
              .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + " " + errorMessage);
              });
          } else {
            //Sign up Logic
            createUserWithEmailAndPassword(auth, values.email, values.password)
              .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                updateProfile(user, {
                  displayName: values.name,
                  photoURL: USER_AVATAR,
                })
                  .then(() => {
                    dispatch(addUser(getUserObject(auth.currentUser)));
                  })
                  .catch((error) => {
                    setErrorMessage(error.message);
                  });
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + " - " + errorMessage);
              });
          }
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => {
          return (
            <form
              onSubmit={handleSubmit}
              className="absolute bg-black p-16 m-2 text-center w-4/12 mx-auto my-24 left-0 right-0 bg-opacity-90"
            >
              {!isSignInForm && (
                <>
                  <input
                    className={`p-4 w-full bg-neutral-700 rounded-lg text-white ${
                      errors.name && touched.name
                        ? "border-b-2 border-solid border-yellow-700"
                        : "my-1"
                    } `}
                    placeholder="Full Name"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    // ref={name}
                  />
                  <p className="text-yellow-700 mb-4 font-semibold text-start">
                    {errors.name && touched.name && errors.name}
                  </p>
                </>
              )}
              <input
                placeholder="Email or phone number"
                className={`p-4 w-full bg-neutral-700 rounded-lg  text-white ${
                  errors.email && touched.email
                    ? "border-b-2 border-solid border-yellow-700"
                    : "my-1"
                }`}
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                // ref={email}
              />
              <p className="text-yellow-700 mb-4 font-semibold text-start">
                {errors.email && touched.email && errors.email}
              </p>
              <input
                placeholder="Password"
                className={`p-4 w-full bg-neutral-700 rounded-lg text-white ${
                  errors.password && touched.password
                    ? "border-b-2 border-solid border-yellow-700"
                    : "my-1"
                } `}
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                // ref={password}
              />
              <p className="text-yellow-700 mb-4 font-semibold text-start">
                {errors.password && touched.password && errors.password}
              </p>
              {errorMessage && (
                <p className="text-yellow-700 mb-4 font-semibold text-start">
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="p-4 my-6 bg-red-600 w-full text-zinc-50 rounded-lg"
                // onClick={handleButtonClick}
              >
                {title}
              </button>
              <div className="mt-8  text-start">
                <p className="text-zinc-50 text-opacity-80">
                  {isSignInForm ? "New to Netflix? " : "Already registered? "}
                  <span
                    className="font-semibold cursor-pointer hover:underline"
                    onClick={toggleSignInForm}
                  >
                    {isSignInForm ? "Sign Up" : "Sign In"} Now.
                  </span>
                </p>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;
