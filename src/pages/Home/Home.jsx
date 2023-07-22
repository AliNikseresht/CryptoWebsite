import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Menu from "../../components/Menu/Menu";
import Highlights from "../../components/Highlights/Highlights";
import List from "../../components/List/List";
import TablesCrypto from "../../components/TablesCrypto/TablesCrypto";
import styled from "../Home/Home.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Charts from "../../Charts";

const Home = () => {
  const [cryptoCall, setCryptoCall] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coinstats.app/public/v1/coins?skip=0&limit=10")
      .then((res) => {
        setCryptoCall(res.data.coins);
        console.log(res.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Menu />
      <Highlights />
      <List />
      <TablesCrypto />

      {cryptoCall.map((value, index) => (
        <div className={styled.coins} key={index}>
          <div>
            <ul className="w-[74px] justify-between">
              <li
                title="Add to Main Watchlist and follow coin"
                className="text-slate-400 hover:text-yellow-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                </svg>
              </li>
              <li>{value.rank}</li>
            </ul>

            <ul className="w-[220px] text-[12px]">
              <li>
                <img className="me-2" src={value.icon} alt="Logo" />
              </li>
              <li>
                <Link
                  to={
                    index === 0
                      ? "/bitcoin"
                      : "" || index === 1
                      ? "/Ethereum"
                      : "" || index === 2
                      ? "/Tether"
                      : ""
                  }
                >
                  {value.name}
                </Link>
              </li>
              <li className="ps-2 text-slate-400">{value.symbol}</li>
            </ul>

            <ul className="w-[750px] me-4 text-center text-[13.5px] justify-between flx">
              <li
                className={`${
                  index === 2 ||
                  index === 3 ||
                  index === 5 ||
                  index === 7 ||
                  index === 9
                    ? "text-red-600"
                    : ""
                }
            ${index === 4 || index === 6 ? "text-black " : "text-green-600"}
            `}
              >
                $ {value.price}
              </li>
              <li
                className={`${index === 3 ? "text-green-600" : "text-red-600"}`}
              >
                {value.priceChange1h}%
              </li>
              <li
                className={`${index === 2 ? "text-red-600" : "text-green-600"}`}
              >
                {value.priceChange1d}%
              </li>
              <li
                className={`${
                  index === 0 || index === 2 || index === 4
                    ? "text-red-600"
                    : "text-green-600"
                }`}
              >
                {value.priceChange1w}%
              </li>
              <li>$ {value.marketCap}</li>
              <li>$ {value.volume}</li>
              <li>
                {value.totalSupply}
                <span className="text-slate-400 ps-1">{value.symbol}</span>
              </li>
            </ul>

            <ul className="w-[250px] justify-between">
              <li className={styled.charts}>
                <Charts />
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-three-dots-vertical"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      ))}

      <Footer />
    </div>
  );
};

export default Home;
