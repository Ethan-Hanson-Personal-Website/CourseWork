/*

Unit tests
    1:Multiplication
        -promt: A function called "multiplication" that returns the product of the two input numbers.
        -expect multiplication (1,3) to be 3
        -expect multiplication (2,-7) to be -14
        -expect multiplication (7,0) to be 0
        -expect multiplication (10,2) to be 20
        -expect error for (0,0)

    2:concatOdds
        -promt: A function called "concatOdds" takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays. 
        -example: concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) should result in [-1, 1, 3, 9, 15]
        -Expect concatOdds([4, 23, 1], [27, 39, 2, 1, 9, 15, -1]) to be [-1, 1, 1, 9, 15, 23, 27, 39]
        -Expect concatOdds([5, 2, 7], [8, 3, 2, 6, 11, 4, -3]) to be [-3, 3, 5, 7, 11]
        -Expect concatOdds([4, 8, 10], [2, 6, 12]) to be an empty array


Functional Test
    -prompt:  A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.
        -Checkout steps
            -review cart screen showing whats in the cart
            -Input shipping info and billing
            -select shipping
            -input payment method
            -Last review order screen with Buyer name, item, price, shipping info, payment info
            -order confirmation
        -Guest checkout
            -select login/ guest checkout
        -logged-in checkout
            -same as the guest but all info is saved for future purposes
            -maybe a rewards account
        -if the cart is empty
            -no checkout button
            -cart screen says that there are no items in cart
            -browse button
        -testing
            -go through the checkout process as a user
            -test on multiple devices and web browsers

*/