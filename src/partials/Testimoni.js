import React from "react";

import Star from "components/Star";
import Button from "components/Button";

export default function Testimoni({ data }) {
  return (
    <section className="container">
      <div className="row align-items-center">
        <div className="col-auto" style={{ marginRight: 60 }}>
          <div className="testimonial-hero" style={{ margin: "30px 0 0 30px" }}>
            <img
              src={data.imageUrl}
              alt="Testimonial"
              className="position-absolute"
              style={{ zIndex: 1, borderRadius: "15px 15px 90px 15px    " }}
            />
            <div
              className="img-fluid position-absolute img-misc"
              style={{
                zIndex: -1,
                margin: "-30px 0 0 -30px",
                maxHeight: "90%",
                maxWidth: "85%",
              }}
            ></div>
          </div>
        </div>
        <div className="col">
          <h4 style={{ marginBottom: "40px" }}>{data.name}</h4>
          <Star value={data.rate} width={35} height={35} spacing={4} />
          <h5 className="h2 font-weight-light line-height-2 my-3">
            {data.content}
          </h5>
          <span className="text-gray-500">
            {data.familyName}, {data.familyOccupation}
          </span>

          <div>
            <Button
              className="btn px-5"
              style={{ marginTop: "40px" }}
              hasShadow
              isPrimary
              type="link"
              href={`/testimonial/${data._id}`}
            >
              Read Their Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
