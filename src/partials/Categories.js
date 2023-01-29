import React from "react";

import Button from "components/Button";

export default function Categories({ data }) {
  return data.map((category, i) => {
    return (
      <section className="container" key={`category-${i}`}>
        <h4 className="mb-3 font-weight-medium">{category.name}</h4>
        <div className="container-grid">
          {category.items.map((item, index) => {
            return (
              <div
                className="item column-3 row-1"
                key={`category-${i}-item-${index}`}
              >
                <div className="card">
                  {item.isPopular && (
                    <div className="tag">
                      Popular <span className="font-weight-light">Choice</span>
                    </div>
                  )}
                  <figure className="img-wrapper" style={{ height: 180 }}>
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="img-cover"
                    />
                  </figure>
                  <div className="meta-wrapper">
                    <Button
                      className="streched-link d-block text-gray-800"
                      href={`/properties/${item._id}`}
                      type="link"
                    >
                      <h5 className="h4">{item.name}</h5>
                    </Button>
                    <span className="text-gray-500">
                      {item.city}, {item.country}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  });
}
