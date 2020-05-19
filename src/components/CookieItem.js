import React from "react";

// Styling
import styles from "../styles";

const CookieItem = props => {
  const cookie = props.cookie;
  return (
    <div style={styles.cookie}>
      <img style={styles.cookieImage} alt={cookie.name} src={cookie.image} />
      <p style={styles.text}>{cookie.name}</p>
      <p style={styles.text}>{cookie.price} KD</p>
    </div>
  );
};

export default CookieItem;
