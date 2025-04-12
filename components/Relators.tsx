import React from "react";

const Relators = () => {
  return (
    <div className="realtors bg-secondary col-[9/-1] p-[30px] grid content-center justify-center justify-items-center gap-y-5">
      <h3 className="heading-3">Top 3 Realtors</h3>
      <div className="realtors__list">
        <img
          src="img/realtor-1.jpeg"
          alt="Realtor 1"
          className="realtors__img"
        />
        <div className="realtors__details">
          <h4 className="heading-4 heading-4--light">Erik Feinman</h4>
          <p className="realtors__sold">245 houses sold</p>
        </div>

        <img
          src="img/realtor-2.jpeg"
          alt="Realtor 2"
          className="realtors__img"
        />
        <div className="realtors__details">
          <h4 className="heading-4 heading-4--light">Kim Brown</h4>
          <p className="realtors__sold">212 houses sold</p>
        </div>

        <img
          src="img/realtor-3.jpeg"
          alt="Realtor 3"
          className="realtors__img"
        />
        <div className="realtors__details">
          <h4 className="heading-4 heading-4--light">Toby Ramsey</h4>
          <p className="realtors__sold">198 houses sold</p>
        </div>
      </div>
    </div>
  );
};

export default Relators;
