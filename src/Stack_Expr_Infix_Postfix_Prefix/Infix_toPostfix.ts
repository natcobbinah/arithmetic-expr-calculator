import LinkedStack from "../Stack_ADT/LinkedStack";
import ConvertToStandard_Expression from "./convert_toStandardExpression";
import TokenizeExpression from "./Tokenize_Expression";

class Infix_toPostfix {
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
            case "(":
                return 0;
            default:
                return -1;
        }
    }

    public static toPostfix_RPN(math_expression: string): String[] {
        let postfix_expr = "";

        //remove all whitespaces from string
        math_expression = math_expression.replace(/\s/g, '')

        let cleanedExpression = ConvertToStandard_Expression.standardized_Expression(math_expression)
        let tokenizedExpression = TokenizeExpression.tokenize(cleanedExpression)

        console.log(tokenizedExpression)

        for (let term of tokenizedExpression) {
            if (this.rank(term) == 0) {
                this.stack.push(term);
            } else if (term === ")") {
                while (!this.stack.isEmpty() && this.rank(this.stack.peek()) > 0) {
                    postfix_expr += this.stack.pop();
                    postfix_expr += this.SPACE;
                }
                this.stack.pop();
            } else if (this.rank(term) > 0) {
                while (!this.stack.isEmpty() && this.rank(this.stack.peek()) >= this.rank(term)) {
                    postfix_expr += this.stack.pop();
                    postfix_expr += this.SPACE;
                }
                this.stack.push(term);
            } else {
                postfix_expr += term;
                postfix_expr += this.SPACE;
            }
        }

        // add any remaining operator on stack to postfix_expr
        while (!this.stack.isEmpty()) {
            postfix_expr += this.SPACE;
            postfix_expr += this.stack.pop();
        }

        console.log(postfix_expr)
        return TokenizeExpression.splitByWhiteSpaces(postfix_expr)
    }
}

export default Infix_toPostfix