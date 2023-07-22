import React, { useState } from "react";
import styled from "./Navbar.module.css";
import Modal from "../Modal/Modal";
import logoBinance from "../../assets/1839.png";
import { Link } from "react-router-dom";

const navHead = [
  {
    title: "Cryptos:",
    conut: "26.343",
  },
  {
    title: "Exchanges:",
    conut: "644",
  },
  {
    title: "Market Cap:",
    conut: "$1.2T",
    icnarr: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="11"
        height="11"
        fill="currentColor"
        class="bi bi-caret-down-fill"
        viewBox="0 0 16 16"
      >
        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
      </svg>
    ),
    priceDown: "0.99%",
  },
  {
    title: "24h Vol: ",
    conut: "$35.27B",
    icnarr2: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="11"
        height="11"
        fill="currentColor"
        class="bi bi-caret-up-fill"
        viewBox="0 0 16 16"
      >
        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
      </svg>
    ),
    priceDown1: "39.23%",
  },
  {
    title: "Dominance:",
    id: "BTC:",
    conut: "48.5%",
    id2: "ETH",
    price: "19.0%",
  },
  {
    icn: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="11"
        height="11"
        fill="currentColor"
        class="bi bi-fuel-pump-fill"
        viewBox="0 0 16 16"
      >
        <path d="M1 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1 2 2v.5a.5.5 0 0 0 1 0V8h-.5a.5.5 0 0 1-.5-.5V4.375a.5.5 0 0 1 .5-.5h1.495c-.011-.476-.053-.894-.201-1.222a.97.97 0 0 0-.394-.458c-.184-.11-.464-.195-.9-.195a.5.5 0 0 1 0-1c.564 0 1.034.11 1.412.336.383.228.634.551.794.907.295.655.294 1.465.294 2.081V7.5a.5.5 0 0 1-.5.5H15v4.5a1.5 1.5 0 0 1-3 0V12a1 1 0 0 0-1-1v4h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V2Zm2.5 0a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5Z" />
      </svg>
    ),
    title: "ETH Gas:",
    conut: "17 Gwei",
    icn2: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="11"
        height="11"
        fill="currentColor"
        class="bi bi-chevron-down"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
        />
      </svg>
    ),
  },
  {
    title: "Fear & Greed:",
    conut: "57/100",
  },
];

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const handleModalOpen = (title) => {
    setShowModal(true);
    setModalTitle(title);
  };

  return (
    <div className="py-3 border-b border">
      <div className={styled.navtopWrapper}>
        {navHead.map((item, index) => (
          <ul className={styled.navtop} key={index}>
            <li>
              <span className="mx-0.5">{item.icn}</span>
              {item.title}
              <span className="text-sky-500">{item.id}</span>
              <span className="text-sky-500">{item.conut}</span>
              <span className="text-red-500 ps-1">{item.icnarr}</span>
              <span className="text-green-500 ps-1">{item.icnarr2}</span>
              <span className="text-sky-500">{item.icn2}</span>
              <span className="text-sky-500">{item.id2}</span>
              <span className="text-sky-500 pe-1">{item.price}</span>
              <span className="text-red-500">{item.priceDown}</span>
              <span className="text-green-500">{item.priceDown1}</span>
            </li>
          </ul>
        ))}

        <ul className={styled.moreEng}>
          <h2>English</h2>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-coin"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
          </svg>
          <h2>USD</h2>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-moon-fill"
            viewBox="0 0 16 16"
          >
            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
          </svg>
        </ul>

        <ul className={styled.inp}>
          <img
            src="https://s2.coinmarketcap.com/static/cloud/img/loyalty-program/diamond-icon.svg"
            alt="logogem"
          />
          <button onClick={() => handleModalOpen("Log In")}>Log In</button>
          <button onClick={() => handleModalOpen("Sign up")}>Sign up</button>
          <img
            src="https://s2.coinmarketcap.com/static/cloud/img/signup/signupGift.gif?_=8a6015c"
            alt="happylogo"
          />
        </ul>
        <Modal
          isVisible={showModal}
          onClose={() => setShowModal(false)}
          modalTitle={modalTitle}
        >
          <div className="flex flex-wrap text-sm">
            <label htmlFor="email" className="w-[100%] my-2 text-slate-500">
              Email Address
            </label>
            <input
              className="border outline-none border-slate-300 shadow shadow-sky-300 p-4 rounded-xl w-[100%]"
              type="email"
              placeholder="Enter your email address..."
            />
            <div className="w-[100%] text-slate-500 flex justify-between my-3">
              <label htmlFor="password">Password</label>
              <label htmlFor="password">Forgot password?</label>
            </div>
            <input
              className="outline-none p-4 rounded-xl w-[100%] shadow shadow-sky-300"
              type="password"
              placeholder="Enter your password..."
            />
          </div>
          <button className="w-[100%] bg-blue-500 text-white p-4 text-lg rounded-xl my-7 font-bold">
            <Link to="/bitcoin" className="px-52 py-4">
              Log In
            </Link>
          </button>
          <span className="w-[100%] font-bold mb-7 flex justify-center">
            OR
          </span>
          <button className="w-[100%] flex justify-center items-center border border-slate-300 text-sm text-black p-3 rounded-xl font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-google text-red-500"
              viewBox="0 0 16 16"
            >
              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
            </svg>
            <span className="ms-2">Continue with Google</span>
          </button>
          <button className="w-[100%] flex justify-center items-center border border-slate-300 text-sm text-black p-3 rounded-xl my-1.5 font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-apple"
              viewBox="0 0 16 16"
            >
              <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
              <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
            </svg>
            <span className="ms-2">Continue with Apple</span>
          </button>
          <button className="w-[100%] flex justify-center items-center border border-slate-300 text-sm text-black p-3 rounded-xl font-bold">
            <img className="w-4 h-4" src={logoBinance} alt="logoBinance" />
            <span className="ms-2">Continue with Binance</span>
          </button>
          <button className="w-[100%] flex justify-center items-center border border-slate-300 text-sm text-black p-3 rounded-xl my-1.5 font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-credit-card-fill text-sky-700"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0V4zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7H0zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z" />
            </svg>
            <span className="ms-2">Continue with Wallet</span>
          </button>
        </Modal>
      </div>
    </div>
  );
};

export default Navbar;
