import React from 'react'
import {useState} from "react";
import {Period} from "./Period";
import depcalc from './depcalc.json';

function App() {

    const [typeDefinition, setTypeDefinition] = useState('unic');
    const setDepositType = (e) => {
        setTypeDefinition(e.target.value);
    };

    return (
        <div className="App">
            <label>Выберите тип вклада
                <select name={"type"} onChange={setDepositType}>
                    {depcalc.deposits.map((item, key) => <option key={key} value={item.code}> {item.name} </option>)}
                </select>
            </label>
            <Period data={depcalc} typeDeposit={typeDefinition} />
        </div>
    );

}

export default App;
