import Infix_toPrefix from "./Infix_toPrefix";
import Eval_Prefix from "./Eval_Prefix";

//test1
let mathExpr1 = "( 1 + 2 ) * 3";
let prefix_expr = Infix_toPrefix.toPrefix_RPN(mathExpr1); // *  + 1 2  3 
let evaluatedResult = Eval_Prefix.evalPrefix_RPN(prefix_expr); //9
console.log(evaluatedResult)


//test2 
let mathExpr2 = "1 + 2 * 3"
let resultforExpr2 = Eval_Prefix.evalPrefix_RPN(
    Infix_toPrefix.toPrefix_RPN(mathExpr2)   //+ 1 * 2 3
);
console.log(resultforExpr2) //7

 
//test3
let mathExpr3 = "2 ^ 3 + 5 * 7";
let resultforExpr3 = Eval_Prefix.evalPrefix_RPN(
    Infix_toPrefix.toPrefix_RPN(mathExpr3)  // + ^ 2 3 * 5 7 
);
console.log(resultforExpr3) //43

//test4
let mathExpr4 = "1-11";
let resultforExpr4 = Eval_Prefix.evalPrefix_RPN(
    Infix_toPrefix.toPrefix_RPN(mathExpr4)  //- 1 11 
);
console.log(resultforExpr4) //-10

//test5
let mathExpr5 = "-1+2";
let resultforExpr5 = Eval_Prefix.evalPrefix_RPN(
    Infix_toPrefix.toPrefix_RPN(mathExpr5) // -  + 1 2 
);
console.log(resultforExpr5) //1   

//test6
let mathexpr6 = "( x - y ) * ( z + w ) / ( u + v )"
console.log(Infix_toPrefix.toPrefix_RPN(mathexpr6)) // x y - z w + * u v + /

//test7
let mathexpr7 = "x * y / ( z - w + v * u )"
console.log(Infix_toPrefix.toPrefix_RPN(mathexpr7)) // x y * z w - v u * + /

//test8
let mathexpr8 = "( x + y + z ) * ( w - v ) / u"
console.log(Infix_toPrefix.toPrefix_RPN(mathexpr8)) //x y + z + w v - * u /

//test9
let mathexpr9 = "x ^ y + z * w - v / u"
console.log(Infix_toPrefix.toPrefix_RPN(mathexpr9)) // x y ^ z w * + v u / -


//test10
let mathexpr10 = "2.2 + 7.89 * 9.45 - 6.79 ^ 3 * ( 44 / 3 ) / 9"
console.log(Eval_Prefix.evalPrefix_RPN(
    Infix_toPrefix.toPrefix_RPN(mathexpr10)
)) // -433.3899042962963   

//test11
let mathexpr11 = "1- ( -2)"
console.log(Eval_Prefix.evalPrefix_RPN(
    Infix_toPrefix.toPrefix_RPN(mathexpr11)
)) //3

