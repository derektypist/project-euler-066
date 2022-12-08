# Project Euler 066 - Diophantine Equation

Consider quadratic Diophantine equations of the form x<sup>2</sup> - Dy<sup>2</sup> = 1.

For example, when D = 13, the minimal solution in x is 649<sup>2</sup> - 13 x 180<sup>2</sup> = 1.

It can be assumed that there are no solutions in positive integers when D is square.

By finding minimal solutions in x for D = {2, 3, 5, 6, 7}, we obtain the following:

3<sup>2</sup> - 2x2<sup>2</sup> = 1, 2<sup>2</sup> - 3x1<sup>2</sup> = 1, 
9<sup>2</sup> - 5x4<sup>2</sup> = 1, 5<sup>2</sup> - 6x2<sup>2</sup> = 1,
8<sup>2</sup> - 7x3<sup>2</sup> = 1

Hence, by considering minimal solutions in x for D &le; 7, the largest x is obtained when D = 5.

Find the value of D &le; n in minimal solutions of x for which the largest value of x is obtained.

Information at [Project Euler 066](https://projecteuler.net/problem=66)

## UX

**Getting Started**

Enter a whole number between 2 and 1000 (without leading zeros) and select the Submit Button.  You will see the value of D for which the largest x is obtained, where D is less than or equal to the number entered.  For example, if you entered 7, you would expect the value of D to be 5.  If you have made an invalid input, you will get an error message.  Select the Reset Button to clear the information or to start again. 

**User Stories**

As a user, I expect to get an error message, if I do any of:

- Not enter anything in the input field
- Entering text other than a number
- Entering a number less than 2 or greater than 1000
- Including leading zeros such as 02
- Entering a number, but it is not an integer

As a user, if I select the Reset Button, I can clear the information or start again.

As a user, I expect the function `diophantineEquation(7)` to return a number.

As a user, I expect the function `diophantineEquation(7)` to return 5.

As a user, I expect the function `diophantineEquation(100)` to return 61.

As a user, I expect the function `diophantineEquation(409)` to return 409.

As a user, I expect the function `diophantineEquation(500)` to return 421.

As a user, I expect the function `diophantineEquation(1000)` to return 661.

User Stories on function `diophantineEquation(n)` taken from [FreeCodeCamp - Coding Interview Prep - Project Euler 066](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-66-diophantine-equation)

**Information Architecture**

The function `diophantineEquation(n)` returns a number, where n is a number between 2 and 1000.

