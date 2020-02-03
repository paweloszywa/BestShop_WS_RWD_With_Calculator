document.addEventListener('DOMContentLoaded', function() {

    const quantityValue = document.querySelector('#quantity-value');
    const quantity = document.querySelector('#products > p:nth-child(2)');
    const quantitySum = document.querySelector('#products > p:last-child');
    const productsClass = document.querySelector('#products');

    let sumAllValue = document.querySelector('#sum-all > p:last-child');
    sumAllValue.innerText = `$0`;
    let valueInteger = 0;
    let productsQuantity = 0;

    quantityValue.addEventListener('keyup', function () {

        valueInteger = Number(this.value);
        quantity.innerText = (`${valueInteger} *$0.5`);
        productsQuantity = Number(valueInteger * 0.5);
        quantitySum.innerText = `$${productsQuantity}`;

        if (valueInteger > 0 && Number.isInteger(valueInteger) ){
            productsClass.style.display = 'flex';
            sumAllValue.innerText = `$${productsQuantity + ordersVal + selectPackageAmount + accountingPrice + terminalPrice}`;
        }
        else {
            productsClass.style.display = 'none';
            sumAllValue.innerText = `$${ordersVal + selectPackageAmount + accountingPrice + terminalPrice}`;
        }

    });

    const ordersValue = document.querySelector('#orders-value');
    const orders = document.querySelector('#orders > p:nth-child(2)');
    const ordersSum = document.querySelector('#orders > p:last-child');
    const ordersClass = document.querySelector('#orders');
    let ordersVal = 0;

    ordersValue.addEventListener('keyup', function () {

        valueInteger = Number(this.value);
        orders.innerText = (`${valueInteger} *$0.25`);
        ordersVal = Number(valueInteger * 0.25);
        ordersSum.innerText = `$${ordersVal}`;

        if (valueInteger > 0 && Number.isInteger(valueInteger)){
            ordersClass.style.display = 'flex';
            sumAllValue.innerText = `$${productsQuantity + ordersVal + selectPackageAmount + accountingPrice + terminalPrice}`;
        }
        else {
            ordersClass.style.display = 'none';
            sumAllValue.innerText = `$${productsQuantity + selectPackageAmount + accountingPrice + terminalPrice}`;
        }
    });

    const packageClass = document.querySelector('#package');
    const packageName = document.querySelector('#package > p:nth-child(2)');
    const packageValue = document.querySelector('#package > p:last-child');
    const selectPackage = document.querySelector('#package-select');
    let selectPackageAmount = 0;

        selectPackage.addEventListener('change', function () {

        if (selectPackage.value === 'basic'){
            selectPackageAmount = 30;
            packageName.innerText = 'Basic';
            packageValue.innerText = '$30';
            packageClass.style.display = 'flex';
        }

        else if (selectPackage.value === 'professional'){
            selectPackageAmount = 45;
            packageClass.style.display = 'flex';
            packageName.innerText = 'Professional';
            packageValue.innerText = '$45';
        }
        else if (selectPackage.value === 'premium'){
            selectPackageAmount = 60;
            packageClass.style.display = 'flex';
            packageName.innerText = 'Premium';
            packageValue.innerText = '$60';
        }
        else {
            sumAllValue.innerText = `$${productsQuantity + ordersVal + accountingPrice + terminalPrice}`;
            packageClass.style.display = 'none';
        }
        sumAllValue.innerText = `$${productsQuantity + ordersVal + selectPackageAmount + accountingPrice + terminalPrice}`;

    });

    const checkboxAccount = document.querySelector('#check-account');
    const hideAccounting = document.querySelector('#accounting');
    let accountingPrice = 0;

    checkboxAccount.addEventListener('change', function () {
        const agreeVal = this.checked;

        if (agreeVal){
            accountingPrice = 35;
            hideAccounting.style.display = 'flex';
            sumAllValue.innerText = `$${productsQuantity + ordersVal + selectPackageAmount + accountingPrice + terminalPrice}`;
        }
        else {
            accountingPrice = 0;
            hideAccounting.style.display = 'none';
            sumAllValue.innerText = `$${productsQuantity + ordersVal + selectPackageAmount + terminalPrice}`;
        }

    });

    const checkboxTerminal = document.querySelector('#check-terminal');
    const hideTerminal = document.querySelector('#terminal');
    let terminalPrice = 0;

    checkboxTerminal.addEventListener('change', function () {
        const agreeVal = this.checked;

        if (agreeVal){
            terminalPrice = 5;
            hideTerminal.style.display = 'flex';
            sumAllValue.innerText = `$${productsQuantity + ordersVal + selectPackageAmount + accountingPrice + terminalPrice}`;
        }
        else {
            terminalPrice = 0;
            hideTerminal.style.display = 'none';
            sumAllValue.innerText = `$${productsQuantity + ordersVal + selectPackageAmount + accountingPrice}`;
        }

    });



});
