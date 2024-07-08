import React, { useEffect, useState } from "react";
import "./Select.css";
import { exchangeRate } from "../data";

export const Select = () => {
  const [npr, setNpr] = useState(1);
  const [result, setResult] = useState(133.44);
  const [currency, setCurrency] = useState("United States Dollar");
  const [selectedId, setSelectedId] = useState(exchangeRate[0].id);
  const changeHandler = (event) => {
    setNpr(event.target.value);
    console.log(event.target.value);
  };

  const checkCurrency = (id) => {
    setSelectedId(id);
    console.log("ID", id);
    const selectedCurrency = exchangeRate.find((rate) => rate.id === id);
    console.log(
      "Selected Currency is ",
      selectedCurrency.exchange_rate_to_NPR,
      selectedCurrency
    );
    setCurrency(selectedCurrency.currency_name);
    const convertedCurrency = npr * selectedCurrency.exchange_rate_to_NPR;
    console.log("npr ", npr);

    setResult(convertedCurrency);
  };

  useEffect(() => {
    console.log(result);
  }, [result]);

  return (
    <div className="flex">
      <input
        type="number"
        placeholder="1.00 Nrs"
        name="npr"
        className="selected_Npr"
        onChange={changeHandler}
      />

      <div class="container">
        <div class="select">
          <select value={selectedId}>
            {exchangeRate.map((rate) => {
              return (
                <option
                  value={rate.id}
                  onClick={() => {
                    checkCurrency(rate.id);
                  }}
                >
                  <span>{rate.flag}</span>{" "}
                  <span>
                    {rate.country} - {rate.currency}
                  </span>
                </option>
              );
            })}
          </select>
        </div>
        <div class="down_note"></div>
        <div className="result">
          <h2 className="res_">{npr} Nepali Rupees is equals to </h2>
          <h1 className="res">{result.toFixed(2)}</h1>
          <h2>{currency}</h2>
        </div>
      </div>
    </div>
  );
};
