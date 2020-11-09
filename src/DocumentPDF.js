import {Text, View, Page, Document} from "@react-pdf/renderer";
import {useEffect, useState} from "react";

export const MyDocument = ({profit, rate, sum, typeDeposit}) => {
    const [newSum, setNewSum] = useState(0);
    useEffect(() => setNewSum(sum), [sum])

    return(
        <Document>
            <Page>
                <View style={"display: flex; justify-content: space-around;"}>
                    <Text>Rate: {rate}</Text>
                    <Text>Type of deposit: {typeDeposit}</Text>
                    <Text>{newSum}</Text>
                    <Text>Profit: {profit}</Text>
                    </View>
            </Page>
        </Document>
    );
}