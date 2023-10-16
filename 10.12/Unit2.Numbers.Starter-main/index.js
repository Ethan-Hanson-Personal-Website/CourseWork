//Prompt the user for a list of integers separated by commas
const str = window.prompt('enter some numbers, like this', '1,2,3,3,5,9');



// Complete the Numbers class below
// the constructor has already been provided
class Numbers{
  constructor(data){
    //data can either be a string or an array of numbers
    if(typeof data === 'string'){
      this.data = str.split(',').map(number => number*1);
    }
    else {
      this.data = data;
    }
  }
  count(){
    //return the count of numbers in data
    const data = this.data;
    const count = data.length;
    return `The count of numbers is ${count}`;  
  }
  printNumbers(){
    //print the numbers in data
    const data = this.data;
      for (let i = 0; i < data.length; i++){
        const number = data[i];
        console.log(`Index ${i}: ${number}`);
      }
  }
  odds(){
    //return the odd numbers in data
    const data = this.data;
    const oddNumbers = data.filter(number => number % 2 !== 0);
    return `The odd numbers are ${oddNumbers.join(', ')}`;
    }
  evens(){
    //return the even numbers in data
    const data = this.data;
    const evenNumbers = data.filter(number => number % 2 === 0);
    return `The even numbers are ${evenNumbers.join(', ')}`;
  }
  sum(){
    //return the sum of the numbers
    const data = this.data;
    const sum = data.reduce((total, number) => total + number, 0);
    return `The sum is ${sum}`;
  }
  product(){
    //return the product of the numbers
    const data = this.data;
    const product = data.reduce((total, number) => total * number, 1);
    return `The product is ${product}`;
  }
  greaterThan(target){
    //return the numbers greater than the target
    const data = this.data;
    const greaterThan = data.filter(number => number > target);
    return `Numbers greater than ${target} are ${greaterThan.join(', ')}`;
  }
  howMany(target){
    //return the count of a given number
    const data = this.data;
    const howMany = data.filter(number => number === target);
    return `The count of ${target} is ${howMany.length}`;
  }
}

//create an instance of numbers
const n1 = new Numbers(str);
console.log(n1.count());//returns count of numbers
n1.printNumbers();//prints the number along with their indexes
console.log(n1.odds());//returns odd numbers
console.log(n1.evens());//returns even numbers
console.log(n1.sum());//returns sum of numbers
console.log(n1.product());//returns product of numbers
console.log(n1.greaterThan(3));//returns numbers greater than another number
console.log(n1.howMany(3));//return the count of a specific number
