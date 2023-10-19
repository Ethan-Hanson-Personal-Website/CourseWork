//vending machine specs
// happy path
  //user pays
    //cash
    //card
    //pay apps
  //user selects item
    //press button
  //dispense Item that the user selected
  //return change (if applicable)

//unhappy path
    //user picks out of stock item
    //incificient funds
    //payment not accepted
      //bad bills/coins
      //card unreadable
    //item stuck
    //money full
    //user changes mind
    //no change

//specs
  // when a user see the vending machine, the prices should be displayed
  //the vending machine should be able to accept Insert_Payment
  // the vending machine should be able to dispense an item when the user pay and selects an item
  //machine accepts payment
  //machine should return change if applicable
  //When an item is out of stock:
    //machine should not dispense an item
    // should inform the user
    //it should nopt charge the user
  //machine should display message to user that payment is required if input was recived withoput payment
  // if issue with bill then the machine should retun the bill
  //if item gets stuck, money is refunded and technician is notified
  // if money/coins are full, vending machine returns money and notifies owner to collect
  