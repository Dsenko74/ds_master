import React from "react";
import Cards from "../components/Cards/Cards";
import Banner from "../components/Banner/Banner";
import { getDisplayName } from "../config/menuConfig";

const Home = ({ sets, prod, setOrders, orders }) => {
  return (
    <div style={{ flex: 1, width: "100%" }}>
      {prod === "All" ? <Banner /> : null}
      <div className="container">
        <h3 className="title" style={{ marginBottom: "20px" }}>
          {prod === "All" ? "Доставка суши Київ" : getDisplayName(prod)}
        </h3>
        <Cards sets={sets} setOrders={setOrders} orders={orders} prod={prod} />
      </div>
    </div>
  );
};

export default Home;
