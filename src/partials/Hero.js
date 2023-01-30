import React from "react";

import ImageHero from "assets/images/img-hero.jpg";
import IconCities from "assets/images/icons/icon-cities.svg";
import IconTraveler from "assets/images/icons/icon-traveler.svg";
import IconTreasure from "assets/images/icons/icon-treasure.svg";

import Button from "components/Button";

import numberFormat from "utils/formatNumber";

export default function Hero(props) {
  const showMostPicked = () => {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  };

  return (
    <section className="container pt-4">
      <div className="row justify-content-between">
        <div className="col-6">
          <h1 className="font-weight-bold line-height-1 mb-3">
            Forget Busy Work, <br />
            Start Next Vacation
          </h1>
          <p className="mb-3 font-weight-light text-gray-600 w-75">
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button
            className="btn px-5"
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Show Me Now
          </Button>

          <div className="row mt-5">
            <div className="col-auto">
              <img
                width="36"
                height="36"
                src={IconTraveler}
                alt={`${props.data.travelers} Travelers`}
              />
              <h6 className="mt-3">
                {numberFormat(props.data.travelers)}{" "}
                <span className="text-gray-600 font-weight-light">
                  Travelers
                </span>
              </h6>
            </div>
            <div className="col-auto">
              <img
                width="36"
                height="36"
                src={IconTreasure}
                alt={`${props.data.treasures} Treasures`}
              />
              <h6 className="mt-3">
                {numberFormat(props.data.treasures)}{" "}
                <span className="text-gray-600 font-weight-light">
                  Treasures
                </span>
              </h6>
            </div>
            <div className="col-auto">
              <img
                width="36"
                height="36"
                src={IconCities}
                alt={`${props.data.cities} Cities`}
              />
              <h6 className="mt-3">
                {numberFormat(props.data.cities)}{" "}
                <span className="text-gray-600 font-weight-light">Cities</span>
              </h6>
            </div>
          </div>
        </div>

        <div className="col-6">
          <div style={{ margin: "0 -30px" }}>
            <img
              src={ImageHero}
              alt="Beautiful Landscape from sky"
              className="img-fluid position-absolute"
              style={{
                margin: "-30px",
                zIndex: 1,
                borderRadius: "90px 15px 15px 15px",
              }}
            />
            <div
              className="img-fluid position-absolute img-misc"
              style={{ zIndex: -1 }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
