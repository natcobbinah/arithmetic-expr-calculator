# Arithmetic Expression Calculator
Generates the Reverse Polish Notation (Postfix and Prefix) expression form of an arithmetic expression in (Infix) form.

Performs the computation of the arithmetic expression if Integers or Floating point numbers are used in the expression.

Inspired from reading two major books:
> Hands-On Data Structures and Algorithms With Python By Dr. Basant Agarwal
  and Benjamin Baka

> A  Concise Introduction to Data Structures Using Java by Mark. J Johnson

Other resources for extended functionalities and implementation:
> https://en.wikipedia.org/wiki/Shunting_yard_algorithm

Test_Cases
> Thanks to LeetCode Hard (https://leetcode.com/problems/basic-calculator/description/) and LeetCode Medium (https://leetcode.com/problems/basic-calculator-ii/description/), this implementation passes all those, and thus should solve your arithmetic-expression computations.

[Original Implementation (Basic Calculator) Leetcode:] (https://github.com/natcobbinah/Python_prog/blob/master/python_dsa%20-%20Dr%20Basant%20Agarwal%20et%20al/trees/expression_tree/basic_calculator.py)

[NOTE:] Implementation supports both Shunting Yard (postfix/prefix) approaches, thus
either method invocation should yield the same result

## Operators Supported
Supports **PEDMAS** order of computation, thus, all the operators of 
**Exponentiation, Division, Multiplication, Addition and Subtraction**, as well as using **Parentheses** for grouping and prioritization is all handled.

> **Multiplication** operator can be denoted by either **x  or  \***

> Likewise, **Division** operator can be denoted by either **/  or  ÷**

> The **modulo** operator is also supported as well, denoted by **Mod**

### Extended Functionalities
Supported operators, extending the arithmetic-expr-calculator functionality includes the following functions:

--------------------------------------------------------------------
| Symbol          | Function name       | Usage                    |
| --------------- | ------------------  | --------------------------
| !               |  Factorial          | a!, where a =>  number   |
| C               |  Combination        | aPb, where a,b => numbers|
| P               |  Permuation         | aCb, where a,b => numbers|
| Γ               |  Gamma              | Γ(args)                  |
| sin             |  Sine               | sin(args)                |
| cos             |  Cosine             | cos(args)                |
| tan             |  Tangent            | tan(args)                |
| cosec           |  1 / sin            | csc(args)                |
| sec             |  1 / cos            | sec(args)                |
| cot             |  1 / tan            | cot(args)                |
| arcsin          |  sin^-1(args)       | arcsin(args)             |
| arccos          |  cos^-1(args)       | arccos(args)             |
| arctan          |  tan^-1(args)       | arctan(args)             |
| log             |  logarithm          | log(args)                |
| ln              |  natural logarithm  | ln(args)                 |
--------------------------------------------------------------------
[NOTE:] args => number

See usage in sample examples  demonstration

## Usage in Project
GUI demo using library for performing computations  using TypeSCript
> https://jolly-starburst-7073ef.netlify.app/

![arithmetic_expr_calc](https://github.com/natcobbinah/arithmetic-expr-calculator/assets/10479361/ffc950f8-5016-424a-b39a-7227ab93e73a)


Source code for TypeScript Calculator UI:
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

    //test13
    let mathexpr13 = "20 + (34 + 8 - (15 - 7) + 21) - 26"
    console.log(expr.eval_Expression(
        expr.convert_to_PostfixRPN(mathexpr13)
    )) //49

    //test14 - Combination
    let mathExpr14 = "6C2 * 16"
    console.log(expr.eval_Expression(
        expr.convert_to_PostfixRPN(mathExpr14) // 240
    ))

    //test15 - Permutation
    let mathExpr15 = "6P2 + 9 / 3"
    console.log(expr.eval_Expression(
        expr.convert_to_PostfixRPN(mathExpr15) // 33
    ))

    //test16 - uses variant symbol of multiplication 
    let mathExpr16 = "5! x 9P2"
    console.log(expr.eval_Expression(
        expr.convert_to_PostfixRPN(mathExpr16) // 8640
    ))

    //test17 - Modulo example
    let mathExpr17 = "7 Mod 2 x 3"
    console.log(expr.eval_Expression(
        expr.convert_to_PostfixRPN(mathExpr17) // 3
    ))

    //test18 - Trignometry functions example
    let mathExpr18 = "sin ( cos ( 2 ) / 3 * 9 )"
    console.log(expr.eval_Expression(
        expr.convert_to_PostfixRPN(mathExpr18)) //-0.9484917234
    )

    //test19 - Gamma 
    let mathExpr19 = "Γ(6) * 4!"
    console.log(expr.eval_Expression(
        expr.convert_to_PostfixRPN(mathExpr19)) //2880
    )

    //test20 - Natural Logarithm
    let mathExpr20 = "ln(2) + 4"
    console.log(expr.eval_Expression(
        expr.convert_to_PostfixRPN(mathExpr20)) //4.69314718056
    )  

    //test21 - handling incorrect parentheses pairs - using postfix 
    let mathExpr21 = "ln(2 + 4"
    console.log(expr.eval_Expression(
        expr.convert_to_PostfixRPN(mathExpr21)) //'Parentheses Error'
    )

    //test22 - handling incorrect parentheses pairs - using prefix 
    let mathExpr22 = "sin (cos(2 / 3 * 9)"
    console.log(expr.eval_Expression_Prefix(
        expr.convert_to_PrefixRPN(mathExpr22)) //'Parentheses Error'
    )

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

    //test13
    let mathexpr13 = "20 + (34 + 8 - (15 - 7) + 21) - 26"
    console.log(expr.eval_Expression(
        expr.convert_to_PostfixRPN(mathexpr13)
    )) //49

    //test14 - Combination
    let mathExpr14 = "6C2 * 16"
    console.log(expr.eval_Expression(
        expr.convert_to_PostfixRPN(mathExpr14) // 240
    ))

    //test15 - Permutation
    let mathExpr15 = "6P2 + 9 / 3"
    console.log(expr.eval_Expression(
        expr.convert_to_PostfixRPN(mathExpr15) // 33
    ))

    //test16 - uses variant symbol of multiplication 
    let mathExpr16 = "5! x 9P2"
    console.log(expr.eval_Expression(
        expr.convert_to_PostfixRPN(mathExpr16) // 8640
    ))

    //test17 - Modulo example
    let mathExpr17 = "7 Mod 2 x 3"
    console.log(expr.eval_Expression(
        expr.convert_to_PostfixRPN(mathExpr17) // 3
    ))

    //test18 - Trignometry functions example
    let mathExpr18 = "sin ( cos ( 2 ) / 3 * 9 )"
    console.log(expr.eval_Expression(
        expr.convert_to_PostfixRPN(mathExpr18)) //-0.9484917234
    )

    //test19 - Gamma 
    let mathExpr19 = "Γ(6) * 4!"
    console.log(expr.eval_Expression(
        expr.convert_to_PostfixRPN(mathExpr19)) //2880
    )

    //test20 - Natural logarithm
    let mathExpr20 = "ln(2) + 4"
    console.log(expr.eval_Expression(
        expr.convert_to_PostfixRPN(mathExpr20)) //4.69314718056
    ) 

    //test21 - handling incorrect parentheses pairs - using postfix 
    let mathExpr21 = "ln(2 + 4"
    console.log(expr.eval_Expression(
        expr.convert_to_PostfixRPN(mathExpr21)) //'Parentheses Error'
    )

    //test22 - handling incorrect parentheses pairs - using prefix 
    let mathExpr22 = "sin (cos(2 / 3 * 9)"
    console.log(expr.eval_Expression_Prefix(
        expr.convert_to_PrefixRPN(mathExpr22)) //'Parentheses Error'
    )

    ```
