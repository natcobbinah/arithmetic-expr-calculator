import LinkedStack from "../Stack_ADT/LinkedStack";

class Eval_Prefix {
    static stack = new LinkedStack<String>();

    private static calc(term: String, lhs_operand: number, rhs_operand: number): number {
        switch (term) {
            case "+":
                return lhs_operand + rhs_operand;
            case "-":
                return lhs_operand - rhs_operand;
            case "*":
                return lhs_operand * rhs_operand;
            case "/":
                return lhs_operand / rhs_operand;
            case "^":
                return Math.pow(lhs_operand, rhs_operand);
            default:
                return 0;
        }
    }

    public static evalPrefix_RPN(expr: String): number {
        let terms = expr.split(" ")
        let pointer = terms.length - 1

        while (pointer >= 0) {
            if (terms[pointer] === "+" || terms[pointer] === "-" ||
                terms[pointer] === "/" || terms[pointer] === "*" || terms[pointer] === "^") {

                let lhs_operand = this.stack.pop()
                let rhs_operand = this.stack.pop()
                let result = this.calc(terms[pointer], Number(lhs_operand), Number(rhs_operand));
                this.stack.push(String(result));

            } else {
                this.stack.push(terms[pointer])
            }
            pointer -= 1
        }

        return Number(this.stack.pop());
    }
}

export default Eval_Prefix