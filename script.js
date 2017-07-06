//
var groceryList = [
  {
    Name: 'eggs',
    Price: 4.99
  },
  {
    Name: 'bacon',
    Price: 5.95
  },
  {
    Name: 'pancake mix',
    Price: 6.99
  },
  {
    Name: 'orange juice',
    Price: 5.99
  },
  {
    Name: 'bread',
    Price: 4.25
  },
  {
    Name: 'cheese',
    Price: 6.49
  },
  {
    Name: 'milk',
    Price: 4.99
  }
];
// End of Grocery list

var total = 0;

//Remove an item
groceryList.pop(5);
//

//Add an item
var addItem = {Name:'maple syrup', Price: 2.99}
groceryList.push(addItem);
console.log(groceryList);
//



groceryList.forEach(function(items) {
  console.log('The ' + items.Name + ' costs ' + '$' + items.Price);
  total += items.Price;

});

var tax = total * 0.06;
var grandTotal = total + tax;

// TOTALS
console.log('Total $' + total.toFixed(2));
console.log('Tax $' + tax.toFixed(2));
console.log('Grand Total $' + grandTotal.toFixed(2));
//
