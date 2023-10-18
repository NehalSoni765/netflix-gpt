export const getUserObject = (user) => {
  const { uid, email, displayName, photoURL } = user;
  return {
    uid: uid,
    email: email,
    displayName: displayName,
    photoURL: photoURL,
  };
};
