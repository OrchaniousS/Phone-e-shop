import React from "react";

import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <div className={styles.shopName}>My Phone ^ shop ^</div>
      <ul>
        <li>
          <a href="/cart">
            <img src="https://img.icons8.com/nolan/452/favorite-cart.png" />
            Cart
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
