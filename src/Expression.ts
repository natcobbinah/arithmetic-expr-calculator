import Eval_Postfix from "./Stack_Expr_Infix_toPostfix/Eval_Postfix";
import Infix_toPostfix from "./Stack_Expr_Infix_toPostfix/Infix_toPostfix";

export class Expression{

    public convert_to_PostfixRPN(expr: String):String{
        return  Infix_toPostfix.toPostfix_RPN(expr);
    }

    public eval_Expression(expr: String){
        return Eval_Postfix.evalPostfix_RPN(expr)
    }
}