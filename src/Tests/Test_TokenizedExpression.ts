import TokenizeExpression from "../Stack_Expr_Infix_Postfix_Prefix/Tokenize_Expression";

let math_expr = "1+2-3/6*4"
let output = TokenizeExpression.tokenize(math_expr)
console.log(output) //['1', '+', '2','-', '3', '/','6', '*', '4']

let math_expr2 = "1-(0-2)"
let output2 = TokenizeExpression.tokenize(math_expr2)
console.log(output2) //['1', '-', '', '(', '-', '2', ')','']

let math_expr3 = "1-11"
let output3 = TokenizeExpression.tokenize(math_expr3)
console.log(output3) //[ '1', '-', '11' ]

let math_expr4 = "7.45-3.67"
let output4 = TokenizeExpression.tokenize(math_expr4)
console.log(output4) //[ '7.45', '-', '3.67' ]

let math_expr5 = "20 + (34 + 8 - (15 - 7) + 21) - 26"
let output5 = TokenizeExpression.tokenize(math_expr5)
console.log(output5)

