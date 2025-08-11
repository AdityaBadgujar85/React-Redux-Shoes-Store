import React from 'react';
import classes from '../css/Footer.module.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes['footer-container']}>
        <div className={classes["footer-col"]}>
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Affiliate Program</a></li>
          </ul>
        </div>
        <div className={classes["footer-col"]}>
          <h4>Get Help</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Order Status</a></li>
            <li><a href="#">Payment Options</a></li>
          </ul>
        </div>
        <div className={classes["footer-col"]}>
          <h4>Online Shop</h4>
          <ul>
            <li><a href="#">Watch</a></li>
            <li><a href="#">Bag</a></li>
            <li><a href="#">Shoes</a></li>
            <li><a href="#">Dress</a></li>
          </ul>
        </div>
        <div className={classes["footer-col"]}>
          <h4>Follow Us</h4>
          <div className={classes["social-links"]}>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
