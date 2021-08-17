function reverseString(x){
    let novo = ''
    for(let i = x.length-1; i >= 0; i--){
        novo += x[i]
    }
    return novo
}
function testReverseString1() {
    let result = reverseString('Kenzie Academy')
    let expected = result
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testReverseString1()

function reverseSentence(frase) {
    let separada = frase.split(' ')
    separada = separada.reverse().join(' ')
    return separada
}
function testReverseSentence1() {
    let result = reverseSentence('bob likes dog')
    let expected = result
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testReverseSentence1()

function minimumValue(num) {
    let menor = num[1]
    for(let i = 0; i < num.length; i++){
        if(menor > num[i]){
            menor = num[i]
        }
    }
    return menor
}
function testMinimumValue1(){
    let result = minimumValue([99,200,460,800])
    let expected = result

    console.assert(result === expected, `esperado:${expected}, obtido:${result}`)
}
function testMinimumValue2(){
    let result = minimumValue([300,34,'1',3])
    let expected = result

    console.assert(result === expected, `esperado:${expected}, obtido:${result}`)
}
testMinimumValue1()
testMinimumValue2()

function maximumValue(num) {
    let maior = 0
    for(let i = 0; i < num.length; i++){
        if(maior < num[i]){
            maior = num[i]
        }
    }
    return maior
}
function testMaximumValue1(){
    let result = maximumValue([100,300,560,1000])
    let expected = result

    console.assert(result === expected, `esperado:${expected}, obtido:${result}`)
}
function testMaximumValue2(){
    let result = minimumValue([500,44,'2',4])
    let expected = result

    console.assert(result === expected, `esperado:${expected}, obtido:${result}`)
}
testMaximumValue1()
testMaximumValue2()

function calculateRemainder(num1,num2) {
    return num1 % num2
}
function testCalculateRemainder1 (){
    let result = calculateRemainder(2,4)
    let expected = result

    console.assert(result === expected, `esperado:${expected}, obtido:${result}`)
}
function testCalculateRemainder2(){
    let result = calculateRemainder(10,5)
    let expected = result

    console.assert(result === expected, `esperado:${expected}, obtido:${result}`)
}
testCalculateRemainder1()
testCalculateRemainder2()

function distinctValues (nums){
   let arr = nums.split('')
   let novo = []
   
   for(let i = 0; i < arr.length; i++){
       if(arr.indexOf(arr[i]) === i){
           novo.push(arr[i])
       }
   }
   return novo.join(' ')
}
function testDistinctValues1 (){
    let result  = distinctValues('135373115')
    let expected = result

    console.assert(result === expected, `esperado ${expected}, obtido ${result}`)
}
function testDistinctValues2 (){
    let result  = distinctValues('23005030071300226')
    let expected = result

    console.assert(result === expected, `esperado ${expected}, obtido ${result}`)
}
testDistinctValues1()
testDistinctValues2()

function countValues(z){
    let arr = z.split('')
    let novo = []
    for(let i = 0; i < arr.length; i++){
        if(arr.indexOf(arr[i]) === i){
            novo.push(arr[i])
    }
}
    return novo.join(' ')
}

function evaluateExpression(str,obj){

}