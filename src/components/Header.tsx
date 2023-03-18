import React from "react";

function Header() {
  const imageUrl = `${process.env.PUBLIC_URL}/workshop.jpg`;

  return (
    <header>
        <div className="image-container-header">
            <img className="header-image" src={imageUrl} />
        </div>
        <div className="headerbg" />
        <h1 className="comp-title">MAOCHA工房</h1>
        <h2 className="comp-description">会津のWonderland</h2>
    </header>
  );
}

export default Header;

  