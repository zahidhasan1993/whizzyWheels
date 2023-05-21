import React from "react";
import { TabTitle } from "../../changeTitle";
import Swal from 'sweetalert2';
import { useLoaderData } from "react-router-dom";


const UpdateToy = () => {
  TabTitle("UpdateToys | WhizzyWheels");
  const toyData = useLoaderData();
  const handleUpdateToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const price = form.price.value;
    const available_quantity = form.quantity.value;
    const details = form.details.value;

    const updatedToy = { price, available_quantity, details };

    console.log(toyData._id);

    fetch(`https://whizzy-wheels-server.vercel.app/updatetoy/${toyData._id}`,{
      method : "PATCH",
      headers : {
        'Content-type': 'application/json',
      },
      body : JSON.stringify(updatedToy)

    })
    .then(res => res.json())
    .then(data => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Data updated successfully',
        showConfirmButton: false,
        timer: 1500
      })
    })
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content">
        <div className="card flex-shrink-0 w-full shadow-xl bg-base-100">
          <h1 className="text-center my-7 text-3xl text-amber-700 font-semibold underline">
            Update Your Toy
          </h1>
          <form
            onSubmit={handleUpdateToy}
            className="card-body md:grid md:grid-cols-2"
          >
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
                <span className="label-text">Available Quantity</span>
              </label>
              <input
                type="text"
                name="quantity"
                placeholder="Quantity"
                className="input input-bordered"
              />
            </div>
            <div className="form-control md:col-span-2">
              <label className="label">
                <span className="label-text">Toy Details</span>
              </label>
              <input
                type="text"
                name="details"
                placeholder="Toy Details"
                className="input input-bordered"
              />
            </div>

            <div className="form-control mt-6 md:col-span-2">
              <button className="btn w-full btn-outline text-amber-700 hover:bg-amber-700 hover:border-none hover:text-white">
                Update Toy
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateToy;
