import Eval_Postfix from "./Stack_Expr_Infix_toPostfix/Eval_Postfix";
import Infix_toPostfix from "./Stack_Expr_Infix_toPostfix/Infix_toPostfix";

class Expression{

    convert_to_PostfixRPN(expr: String):String{
        return  Infix_toPostfix.toPostfix_RPN(expr);
    }

    eval_Expression(expr: String){
        return Eval_Postfix.evalPostfix_RPN(expr)
    }
}

export default Expression