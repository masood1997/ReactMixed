import { useEffect, useState, useCallback } from 'react';
import useCurrency from './hooks/useCurrency';
import Input from './Input';

const Currency = () => {
  const [currency, setCurrency] = useState('eur');
  const [toCurrency, setToCurrency] = useState('pkr');
  const [converted, setToConverted] = useState(0);
  const [amount, setAmount] = useState('');

  const exchangeRates = useCurrency(currency);
  // useEffect(() => {
  //   const fetchCurrencies = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`
  //       );
  //       if (!response.ok) throw Error('Error fetching curriences list');
  //       const data = await response.json();
  //       setCurrencyList(data);
  //     } catch (err) {
  //       console.log(err.stack);
  //     }
  //   };
  //   fetchCurrencies();
  // }, []);
  const currencyList = Object.keys(exchangeRates);

  const handleAmountChange = useCallback((val) => {
    setAmount(val);
  }, []);

  const handleCurrencyChange = useCallback((val) => {
    setCurrency(val);
  }, []);

  const handleToCurrencyChange = useCallback((val) => {
    setToCurrency(val);
  }, []);

  const handleConvertAmount = () => {
    const rate = exchangeRates[toCurrency] * amount
    setToConverted(rate.toFixed(2));
  };
  return (
    <div>
      <Input
        label="From"
        currency={currency}
        handleCurrencyChange={handleCurrencyChange}
        handleAmountChange={handleAmountChange}
        amount={amount}
        currencyList={currencyList}
      />
      <br></br>
      <br></br>
      <br></br>
      <Input
        label="To"
        currency={toCurrency}
        handleCurrencyChange={handleToCurrencyChange}
        amount={converted}
        currencyList={currencyList}
        inputDisabled={true}
      />
      <br></br>
      <button type="submit" onClick={handleConvertAmount}>
        Convert
      </button>
    </div>
  );
};

export default Currency;
