import React, { useContext, useEffect } from "react";
import { TabTitle } from "../../changeTitle";
import { DataProvider } from "../../providers/AuthProvider";
import Swal from 'sweetalert2'

const AddToy = () => {
  TabTitle("addToys | WhizzyWheels");
  const { user } = useContext(DataProvider);

  const handleAddToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const sellerName = form.sellername.value;
    const sellerEmail = form.email.value;
    const sub_category = form.subcategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const available_quantity = form.quantity.value;
    const picture = form.toyphoto.value;
    const details = form.toydetails.value

    const newToy = {
      name,
      sellerName,
      sellerEmail,
      sub_category,
      price,
      rating,
      details,
      available_quantity,
      picture,
    };

    fetch('https://whizzy-wheels-server.vercel.app/addtoy', {
        method: "POST",
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(newToy)


      })
      .then(res => res.json())
      .then(data => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Toy Added Successful',
          showConfirmButton: false,
          timer: 1500
        })
        console.log(data);
        form.reset();
      })
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content">
        <div className="card flex-shrink-0 w-full shadow-xl bg-base-100">
          <h1 className="text-center my-7 text-3xl text-amber-700 font-semibold underline">
            Add Your Toy
          </h1>
          <form
            onSubmit={handleAddToy}
            className="card-body md:grid md:grid-cols-2"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Toy Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                type="text"
                name="sellername"
                placeholder="Seller Name"
                defaultValue={user?.displayName}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Seller Name"
                defaultValue={user?.email}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Sub Category</span>
              </label>
              <input
                type="text"
                name="subcategory"
                placeholder="Sub Category Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Toy Price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Ratings</span>
              </label>
              <input
                type="text"
                name="rating"
                placeholder="Rating"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <input
                type="text"
                name="quantity"
                placeholder="Quantity"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Details</span>
              </label>
              <input
                type="text"
                name="toydetails"
                placeholder="Toy Details"
                className="input input-bordered"
              />
            </div>
            <div className="form-control md:col-span-2">
              <label className="label">
                <span className="label-text">Toy PhotoUrl</span>
              </label>
              <input
                type="text"
                name="toyphoto"
                placeholder="Toy Photo"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6 md:col-span-2">
              <button className="btn w-full btn-outline text-amber-700 hover:bg-amber-700 hover:border-none hover:text-white">
                Add Toy
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
