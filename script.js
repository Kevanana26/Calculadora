function calculateAndDisplay(){
    //Get Input values from our HTML//
    let bill = parseFloat(document.getElementById('totalBill').value)
    let numOfPpl = parseInt(document.getElementById('numOfPeople').value)
    let serviceQuality = document.getElementById('serviceQuality').value

    let tip = calculateTip(bill,serviceQuality)
    let totalBill = calculateTotalBill(bill,tip)
    let amtPerPers = calculateamtPerPerson(totalBill,numOfPpl)


// Display the results in the HTML document
document.getElementById('tipResult').innerText = 'Tip: $' + tip.toFixed(2)
document.getElementById('totalBillResult').innerText =
  'Total Bill: $' + totalBill.toFixed(2)
document.getElementById('amtPerPersonResult').innerText =
  'Amount per person: $' + amtPerPers.toFixed(2)

}

// helper function

function calculateTip(bill, quality){
    if(quality === 'Great'){
        return bill * .2
    } else if(quality == 'Good'){
        return bill * 0.15
    }else if(quality === 'God Awful'){
        return bill * .10
    }else{
        return 0
    }  
}

// helper function (again)

function calculateTotalBill(bill, tip){
    return bill + tip
}



function calculateamtPerPerson(totalBill, numOfPpl){
    return totalBill/numOfPpl
}







/* let bill = 120
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
console.log('Amount per person: $'+amountPerPerson) */