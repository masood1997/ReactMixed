import React from 'react';

const Input = ({
  label,
  currency = 'usd',
  handleCurrencyChange,
  currencyList = [],
  amount,
  handleAmountChange,
  inputDisabled = false
}) => {
  return (
    <>
      <label>{label}</label>
      <br></br>
      <input
        type="number"
        disabled={inputDisabled}
        value={amount}
        onChange={(e) => handleAmountChange && handleAmountChange(Number(e.target.value))}
      />
      <br></br>
      <br></br>
      <div>
        <p>Currency Type</p>

        <select value={currency} onChange={(e) => handleCurrencyChange(e.target.value)}>
          {currencyList &&
            currencyList.map((curr) => (
              <option key={curr} value={curr}>
                {curr}
              </option>
            ))}
        </select>
      </div>
    </>
  );
};

export default Input;
