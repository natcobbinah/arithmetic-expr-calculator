# Arithmetic Expression Calculator
Generates the Reverse Polish Notation (Postfix and Prefix) expression form of an arithmetic expression in (Infix) form.

Performs the computation of the arithmetic expression if Integers or Floating point numbers are used in the expression.

Inspired from reading two major books:
> Hands-On Data Structures and Algorithms With Python By Dr. Basant Agarwal
  and Benjamin Baka

> A  Concise Introduction to Data Structures Using Java by Mark. J Johnson

Test_Cases
> Thanks to LeetCode Hard (https://leetcode.com/problems/basic-calculator/description/) and LeetCode Medium (https://leetcode.com/problems/basic-calculator-ii/description/), this implementation passes all those, and thus
should solve your arithmetic-expression computations.

[NOTE:] Implemented the solution using Shunting Yard (postfix) implementation,
and thus using Postfix Methods, should pass all your testCases. The (prefix)
implementation however, might have some few bugs

## Operators Supported
Supports **PEDMAS** order of computation, thus, all the operators of 
**Exponentiation, Division, Multiplication, Addition and Subtraction**, as well as using **Parentheses** for grouping and prioritization is all handled.


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
    let mathExpr1 = "( 1 + 2 ) * 3";
    let postfix_expr = Infix_toPostfix.toPostfix_RPN(mathExpr1); // 1 2 + 3 *
    let evaluatedResult = Eval_Postfix.evalPostfix_RPN(postfix_expr); //9
    console.log(evaluatedResult)


    //test2 
    let mathExpr2 = "1 + 2 * 3"
    let resultforExpr2 = Eval_Postfix.evalPostfix_RPN(
        Infix_toPostfix.toPostfix_RPN(mathExpr2)
    );
    console.log(resultforExpr2) //7

    
    //test3
    let mathExpr3 = "2 ^ 3 + 5 * 7";
    let resultforExpr3 = Eval_Postfix.evalPostfix_RPN(
        Infix_toPostfix.toPostfix_RPN(mathExpr3)
    );
    console.log(resultforExpr3) //43

    //test4
    let mathExpr4 = "1-11";
    let resultforExpr4 = Eval_Postfix.evalPostfix_RPN(
        Infix_toPostfix.toPostfix_RPN(mathExpr4)
    );
    console.log(resultforExpr4) //-10

    //test5
    let mathExpr5 = "-1+2";
    let resultforExpr5 = Eval_Postfix.evalPostfix_RPN(
        Infix_toPostfix.toPostfix_RPN(mathExpr5)
    );
    console.log(resultforExpr5) //1   

    //test6
    let mathexpr6 = "( x - y ) * ( z + w ) / ( u + v )"
    console.log(Infix_toPostfix.toPostfix_RPN(mathexpr6)) // x y - z w + * u v + /

    //test7
    let mathexpr7 = "x * y / ( z - w + v * u )"
    console.log(Infix_toPostfix.toPostfix_RPN(mathexpr7)) // x y * z w - v u * + /

    //test8
    let mathexpr8 = "( x + y + z ) * ( w - v ) / u"
    console.log(Infix_toPostfix.toPostfix_RPN(mathexpr8)) //x y + z + w v - * u /

    //test9
    let mathexpr9 = "x ^ y + z * w - v / u"
    console.log(Infix_toPostfix.toPostfix_RPN(mathexpr9)) // x y ^ z w * + v u / -


    //test10
    let mathexpr10 = "2.2 + 7.89 * 9.45 - 6.79 ^ 3 * ( 44 / 3 ) / 9"
    console.log(Eval_Postfix.evalPostfix_RPN(
        Infix_toPostfix.toPostfix_RPN(mathexpr10)
    )) // -433.3899042962963   

    //test11
    let mathexpr11 = "1- ( -2)"
    console.log(Eval_Postfix.evalPostfix_RPN(
        Infix_toPostfix.toPostfix_RPN(mathexpr11)
    )) //3
    ```

### Using TypeScript

    ```
    import {Expression} from "arithmetic-expr-calculator";
    let expr = new Expression()

    //test1
    let mathExpr1 = "( 1 + 2 ) * 3";
    let postfix_expr = Infix_toPostfix.toPostfix_RPN(mathExpr1); // 1 2 + 3 *
    let evaluatedResult = Eval_Postfix.evalPostfix_RPN(postfix_expr); //9
    console.log(evaluatedResult)


    //test2 
    let mathExpr2 = "1 + 2 * 3"
    let resultforExpr2 = Eval_Postfix.evalPostfix_RPN(
        Infix_toPostfix.toPostfix_RPN(mathExpr2)
    );
    console.log(resultforExpr2) //7

    
    //test3
    let mathExpr3 = "2 ^ 3 + 5 * 7";
    let resultforExpr3 = Eval_Postfix.evalPostfix_RPN(
        Infix_toPostfix.toPostfix_RPN(mathExpr3)
    );
    console.log(resultforExpr3) //43

    //test4
    let mathExpr4 = "1-11";
    let resultforExpr4 = Eval_Postfix.evalPostfix_RPN(
        Infix_toPostfix.toPostfix_RPN(mathExpr4)
    );
    console.log(resultforExpr4) //-10

    //test5
    let mathExpr5 = "-1+2";
    let resultforExpr5 = Eval_Postfix.evalPostfix_RPN(
        Infix_toPostfix.toPostfix_RPN(mathExpr5)
    );
    console.log(resultforExpr5) //1   

    //test6
    let mathexpr6 = "( x - y ) * ( z + w ) / ( u + v )"
    console.log(Infix_toPostfix.toPostfix_RPN(mathexpr6)) // x y - z w + * u v + /

    //test7
    let mathexpr7 = "x * y / ( z - w + v * u )"
    console.log(Infix_toPostfix.toPostfix_RPN(mathexpr7)) // x y * z w - v u * + /

    //test8
    let mathexpr8 = "( x + y + z ) * ( w - v ) / u"
    console.log(Infix_toPostfix.toPostfix_RPN(mathexpr8)) //x y + z + w v - * u /

    //test9
    let mathexpr9 = "x ^ y + z * w - v / u"
    console.log(Infix_toPostfix.toPostfix_RPN(mathexpr9)) // x y ^ z w * + v u / -


    //test10
    let mathexpr10 = "2.2 + 7.89 * 9.45 - 6.79 ^ 3 * ( 44 / 3 ) / 9"
    console.log(Eval_Postfix.evalPostfix_RPN(
        Infix_toPostfix.toPostfix_RPN(mathexpr10)
    )) // -433.3899042962963   

    //test11
    let mathexpr11 = "1- ( -2)"
    console.log(Eval_Postfix.evalPostfix_RPN(
        Infix_toPostfix.toPostfix_RPN(mathexpr11)
    )) //3
    ```