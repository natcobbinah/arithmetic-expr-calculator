import { Expression } from "./Expression";

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