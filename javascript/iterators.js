console.log(".......Iterators in javascript......")

function fruitsIterator(values){
    let nextIndex = 0;
    // We will return an object
    return {
        next: function(){
            if (nextIndex < values.length){
                // we will return below object
               return {
                    value: values[nextIndex++],
                    done: false

            }
               }
                else{
                    return {
                        done: true
                    }
                  
                }
            
        }
    }
}



const myArray = ['Apples', 'Oranges', 'Grapes', 'Onions', 'Bananas']

console.log("My Array is ", myArray)

// *   using the iterators......... ..  . . . . . . . 
const fruits = fruitsIterator(myArray)
// console.log(fruits.next())
// console.log(fruits.next())
// console.log(fruits.next())
// console.log(fruits.next())
// console.log(fruits.next())
// console.log(fruits.next())

console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)


