import { useEffect, useState } from 'react';

const useCurrency = (currency) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const currencyData = await response.json();
        setData(currencyData[currency]);
      } catch (error) {
        console.error('Error fetching currency data:', error);
      }
    };

    fetchData(); // Fetch data initially
  }, [currency]); // Run effect whenever currency prop changes

  return data;
};

export default useCurrency;

