import React from 'react';

// Components
import CookieItem from './CookieItem';

// Data
import cookies from '../cookies';

const CookieList = () => {
  const cookieList = cookies.map((cookie) => (
    <CookieItem cookie={cookie} key={cookie.id} />
  ));
  return <div className="list">{cookieList}</div>;
};

export default CookieList;
