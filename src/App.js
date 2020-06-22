import React from "react";
import "./App.css";
import Products from "./components/Products";
import { produkts } from "./data/products"

function App() {
  return (
    <div className="Handys">
      {produkts.map((prudukt) => (
        //wo wir schreiben ? in meine Prouducts.js alles rein
        <Products
          title={prudukt.title}
          description={prudukt.description}
          img={prudukt.img}
        />
      ))}
    </div>
  );
}
//muss die Foto position änderen
//<ProductDetails img="iPhone11.png" title="iPhone 11" price="1549,00 €" alt="FairPhone"/>
//<ProductDetails img="fairphone.png" title="FairPhone" price="399,00 €" alt="iPhone11"/>
//<ProductDetails img="Samsungs20.png" title="Samsung S20" price="1399,00 €" alt="Samsungs20"/>

export default App;
