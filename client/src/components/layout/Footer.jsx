import "../components.css";
import logo from "../../assets/logo.png";

import { FaYoutube, FaDiscord, FaInstagram, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full h-64 bg-violet-600">
      <div className="mx-auto max-w-340 h-full flex items-center justify-evenly">
        <img 
          src={logo}
          alt="logo - image"
          className="w-fit h-16"
        />

        {/* icons */}
        <div className="flex gap-4">
          <FaDiscord className="footer-btns" />
          <FaInstagram  className="footer-btns" />
          <FaYoutube className="footer-btns" />
          <FaGithub className="footer-btns" />
        </div>

        {/* offers and help */}
        <div>
          <li className="footer-list">
            <ul>Coupons & Offers</ul>
            <ul>Photos & Reviews</ul>
            <ul>Track Order</ul>
            <ul>Need help?</ul>
            <ul>About Us</ul>
          </li>
        </div>

        {/* policy and conditions */}
        <div>
          <li className="footer-list">
            <ul>100 Days Return Policy</ul>
            <ul>Privacy Policy</ul>
            <ul>Shipping Policy</ul>
            <ul>Terms & Conditions</ul>
            <ul>Work With Us</ul>
          </li>
        </div>
      </div>

      {/* Copy right */}
      <div className="bg-gray-50 text-gray-600 text-sm text-center py-4"> 
        <p>
          All artworks posted on this website is intended as fan art and are submitted by independent artist from around the world and is not purported to be official merchandise unless indicated otherwise. 
          <br />
          If you have any issues regarding the artwork do write in to us at care@comicsense.xyz
          <br />
          Copyright © 2026 Comicsense
        </p>
      </div>
    </div>
  )
}

export default Footer;