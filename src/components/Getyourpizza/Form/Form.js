import React, { useState } from "react";
import "./Form.scss";
import api from "../../../api/index";
import uuid from "react-uuid";

function Form() {
  const [style, setStyle] = useState("-Select-");
  const [crust, setCrust] = useState("-Select-");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [extraCheese, setExtraCheese] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [formSubmited, setFormSubmited] = useState(false);

  const [saving, setSaving] = useState(false);

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

  const handleExtraCheese = (event) => {
    const value = event.target.checked;
    setExtraCheese(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let error = [];

    if (style === "-Select-") {
      error.push("Select a Style you want.");
    }

    if (crust === "-Select-") {
      error.push("Choose a Crust you like.");
    }

    if (name === "") {
      error.push("Please enter your name.");
    }

    if (address === "") {
      error.push("Please enter your address.");
    }

    if (error.length > 0) {
      setErrorMessage(error);
    } else {
      setErrorMessage(null);
      const newOrder = {
        id: uuid(),
        style: style,
        crust: crust,
        cheese: extraCheese,
        name: name,
        address: address,
      };

      setSaving(true);

      api.post("/orders", newOrder).then((response) => {
        if (response.status === 201) {
          setFormSubmited(true);
          renderSuccess();
        }
      });
    }
  };

  const renderSuccess = () => {
    return (
      <div className="success-submit">
        <strong>Success</strong>
        <p>Your order was submitted</p>
      </div>
    );
  };

  const renderForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        {errorMessage && (
          <div className="error">
            Invalid data:
            <ul>
              {errorMessage.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        {saving && (
          <div className="saving">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}

        <h3>Create your own pizza and submit your order.</h3>
        <label>
          <span>Style</span>
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
          <select value={crust} onChange={handleCrustChange}>
            <option value="-Select-">-Select-</option>
            <option value="Original Crust">Original Crust</option>
            <option value="Thin Crust">Thin Crust</option>
            <option value="Gluten-Free Crust">Gluten-Free Crust</option>
          </select>
        </label>

        <label>
          <input
            type="checkbox"
            checked={extraCheese}
            onChange={handleExtraCheese}
          />
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
  };
  return formSubmited ? renderSuccess() : renderForm();
}

export default Form;
