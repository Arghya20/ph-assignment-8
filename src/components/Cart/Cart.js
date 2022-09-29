import React from "react";

const Cart = ({ cart }) => {
  console.log(cart);

  let total = 0;
  for (const product of cart) {
    total = total + product.time;
  }
  return (
    <div className=" lg:sticky top-4">
      {/*======= User Section ======== */}
      <div className="flex justify-evenly items-center mt-4 p-2 m-3 rounded-md mx-auto">
        <img
          className="w-1/3 rounded-full shadow-lg"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />

        <div>
          <h2 className="text-lg font-bold">Alexander</h2>
          <div className="flex ">
            <p>Ontario,</p>
            <p>Canada</p>
          </div>
        </div>
      </div>

      {/*========= user Information Section==========  */}
      <div className="flex justify-between p-3 items-center bg-blue-50 m-6 rounded-md ">
        <div>
          <p className="text-center">
            <strong>65</strong> kg
          </p>
          <h4>Weight</h4>
        </div>
        <div>
          <p className="text-center">
            <strong>5.6</strong>
          </p>
          <h4>Height</h4>
        </div>
        <div>
          <p className="text-center">
            <strong>35</strong>
          </p>
          <h4>Age</h4>
        </div>
      </div>

      {/* ====Break Section ======== */}
      <h3 className="m-7 font-bold mt-14 -mb-4 ">Add A Break</h3>
      <div className="flex justify-between p-3 items-center bg-blue-50 m-5 rounded-md gap-2">
        <div className="bg-white rounded-full p-2 hover:bg-blue-300 cursor-pointer">
          <p className="text-center">
            <strong>10</strong>s
          </p>
        </div>
        <div className="bg-white rounded-full p-2 hover:bg-blue-300 cursor-pointer">
          <p className="text-center">
            <strong>15</strong>s
          </p>
        </div>
        <div className="bg-white rounded-full p-2 hover:bg-blue-300 cursor-pointer">
          <p className="text-center">
            <strong>20s</strong>
          </p>
        </div>
        <div className="bg-white rounded-full p-2 hover:bg-blue-300 cursor-pointer">
          <p className="text-center">
            <strong>30</strong>s
          </p>
        </div>
        <div className="bg-white rounded-full p-2 hover:bg-blue-300 cursor-pointer">
          <p className="text-center">
            <strong>45</strong>s
          </p>
        </div>
      </div>

      {/*========= Exercise Details =========== */}
      <h2 className="mx-5 mb-2 font-bold mt-8">Exercise Details</h2>
      <div className="flex justify-evenly bg-blue-50 mx-4 p-4 rounded-lg">
        <p>Exercise Time</p>
        <p className="text-gray-400">
          <span>{total}</span> Seconds
        </p>
      </div>

      <div className="flex justify-evenly bg-blue-50 mx-4 p-4 rounded-lg mt-4">
        <p>Break time</p>
        <p className="text-gray-400">
          <span>100</span> Seconds
        </p>
      </div>

      {/*==== Activity Complited Button ======= */}
      <div className="flex items-center justify-center">
        <button className="bg-blue-600 text-white px-10 py-3 rounded-md mt-14 hover:bg-green-500 mb-10">
          Activity Completed
        </button>
      </div>
    </div>
  );
};

export default Cart;
