import { Dimensions, StatusBar, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

export default function Calculadora() {
    const [count, setCount] = useState('');
    const handlePress = (value) => {
        setCount((prevCalculation) => prevCalculation + value);
      };
    
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.Calculo}>
                <Text style={{ color: 'white', fontSize: 80 }} >{count}</Text>
            </View>
            <View style={styles.botoes}>
                <View style={[styles.container1, { flexDirection: 'row' }]}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => setCount('')}>
                        <Text style={styles.buttonText}>AC</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => handlePress('+')}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => handlePress('%')}>
                        <Text style={styles.buttonText}>%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => handlePress('/')}>
                        <Text style={styles.buttonText}>/</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.container1, { flexDirection: 'row' }]}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => handlePress('7')}>
                        <Text style={styles.buttonText}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => handlePress('8')}>
                        <Text style={styles.buttonText}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => handlePress('9')}>
                        <Text style={styles.buttonText}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => handlePress('x')}>
                        <Text style={styles.buttonText}>x</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.container1, { flexDirection: 'row' }]}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => handlePress('4')}>
                        <Text style={styles.buttonText}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() =>handlePress('5')}>
                        <Text style={styles.buttonText}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => handlePress('6')}>
                        <Text style={styles.buttonText}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => handlePress('-')}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.container1, { flexDirection: 'row' }]}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => handlePress('1')}>
                        <Text style={styles.buttonText}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => handlePress('2')}>
                        <Text style={styles.buttonText}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => handlePress('3')}>
                        <Text style={styles.buttonText}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => handlePress('+')}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.container1, { flexDirection: 'row' }]}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => handlePress('1')}>
                        <Text style={styles.buttonText}>=</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container4: {
        flex: 1,
    },
    Calculo: {
        flex: 1,
        backgroundColor: "#202020",
        alignItems: 'center',
        flexDirection: 'row-reverse'
    },
    botoes: {
        flex: 2,
        backgroundColor: 'orange',
    },
    container1: {
        flexDirection: 'row',
        flex:1
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'blue',
        alignContent: 'center',
        justifyContent: 'center',
        borderColor:'black',
        borderWidth:1

    },
    buttonText: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        padding: 10
    }

});