import valid_parentheses from "../Stack_Expr_Infix_Postfix_Prefix/validate_Parentheses";

let mathExpr1 = ["2", "+", "(", "2", ")"]
console.log(valid_parentheses(mathExpr1)) //true

let mathExpr2 = ["2", "+", "(", "2"]
console.log(valid_parentheses(mathExpr2)) //false

let onlyBrackets1 = ["(", "(", ")", "(", ")", ")"]
console.log(valid_parentheses(onlyBrackets1)) //true

let onlyBrackets2 = ["(", "(", ")", ")", ")"]
console.log(valid_parentheses(onlyBrackets2)) //false