import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Result(props) {
    const {capital, interest, month, total, errorMesasage} = props;
    console.log(props);
    return (
        <View style={styles.content} >
            {total &&(
                <View style={styles.boxResult} >
                    <Text style={styles.title}>RESULTADO</Text>
                    <DataResult title="Cantidad Solicitada:" value={`$ ${capital}`} />
                    <DataResult title="Interes %:" value={`${interest} %`} />
                    <DataResult title="Plazos:" value={`${month} meses`} />
                    <DataResult title="Pago mensual:" value={`$ ${total.monthlyFee} meses`} />
                    <DataResult title="Total a pagar:" value={`$ ${total.totalPayable} meses`} />
                </View>
            )}
            <View>
                <Text style={styles.error}>{errorMesasage}</Text>
            </View>
        </View>
    );
}

function DataResult(props){
    const {title, value} = props;

    return(
        <View style={styles.value}>
            <Text>{title} </Text>
            <Text>{value} </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    content:{
        marginHorizontal:40,
    },
    boxResult:{
        padding:30,
    },
    title:{
        fontSize:30,
        textAlign:"center",
        fontWeight:"bold",
        marginBottom:30,
    },
    value:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom:20,
    },
    error:{
        textAlign:"center",
        color: "red",
        fontWeight:"bold",
        fontSize: 20,
    },
})
