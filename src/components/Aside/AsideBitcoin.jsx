import React from "react";
import { Link } from "react-router-dom";
import styled from "../Aside/AsideBitcoin.module.css";

const AsideBitcoin = (props) => {
  return (
    <div>
      <div className={styled.WrapperasideHead}>
        <ul className={styled.asideHead}>
          <li>
            <h2>{props.title}</h2>
          </li>
          <li>
            <Link>See more</Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11px"
              height="11px"
              fill="currentColor"
              class="bi bi-chevron-right mt-1 ms-1"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </li>
        </ul>
        <ul className={styled.asideHeadMore}>
          <div>
            <h2>{props.symbol}</h2>
            <span>{props.today}</span>
          </div>
          <li className={styled.BTCPrice}>
            <span>{props.price}</span>
            <span>{props.money}</span>
          </li>
          <li className={styled.PriceChange}>
            <ul>
              <span>Price Change</span>
              <span>24h</span>
            </ul>
            <ul>
              <span className="me-2">+$302.10</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11px"
                  height="11px"
                  fill="currentColor"
                  class="bi bi-caret-up-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                </svg>
                1.01%
              </span>
            </ul>
          </li>
          <li className={styled.PriceChangeLow}>
            <ul>
              <span>24h Low / 24h High</span>
            </ul>
            <ul>
              <span className="me-2">$29,794.27 /</span>
              <span>$30,406.45</span>
            </ul>
          </li>
          <li className={styled.TradingVolume}>
            <ul>
              <span>Trading Volume</span>
              <span>24h</span>
            </ul>
            <ul>
              <span className="me-2">$95,854,816,609</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11px"
                  height="11px"
                  fill="currentColor"
                  class="bi bi-caret-up-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                </svg>
                701.40%
              </span>
            </ul>
          </li>
          <li className={styled.BTCPrice}>
            <span>Volume / Market Cap</span>
            <span>0.1633</span>
          </li>
          <li className={styled.BTCPrice}>
            <span>Market Dominance</span>
            <span>48.31%</span>
          </li>
          <li className={styled.BTCPrice}>
            <span>Market Rank</span>
            <span>{props.numb}</span>
            <h6>{props.market}</h6>
          </li>
          <li className={styled.TradingVolume}>
            <ul>
              <span>Market Cap</span>
            </ul>
            <ul>
              <span className="me-2">$587,090,903,155</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11px"
                  height="11px"
                  fill="currentColor"
                  class="bi bi-caret-up-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                </svg>
                1.01%
              </span>
            </ul>
          </li>
          <li className={styled.TradingVolume1}>
            <ul>
              <span>Fully Diluted Market Cap </span>
            </ul>
            <ul>
              <span className="me-2">$634,957,566,810</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11px"
                  height="11px"
                  fill="currentColor"
                  class="bi bi-caret-up-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                </svg>
                1.01%
              </span>
            </ul>
          </li>
          <button>Show more</button>
        </ul>
      </div>
    </div>
  );
};

export default AsideBitcoin;
