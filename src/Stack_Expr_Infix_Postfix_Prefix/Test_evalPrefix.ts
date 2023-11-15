import Infix_toPrefix from "./Infix_toPrefix";
import Eval_Prefix from "./Eval_Prefix";

//test1
let mathExpr1 = "( 1 + 2 ) * 3";
let prefix_expr = Infix_toPrefix.toPrefix_RPN(mathExpr1); // * + 1 2 3 
let evaluatedResult = Eval_Prefix.evalPrefix_RPN(prefix_expr); //9
console.log(evaluatedResult)

//test2 
let mathExpr2 = "1 + 2 * 3"
let resultforExpr2 = Eval_Prefix.evalPrefix_RPN(
    Infix_toPrefix.toPrefix_RPN(mathExpr2)
);
console.log(resultforExpr2) //7

