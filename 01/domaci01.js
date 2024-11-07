let cart = [
  { name: "Item1", price: 222 },
  { name: "Item2", price: 32 },
  { name: "Item3", price: 12 },
  { name: "Item4", price: 42 },
];
//  Kreirati funkciju koja ce ispisati ukupnu vrednost artikala u nizu.
//  Kreirati funkciju koja ce ispisati najjeftiniji artikal

function getSumOfItems() {
  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    sum += cart[i].price;
  }
  return sum;
}
const result = getSumOfItems();
console.log(result);

function getCheapestItem() {
  let cheapestItem = cart[0];

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].price < cheapestItem.price) {
      cheapestItem = cart[i];
    }
  }
  return cheapestItem;
}
const result2 = getCheapestItem();
console.log(result2);
