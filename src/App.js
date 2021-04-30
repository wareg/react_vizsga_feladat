import "./App.css";
import { useState, useEffect } from "react";
import Team from "./components/Team";

const App = () => {
  const [appData, setAppData] = useState([]);
  const [loading, setLoading] = useState(false);

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
      <Team />
      {appData.map((item, index) => (
        <Team team={item} key={index} name={item.name} />
      ))}
    </div>
  );
};

export default App;
