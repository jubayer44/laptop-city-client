// import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const ReportedItems = () => {
  const [reportedItems, setReportedItems] = useState([]);
  const [loading, setLoading] = useState(false);

// const {data: reportedItems= [], refetch} = useQuery({
//     queryKey: ['reportedItems'],
//     queryFn: async()=> {
//         const res = await fetch(`${process.env.REACT_APP_URL}/report`, {
//           headers: {"authorization": `Bearer ${localStorage.getItem('access_token')}`}
//         });
//         const data = await res.json();
//         return data;
//     }
// })



useEffect(()=> {
  fetch(`${process.env.REACT_APP_URL}/report`, {
    headers: {"authorization": `Bearer ${localStorage.getItem('access_token')}`}
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    setReportedItems(data)
  })
}, [loading])



const handleDeleteReportedItem = item => {
    const confirm = window.confirm('Are you sure you want to delete');
    if(confirm){
        fetch(`${process.env.REACT_APP_URL}/report/${item?._id}`,{
        method: "DELETE",
        headers: {
            "content-type": "application/json", 
            "authorization": `Bearer ${localStorage.getItem('access_token')}`
        },
        body: JSON.stringify({item})
    } 
    )
    .then(res => res.json())
    .then(data => {
      console.log(data);
        toast.success('Deleted Successfully')
        setLoading(!false)
        // refetch()
    })
    }




};


    return (
        <div className="overflow-x-auto w-full">
        <h2 className="text-2xl font-semibold text-center my-5">All Buyers Information</h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Product Name</th>
            <th>Reporter Name</th>
            <th>Reporter Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reportedItems?.map((item, i) => {
            return (
              <tr key={item?._id}>
                <th>{i + 1}</th>
                <td>{item?.productName}</td>
                <td>{item?.name}</td>
                <td>{item?.email}</td>
                
                <td>
                  <button
                      onClick={() => handleDeleteReportedItem(item)}
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

export default ReportedItems;