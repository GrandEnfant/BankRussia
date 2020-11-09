import React, {useEffect, useState} from "react";
import {PDFDownloadLink} from "@react-pdf/renderer";
import {MyDocument} from "./DocumentPDF";


export const Amount = ({dataPeriod, typeDeposit}) => {
    const [sum, setSum] = useState(0);
    const [rate, setRate] = useState(0);
    const [profit, setProfit] = useState(0);

    const searchRate = () => {
        for (let i = 0; i < dataPeriod.length; i++) {
            let summsAndRate = dataPeriod[i];
            if (+sum >= summsAndRate.summ_from) {
                setRate(summsAndRate.rate);
                calculateProfit()
            } else {
                break;
            }
        }
    }

    const calculateProfit = () => {
        const result = (sum / 100) * rate;
        setProfit(result);
    }

    useEffect(() => {
        searchRate();
    }, [sum])

    return (
        <>
            <p>Сумма</p>
            <input value={sum} type={"number"} onChange={(e) => {
                setSum(e.target.value);
            }}/>
            <p>Ваша ставка {rate}</p>
            <p>Ваш доход {profit} </p>
            <PDFDownloadLink
                document={<MyDocument typeDeposit={typeDeposit}
                                      profit={profit}
                                      rate={rate}
                                      sum={sum}
                                      dataPeriod={dataPeriod}/>}
                fileName="result.pdf"
            >
                {({loading}) =>
                    loading ? "Loading document..." : "Download Pdf"
                }
            </PDFDownloadLink>
        </>
    )
}
