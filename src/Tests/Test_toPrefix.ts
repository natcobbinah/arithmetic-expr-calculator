import Infix_toPrefix from "../Stack_Expr_Infix_Postfix_Prefix/Infix_toPrefix";

//supports PEDMAS = Parentheses, Exponentiation, Division,
//                  Multiplication, Addition, Subtraction

let mathExpr = "( a + b ) / c - d * ( e + f )";
console.log(Infix_toPrefix.toPrefix_RPN(mathExpr)) // - / + a b c * d + e f 

let mathExpr2 = "1 + 2 * 3";
console.log(Infix_toPrefix.toPrefix_RPN(mathExpr2)) // + 1 * 2 3

let mathExpr3 = "( 1 + 2 ) * 3";
console.log(Infix_toPrefix.toPrefix_RPN(mathExpr3)) // * + 1 2 3 

let mathExpr4 = "sin ( cos ( 2 ) / 3 * 9 )"
console.log(Infix_toPrefix.toPrefix_RPN(mathExpr4)) //2 cos 3 ÷ 9 x sin or 2 cos 3 / 9 *  sin
//depending on the preference of symbol used wrt to
// multiplication, either (* or x) and division, either (/ or ÷)

let mathExpr5 = "Γ(6) * 9!"
console.log(Infix_toPrefix.toPrefix_RPN(mathExpr5)) //6  Γ 9  ! *

let mathExpr6 = "ln(2) + 4"
console.log(Infix_toPrefix.toPrefix_RPN(mathExpr6)) //2  ln 4  +

let mathExpr7 = "9C9 * 16"
console.log(Infix_toPrefix.toPrefix_RPN(mathExpr7)) //9 9 C 16  *

let mathExpr8 = "9P8 + 2 / 17"
console.log(Infix_toPrefix.toPrefix_RPN(mathExpr8)) //9 8 P 2 17  / +

let mathExpr9 = "5! x 9P2 + ln(2)"
console.log(Infix_toPrefix.toPrefix_RPN(mathExpr9)) //5  ! 9 2 P x 2   ln +

let mathExpr10 = "7Mod2 x 3"
console.log(Infix_toPrefix.toPrefix_RPN(mathExpr10)) // 7 2 Mod 3  x



