import LinkedStack from "../Stack_ADT/LinkedStack";

class Eval_Postfix {
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

    public static evalPostfix_RPN(expr: String): number {
        for (let term of expr.split(" ")) {
            if (term === "+" || term === "-" || term === "/" ||
                term === "*" || term === "^") {
                let rhs_operand = this.stack.pop();
                let lhs_operand = this.stack.pop();
                let result = this.calc(term, Number(lhs_operand), Number(rhs_operand));
                this.stack.push(String(result));
            } else {
                this.stack.push(term);
            }
        }
        return Number(this.stack.pop());
    }
}

export default Eval_Postfix