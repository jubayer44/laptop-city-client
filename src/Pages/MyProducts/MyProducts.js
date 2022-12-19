import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import Spinner from '../../components/Spinner';
import { AuthContext } from '../../Context/AuthProvider';

const MyProducts = () => {
  const {user} = useContext(AuthContext);

  const {data: myProducts = [], refetch, isLoading}= useQuery({
    queryKey: ['myProducts'],
    queryFn: async()=> {
      const res = await fetch(`${process.env.REACT_APP_URL}/myProducts?email=${user?.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      });
      const data = res.json();
      return data;
    }
  });

  if(isLoading){
    return <Spinner/>
  }


  const handleAdvertise = (id) => {
    fetch(`${process.env.REACT_APP_URL}/advertise/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    })
    .then(res => res.json())
    .then(data => {
      if(data.acknowledged){
        toast.success('Add to advertise successfully')
      }
      else {
        toast.error(data.message);
      }
    })
    .catch(err => toast.error(err.message));
  };

  const handleDelete = (id) => {
    const confirm = window.confirm('are you sure you want to delete')

    if(confirm){
      fetch(`${process.env.REACT_APP_URL}/advertise?id=${id}`, {
        method: 'DELETE',
        headers: {'authorization': `Bearer ${localStorage.getItem('access_token')}`}
      })
      .then(res => res.json())
      .then(data => {
        if(data.acknowledged){
          refetch()
          toast.success('Product successfully deleted')
        }
      })
      .catch(err => toast.error(err))
  
    }
  };


    return (
        <div className="px-4 mx-auto md:max-w-full ">
          <h2 className="text-2xl font-bold text-center mb-4">My Products</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:max-w-full">
        {
          myProducts?.map(product => (<div
          key={product._id}
          className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            src={product.img}
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 ">
            <a
              href="/"
              aria-label="Category"
              title="Visit the East"
              className="inline-block mb-3 text-xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              {product.productName}
            </a>
            <p className="mb-2 text-gray-700">
             Price: <strong>${product.resalePrice}</strong>
            </p>
            {
              product?.sold ? <p className="mb-2 text-gray-700">
              Status: <strong className='text-green-500'>Sold</strong>
             </p> : <p className="mb-2 text-gray-700">
             Status: <strong className='text-green-500'>Available</strong>
            </p>
            }
            <button onClick={()=> handleDelete(product._id)} className="btn btn-primary rounded-md btn-sm bg-red-500 hover:bg-red-500 font-bold border-none mt-2 text-white">Delete</button>
            {
              !product?.sold && <button onClick={()=>handleAdvertise(product._id)} className="btn btn-primary rounded-md btn-sm ml-4 font-bold border-none mt-2">Advertised </button>
            }
          </div>
        </div>))
        }
      </div>
    </div>
    );
};

export default MyProducts;