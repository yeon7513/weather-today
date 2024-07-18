import { useEffect, useState } from 'react';
import { getWeatherData } from './api/getWeathers';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  const handleLoad = async () => {
    const result = await getWeatherData();
    setData(result);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="App">
      <header className="App-header">Hello React!</header>
    </div>
  );
}

export default App;
