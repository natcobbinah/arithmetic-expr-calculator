import Infix_toPostfix from "./Infix_toPostfix";

//supports PEDMAS = Parentheses, Exponentiation, Division,
//                  Multiplication, Addition, Subtraction

let mathExpr =  "( 1 + 2 ) * 3";
console.log(Infix_toPostfix.toPostfix_RPN(mathExpr)) // 1 2 + 3 *


let mathExpr2 = "1 + 2 * 3";
console.log(Infix_toPostfix.toPostfix_RPN(mathExpr2)) // 1 2 3 * +

let mathExpr3 = "2 ^ 3 + 5 * 7";
console.log(Infix_toPostfix.toPostfix_RPN(mathExpr3)) //2 3 ^ 5 7 * +