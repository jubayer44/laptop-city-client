import toast from "react-hot-toast";

const addUser = (user, setLoading, setUsr, data) => {
  if (user) {
    fetch(`${process.env.REACT_APP_URL}/users`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: user?.displayName,
        email: user?.email,
        status: data ? data.accountType : "Buyer",
      }),
    })
      .then((res) => res.json())
      .then((insertData) => {
        setUsr(user?.email);
        toast.success("Sign Up Success");
      })
      .catch((err) => console.error(err));
  }
};

export default addUser;
