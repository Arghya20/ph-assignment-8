import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Display = () => {
  const [user, setUser] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const handelAddToCart = (usr) => {
    const newCart = [...cart, usr];
    setCart(newCart);
  };
  return (
    <div>
      <div className=" mx-auto bg-blue-50 px-3 grid grid-cols-[1fr] md:grid-cols-[4fr,1fr]">
        {/*======== Main Section ======= */}
        <div>
          <img className="w-28 mx-auto rounded-full mt-4 shadow-lg p-2" src="https://media.istockphoto.com/vectors/dumbbell-vector-id1331186720?k=20&m=1331186720&s=612x612&w=0&h=cUrjMsuYARIaWajP1DzhQUONzycHBiw8_-APxBT2TKs=" alt="" />
          <h1 className="text-3xl text-center font-bold py-4 bg-blue-50 underline">
            <span className="text-red-600 ">Burn</span> ToDay
          </h1>
          <h3 className="text-xl text-center py-3 bg-blue-50">
            Select your today’s exercise
          </h3>
          <div className="main-section grid grid-cols-1 md:grid-cols-3 p-4">
            {user.map((usr) => (
              <Product usr={usr} handelAddToCart={handelAddToCart}></Product>
            ))}
          </div>
        </div>

        {/*======= Cart Section ====== */}
        <div className="bg-white rounded-md">
          <Cart cart={cart}></Cart>
          <img src="" alt="" />
        </div>
        <div className="w-full bg-sky-100 mt-16 p-10 rounded-md">
          <div className="bg-white p-6 rounded-md shadow-lg">
          <h1 className="text-xl font-bold mb-2">1. How does react work ?</h1>
          <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
          </div>
          <div className="bg-white p-6 rounded-md shadow-lg mt-10">
          <h1 className="text-xl font-bold mb-2">2. What is the difference between props and state ?</h1>
          <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component.</p>
          </div>
          <div className="bg-white p-6 rounded-md shadow-lg mt-10">
          <h1 className="text-xl font-bold mb-2">3. What is the function of useEffect other than loading data from API ?</h1>
          <p>By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
