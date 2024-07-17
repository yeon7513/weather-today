import { getWeatherData } from './api/getWeathers';
import './App.css';

function App() {
  const datas = getWeatherData();

  console.log(datas);

  return (
    <div className="App">
      <header className="App-header">Hello React!</header>
    </div>
  );
}

export default App;
