import React, {useEffect, useState} from 'react'
import {Period} from "./Period";

import {changeDataDeposite, changePeriod, changeSum, changeType} from "./redux/actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

function App({typeDeposite, changeType, changePeriod, period, dataDeposite, sum, changeSum}) {

    const setDepositType = (e) => {
        changeType(e.target.value)
    };
    const setDepositSum = (e) => {
        changeSum(e.target.value);
        searchRate()
    };

    const [rate, setRate] = useState(0);
    const [profit, setProfit] = useState(0);

    const [paramPeriod, setParamPeriod] = useState(dataDeposite.dataDeposite.deposits[0].param);

    let dataPeriod;
    const setDataPeriod = () => {
        for (let i = 0; i < dataDeposite.dataDeposite.deposits.length; i++) {
            console.log(typeDeposite)
            if (dataDeposite.dataDeposite.deposits[i].code === typeDeposite) {
                dataPeriod = dataDeposite.dataDeposite.deposits[i].param;
                break;
            }
        }
        // setParamPeriod(dataPeriod);
    };
    setDataPeriod();

    const setDepositPeriod = (e) => {
        let targetValue = e.target.value;
        let summsAndRate;

        for(let i = 0; i < dataPeriod.length; i++) {
            if (+targetValue >= +dataPeriod[i].period_from) {
                summsAndRate = dataPeriod[i].summs_and_rate;
            } else {
                break;
            }
        }
        changePeriod(targetValue);
        setParamPeriod(summsAndRate);
    };
    const searchRate = () => {
        console.log(dataPeriod);
        console.log(dataPeriod);
        console.log(dataPeriod);
        console.log(dataPeriod);
        console.log(dataPeriod);
        console.log(dataDeposite.dataDeposite.deposits )
        for (let i = 0; i < dataPeriod.length; i++) {
            let summsAndRate = dataPeriod[i];
            if (+sum >= summsAndRate.summ_from) {
                setRate(summsAndRate.rate);
                calculateProfit();
            } else {
                break;
            }
        }
    }
    // useEffect(() => {
    //     searchRate();
    // }, [sum]);

    const calculateProfit = () => {
        const result = (sum / 100) * rate;
        setProfit(result);
    }
    return (
        <div className="App">
            <label>Выберите тип вклада
                <select name={"type"} onChange={setDepositType}>
                    {dataDeposite.dataDeposite.deposits.map((item, key) => <option key={key} value={item.code}> {item.name} </option>)}
                </select>
            </label>
            <input type={'number'} onChange={setDepositPeriod} value={period.period}/>
            <input value={sum.sum} type={"number"} onChange={setDepositSum}/>
            <p>Ваша ставка {rate}</p>
            <p>Ваш доход {profit} </p>
        </div>
    );
}

const mapStateToProps = (state)  => {
    console.log(state)
    console.log('mapStateToProps')
    return {
        typeDeposite: state.typeDeposite.typeDeposite,
        period: state.period.period,
        dataDeposite: {...state.dataDeposite},
        sum: state.sum
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeType: bindActionCreators(changeType, dispatch),
        changePeriod: bindActionCreators(changePeriod, dispatch),
        changeDataDeposite: bindActionCreators(changeDataDeposite, dispatch),
        changeSum: bindActionCreators(changeSum, dispatch),

    }
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
export default ConnectedApp;
