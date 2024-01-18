let bill = 120
let numOfPpl = 5
let serviceQuality = 'Great'

function calculateTip(quality) {
    if(quality === 'Great'){
        return bill * .2
    } else if(quality == 'Good'){
        return bill * 0.15
    }else if(quality === 'God Awful'){
        return bill * .10
    }else{
        alert("Invalid value, Try a bit harder next time bud")
    }
}

let tip = calculateTip(serviceQuality)

function calculateTotalBill(bill,tip){
    return bill + tip
}

let totalBill = calculateTotalBill(bill,tip)

function calculateAmountPerPerson(totalBill,numOfPpl){
    return totalBill / numOfPpl

}

let amountPerPerosn = calculateAmountPerPerson(totalBill,numOfPpl)

console.log('Tip: $'+ tip)
console.log('Total Bill: $'+totalBill)
console.log('Amount per person: $'+amountPerPerosn)