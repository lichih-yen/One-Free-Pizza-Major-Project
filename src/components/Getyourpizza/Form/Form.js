import React, { useState } from "react";
import "./Form.scss";

function Form() {
  const [style, setStyle] = useState("-Select-");
  const [crust, setCrust] = useState("-Select-");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleStyleChange = (event) => {
    const value = event.target.value;
    setStyle(value);
  };

  const handleCrustChange = (event) => {
    const value = event.target.value;
    setCrust(value);
  };

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleAddressChange = (event) => {
    const value = event.target.value;
    setAddress(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let error = [];

    if (style === "-Select" || style === "") {
      error.push("Select a Style you want");
    }

    if (crust === "-Select" || crust === "") {
      error.push("Select a crust you like");
    }

    if (name === "") {
      error.push("Please enter your name");
    }

    if (address === "") {
      error.push("Please enter your address");
    }

    // Update the state based on the errors
    if (error.length > 0) {
      setErrorMessage(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && (
        <div className="error">Invalid data: {errorMessage}</div>
      )}
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
          value={name}
          onChange={handleNameChange}
        />
      </label>

      <label>
        <span>Address</span>
        <input
          className="data-input"
          type="text"
          maxLength={150}
          value={address}
          onChange={handleAddressChange}
        />
      </label>

      <button type="submit">Order Now</button>
    </form>
  );
}

export default Form;
