const isInvalid = (passwordOne, passwordTwo, email, username) => {
  return (
    passwordOne !== passwordTwo ||
    passwordOne === "" ||
    email === "" ||
    username === ""
  );
};

export default isInvalid;
