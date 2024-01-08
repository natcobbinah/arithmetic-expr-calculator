# Arithmetic Expression Calculator
Generates the Reverse Polish Notation (Postfix and Prefix) expression form of an arithmetic expression in (Infix) form.

Performs the computation of the arithmetic expression if Integers or Floating point numbers are used in the expression.

Inspired from reading two major books:
> Hands-On Data Structures and Algorithms With Python By Dr. Basant Agarwal
  and Benjamin Baka

> A  Concise Introduction to Data Structures Using Java by Mark. J Johnson

Test_Cases
> Thanks to LeetCode Hard (https://leetcode.com/problems/basic-calculator/description/) and LeetCode Medium (https://leetcode.com/problems/basic-calculator-ii/description/), this implementation passes all those, and thus should solve your arithmetic-expression computations.

[NOTE:] Implementation supports both Shunting Yard (postfix/prefix) approaches, thus
either method invocation should yield the same result

## Operators Supported
Supports **PEDMAS** order of computation, thus, all the operators of 
**Exponentiation, Division, Multiplication, Addition and Subtraction**, as well as using **Parentheses** for grouping and prioritization is all handled.

## Usage in Project
To interface this library in projects, here is a  link to typescript demo of the application
> https://jolly-starburst-7073ef.netlify.app/

The code for the TypeScript Calculator UI, is hosted on github at:
> https://github.com/natcobbinah/TypeScript-Calculator-UI

### Operations
> Getting the **Postfix or Prefix** Reverse Polish Notation

    ```

    import {Expression} from "arithmetic-expr-calculator";

    let expr = new Expression()
    
    //postfix 
    expr.convert_to_PostfixRPN(mathExpr)

    //prefix 
    expr.convert_to_PrefixRPN(mathExpr)
    

    To output to Console then, would be:
     
    //postfix
    console.log(expr.convert_to_PostfixRPN(mathExpr))

    //prefix
    console.log(expr.convert_to_PrefixRPN(mathExpr))

    ```

> Getting **evaluated Infix arithmetic expression**

    ```
    //Either convert to Postfix and evaluate Postfix expression  form OR
    //Convert to Prefix and evaluate Prefix expression form

    // Note: By default [eval_Expression] evaluates Postfix expression form
    // To evalute Prefix expression form use [eval_Expression_Prefix]

    import {Expression} from "arithmetic-expr-calculator";

    let expr = new Expression()

    //postfix
    let postfix_expr = expr.convert_to_PostfixRPN(mathExpr1); 
    let evaluatedResult = expr.eval_Expression(postfix_expr); 
    console.log(evaluatedResult)

    //prefix
    let prefix_expr = expr.convert_to_PrefixRPN(mathExpr1); 
    let evaluatedResult = expr.eval_Expression_Prefix(prefix_expr); 
    console.log(evaluatedResult)

    (OR)
    On one-line approach, from concepts of higher order fxns, without a 
    need for the **postfix** representation of the expression

    //postfix
    console.log(expr.eval_Expression(
        expr.convert_to_PostfixRPN(mathExpr)
    ))

    //prefix
    console.log(expr.eval_Expression_Prefix(
        expr.convert_to_PrefixRPN(mathExpr)
    ))

    ```

### Using JavaScript

    ```
    let arithmeticExpr = require("arithmetic-expr-calculator");
    let expr = new arithmeticExpr.Expression()

   //test1
    let mathExpr1 = "( 1 + 2 ) * 3"; //or "(1+2)*3" with no white space will still yield the same result
    let postfix_expr = expr.convert_to_PostfixRPN(mathExpr1); // 1 2 + 3 *
    let evaluatedResult = expr.eval_Expression(postfix_expr); //9
    console.log(`( 1 + 2 ) * 3 =  ${evaluatedResult}`)

    //test2 
    let mathExpr2 = "1 + 2 * 3" // or "1+2*3"
    let resultforExpr2 = expr.eval_Expression(
        expr.convert_to_PostfixRPN(mathExpr2)
    );
    console.log(`1 + 2 * 3 = ${resultforExpr2}`) //7


    //test3
    let mathExpr3 = "2 ^ 3 + 5 * 7"; // or "2^3+5*7"
    let resultforExpr3 = expr.eval_Expression(
        expr.convert_to_PostfixRPN(mathExpr3)
    );
    console.log(`2 ^ 3 + 5 * 7 = ${resultforExpr3}`) //43

    //test4
    let mathexpr4 = "( x - y ) * ( z + w ) / ( u + v )" //or  "(x-y)*(z+w)/(u+v)"
    console.log(expr.convert_to_PostfixRPN(mathexpr4)) // x y - z w + * u v + /

    //test5
    let mathexpr5 = "x * y / ( z - w + v * u )" // or "x*y/(z-w+v*u)"
    console.log(expr.convert_to_PostfixRPN(mathexpr5)) // x y * z w - v u * + /

    //test6
    let mathexpr6 = "( x + y + z ) * ( w - v ) / u" // or "(x+y+z)*(w-v)/u"
    console.log(expr.convert_to_PostfixRPN(mathexpr6)) //x y + z + w v - * u /

    //test7
    let mathexpr7 = "x ^ y + z * w - v / u" // or "x^y+z*w-v/u"
    console.log(expr.convert_to_PostfixRPN(mathexpr7)) // x y ^ z w * + v u / -

    //test8
    let mathexpr8 = "2.2 + 7.89 * 9.45 - 6.79 ^ 3 * ( 44 / 3 ) / 9" // or "2.2+7.89*9.45-6.79^3*(44/3)/9"
    console.log(expr.eval_Expression(
        expr.convert_to_PostfixRPN(mathexpr8)
    )) // -433.3899042962963


    //test9
    let mathexpr9 = "1234567"
    console.log(expr.eval_Expression(
        expr.convert_to_PostfixRPN(mathexpr9)
    )) //1234567

    //test10
    let mathexpr10 = "1- ( -2)" // or  "1-(-2)"
    console.log(expr.eval_Expression(
        expr.convert_to_PostfixRPN(mathexpr10)
    )) //3

    //test11
    let mathExpr11 = "1-11"; // or "1  - 11"
    let resultforExpr11 = expr.eval_Expression(
        expr.convert_to_PostfixRPN(mathExpr11)
    );
    console.log(`1-11 = ${resultforExpr11}`) //-10

    //test12
    let mathExpr12 = "-1+2"; // or "-1    +    2"
    let resultforExpr12 = expr.eval_Expression(
        expr.convert_to_PostfixRPN(mathExpr12)  //0 1 - 2  +
    );
    console.log(`-1+2 = ${resultforExpr12}`) //1    
    ```

### Using TypeScript

    ```
    import {Expression} from "arithmetic-expr-calculator";
    let expr = new Expression()

    //test1
    let mathExpr1 = "( 1 + 2 ) * 3"; //or "(1+2)*3" with no white space will still yield the same result
    let postfix_expr = expr.convert_to_PostfixRPN(mathExpr1); // 1 2 + 3 *
    let evaluatedResult = expr.eval_Expression(postfix_expr); //9
    console.log(`( 1 + 2 ) * 3 =  ${evaluatedResult}`)

    //test2 
    let mathExpr2 = "1 + 2 * 3" // or "1+2*3"
    let resultforExpr2 = expr.eval_Expression(
        expr.convert_to_PostfixRPN(mathExpr2)
    );
    console.log(`1 + 2 * 3 = ${resultforExpr2}`) //7


    //test3
    let mathExpr3 = "2 ^ 3 + 5 * 7"; // or "2^3+5*7"
    let resultforExpr3 = expr.eval_Expression(
        expr.convert_to_PostfixRPN(mathExpr3)
    );
    console.log(`2 ^ 3 + 5 * 7 = ${resultforExpr3}`) //43

    //test4
    let mathexpr4 = "( x - y ) * ( z + w ) / ( u + v )" //or  "(x-y)*(z+w)/(u+v)"
    console.log(expr.convert_to_PostfixRPN(mathexpr4)) // x y - z w + * u v + /

    //test5
    let mathexpr5 = "x * y / ( z - w + v * u )" // or "x*y/(z-w+v*u)"
    console.log(expr.convert_to_PostfixRPN(mathexpr5)) // x y * z w - v u * + /

    //test6
    let mathexpr6 = "( x + y + z ) * ( w - v ) / u" // or "(x+y+z)*(w-v)/u"
    console.log(expr.convert_to_PostfixRPN(mathexpr6)) //x y + z + w v - * u /

    //test7
    let mathexpr7 = "x ^ y + z * w - v / u" // or "x^y+z*w-v/u"
    console.log(expr.convert_to_PostfixRPN(mathexpr7)) // x y ^ z w * + v u / -

    //test8
    let mathexpr8 = "2.2 + 7.89 * 9.45 - 6.79 ^ 3 * ( 44 / 3 ) / 9" // or "2.2+7.89*9.45-6.79^3*(44/3)/9"
    console.log(expr.eval_Expression(
        expr.convert_to_PostfixRPN(mathexpr8)
    )) // -433.3899042962963


    //test9
    let mathexpr9 = "1234567"
    console.log(expr.eval_Expression(
        expr.convert_to_PostfixRPN(mathexpr9)
    )) //1234567

    //test10
    let mathexpr10 = "1- ( -2)" // or  "1-(-2)"
    console.log(expr.eval_Expression(
        expr.convert_to_PostfixRPN(mathexpr10)
    )) //3

    //test11
    let mathExpr11 = "1-11"; // or "1  - 11"
    let resultforExpr11 = expr.eval_Expression(
        expr.convert_to_PostfixRPN(mathExpr11)
    );
    console.log(`1-11 = ${resultforExpr11}`) //-10

    //test12
    let mathExpr12 = "-1+2"; // or "-1    +    2"
    let resultforExpr12 = expr.eval_Expression(
        expr.convert_to_PostfixRPN(mathExpr12)  //0 1 - 2  +
    );
    console.log(`-1+2 = ${resultforExpr12}`) //1   
    ```