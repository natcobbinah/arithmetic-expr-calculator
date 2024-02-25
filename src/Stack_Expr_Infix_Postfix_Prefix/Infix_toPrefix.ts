import LinkedStack from "../Stack_ADT/LinkedStack";
import TokenizeExpression from "./Tokenize_Expression";
import ConvertToStandard_Expression from "./convert_toStandardExpression";

class Infix_toPrefix {
    static stack = new LinkedStack<String>();
    static SPACE: String = " ";  // space is used to separate each operator or operand in final expr

    private static rank(term: String): number {
        switch (term) {
            case "!": case "sin": case "cos": case "tan":
            case "sec": case "csc": case "cot":
            case "arcsin": case "arccos": case "arctan":
            case "log": case "ln": case "Γ":
                return 5
            case "C": case "P":
                return 4
            case "^":
                return 3;
            case "*": case "x": case "/": case "÷": case "Mod":
                return 2;
            case "+": case "-":
                return 1;
            case ")":
                return 0;
            default:
                return -1;
        }
    }


    public static toPrefix_RPN(math_expression: string): String[] {
        let prefix_expr = "";

        //remove all whitespaces from string
        math_expression = math_expression.replace(/\s/g, '')

        let cleanedExpression = ConvertToStandard_Expression.standardized_Expression(math_expression)

        //reverse infix expression
        math_expression = cleanedExpression.split("").reverse().join("");

        console.log("mathexpr=" + math_expression)

        let tokenizedExpression = TokenizeExpression.tokenize(math_expression)

        console.log(tokenizedExpression)

        for (let term of tokenizedExpression) {
            if (this.rank(term) == 0) {
                this.stack.push(term);
            } else if (term === "(") {
                while (!this.stack.isEmpty() && this.rank(this.stack.peek()) > 0) {
                    prefix_expr += this.SPACE;
                    prefix_expr += this.stack.pop();
                }
                this.stack.pop();
            } else if (this.rank(term) > 0) {
                //in prefix, we pop only operators that have greater than (>) precedence, and not greater than or equal to (>=) 
                // as in the case with postfix
                while (!this.stack.isEmpty() && this.rank(this.stack.peek()) > this.rank(term)) {
                    prefix_expr += this.SPACE;
                    prefix_expr += this.stack.pop();
                }
                this.stack.push(term);
            } else {
                prefix_expr += this.SPACE;
                prefix_expr += term;
            }
        }

        // add any remaining operator on stack to postfix_expr
        while (!this.stack.isEmpty()) {
            prefix_expr += this.SPACE;
            prefix_expr += this.stack.pop();
        }

        //reverse output string to obtain prefix expression
        prefix_expr = prefix_expr.split("").reverse().join("");

        console.log("Prefix Expression = " + prefix_expr)

        return TokenizeExpression.splitByWhiteSpaces(prefix_expr)

    }
}

export default Infix_toPrefix