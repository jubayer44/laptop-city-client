import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ReportedItems = () => {

const reportedItems = useLoaderData();
// console.log(reportedItems);


    return (
        <div className="overflow-x-auto w-full">
        <h2 className="text-2xl font-semibold text-center my-5">All Buyers Information</h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {reportedItems?.map((item, i) => {
            return (
              <tr key={item?._id}>
                <th>{i + 1}</th>
                <td>{item?.name}</td>
                <td>{item?.email}</td>
                
                <td>
                  <button
                    //   onClick={() => handleBuyerDelete(user?._id)}
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