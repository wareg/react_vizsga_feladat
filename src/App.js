import "./App.css";
import { useState, useEffect } from "react";
import Team from "./components/Team";

const App = () => {
  const [appData, setAppData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    dataRead();
  }, []);

  async function dataRead() {
    setLoading(true);
    await fetch("/api/teams")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAppData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setAppData([]);
      });
  }

  return (
    <div className="App">
      <h1>NBA teams - all star voting</h1>
      <input type="text" placeholder="search for teams" />
      {appData.map((item, index) => (
        <Team team={item} key={index} />
      ))}
    </div>
  );
};

export default App;
