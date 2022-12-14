import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { AuthContext } from "../../Context/AuthProvider";

const AddProduct = () => {
    const {user} = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const date = new Date();

  const postedDate =
    date.getDate() + "/" + date.getMonth() + "/" + date.getYear();
  const postedTime = date.getHours() + ":" + date.getMinutes();

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_URL}/categories`);
      const data = res.json();
      return data;
    },
  });

  const handleAddProduct = (data) => {
    const img = data.image[0];
    setLoading(true);

    const formData = new FormData();
    formData.append("image", img);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_photo_url}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((dta) => {
        if (data?.productCategory) {
          fetch(`${process.env.REACT_APP_URL}/categories/${data.productCategory}`)
            .then((res) => res.json())
            .then((resData) => {
              const productData = {
                productName: data.productName,
                sellerEmail: user?.email,
                seller: user?.displayName,
                resalePrice: data.resalePrice,
                originalPrice: data.originalPrice,
                Condition: data.Condition,
                description: data.description,
                location: data.location,
                phone: data.phone,
                use: data.use,
                img: dta.data.url,
                categoryId: resData._id,
                postedDate,
                postedTime,
              };
              fetch(`${process.env.REACT_APP_URL}/addProduct`, {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                  "authorization": `Bearer ${localStorage.getItem("access_token")}`
                },
                body: JSON.stringify(productData),
              })
                .then((res) => res.json())
                .then((d) => {
                  toast.success("product successfully added");
                  setLoading(false);
                  navigate('/dashboard/myproducts')
                })
                .catch((err) => {
                  console.log(err);
                  toast.error("something went wrong");
                });
            })
            .catch((err) => console.log(err.message));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if(loading){
    return <div className="h-screen flex items-center"><Spinner/></div>
  }

  return (
    <div className="max-w-screen-xl px-4 mx-auto rounded-lg  md:px-4 lg:px-16 xl:px-32">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold leading-tight lg:text-2xl text-center">
            Add a Product
          </h2>
        </div>
        <img
          src="https://s.yimg.com/uu/api/res/1.2/IZmwdyWGvg0Nh2rfw9wSbA--~B/aD0xMjAwO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-07/4a425a40-fd56-11ec-beee-be16b8848f18.cf.jpg"
          alt=""
          className="md:h-[400px] w-full"
        />
      </div>
      <form
        onSubmit={handleSubmit(handleAddProduct)}
        noValidate=""
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="grid md:grid-cols-2 gap-3">
          <div>
            <label htmlFor="name" className="text-sm">
              Product Name
            </label>
            <input
              {...register("productName")}
              id="name"
              required
              type="text"
              placeholder="product name"
              className="w-full p-3 rounded border-2"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Resale Price
            </label>
            <input
              {...register("resalePrice")}
              id=""
              required
              placeholder="resale price"
              type="number"
              className="w-full p-3 rounded border-2"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Original Price
            </label>
            <input
              {...register("originalPrice")}
              id=""
              required
              placeholder="original Price"
              type="number"
              className="w-full p-3 rounded border-2"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Category
            </label>

            <select
              {...register("productCategory", {
                required: "specialty is required",
              })}
              className="select select-bordered rounded-md bg-white w-full mb-2"
            >
              {categories?.map((category) => (
                <option key={category._id}>{category?.CategoryName}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Condition
            </label>

            <select
              {...register("Condition")}
              required
              className="select w-full p-3 rounded border-2 bg-white"
            >
              <option selected>Excellent</option>
              <option>Good</option>
              <option>Fair</option>
            </select>
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Product Image
            </label>
            <input
              {...register("image")}
              required
              id=""
              type="file"
              className="w-full p-3 rounded"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Your Phone
            </label>
            <input
              {...register("phone")}
              required
              placeholder="your phone"
              id=""
              type="number"
              className="w-full p-3 rounded border-2"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Location
            </label>
            <input
              {...register("location")}
              required
              placeholder="location"
              id=""
              type="text"
              className="w-full p-3 rounded border-2"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="text-sm">
            Year of Purchase
          </label>
          <input
            {...register("use")}
            required
            placeholder="year or purchase"
            id=""
            type="text"
            className="w-full p-3 rounded border-2"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm">
            Description
          </label>
          <textarea
            {...register("description")}
            id="message"
            placeholder="description"
            rows="3"
            className="w-full p-3 rounded border-2"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-400 text-gray-900"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
