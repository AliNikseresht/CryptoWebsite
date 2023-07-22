import React from "react";
import styled from "../Highlights/Highlights.module.css";
import { Link } from "react-router-dom";
import LogoXRP from "../../assets/Image-Trending/52.png";
import Logokaspa from "../../assets/Image-Trending/20396.png";
import Logopepe from "../../assets/Image-Trending/24478.png";
import VerifyLogo from "../../assets/Image-Trending/verify.png";
import Logobnb from "../../assets/Image-Trending/bnb.png";
import Logonetwork from "../../assets/Image-Trending/network.png";
import Logovechain from "../../assets/Image-Trending/vechain.png";

const trnItems = [
  {
    id: "1",
    src: LogoXRP,
    title: "XRP",
    symbol: "XRP",
    icnup: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-caret-up-fill"
        viewBox="0 0 16 16"
      >
        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
      </svg>
    ),
    price: "2.16%",
  },
  {
    id: "2",
    src: Logokaspa,
    title: "Kaspa",
    symbol: "KAS",
    icnup: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-caret-up-fill"
        viewBox="0 0 16 16"
      >
        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
      </svg>
    ),
    price: "6.27%",
  },
  {
    id: "3",
    src: Logopepe,
    title: "Pepe",
    symbol: "PEPE",
    icnup: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-caret-up-fill"
        viewBox="0 0 16 16"
      >
        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
      </svg>
    ),
    price: "3.53%",
  },
];

const TopCommItems = [
  {
    src: Logobnb,
    title: "BNB Chain",
    img: VerifyLogo,
    username: "@BNBChain",
    Follow: "+Follow",
  },
  {
    src: Logonetwork,
    title: "1inch Network",
    img: VerifyLogo,
    username: "@1inch",
    Follow: "+Follow",
  },
  {
    src: Logovechain,
    title: "vechain",
    img: VerifyLogo,
    username: "@vechain",
    Follow: "+Follow",
  },
];

