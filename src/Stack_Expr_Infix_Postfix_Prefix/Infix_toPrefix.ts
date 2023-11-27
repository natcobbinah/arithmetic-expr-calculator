import LinkedStack from "../Stack_ADT/LinkedStack";
import TokenizeExpression from "./Tokenize_Expression";
import ConvertToStandard_Expression from "./convert_toStandardExpression";

class Infix_toPrefix {
    static stack = new LinkedStack<String>();
    static SPACE: String = " ";  // space is used to separate each operator or operand in final expr

    private static rank(term: String): number {
        switch (term) {
            case "^":
                return 3;
            case "*":
            case "/":
                return 2;
            case "+":
            case "-":
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
                while (!this.stack.isEmpty() && this.rank(this.stack.peek()) >= this.rank(term)) {
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

        console.log(prefix_expr)

        return TokenizeExpression.splitByWhiteSpaces(prefix_expr)

    }
}

export default Infix_toPrefix