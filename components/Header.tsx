import React from "react";

const Header = () => {
  return (
    <header
      className="header !p-20 !pt-10"
      style={{
        backgroundImage: `linear-gradient(
        rgb(16 29 44 / 93%),
        rgb(16 29 44 / 93%)
      ), url(/img/hero.jpeg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* bg-grey-dark-1 */}
      <img
        src="img/logo.png"
        alt="Nexter logo"
        className="header__logo h-[30px] justify-self-center"
      />
      <h3 className="heading-3">Your own home:</h3>
      <h1 className="heading-1">The ultimate personal freedom</h1>
      <button className="btn header__btn self-start justify-self-start">
        View our properties
      </button>
      <div className="header__seenon-text grid grid-cols-[1fr_max-content_1fr] gap-x-[15px] items-center text-base text-grey-light-2">
        Seen on
      </div>
      <div className="header__seenon-logos">
        <img src="img/logo-bbc.png" alt="Seen on logo 1" />
        <img src="img/logo-forbes.png" alt="Seen on logo 2" />
        <img src="img/logo-techcrunch.png" alt="Seen on logo 3" />
        <img src="img/logo-bi.png" alt="Seen on logo 4" />
      </div>
    </header>
  );
};

export default Header;
