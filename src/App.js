import React, {useEffect, useState} from 'react'
import {Period} from "./Period";

import {changeDataDeposite, changePeriod, changeProfit, changeSum, changeType} from "./redux/actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {PDFDownloadLink} from "@react-pdf/renderer";
import {MyDocument} from "./DocumentPDF";

function App({typeDeposite, changeType, changePeriod, period, dataDeposite, sum, changeSum, profit, changeProfit}) {

    const setDepositType = (e) => {
        changeType(e.target.value);
        setDataPeriod();
    };

    const setDepositPeriod = (e) => {
        let targetValue = e.target.value;
        let summsAndRate;
        for(let i = 0; i < paramPeriod.length; i++) {
            if (targetValue >= paramPeriod[i].period_from) {
                summsAndRate = paramPeriod[i].summs_and_rate;

            }
        }
        changePeriod(summsAndRate);
    };

    const setDepositSum = (e) => {
        changeSum(e.target.value);
        searchRate();
    };

    const [rate, setRate] = useState(0);
    const [paramPeriod, setParamPeriod] = useState(dataDeposite.dataDeposite.deposits[0].param);
    let dataPeriod;
    const setDataPeriod = () => {
        for (let i = 0; i < dataDeposite.dataDeposite.deposits.length; i++) {
            if (dataDeposite.dataDeposite.deposits[i].code === typeDeposite) {
                dataPeriod = dataDeposite.dataDeposite.deposits[i].param;
                break;
            }
        }
        setParamPeriod(dataPeriod);
    };

    const searchRate = () => {
        for (let i = 0; i < paramPeriod.length; i++) {
            if (++sum.sum >= +period[i].summ_from) {
                setRate(period[i].rate);
                calculateProfit(period[i].rate);
            } else {
                break;
            }
        }
    }

    const calculateProfit = (rate) => {
        const result = (sum.sum / 100) * rate;
        changeProfit(result);
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
            <p>Ваш доход {profit.profit}</p>
            <PDFDownloadLink
                document={<MyDocument typeDeposite={typeDeposite}
                                      profit={profit.profit}
                                      rate={rate}
                                      sum={sum.sum}
                                     />}
                fileName="result.pdf"
            >
                {({loading}) =>
                    loading ? "Loading document..." : "Download Pdf"
                }
            </PDFDownloadLink>
        </div>
    );
}

const mapStateToProps = (state)  => {
    return {
        typeDeposite: state.typeDeposite.typeDeposite,
        period: state.period.period,
        dataDeposite: {...state.dataDeposite},
        sum: state.sum,
        profit: state.profit
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeType: bindActionCreators(changeType, dispatch),
        changePeriod: bindActionCreators(changePeriod, dispatch),
        changeDataDeposite: bindActionCreators(changeDataDeposite, dispatch),
        changeSum: bindActionCreators(changeSum, dispatch),
        changeProfit: bindActionCreators(changeProfit, dispatch),
    }
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
export default ConnectedApp;
