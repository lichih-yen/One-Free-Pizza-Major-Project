import React, { useState } from "react";
import "./Form.scss";

function Form() {
  const [style, setStyle] = useState("-Select-");
  const [crust, setCrust] = useState("-Select-");

  const handleStyleChange = (event) => {
    const value = event.target.value;
    setStyle(value);
  };

  const handleCrustChange = (event) => {
    const value = event.target.value;
    setCrust(value);
  };

  return (
    <form>
      <h3>Create your own pizza and submit your order.</h3>
      <label>
        <span>Style</span>
        {/* Hawaiian, Pepperoni, Canadian, Supreme, Cheese, or Margherita. */}
        <select value={style} onChange={handleStyleChange}>
          <option value="-Select-">-Select-</option>
          <option value="Hawaiian">Hawaiian</option>
          <option value="Pepperoni">Pepperoni</option>
          <option value="Canadian">Canadian</option>
          <option value="Supreme">Supreme</option>
          <option value="Cheese">Cheese</option>
          <option value="Margherita">Margherita</option>
        </select>
      </label>

      <label>
        <span>Crust</span>
        {/* Original Crust, Thin Crust, or Gluten-Free Crust. */}
        <select value={crust} onChange={handleCrustChange}>
          <option value="-Select-">-Select-</option>
          <option value="Original Crust">Original Crust</option>
          <option value="Thin Crust">Thin Crust</option>
          <option value="Gluten-Free Crust">Gluten-Free Crust</option>
        </select>
      </label>

      <label>
        <input type="checkbox" checked={""} onChange={""} />
        Extra Cheese
      </label>

      <h3>Your Data</h3>
      <label>
        <span>Name</span>
        <input
          className="data-input"
          type="text"
          maxLength={150}
          value={""}
          onChange={""}
        />
      </label>

      <label>
        <span>Address</span>
        <input
          className="data-input"
          type="text"
          maxLength={150}
          value={""}
          onChange={""}
        />
      </label>

      <button type="submit">Order Now</button>
    </form>
  );
}

export default Form;
