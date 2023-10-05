// const shoe = {
//     brand: 'converse',
//     laces: 2,
//     velcro: false,
//     color: 'green',
//     price: 60.00,
//     activityType: 'casual'
//   }

//   const kidShoe = {
//     brand: 'sketchers',
//     laces: false,
//     velcro: true,
//     color: 'blue',
//     price: 30.00,
//     activityType: 'walk'
//   }

//   const myShoes = [shoe, kidShoe];
//   console.log(shoe.brand);
//   console.log(shoe["brand"]);

//   for(let index = 0; index <myShoes.length; index++){
//     console.log(myShoes[index].brand)
//     if(myShoes[index].laces ==  true){
//       console.log("adult shoe");
//     }
//     else if(myShoes[index].velcro ==  true)
//     {
//       console.log("kid shoe");
//     }
//   }
  
  // // // log whole object
  //  console.log(shoe);
  
  // // // dot syntax
  // console.log(shoe.color);
  
  //  const key = "color";
  // // // bracket syntax
  //  console.log(shoe[key]);
  
  //  for (const key in shoe) {
  //    console.log(key);
  //    console.log(`The key ${key} has a value of ${shoe[key]}`)
  //  }
  
  // const bankAccount = {
  //   bankName: 'SoFi',
  //   type: 'Savings',
  //   balance: 250,
  //   checkBalance() {
  //     console.log(this.balance);
  //   },
  //   deposit(amount) {
  //     this.balance += amount
  //   },
  //   withdraw(amount) {
  //     this.balance -= amount
  //   },
  //   jointOwners: ['Liliana', 'Mom']
  // }
  
  // bankAccount.checkBalance();
  // bankAccount.deposit(1000);
  // bankAccount.withdraw(500);
  // bankAccount.checkBalance();
  
  // bankAccount.type = 'Checking';
  // bankAccount.address = {
  //   streetNum: 542,
  //   streetName: 'Easy St',
  //   zipcode: 12345,
  //   state: 'FL'
  // }
  
  // console.log(bankAccount)
  // // logging nested object values
  // console.log(bankAccount.address.zipcode);
  
  // // accessing nested array
  // for (let i = 0; i < bankAccount.jointOwners.length; i++ ) {
  //   console.log(bankAccount.jointOwners[i])
  // }
  
  // delete bankAccount.jointOwners;
  // console.log(bankAccount)
  
  // // Object.keys()
  // const bankKeys = Object.keys(bankAccount);
  
  // for(let i = 0; i < bankKeys.length; i++) {
  //   console.log(bankKeys[i])
  // }
  
  // // Object.keys()
  // const bankValues = Object.values(bankAccount);
  
  // for(let i = 0; i < bankValues.length; i++) {
  //   console.log(bankValues[i])
  // }
  
  // console.table(bankAccount);

  // const car = {
  //   make: "toyota",
  //   model: "camery",
  //   start(){
  //     console.log('Vroom')
  //   },
  //   brake(){
  //     console.log("screeeech")
  //   }
  // }

 // console.table(car);

// console.log(car.make);
 //console.log(car["make"]);
//  car.start();
//  car.brake();

 const user ={
  name: "name",
  password: "password",
  login(){
    console.log("logging in ...");
  }
 }

user.id = "alivar";
delete user["name"];

user.id = "alivar2";

// 

console.table(Object.values(user));

console.table(Object.keys(user));