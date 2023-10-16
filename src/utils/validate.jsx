import { object, string } from "yup";

// export const checkValidData = (name, email, password, isSignInForm) => {
//   const isEmailValid =
//     /^([a-zA-z0-9._%-])+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/.test(email);

//   const isPasswordValid =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$/.test(
//       password
//     );
//   if (!isSignInForm && !name) {
//     return "Name is required.";
//   }
//   if (!isEmailValid) {
//     return "Email is not valid.";
//   }
//   if (!isPasswordValid) {
//     return "PAssword is not valid.";
//   }
//   return null;
// };

export const userSchema = (isSignInForm) =>
  object().shape({
    name: isSignInForm ? string() : string().required("Please enter a valid email address"),
    email: string().email().required("Email is required"),
    password: string().required("Password is required"),
  });
