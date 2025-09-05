import React from "react";
import "./App.css";

import emirates from "./assets/emirates.svg";
import adidas from "./assets/adidas.svg";
import hp from "./assets/hp.svg";
import mahou from "./assets/mahou.svg";
import dubai from "./assets/dubai.svg";
import BMW from "./assets/BMW.svg";
import LouisVuitton from "./assets/LouisVuitton.svg";
import eaSports from "./assets/ea-sports.svg";
import abbott from "./assets/abbott.svg";
import nivea from "./assets/nivea.svg";
import kress from "./assets/kress.svg";
import linglon from "./assets/linglon.svg";
import adobe from "./assets/adobe.svg";
import palladium from "./assets/palladium.svg";
import daktronics from "./assets/daktronics.svg";
import cisco from "./assets/cisco.svg";
import softtek from "./assets/softtek.svg";
import canon from "./assets/canon.svg";
import codere from "./assets/codere.svg";
import sanitas from "./assets/sanitas.svg";
import corpay from "./assets/corpay.svg";
import solan from "./assets/solan.svg";
import volt from "./assets/volt.svg";

function App() {
  return (
    <div className="sponsors">
      {/* Fila 1 */}
      <div className="row" style={{ justifyContent: "center", marginBottom: "32px", display: "flex" }}>
        <img src={emirates} alt="Emirates" style={{ maxWidth: "180px", margin: "0 40px" }} />
        <img src={adidas} alt="Adidas" style={{ maxWidth: "120px", margin: "0 40px" }} />
      </div>
      {/* Fila 2 */}
      <div className="row" style={{ justifyContent: "center", marginBottom: "32px", display: "flex" }}>
        <img src={hp} alt="HP" style={{ maxWidth: "300px", margin: "0 60px" }} />
      </div>
      {/* Fila 3 */}
      <div className="row" style={{ justifyContent: "center", marginBottom: "32px", display: "flex" }}>
        <img src={mahou} alt="Mahou" style={{ maxWidth: "100px", margin: "0 24px" }} />
        <img src={dubai} alt="Dubai" style={{ maxWidth: "100px", margin: "0 24px" }} />
        <img src={BMW} alt="BMW" style={{ maxWidth: "70px", margin: "0 24px" }} />
        <img src={LouisVuitton} alt="Louis Vuitton" style={{ maxWidth: "120px", margin: "0 24px" }} />
        <img src={eaSports} alt="EA Sports" style={{ maxWidth: "70px", margin: "0 24px" }} />
        <img src={abbott} alt="Abbott" style={{ maxWidth: "70px", margin: "0 24px" }} />
        <img src={nivea} alt="Nivea" style={{ maxWidth: "70px", margin: "0 24px" }} />
        <img src={kress} alt="Kress" style={{ maxWidth: "100px", margin: "0 24px" }} />
      </div>
      {/* Fila 4 */}
      <div className="row" style={{ justifyContent: "center", marginBottom: "32px", display: "flex" }}>
        <img src={linglon} alt="Linglong Tire" style={{ maxWidth: "100px", margin: "0 24px" }} />
        <img src={adobe} alt="Adobe" style={{ maxWidth: "100px", margin: "0 24px" }} />
        <img src={palladium} alt="Palladium" style={{ maxWidth: "120px", margin: "0 24px" }} />
        <img src={daktronics} alt="Daktronics" style={{ maxWidth: "100px", margin: "0 24px" }} />
        <img src={cisco} alt="Cisco" style={{ maxWidth: "100px", margin: "0 24px" }} />
        <img src={softtek} alt="Softtek" style={{ maxWidth: "100px", margin: "0 24px" }} />
        <img src={canon} alt="Canon" style={{ maxWidth: "120px", margin: "0 24px" }} />
      </div>
      {/* Fila 5 */}
      <div className="row" style={{ justifyContent: "center", marginBottom: "32px", display: "flex" }}>
        <img src={codere} alt="Codere" style={{ maxWidth: "100px", margin: "0 24px" }} />
        <img src={sanitas} alt="Sanitas" style={{ maxWidth: "100px", margin: "0 24px" }} />
        <img src={corpay} alt="Corpay" style={{ maxWidth: "100px", margin: "0 24px" }} />
        <img src={solan} alt="Solan de Cabras" style={{ maxWidth: "100px", margin: "0 24px" }} />
        <img src={volt} alt="Volt" style={{ maxWidth: "100px", margin: "0 24px" }} />
      </div>
    </div>
  );
  }
export default App;