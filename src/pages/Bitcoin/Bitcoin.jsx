import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Menu from "../../components/Menu/Menu";
import styled from "../Bitcoin/Bitcoin.module.css";
import bitLogo from "../../assets/1.png";
import AsideBitcoin from "../../components/Aside/AsideBitcoin";
import Footer from "../../components/Footer/Footer";
import Charts from "../../Charts";

const TabsItems = [
  {
    title: "Overview",
  },
  {
    title: "Markets",
  },
  {
    title: "Historical Data",
  },
  {
    title: "News",
  },
  {
    title: "Price Estimates",
  },
  {
    title: "More Info",
  },
];

const Bitcoin = () => {
  return (
    <div>
      <Navbar />
      <Menu />

      <div className="px-20 mt-10 flex justify-between border-b">
        <div className={styled.WrapperheadBit}>
          <ul className={styled.headBit}>
            <li>
              <img src={bitLogo} alt="bitcoin" />
            </li>
            <li>
              <h2>Bitcoin</h2>
            </li>
            <li>
              <h3>BTC</h3>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-star"
                viewBox="0 0 16 16"
              >
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-upload"
                viewBox="0 0 16 16"
              >
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
              </svg>
            </li>
            <li>
              <button>+Follow</button>
            </li>
          </ul>

          <ul className={styled.headrank}>
            <li>
              <h2>Rank #1</h2>
            </li>
            <li>
              <h3>Coin</h3>
            </li>
            <li>
              <h4>On 4,073,850 watchlists</h4>
            </li>
          </ul>

          <ul className={styled.headmore}>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                height="16px"
                width="16px"
                viewBox="0 0 24 24"
                class="sc-aef7b723-0 fINSSs"
              >
                <path d="M11.877 15.9787C11.8146 16.8242 11.4524 17.6196 10.8555 18.2217L9.94675 19.1305C9.27191 19.7958 8.36141 20.1672 7.41381 20.1638C6.46621 20.1604 5.5584 19.7825 4.88834 19.1124C4.21828 18.4423 3.84034 17.5345 3.83695 16.5868C3.83355 15.6392 4.20497 14.7287 4.87021 14.0538L5.779 13.145C6.38116 12.5483 7.1765 12.186 8.02192 12.1235L9.67229 10.4731C8.76285 10.2319 7.80611 10.2331 6.89728 10.4766C5.98845 10.72 5.15923 11.1973 4.49215 11.8608L3.58335 12.7697C2.56946 13.7837 1.99991 15.159 2 16.5929C2.00009 18.0269 2.5698 19.4021 3.5838 20.416C4.59781 21.43 5.97305 21.9995 7.40698 21.9994C8.84092 21.9994 10.2161 21.4296 11.23 20.4156L12.1388 19.5068C12.802 18.8395 13.279 18.0102 13.5225 17.1014C13.7659 16.1926 13.7673 15.236 13.5265 14.3265L11.877 15.9787Z"></path>
                <path d="M15.9793 11.8768C16.8248 11.8144 17.6202 11.4522 18.2222 10.8553L19.131 9.9465C19.7963 9.27163 20.1677 8.3611 20.1643 7.41348C20.1609 6.46585 19.783 5.55801 19.1129 4.88793C18.4429 4.21786 17.535 3.83991 16.5874 3.83651C15.6398 3.83312 14.7293 4.20455 14.0545 4.8698L13.1457 5.77863C12.549 6.3808 12.1868 7.17616 12.1242 8.02161L10.4738 9.67203C10.2327 8.76256 10.2339 7.80579 10.4773 6.89693C10.7208 5.98807 11.198 5.15883 11.8616 4.49173L12.7704 3.58291C13.7844 2.56899 15.1596 1.99943 16.5935 1.99951C18.0275 1.9996 19.4027 2.56932 20.4165 3.58336C21.4304 4.5974 22 5.97267 21.9999 7.40665C21.9998 8.84063 21.4301 10.2158 20.4161 11.2298L19.5073 12.1386C18.84 12.8018 18.0108 13.2789 17.102 13.5223C16.1932 13.7658 15.2366 13.7672 14.3271 13.5264L15.9793 11.8768Z"></path>
                <path d="M8.36434 16.5441C8.18462 16.5441 8.00895 16.4907 7.85954 16.3909C7.71012 16.291 7.59367 16.1491 7.5249 15.983C7.45613 15.817 7.43814 15.6343 7.47319 15.458C7.50824 15.2817 7.59476 15.1198 7.72182 14.9927L14.9922 7.72213C15.1636 7.55658 15.3932 7.46498 15.6315 7.46705C15.8697 7.46912 16.0977 7.5647 16.2662 7.7332C16.4347 7.9017 16.5302 8.12965 16.5323 8.36794C16.5344 8.60623 16.4428 8.8358 16.2772 9.00721L9.00686 16.2778C8.83646 16.4483 8.60535 16.544 8.36434 16.5441Z"></path>
              </svg>
              <span className="mx-1">bitcoin.org</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13px"
                height="13px"
                fill="currentColor"
                class="bi bi-box-arrow-up-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                />
                <path
                  fill-rule="evenodd"
                  d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13px"
                height="13px"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
              <span className="mx-1">Explorers</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13px"
                height="13px"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13px"
                height="13px"
                fill="currentColor"
                class="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              </svg>
              <span className="mx-1">Community</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13px"
                height="13px"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </li>
          </ul>

          <ul className={styled.headmore1}>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="13px"
                height="13px"
                viewBox="0 0 24 24"
                class="sc-aef7b723-0 fINSSs"
              >
                <path
                  d="M7 8L3 12L7 16M17 8L21 12L17 16"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M10 19L14 5"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span className="mx-1">Source code</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13px"
                height="13px"
                fill="currentColor"
                class="bi bi-box-arrow-up-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                />
                <path
                  fill-rule="evenodd"
                  d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13px"
                height="13px"
                fill="currentColor"
                class="bi bi-file-earmark-text"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
              </svg>
              <span className="mx-1">Whitepaper</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13px"
                height="13px"
                fill="currentColor"
                class="bi bi-box-arrow-up-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                />
                <path
                  fill-rule="evenodd"
                  d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                />
              </svg>
            </li>
          </ul>

          <span className="text-slate-600 text-[13px] font-medium ps-1">
            Tags:
          </span>
          <ul className={styled.headTags}>
            <li>Mineable</li>
            <li>PoW</li>
            <li>SHA-256</li>
            <li>Store Of Value</li>
            <li>View all</li>
          </ul>
        </div>

        <div className={styled.WrapperBitcoinAbout}>
          <div className={styled.BitcoinAbout}>
            <ul>
              <li>Bitcoin Price (BTC)</li>
              <div>
                <li>
                  <button>
                    <span className="pe-1">buy</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10px"
                      height="10px"
                      fill="currentColor"
                      class="bi bi-caret-down-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                  </button>
                </li>
                <li className="mx-1">
                  <button>
                    <span className="pe-1">Exchange</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10px"
                      height="10px"
                      fill="currentColor"
                      class="bi bi-caret-down-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                  </button>
                </li>
                <li>
                  <button>
                    <span className="pe-1">Gaming</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10px"
                      height="10px"
                      fill="currentColor"
                      class="bi bi-caret-down-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                  </button>
                </li>
                <li className="ms-1">
                  <button>
                    <span className="pe-1">Earn crypto</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10px"
                      height="10px"
                      fill="currentColor"
                      class="bi bi-caret-down-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                  </button>
                </li>
              </div>
            </ul>

            <ul>
              <li>
                <h2>
                  <span className="pe-1 text-4xl font-semibold">
                    $30,187.37
                  </span>
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
                    0.63%
                  </span>
                </h2>
                <div>
                  <svg
                    width="16px"
                    height="16px"
                    xmlns="http://www.w3.org/2000/svg"
                    class="sc-eeb78674-0 fzMCwL cmc-svg-logo"
                  >
                    <path
                      d="M11.304 7.768c-.23.144-.501.161-.707.047-.262-.146-.406-.486-.406-.96V5.435c0-.685-.274-1.172-.734-1.304-.779-.223-1.365.716-1.585 1.068L6.5 7.394V4.713c-.016-.617-.22-.986-.605-1.098-.256-.073-.638-.044-1.01.516L1.807 9A5.285 5.285 0 0 1 1.181 6.5 5.324 5.324 0 0 1 6.5 1.182 5.324 5.324 0 0 1 11.816 6.5l.001.014v.015c.027.568-.16 1.02-.513 1.24zM12.997 6.5V6.471A6.507 6.507 0 0 0 6.498 0 6.507 6.507 0 0 0 0 6.5C0 10.084 2.915 13 6.499 13a6.477 6.477 0 0 0 4.418-1.733.59.59 0 1 0-.803-.867 5.298 5.298 0 0 1-3.615 1.418 5.304 5.304 0 0 1-3.957-1.77l2.775-4.39v2.024c0 .972.383 1.286.704 1.378.321.092.812.03 1.327-.795l1.526-2.438c.05-.079.094-.147.136-.205v1.232c0 .91.37 1.636 1.013 1.994.58.323 1.31.294 1.905-.076.721-.449 1.11-1.275 1.07-2.272z"
                      fill="#7e899f"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Sponsored</span>
                </div>
              </li>

              <li>
                <span>15.79 ETH</span>
                <div>
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
                  <span>0.42%</span>
                </div>
              </li>
            </ul>

            <ul>
              <li>
                Low:<span>$29,794.27</span>
              </li>

              <li>
                <div>
                  High:<span>$30,221.34</span>
                </div>
                <div>
                  <span>24h</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9px"
                    height="9px"
                    fill="currentColor"
                    class="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </div>
              </li>
            </ul>
          </div>

          <div className={styled.BitcoinMarketWrapper}>
            <ul className={styled.marketCap}>
              <li>
                <span>Market Cap</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12px"
                  height="12px"
                  fill="currentColor"
                  class="bi bi-info-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </svg>
              </li>

              <li className="my-1">$590.400.731.189</li>

              <li>
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
                <span>1.22%</span>
              </li>

              <li>
                <span className="me-5 text-[11px] pt-0.5">
                  24h Volume / Market Cap
                </span>
                <span>0.1534</span>
              </li>
            </ul>

            <ul className={styled.marketCap}>
              <li>
                <span>Fully Diluted Market Cap</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12px"
                  height="12px"
                  fill="currentColor"
                  class="bi bi-info-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </svg>
              </li>
              <li className="my-1">$590.400.731.189</li>
              <li>
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
                <span>1.22%</span>
              </li>
            </ul>

            <ul className={styled.marketCap}>
              <li className={styled.volume}>
                <span>
                  Volume <small>24h</small>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12px"
                  height="12px"
                  fill="currentColor"
                  class="bi bi-info-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </svg>
              </li>

              <li className="my-1">$590.400.731.189</li>

              <li>
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
                <span>1.22%</span>
              </li>

              <li>
                <div className="me-5 flex flex-wrap items-center">
                  <span className="me-3.5 text-slate-400">CEX</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12px"
                    height="12px"
                    fill="currentColor"
                    class="mt-1 ms-3 bi bi-info-circle-fill text-slate-400"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                  </svg>
                  <span className="flex flex-wrap items-center">
                    <span className="me-5 text-slate-400">Vol</span>
                    <p className="text-slate-400 me-2">DEXVol</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12px"
                      height="12px"
                      fill="currentColor"
                      class="bi bi-info-circle-fill text-slate-400"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                    </svg>
                  </span>
                </div>
                <div className="flex flex-wrap mt-4">
                  <span className="text-black">$90,604,278,448</span>
                  <span className="ms-8">$3,547,740</span>
                </div>
              </li>
            </ul>

            <ul className={styled.marketCapLast}>
              <li>
                <span>Circulating Supply</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12px"
                  height="12px"
                  fill="currentColor"
                  class="bi bi-info-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14px"
                  height="14px"
                  fill="currentColor"
                  class="bi bi-patch-check text-white bg-blue-600 rounded-full"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                  />
                  <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
                </svg>
              </li>

              <li className="my-1">590.400.731.189 BTC</li>

              <li>
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
                <span>1.22%</span>
              </li>

              <li>
                <div className="me-5 flex flex-wrap items-center">
                  <span className="me-1 text-slate-400">Max Supply</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12px"
                    height="12px"
                    fill="currentColor"
                    class="mt-0.5 ms-3 bi bi-info-circle-fill text-slate-400"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                  </svg>
                  <span className="flex flex-wrap items-center">
                    <span className="me-3.5 text-slate-400">Total Supply</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12px"
                      height="12px"
                      fill="currentColor"
                      class="bi bi-info-circle-fill text-slate-400"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                    </svg>
                  </span>
                </div>
                <div className="flex flex-wrap">
                  <span className="text-black">21,000,000</span>
                  <span>19,434,393</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="px-20 flex items-center border-b py-4">
        <div className={styled.tabs}>
          {TabsItems.map((val, index) => (
            <ul key={index}>
              <li
                className={`${
                  index === 0
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "hover:bg-slate-200"
                }`}
              >
                {val.title}
              </li>
            </ul>
          ))}
        </div>
      </div>

      <div className="flex justify-between px-20 mt-16">
        <div className="w-[63%]">
          <Charts />
        </div>
        <div className="w-[32%]">
          <AsideBitcoin
            title="Bitcoin Community"
            symbol="BTC Price Statistics"
            today="Bitcoin Price Today"
            price="Bitcoin Price"
            market="Bitcoin Market Cap"
            numb="#1"
            money="$29,750.85"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Bitcoin;
