import {useState} from "react";
import {Amount} from "./Amount";
import {depositePeriod} from "./redux/reducers/depositeType";


export const Period = ({data, typeDeposit}) => {

   const [paramPeriod, setParamPeriod] = useState(data.deposits[0].param);
   const [period, setPeriod] = useState("");
   let dataPeriod;
   const setDataPeriod = () => {
       for (let i = 0; i < data.deposits.length; i++) {
           if (data.deposits[i].code === typeDeposit) {
               dataPeriod = data.deposits[i].param;
               break
           }
       }
   }
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
        depositePeriod(targetValue)
        setParamPeriod(summsAndRate);
    };

    return (
        <div>
            <p>Введите период</p>
            <input type={'number'} value={period} onChange={(e) => setDepositPeriod(e)} />
            <Amount typeDeposit={typeDeposit} dataPeriod={paramPeriod} period={period}/>
        </div>)
}