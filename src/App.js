
import './App.css';
import {useState} from "react";
import {Period} from "./Period";
import {Amount} from "./Amount";

function App() {

    const [type, setType] = useState({
        type: 'unic',
    });
    const [sum, setSum] = useState({
        sum: '',
    });
    const [period, setPeriod] = useState({
        period: '1',
    });

    const setDepositType = (e) => {
        setType({type: e.target.value});
        console.log(type)
    };

    const setDepositSum = (e) => {
        setSum({sum: e.target.value})
        console.log(sum)
    };
    const setDepositPeriod = (e) => {
        setPeriod({period: e.target.value})
        console.log(period)
    };

  return (
    <div className="App">
        <label>Выберите тип вклада
      <select name={"type"} onChange={setDepositType}>
          <option value={"unic"}> Универсальный </option>
          <option value={"standard"}> Стандартный </option>
          <option value={"replenish"}> Пополняемый </option>
      </select>
        </label>

        <Period type={type} onChange={setDepositPeriod}/>
        <Amount period={period} onChange={setDepositSum}/>
    </div>
  );
}

export default App;
