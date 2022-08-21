/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/1-JavaScript/Week3#exercise-6-total-cost-is

You want to buy a couple of things from the supermarket to prepare for a party.
After scanning all the items the cashier wants to give you the total price, but
the machine is broken! Let's write her a function that does it for her
instead!

1. Create an object named `cartForParty` with five properties. Each property
   should be a grocery item (like `beers` or `chips`) and hold a number value
   (like `1.75` or `0.99`).

2. Complete the function called `calculateTotalPrice`.

   - It takes one parameter: an object that contains properties that only contain
     number values.
   - Loop through the object and add all the number values together.
   - Return a string: "Total: €`amount`".

3. Complete the unit test functions and verify that all is working as expected.
-----------------------------------------------------------------------------*/
const cartForParty = {
  iceTea: 3.22,
  chips: 4.38,
  cookie: 7.33,
  fruit: 5.99,
  cake: 6.23,
};

function calculateTotalPrice(cart) {
  amount = 0;

  Object.values(cart).reduce((acc, num) => (amount += acc + num), 0);
  return `Total: €${amount.toFixed(2)}`;
}

function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');

  // TODO replace this comment with your code
  const expected = 1;
  const actual = calculateTotalPrice.length;
  console.assert(expected === actual);
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  // TODO replace this comment with your code
  const expected = 'Total: €134.09';
  const actual = calculateTotalPrice(cartForParty);
  console.assert(expected === actual);
}

function test() {
  test1();
  test2();
}

test();
