import { Expression } from "./Expression";

let expr = new Expression()

//test1
let mathExpr1 = "( 1 + 2 ) * 3";
let postfix_expr = expr.convert_to_PostfixRPN(mathExpr1); // 1 2 + 3 *
let evaluatedResult = expr.eval_Expression(postfix_expr); //9
console.log(evaluatedResult)

//test1 Prefix
let prefix_expr = expr.convert_to_PrefixRPN(mathExpr1); // * + 1 2 3 
let evaluatedResult_prefix = expr.eval_Expression_Prefix(prefix_expr); //9
console.log(evaluatedResult_prefix)

//test2 
let mathExpr2 = "1 + 2 * 3"
let resultforExpr2 = expr.eval_Expression(
    expr.convert_to_PostfixRPN(mathExpr2)
);
console.log(resultforExpr2) //7

//test2 prefix
let resultforExpr2_prefix = expr.eval_Expression_Prefix(
    expr.convert_to_PrefixRPN(mathExpr2)
);
console.log(resultforExpr2_prefix) //7

//test3
let mathExpr3 = "2 ^ 3 + 5 * 7";
let resultforExpr3 = expr.eval_Expression(
    expr.convert_to_PostfixRPN(mathExpr3)
);
console.log(resultforExpr3) //43

//test3 prefix
let resultforExpr3_prefix = expr.eval_Expression_Prefix(
    expr.convert_to_PrefixRPN(mathExpr3)
);
console.log(resultforExpr3_prefix) //43

//test4
let mathexpr4 = "( x - y ) * ( z + w ) / ( u + v )"
console.log(expr.convert_to_PostfixRPN(mathexpr4)) // x y - z w + * u v + /
console.log(expr.convert_to_PrefixRPN(mathexpr4)) // * - x y / + z w + u v 

//test5
let mathexpr5 = "x * y / ( z - w + v * u )"
console.log(expr.convert_to_PostfixRPN(mathexpr5)) // x y * z w - v u * + /
console.log(expr.convert_to_PrefixRPN(mathexpr5)) // * x / y - z + w * v u

//test6
let mathexpr6 = "( x + y + z ) * ( w - v ) / u"
console.log(expr.convert_to_PostfixRPN(mathexpr6)) //x y + z + w v - * u /
console.log(expr.convert_to_PrefixRPN(mathexpr6)) //* + x + y z / - w v u

//test7
let mathexpr7 = "x ^ y + z * w - v / u"
console.log(expr.convert_to_PostfixRPN(mathexpr7)) // x y ^ z w * + v u / -
console.log(expr.convert_to_PrefixRPN(mathexpr7)) // + ^ x y - * z w / v u

//test8
let mathexpr8 = "2.2 + 7.89 * 9.45 - 6.79 ^ 3 * ( 44 / 3 ) / 9"
console.log(expr.eval_Expression(
    expr.convert_to_PostfixRPN(mathexpr8)
)) // -433.3899042962963

//test8 prefix
console.log(expr.eval_Expression_Prefix(
    expr.convert_to_PrefixRPN(mathexpr8)
)) // -433.3899042962963