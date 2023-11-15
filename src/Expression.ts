import Eval_Postfix from "./Stack_Expr_Infix_Postfix_Prefix/Eval_Postfix";
import Eval_Prefix from "./Stack_Expr_Infix_Postfix_Prefix/Eval_Prefix";
import Infix_toPostfix from "./Stack_Expr_Infix_Postfix_Prefix/Infix_toPostfix";
import Infix_toPrefix from "./Stack_Expr_Infix_Postfix_Prefix/Infix_toPrefix";

export class Expression {

    public convert_to_PostfixRPN(expr: String): String {
        return Infix_toPostfix.toPostfix_RPN(expr);
    }

    public convert_to_PrefixRPN(expr: String): String {
        return Infix_toPrefix.toPrefix_RPN(expr);
    }

    public eval_Expression(expr: String) {
        return Eval_Postfix.evalPostfix_RPN(expr)
    }

    public eval_Expression_Prefix(expr: String) {
        return Eval_Prefix.evalPrefix_RPN(expr)
    }

}