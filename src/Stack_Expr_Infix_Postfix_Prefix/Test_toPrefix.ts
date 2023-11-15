import Infix_toPrefix from "./Infix_toPrefix";

//supports PEDMAS = Parentheses, Exponentiation, Division,
//                  Multiplication, Addition, Subtraction

let mathExpr =  "( a + b ) / c - d * ( e + f )";
console.log(Infix_toPrefix.toPrefix_RPN(mathExpr)) // - / + a b c * d + e f 

let mathExpr2 = "1 + 2 * 3";
console.log(Infix_toPrefix.toPrefix_RPN(mathExpr2)) // + 1 * 2 3

let mathExpr3 = "( 1 + 2 ) * 3";
console.log(Infix_toPrefix.toPrefix_RPN(mathExpr3)) // * + 1 2 3 



