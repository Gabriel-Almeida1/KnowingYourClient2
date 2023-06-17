let clientName = prompt("Client name: ")
let clientAge = parseInt(prompt("Client age: "))
let clientIncome = parseFloat(prompt("Client current income: ")) 
let cont = 0
let incomeIncrease = parseFloat(0.015)
let loopCheck = 0

console.log("Name: ", clientName)
console.log("Age: ", clientAge)
console.log("Income: ", clientIncome)

while (loopCheck !== 1) {
    let confirmInformations = prompt("Have you typed all the informations correctly? Type 'y' for yes or 'n' for no: ")
    if (confirmInformations[0] === 'n') {
        let clientName = prompt("Client name: ")
        let clientAge = parseInt(prompt("Client age: "))
        let clientIncome = parseFloat(prompt("Client current income: "))

        console.log("Name: ", clientName)
        console.log("Age: ", clientAge)
        console.log("Income: ", clientIncome)

    } else if (confirmInformations[0] === 'y') {
        while (cont <= 10) {
            cont += 1
            console.log(parseInt(2023 + cont), " - R$", clientIncome + (clientIncome * incomeIncrease))
            if(cont === 1) {
                incomeIncrease += 0.015
            } else if (cont === 2) {
                incomeIncrease += 0.03
            } else if (cont === 3) {
                incomeIncrease += 0.06
            } else if (cont === 4) {
                incomeIncrease += 0.12
            } else if (cont === 5) {
                incomeIncrease += 0.24
            } else if (cont === 6) {
                incomeIncrease += 0.48
            } else if (cont === 7) {
                incomeIncrease += 0.96
            } else if (cont === 8) {
                incomeIncrease += 1.92
            } else if (cont === 9) {
                incomeIncrease += 3.84
            } else if (cont === 10) {
                incomeIncrease += 7.68
            } 
        }    
        loopCheck = 1
    }
}



