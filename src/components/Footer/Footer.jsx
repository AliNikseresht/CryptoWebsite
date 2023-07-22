import React from "react";
import Logofooter from "../../assets/coinmarketcap_1.svg";
import styled from "../Footer/Footer.module.css";

const Footer = () => {
  return (
    <div className={styled.LogofooterWrapper}>
      <div className={styled.Logofooter}>
        <figure>
          <img src={Logofooter} alt="Logofooter" />
        </figure>
      </div>
      <div className={styled.listfoot}>
        <ul>
          <h2>Products</h2>
          <li>Blockchain Explorer</li>
          <li>Crypto API</li>
          <li>Crypto Indices</li>
          <li>Doodles</li>
          <li>Jobs Board</li>
          <li>Sitemap</li>
        </ul>
        <ul>
          <h2>Company</h2>
          <li>About us</li>
          <li>Terms of use</li>
          <li>Privacy Policy</li>
          <li>Cookie preferences</li>
          <li>Community Rules</li>
          <li>Disclaimer</li>
          <li>Methodology</li>
          <li>
            Careers <span>We're hiring!</span>
          </li>
        </ul>
        <ul>
          <h2>Support</h2>
          <li>Request Form</li>
          <li>Contact Support</li>
          <li>FAQ</li>
          <li>Glossary</li>
        </ul>
        <ul>
          <h2>Socials</h2>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Telegram</li>
          <li>Instagram</li>
          <li>Interactive Chat</li>
        </ul>
      </div>

      <div className={styled.copyright}>
        <ul>© 2023 CoinMarketCap. All rights reserved</ul>
        <ul>
          <img
            src="https://s2.coinmarketcap.com/static/cloud/img/app_store_badge_black_1.svg?_=7b89cd1"
            alt="appstoreLogo"
          />
          <img
            src="https://s2.coinmarketcap.com/static/cloud/img/google_play_badge_1.png?_=7b89cd1"
            alt="googleplayLogo"
          />
          <img
            src="https://s2.coinmarketcap.com/static/cloud/img/qr-code-button.svg?_=7b89cd1"
            alt="QrcodeLogo"
          />
        </ul>
      </div>
    </div>
  );
};

export default Footer;
