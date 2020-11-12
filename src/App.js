import React, {useState} from 'react'
import {changeDataDeposit, changePeriod, changeProfit, changeSum, changeType} from "./redux/actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {PDFDownloadLink} from "@react-pdf/renderer";
import {MyDocument} from "./DocumentPDF";

function App({typeDeposit,
                 changeType,
                 changePeriod,
                 period,
                 dataDeposit,
                 sum,
                 changeSum,
                 profit,
                 changeProfit}) {

    const [rate, setRate] = useState(0);
    const [paramPeriod, setParamPeriod] = useState(dataDeposit.dataDeposit.deposits[0].param);

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

    let dataPeriod;
    const setDataPeriod = () => {
        for (let i = 0; i < dataDeposit.dataDeposit.deposits.length; i++) {
            if (dataDeposit.dataDeposit.deposits[i].code === typeDeposit) {
                dataPeriod = dataDeposit.dataDeposit.deposits[i].param;
                break;
            }
        }
        setParamPeriod(dataPeriod);
    };
    const searchRate = () => {
        for (let i = 0; i < paramPeriod.length; i++) {
            if (++sum.sum >= +period[i].summ_from) {
                setRate(period[i].rate);
                changeProfit(rate, sum.sum);
            } else {
                break;
            }
        }
    }
    return (
        <div className="App">
            <p> Выберите тип вклада </p>
                <select name={"type"} onChange={setDepositType}>
                    {dataDeposit.dataDeposit.deposits.map((item, key) => <option key={key} value={item.code}> {item.name} </option>)}
                </select>
            <p>Введите период вклада</p>
            <input type={'number'} onChange={setDepositPeriod} value={period.period}/>
            <p>Введите сумму вклада</p>
            <input value={sum.sum} type={"number"} onChange={setDepositSum}/>
            <p>Ваша ставка {rate}</p>
            <p>Ваш доход {profit.profit}</p>
            <PDFDownloadLink
                document={<MyDocument typeDeposit={typeDeposit}
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
        typeDeposit: state.typeDeposit.typeDeposit,
        period: state.period.period,
        dataDeposit: state.dataDeposit,
        sum: state.sum,
        profit: state.profit
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeType: bindActionCreators(changeType, dispatch),
        changePeriod: bindActionCreators(changePeriod, dispatch),
        changeDataDeposit: bindActionCreators(changeDataDeposit, dispatch),
        changeSum: bindActionCreators(changeSum, dispatch),
        changeProfit: bindActionCreators(changeProfit, dispatch),
    }
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
export default ConnectedApp;
