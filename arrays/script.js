// looping

let arr = ["apple", "banana", "cherry"];

for( let i=0; i< arr.length; i++) {
    console.log(arr[i]);
}

let i=0;
while (i< arr.length) {
    console.log(arr[i]);
    i++;
}

const items = [
    {id : 'bike', price: 20},
    {id : 'car', price: 2000},
    {id : 'scooter', price: 200},
    {id : 'phone', price: 10},
    {id : 'laptop', price: 100},
]

const itemNames = items.filter((item) => {
    return item.price <= 200;

})

console.log(itemNames);
console.log(items);

const itemPrice = items.map((item) => {
    return item.price;

})

console.log(itemPrice);

const total = items.reduce ((currentTotal, item) => {
    return item.price + currentTotal;
}, 0);

console.log(total);

