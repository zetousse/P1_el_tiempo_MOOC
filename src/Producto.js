import React, { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";

function Producto(props) {
  let { productId } = useParams();

  let item = props.theproducts.find((producto) => {
    return producto.id === Number(productId);
  });

  console.log(document.getElementById("titulo"));

  
  return (
    <div>
      <div className="containerr">
        <div className="box">
          {props.theproducts.map((coso) => {
            if (coso.id === Number(productId))
              return (
                <div  key={coso.id}>
                  <div className="product-img">
                    <img
                      src={
                        coso.images[
                          Math.ceil(Math.random() * coso.images.length - 1)
                        ]
                      }
                      width="250"
                      alt=""
                    />
                  </div>

                  <div className="product-info">
                    <h1 id="titulo">{coso.title}</h1>

                    <p className="price">
                      {coso.price} $ Rating : {coso.rating} Stock :{coso.stock}
                    </p>

                    <p className="description">{coso.description} </p>

                    <br />

                    <Link to="/">
                      <button className="hola" id="volver">
                        Volver
                      </button>
                    </Link>
                  </div>
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
}

export default Producto;
