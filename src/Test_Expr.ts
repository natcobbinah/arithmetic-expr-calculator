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

//test20
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
