import React from "react";

const UpdateToy = () => {
    const handleUpdateToy = (e) => {

    }
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
                name="toydetails"
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
