///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc, cur) => acc + cur.price,0);

console.log(summedPrice);


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = function(cartTotal, couponValue, tax){
    let finalPrice = cartTotal * (1 + tax) - couponValue;
    console.log(finalPrice);
}

calcFinalPrice(12, 2, .05);

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

 1. customer id: data type is number, every cutomer needs an unique id so that it is easier and fast to locate and identify.
 2. customer name: data type is string, this important to know your customer name
 3. email: data type is string, we need email to interact with cutomer and send them new deals
 4. phonenumber: data type is a string of numbers, can be used to contact cutomers for deliver and emmergency
 5. address: data type is string, this can be used to food deliveries
 6. ordered History: data type could be an array of foods customer order before, so that we know customers' preferences.
 7. Preference: they can be boolean values such as: is vegetarian, so that we understand customers preferences.

    

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = {
    id: 123456,
    name: 'Oliver Xu',
    email: 'oliver.xu@abc.com',
    phone: '123-456-789',
    address:'123 abc street, san francisco, 94114, CA',
    ordered: ['rice', 'fish', 'noodle', 'beef'],
    Vegetarian: false
}

console.log(customer);

