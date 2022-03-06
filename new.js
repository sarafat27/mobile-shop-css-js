function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-input');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    //update total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = price * productNumber;
    //calculate total price
    calculateTotal();
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-input');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;
    //update it on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;
}

//plus buttton handler for mobile
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true)
})
//plus buttton handler for case
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true)
})
//minus buttton handler for mobile
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false)
})
//minus buttton handler for case
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false)
})
