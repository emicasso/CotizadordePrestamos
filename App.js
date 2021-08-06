import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Button,
} from 'react-native';
import Form from './src/componets/Form';
import Footer from './src/componets/Footer';
import Result from './src/componets/Result';
import colors from './src/utils/colors';

export default function App() {
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [month, setMonth] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMesasage, setErrorMesasage] = useState(null);
  useEffect(() => {
    if(capital && interest && month) calculate();
    else reset();
  }, [capital, interest, month])


  const calculate = () => {
    reset();
    if (!capital) {
      setErrorMesasage('Añade la cantidad que deseas solicitar');
    } else if (!interest) {
      setErrorMesasage('Añade los intereses del prestamos a solicitar');
    } else if (!month) {
      setErrorMesasage('Añade los meses que deseas para pagar');
    } else {
      /* calculo  */
      const i = interest / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -month)) / i);
      setTotal({
        monthlyFee: fee.toFixed(2).replace('.', '.'),
        totalPayable: (fee * month).toFixed(2).replace('.', '.'),
      });
    }
  };

  const reset = () => {
    setErrorMesasage('');
    setTotal(null);
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={style.safeArea}>
        <View style={style.background} />
        <Text style={style.titleApp}>Cotizador de Prestamos</Text>
        <Form
          setCapital={setCapital}
          setInterest={setInterest}
          setMonth={setMonth}
        />
      </SafeAreaView>
      <Result
        capital={capital}
        interest={interest}
        month={month}
        total={total}
        errorMesasage={errorMesasage}
      />
      <Footer calculate={calculate} />
    </>
  );
}

const style = StyleSheet.create({
  safeArea: {
    height: 290,
    alignItems: 'center',
  },
  background: {
    zIndex: -1,
    height: 200,
    width: '100%',
    position: 'absolute',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: colors.PRIMARY_COLOR,
  },
  titleApp: {
    fontSize: 25,
    color: '#fff',
    marginTop: 15,
    fontWeight: 'bold',
  },
});
