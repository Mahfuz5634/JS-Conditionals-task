const bottle={
    brand:'Fresh',
    price:20,
    weight:"500 ML"

}
console.log(bottle);
console.log(bottle.price)
console.log(bottle['brand' ])
bottle.price=50;
console.log(bottle.price);
const value= Object.values(bottle);

delete bottle.price;
console.log(value);

