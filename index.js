document.onload = alert("Please fill out: 'What's your name?' box");

// SETTING PRE-DEFINED VARIABLES
var totalTiles = '';
var pricePerTile = '';
var subtotal = '';
var shipping = '';
var grandTotal = '';

function submit() {
    var name = '';
    name = document.getElementById('name').value;
    document.getElementById('user-name').innerHTML = name;
}

// SETTING THE GREETING MESSAGE WITH USER'S NAME
document.getElementById('submit-name').onclick = submit();

// WRITING THE FUNCTION TO CALCULATE THE PRICE WHEN USER CLICKS CALCULATE BTN
function calculateSign() {
    totalTiles = document.getElementById('sign-name').value.length;
    document.getElementById('tiles').innerHTML = totalTiles;

    pricePerTile = document.getElementById('tile-price').value;
    document.getElementById('price').innerHTML = '£' + pricePerTile;

    subtotal = document.getElementById('sign-name').value.length * pricePerTile;
    document.getElementById('subtotal').innerHTML = '£' + subtotal;

    shipping = document.getElementById('shipping-price').value;
    document.getElementById('shipping').innerHTML = '£' + shipping;

    grandTotal = subtotal + shipping;
    document.getElementById('total').innerHTML = '£' + grandTotal;
}

// WRITING THE FUNCTION TO CHANGE SHIPPING & TILE PRICES WHEN USER CLICKS CHANGE BTN
function changePrices() {
    pricePerTile = document.getElementById('tile-price').value;
    shipping = document.getElementById('shipping-price').value;
    calculateSign();
}

// CALLING THE CALCULATE FUNCTION WHEN USER CLICKS CALCULATE BTN
document.getElementById('calculate').onclick = calculateSign();

// CALLING THE changePrices FUNCTION WHEN USER CLICKS changePrices BTN
document.getElementById('changePrices').onclick = changePrices();

