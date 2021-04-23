import React from "react";
import Product from "./components/Product";
import data from "./data";

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a href="index.html" className="brand">
            amazon-c
          </a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>

      <main>
        <div className="row center">
          {data.products.map((product) => {
            return (
              <Product key={product._id} product={product}></Product>
            );
          })}
        </div>
      </main>

      <footer class="row center">All rights reserved</footer>
    </div>
  );
}

export default App;
