import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import CardDeck from "./components/CardDeck/CardDeck";

const apiUrl: string = "https://nekos.best/api/v2/waifu?amount=20";

function App() {
  const [cards, setCards] = useState<never[]>([]);

  useEffect(() => {
    fetchCards();
  }, []);

  async function fetchCards() {
    const response = await axios.get(apiUrl);
    setCards(response.data.results);
  }

  return (
    <div className="App">
      <Header />
      <CardDeck cards={cards} />
    </div>
  );
}

export default App;