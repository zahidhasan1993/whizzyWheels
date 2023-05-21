import React, { useContext, useEffect, useState } from "react";
import { TabTitle } from "../../changeTitle";
import { useLoaderData } from "react-router-dom";
import { DataProvider } from "../../providers/AuthProvider";
import MyToysTable from "./MyToysTable";
import Swal from 'sweetalert2';

const MyToy = () => {
  TabTitle("myToys | WhizzyWheels");
  const {user} = useContext(DataProvider)
  const [toys,setToys] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/alltoys')
    .then(res => res.json())
    .then(data => setToys(data))
  },[])
  const myToys = toys.filter(toy => toy.sellerEmail === user.email);
  const handleDelete = (_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        fetch(`http://localhost:5000/delete/${_id}`,{
          method: "DELETE",
    
        })
        .then(res => res.json())
        .then(data => {
          const remaining = myToys.filter(toys => toys._id !== _id)
          setToys(remaining)
    
        })
      }
    })
   
  }

//   console.log(toys[1]);

  return (
    <div className="my-14">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
          <tr>
              <th></th>
              <th>Name</th>
              <th>Seller Name</th>
              <th>Seller Email</th>
              <th>Available_Quantity</th>
              <th>sub_category</th>
              <th>Price</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
                myToys.map(toy => <MyToysTable key={toy._id} handleDelete={handleDelete} toy={toy}></MyToysTable>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToy;
