export const reverse = (s) => {
    return s.split("").reverse().join("");
}

export const transformDecimalToBinary = (number) => {
    let result = number;
    let binaryNumber = ''

    while(result > 0){
        binaryNumber += result % 2 === 0 ? '0' : '1'
        result = parseInt(result / 2)
    }

    binaryNumber = reverse(binaryNumber)

    return binaryNumber;
}