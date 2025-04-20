import React from "react";

const Homes = () => {
  return (
    <section className="homes">
      <HomeCard
        image="img/house-1.jpeg"
        name="Beautiful Familiy House"
        location="USA"
        rooms="5"
        area="325"
        price="1,200,000"
      />

      <HomeCard
        image="img/house-2.jpeg"
        name="odern Glass Villa"
        location="Canada"
        rooms="6"
        area="450"
        price="2,750,000"
      />

      <HomeCard
        image="img/house-3.jpeg"
        name="Cozy Country House"
        location="UK"
        rooms="4"
        area="250"
        price="850,000"
      />

      <HomeCard
        image="img/house-4.jpeg"
        name="Large Rustical Villa"
        location="Portugal"
        rooms="6"
        area="480"
        price="1,950,000"
      />

      <HomeCard
        image="img/house-5.jpeg"
        name="Majestic Palace House"
        location="Germany"
        rooms="18"
        area="4230"
        price="9,500,000"
      />

      <HomeCard
        image="img/house-6.jpeg"
        name="Modern Familiy Apartment"
        location="Italy"
        rooms="3"
        area="180"
        price="600,000"
      />
    </section>
  );
};

export default Homes;

const HomeCard = ({ name, location, rooms, price, area, image }: any) => {
  return (
    <div className="home">
      <img src={image} alt="House 1" className="home__img" />
      <svg className="home__like">
        <use xlinkHref={`img/sprite.svg#icon-heart-full`}></use>
      </svg>
      <h5 className="home__name">{name}</h5>
      <div className="home__location">
        <svg>
          <use xlinkHref="img/sprite.svg#icon-map-pin"></use>
        </svg>
        <p>{location}</p>
      </div>
      <div className="home__rooms">
        <svg>
          <use xlinkHref="img/sprite.svg#icon-profile-male"></use>
        </svg>
        <p>{rooms} rooms</p>
      </div>
      <div className="home__area">
        <svg>
          <use xlinkHref="img/sprite.svg#icon-expand"></use>
        </svg>
        <p>
          {area} m<sup>2</sup>
        </p>
      </div>
      <div className="home__price">
        <svg>
          <use xlinkHref="img/sprite.svg#icon-key"></use>
        </svg>
        <p>${price}</p>
      </div>
      <button className="btn home__btn">Contact realtor</button>
    </div>
  );
};
