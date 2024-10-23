import { useEffect, useState } from "react";

export function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.10.23/v1/currencies/${currency}.json`;

      const response = await fetch(url);
      const json = await response.json();
      setData(json[currency]);
    }
    fetchData();
  }, [currency]);
  return data;
}
