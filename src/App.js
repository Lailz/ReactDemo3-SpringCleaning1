import React from "react";

// Components
import CookieList from "./components/CookieList";

// Styling
import styles from "./styles";

function App() {
  return (
    <div style={styles.body}>
      <div>
        <h1 style={styles.text}>Cookies and Beyond</h1>
        <h4 style={styles.text}>Where cookie maniacs gather</h4>
        <img
          alt="cookie shop"
          src="https://i.pinimg.com/originals/8f/cf/71/8fcf719bce331fe39d7e31ebf07349f3.jpg"
          style={styles.shopImage}
        />
      </div>
      <CookieList />
    </div>
  );
}

export default App;
