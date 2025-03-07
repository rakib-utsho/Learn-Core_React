import "./Product.css";
import Price from "./Price";

function Product({ title, idx }) {
  let oldPrices = ["12,495", "11,900", "1,599", "599"];
  let newPrices = ["8,999", "9,199", "899", "278"];
  let description = [
    ["8,000 DPI", "5 Programmable Button"],
    ["intuitive surface", "designed for iPad pro"],
    ["designed for iPad pro", "intuitive surface"],
    ["wireless", "optical orientation"],
  ];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <ul>
        <li>{description[idx][0]}</li>
        <li>{description[idx][1]}</li>
      </ul>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}

export default Product;
