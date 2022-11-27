import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AllBuyers = () => {
  const [users, setUser] = useState([]);
  const [load, setLoad ] = useState(false);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/users?role=Buyer`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, [load]);

  console.log(users);

  const handleBuyerDelete = id => {
    const confirm = window.confirm('Are you sure you want to delete')
    if(confirm){
        fetch(`${process.env.REACT_APP_URL}/user/${id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json'
            },
    
        })
        .then(res => res.json())
        .then((data) => {
            setLoad(!load);
            toast.success('Buyer deleted successfully');
        })
        .catch(err => toast.error(err.message));
    }
  };

  return (
    <div className="overflow-x-auto w-full">
        <h2 className="text-2xl font-semibold text-center my-5">All Buyers Information</h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, i) => {
            return (
              <tr key={user?._id}>
                <th>{i + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                    {
                        user?.status ? <span className="text-green-500 font-bold">Verified</span> 
                        :
                        <span className="btn btn-sm rounded-md btn-outline">verify</span>
                    }
                </td>
                <td>
                  <button
                      onClick={() => handleBuyerDelete(user?._id)}
                    className="btn btn-primary btn-sm rounded md bg-red-500 ml-2 border-none text-white normal-case"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllBuyers;