const Highlights = () => {
  return (
    <div className="flex justify-center w-full py-2 px-5 md:w-[100%] xl:py-2 xl:px-20">
      <div className={styled.highWrapper}>
        <section>
          <h2>Today's Cryptocurrency Prices by Market Cap</h2>
          <h4>
            The global crypto market cap is $1.2T, a
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-down-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
              0.51%
            </span>
            decrease over the last day. <Link>Read More</Link>
          </h4>
        </section>

        <section className={styled.cardWrapper}>
          {/* card-1 */}
          <div className={styled.card1}>
            <ul>
              <li>
                <img
                  src="https://s2.coinmarketcap.com/static/cloud/img/TrendingIcon.png?_=db770f9"
                  alt="FireTrending"
                />
                <h3>Trending</h3>
              </li>
              <li>
                More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </li>
            </ul>

            <ul>
              {trnItems.map((item, index) => (
                <div className="flex justify-between">
                  <li className="w-[33%] mt-3" key={index}>
                    <span className="ps-1.5">{item.id}</span>
                    <img
                      className={`${
                        index === 1 || index === 2
                          ? "ms-[9.2%] me-3 rounded-full"
                          : ""
                      }`}
                      src={item.src}
                      alt="LogoXRP"
                    />
                    <h5>{item.title}</h5>
                    <span>{item.symbol}</span>
                  </li>
                  <li>
                    <span
                      className={`${
                        index === 0 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {item.icnup}
                    </span>
                    <span
                      className={`${
                        index === 0 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {item.price}
                    </span>
                  </li>
                </div>
              ))}
            </ul>
          </div>

          {/* card-2 */}
          <div className={styled.card2}>
            <ul className="ps-[3.3%]">
              <li>
                ⭐️
                <h3>Top Community Accounts</h3>
              </li>
              <li>
                More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </li>
            </ul>

            <ul>
              {TopCommItems.map((item, index) => (
                <div className="flex justify-between">
                  <li
                    className={`${
                      index === 0 || index === 1 ? "ms-2 " : ""
                    }w-[55%] mt-3 flex`}
                    key={index}
                  >
                    <span>{item.id}</span>
                    <img
                      className="rounded-full"
                      src={item.src}
                      alt="LogoXRP"
                    />
                    <h5 className={`${index===2?'me-3':''}`}>{item.title}</h5>
                    <img src={item.img} alt="logoverify" />
                    <span>{item.username}</span>
                  </li>
                  <li>
                    <span className="text-black bg-sky-50 rounded-md p-1 px-5 text-sm">
                      {item.Follow}
                    </span>
                  </li>
                </div>
              ))}
            </ul>
          </div>

          {/* card-3 */}
          <div className={styled.card3}>
            <ul className="flex items-center">
              <li className="pe-2">
                <h3 className="font-bold">Fear & Greed Index</h3>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-exclamation-circle text-slate-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
                </svg>
              </li>
            </ul>
            <ul>
              <li className="flex mt-5 justify-center items-center">
                <svg
                  width="177"
                  height="89"
                  viewBox="0 0 177 89"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M173.262 88C174.967 88 176.354 86.6173 176.294 84.9135C175.747 69.3495 171.069 54.2074 162.739 41.0369C161.829 39.5992 159.909 39.2385 158.502 40.1946V40.1946C157.091 41.1536 156.731 43.073 157.639 44.5176C165.272 56.6598 169.575 70.5911 170.116 84.9137C170.181 86.6174 171.557 88 173.262 88V88Z"
                    fill="#16C784"
                  ></path>
                  <path
                    d="M156.897 37.9461C158.276 36.9419 158.582 35.0049 157.527 33.664C147.855 21.3698 135.074 11.8665 120.501 6.13374C118.919 5.51151 117.158 6.35475 116.589 7.9564V7.9564C116.019 9.56129 116.861 11.3189 118.444 11.9467C131.848 17.2616 143.611 26.0103 152.545 37.3081C153.6 38.6424 155.522 38.9473 156.897 37.9461V37.9461Z"
                    fill="#93D900"
                  ></path>
                  <path
                    d="M113.03 6.79368C113.529 5.1655 112.613 3.4359 110.968 2.99624C95.9311 -1.02229 80.0941 -0.998203 65.0696 3.06605C63.4258 3.51072 62.5154 5.24312 63.0192 6.86979V6.86979C63.5221 8.49352 65.2439 9.3971 66.8859 8.95738C80.732 5.24947 95.3122 5.22729 109.17 8.89306C110.813 9.32777 112.532 8.41894 113.03 6.79368V6.79368Z"
                    fill="#F3D42F"
                  ></path>
                  <path
                    d="M60.1455 7.80322C59.5852 6.19848 57.8286 5.34566 56.2435 5.95929C41.7314 11.5772 28.9667 20.9284 19.2489 33.0606C18.1823 34.3922 18.4716 36.3318 19.842 37.3481V37.3481C21.2083 38.3612 23.1323 38.0731 24.1989 36.7482C33.1738 25.6002 44.9213 16.992 58.2681 11.7833C59.8547 11.1641 60.707 9.41116 60.1455 7.80322V7.80322Z"
                    fill="#EA8C00"
                  ></path>
                  <path
                    d="M17.7126 40.3161C16.3039 39.3625 14.3841 39.7265 13.4772 41.1658C5.1935 54.313 0.544063 69.4152 0.00210452 84.935C-0.0573952 86.6388 1.3307 88.0212 3.03561 88.0208V88.0208C4.74051 88.0203 6.11617 86.6374 6.18018 84.9337C6.71672 70.6522 10.9931 56.7581 18.5827 44.6376C19.4882 43.1915 19.1255 41.2726 17.7126 40.3161V40.3161Z"
                    fill="#EA3943"
                  ></path>
                </svg>
                <div className="absolute ">
                  <span className="font-bold text-3xl">55</span>
                  <span className="text-xs absolute top-8 -left-0.5">
                    Neutral
                  </span>
                  <span className="absolute bottom-12 -right-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="8" />
                    </svg>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Highlights;
