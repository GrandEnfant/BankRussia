import {Text, View, Page, Document} from "@react-pdf/renderer";
import {useEffect, useState} from "react";

export const MyDocument = ({typeDeposite, profit, rate, sum}) => {
    console.log(typeDeposite)

    return(
        <Document>
            <Page>
                <View style={"display: flex; justify-content: space-around;"}>
                    <Text>Rate: {rate}</Text>
                    <Text>Type of deposit: {typeDeposite}</Text>
                    <Text> Sum: {sum}</Text>
                    <Text>Profit: {profit}</Text>
                    </View>
            </Page>
        </Document>
    );
}