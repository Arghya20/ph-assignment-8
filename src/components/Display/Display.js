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
          <h1 className="text-3xl text-center font-bold py-4 bg-blue-50">
            Burn ToDay
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
      </div>
    </div>
  );
};

export default Display;
