import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollors, setDollors] = useState(0);
  const [Coin, setCoin] = useState(0);
  const onChange = (e) => setDollors(e.target.value);
  const onSelect = (e) => setCoin(e.target.value);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      <hr />
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <input onChange={onChange} placeholder="Write dollors" />$ ={" "}
          {dollors / coins[Coin].quotes.USD.price} {coins[Coin].symbol}
          <hr />
          <select onChange={onSelect}>
            {coins.map((coin, index) => (
              <option key={coin.id} value={index}>
                {coin.name} ({coin.symbol}) : {coin.quotes.USD.price}$
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default App;
