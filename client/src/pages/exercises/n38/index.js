import React, { useState } from "react";
import { transformDecimalToBinary } from "../../../utils";


/*
 * Enunciado: Crea un programa se encargue de transformar un número binario
 * a decimal sin utilizar funciones propias del lenguaje que 
 * lo hagan directamente.
 */

const Exercise38 = () => {
    const [binaryNumber, setBinaryNumber] = useState(null);

    const onChangInputHandler = e => {
        setBinaryNumber(transformDecimalToBinary(e.target.value))
    }
    return (
        <div>
            <label>Número a transformar</label>
            <input type="number" onBlur={onChangInputHandler}  />
            <p>Hay que hacer perder el foco al input para que lo calcule</p>
            <p>Resultado en binario: <b>{binaryNumber}</b></p>
        </div>
    )
}

export default Exercise38;