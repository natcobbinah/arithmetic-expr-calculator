import Infix_toPostfix from "./Infix_toPostfix";
import Eval_Postfix from "./Eval_Postfix";

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
let mathexpr4 = "( x - y ) * ( z + w ) / ( u + v )"
console.log(Infix_toPostfix.toPostfix_RPN(mathexpr4)) // x y - z w + * u v + /

//test5
let mathexpr5 = "x * y / ( z - w + v * u )"
console.log(Infix_toPostfix.toPostfix_RPN(mathexpr5)) // x y * z w - v u * + /

//test6
let mathexpr6 = "( x + y + z ) * ( w - v ) / u"
console.log(Infix_toPostfix.toPostfix_RPN(mathexpr6)) //x y + z + w v - * u /

//test7
let mathexpr7 = "x ^ y + z * w - v / u"
console.log(Infix_toPostfix.toPostfix_RPN(mathexpr7)) // x y ^ z w * + v u / -

//test8
let mathexpr8 = "2.2 + 7.89 * 9.45 - 6.79 ^ 3 * ( 44 / 3 ) / 9"
console.log(Eval_Postfix.evalPostfix_RPN(
    Infix_toPostfix.toPostfix_RPN(mathexpr8)
)) // -433.3899042962963