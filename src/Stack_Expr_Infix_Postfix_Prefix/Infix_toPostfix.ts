import LinkedStack from "../Stack_ADT/LinkedStack";

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

    public static toPostfix_RPN(math_expression: String): String {
        let postfix_expr = "";

        for (let term of math_expression.split(" ")) { // split by spaces
            if (this.rank(term) == 0) {
                this.stack.push(term);
            } else if (term === ")") {
                while (!this.stack.isEmpty() && this.rank(this.stack.peek()) > 0) {
                    postfix_expr += this.SPACE;
                    postfix_expr += this.stack.pop();
                }
                this.stack.pop();
            } else if (this.rank(term) > 0) {
                while (!this.stack.isEmpty() && this.rank(this.stack.peek()) >= this.rank(term)) {
                    postfix_expr += this.SPACE;
                    postfix_expr += this.stack.pop();
                }
                this.stack.push(term);
            } else {
                postfix_expr += this.SPACE;
                postfix_expr += term;
            }
        }

        // add any remaining operator on stack to postfix_expr
        while (!this.stack.isEmpty()) {
            postfix_expr += this.SPACE;
            postfix_expr += this.stack.pop();
        }

        return postfix_expr;
    }
}

export default Infix_toPostfix