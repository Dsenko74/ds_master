import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import { Navbar, Footer } from "./components";
import Order from "./pages/Order";
import Cart from "./pages/Cart";
import { client } from "./sanityClient";

//import Tester from "../src/components/Tester/Tester";

import "./App.scss";
import Search from "./pages/Search";
import Finalize from "./pages/Finalize";
import ScrollToTop from "./utils/ScrollToTop";

const App = () => {
  const [prod, setProd] = useState("All"); // вибір категорії
  const [sets, setSets] = useState([]); //база всіх продуктів
  const [orders, setOrders] = useState([]); //стейт з заказами
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(`*[_type == "dsmaster"]{
      _id,
      title,
      price,
      discount,
      description,
      ingredients,
      "imageUrl": image.asset->url,
      oldPrice,
      weight,
      cashback,
      novelty,
      action,
      categories,
    }`);
      setSets(data);
    };

    fetchData();
  }, []);
  // сукупні продукти
  const requiredProducts = [
    { id: "40888917-599d-4392-b63e-d63ea36cfa3d", quantity: 1 },
    { id: "82cb21de-517a-4c77-9bc7-cd133bef8963", quantity: 1 },
    { id: "3f940b48-f89b-4259-8da4-bb5911ff3750", quantity: 1 },
    { id: "37a41aa4-ebfd-4de8-b21a-d08239558e14", quantity: 1 },
  ];

  useEffect(() => {
    if (orders.length === 0) {
      setOrders(requiredProducts);
    }
  }, [orders]);
  
  // скидаємо prod до All коли корзина очищується
  useEffect(() => {
    if (location.pathname === "/") {
      setProd("All"); // скидає категорію при переході на головну
    }
  }, [location.pathname]);
  const requiredIds = requiredProducts.map((p) => p.id);

  return (
    <div className="App">
      <ScrollToTop />
      <Navbar setProd={setProd} orders={orders} requiredIds={requiredIds} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              sets={sets}
              prod={prod}
              setOrders={setOrders}
              orders={orders}
            />
          }
        />
        <Route
          path="/category/:sets"
          element={
            <Home
              sets={sets}
              prod={prod}
              setOrders={setOrders}
              orders={orders}
            />
          }
        />
        <Route
          path="/order/:id"
          element={
            <Order
              prod={prod}
              sets={sets}
              setOrders={setOrders}
              orders={orders}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              prod={prod}
              sets={sets}
              setOrders={setOrders}
              orders={orders}
              requiredIds={requiredIds}
            />
          }
        />
        <Route
          path="/search"
          element={<Search sets={sets} setOrders={setOrders} orders={orders} />}
        />
        <Route
          path="/finalize"
          element={<Finalize sets={sets} orders={orders} />}
        />
        {/* <Route path="/test" element={<Tester />}/> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
