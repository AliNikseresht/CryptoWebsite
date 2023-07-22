import React from "react";
import LogoCoin from "../../assets/coinmarketcap_1.svg";
import styled from "./Menu.module.css";
import { Link } from "react-router-dom";

const menuItems = [
  {
    title: "Cryptocurrencies",
  },
  ,
  {
    title: "Exchanges",
  },
  ,
  {
    title: "Community",
  },
  ,
  {
    title: "Learn",
  },
];

const Menu = () => {
  return (
    <div className="py-3 xl:px-[3.5%] 2xl:px-[4.8%] border-b border">
      <div className={styled.menuwrapper}>
        <ul className={styled.menuItem}>
          <li>
            <Link to="/">
              <img src={LogoCoin} alt="LogoCoinmarket" />
            </Link>
          </li>

          {menuItems.map((item, index) => (
            <li className={styled.menu} key={index}>
              {item.title}
            </li>
          ))}
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-circle-fill"
            viewBox="0 0 16 16"
          >
            <circle cx="8" cy="8" r="8" />
          </svg> */}
        </ul>

        <ul className={styled.inp}>
          <li>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <h2 className="mx-1">Watchlist</h2>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pie-chart-fill"
                viewBox="0 0 16 16"
              >
                <path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 0 0 8.5.015z" />
              </svg>
              <h2 className="mx-0.5">Portfolio</h2>
            </div>
          </li>

          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search "
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            <input type="text" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-slash-square-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.354 5.354-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708.708z" />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
