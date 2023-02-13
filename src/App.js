import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Coins from "./Coins/Coins";

function App() {
  const [coins, setCoins] = useState([]);
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

  useEffect(()=>{
    axios.get(url).then((response)=>{
      setCoins(response.data);
      console.log(response.data);
    }).catch((error)=>{
      console.log(error);
    })
  },[]);

  return (
    <div>
      <Navbar />
      <Hero/>
      <Featured/>
      <Coins coins={coins}/>
    </div>
  );
}
export default App;
