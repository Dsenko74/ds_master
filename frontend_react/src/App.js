import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Navbar, Footer } from './components';
import Order from './pages/Order';
import { client } from './sanityClient';


import './App.scss';



const  App =  () => {
  const [prod, setProd] = useState('All');
  const [sets, setSets] = useState([]);
  const [orders, setOrders] = useState([]);
  console.log(prod)
  console.log(sets)
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
        }`)
          setSets(data)
      };

      fetchData()
    }, [])




  return (
    <div className='App'>
      <Navbar setProd={setProd} orders={orders}/>
      <Routes>
        <Route path="/" element={<Home sets={sets} prod={prod} setOrders={setOrders} orders={orders} />} />
        <Route path="/category/:sets" element={<Home sets={sets} prod={prod} setOrders={setOrders} orders={orders}/>} />
        <Route path="/order/:id" element={<Order prod={prod} sets={sets} setOrders={setOrders} orders={orders}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
