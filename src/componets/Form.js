import React from 'react';
import { StyleSheet, TextInput, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select'; 
import colors from '../utils/colors';


export default function Form(props) {
    const {setCapital, setInterest, setMonth} = props;

    return(
        <View style={style.viewsForm}>
            <View style={style.viewInput}>
                <TextInput 
                    placeholder="Cantidad a Pedir"
                    keyboardType="numeric" 
                    style={style.input}
                    onChange={e => setCapital(e.nativeEvent.text)}
                />
                {/* 16-lo que queda en gris para sobre escribir 17-para que solo ingresen numero 18-anidar mas de 2 estilos */}
                <TextInput 
                    placeholder="Interes %"
                    keyboardType= "numeric"
                    style={[style.input, style.inputPorc]}
                    onChange={e => setInterest(e.nativeEvent.text)}
                />
            </View>
                <RNPickerSelect
                style={pickerSelectStyles}
                onValueChange={(value) => setMonth(value)}
                placeholder={{
                    label: 'Selecciona los plazos',
                    value: null,
                }}
                items={[
                    { label: '3 meses', value: '3' },
                    { label: '6 meses', value: '6' },
                    { label: '12 meses', value: '12' },
                    { label: '18 meses', value: '18' },                
                    { label: '24 meses', value: '24' },                
                ]}
        />
        </View>
    );
}

const style = StyleSheet.create({
    viewsForm:{
       position: 'absolute',
       bottom: 0,
       width: "85%",
       paddingHorizontal: 50,
       backgroundColor: colors.PRIMARY_COLOR_DARK,
       borderRadius: 38,
       height: 180,
       justifyContent: "center", 
    },
    viewInput:{
        flexDirection: "row",
    },
    input:{
        height: 50,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: "60%",
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: "#000",
        paddingHorizontal:20,
    },
    inputPorc:{
        width: "40%",
        marginLeft: 5,
    },

});

const pickerSelectStyles = StyleSheet.create({
    inputIOS:{
        fontSize:16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth:1,
        borderColor: "grey",
        borderRadius:4,
        color:"black",
        paddingRight:30,
        backgroundColor:"#fff",
        marginLeft:-5,
        marginRight:-5
    },
    inputAndroid:{
        fontSize:16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor:"grey",
        borderRadius:8,
        color:"black",
        paddingRight: 30,
        backgroundColor:"#fff"
    }
})