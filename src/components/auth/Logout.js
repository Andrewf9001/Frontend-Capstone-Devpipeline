const Logout = (props) => {
  // console.log(props);
  const handleLogout = () => {
    fetch("https://devpipeline-mock-api.herokuapp.com/api/auth/logout", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        props.setIsAuthenticated(false);
      })
      .catch((err) => {
        console.error("Login Error: ", err);
      });
  };

  return handleLogout;
};

export default Logout;
