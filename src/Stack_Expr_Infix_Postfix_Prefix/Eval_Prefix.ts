import LinkedStack from "../Stack_ADT/LinkedStack";
import Math_Functions from "../Custom_Math_Functions/fact_comb_perm_impl";
import Gamma_Function from "../Custom_Math_Functions/gamma_impl";
import Trignometry from "../Custom_Math_Functions/trig_functions_impl";

class Eval_Prefix {
    static stack = new LinkedStack<String>();

    private static calc(term: String, lhs_operand: number, rhs_operand: number): number {
        switch (term) {
            case "+":
                return lhs_operand + rhs_operand;
            case "-":
                return lhs_operand - rhs_operand;
            case "*":
            case "x":
                return lhs_operand * rhs_operand;
            case "/":
            case "÷":
                return lhs_operand / rhs_operand;
            case "^":
                return Math.pow(lhs_operand, rhs_operand);
            case "Mod":
                return lhs_operand % rhs_operand
            case "P":
                return Math_Functions.permutation(lhs_operand, rhs_operand)
            case "C":
                return Math_Functions.combination(lhs_operand, rhs_operand)
            default:
                return 0;
        }
    }

    public static calc_unary(term: String, operand: number) {
        switch (term) {
            case "Γ":
                return Gamma_Function.gamma(operand)
            case "!":
                return Math_Functions.factorial(operand)
            case "sin":
                return Math.sin(operand)
            case "cos":
                return Math.cos(operand)
            case "tan":
                return Math.tan(operand)
            case "sec":
                return Trignometry.sec(operand)
            case "csc":
                return Trignometry.cosec(operand)
            case "cot":
                return Trignometry.cot(operand)
            case "arcsin":
                return Trignometry.sin_inverse(operand)
            case "arccos":
                return Trignometry.cos_inverse(operand)
            case "arctan":
                return Trignometry.tan_inverse(operand)
            case "ln":
                return Trignometry.ln(operand)
        }
    }


    public static evalPrefix_RPN(terms: String[]): number {
        let final_result = ""

        let pointer = terms.length - 1

        while (pointer >= 0) {
            if (terms[pointer] === "+" || terms[pointer] === "-" || terms[pointer] === "/" ||
                terms[pointer] === "*" || terms[pointer] === "^" || terms[pointer] === "x" ||
                terms[pointer] === "÷" || terms[pointer] === "Mod" || terms[pointer] === "P" ||
                terms[pointer] === "C") {

                let lhs_operand = this.stack.pop()
                let rhs_operand = this.stack.pop()
                let result = this.calc(terms[pointer], Number(lhs_operand), Number(rhs_operand));
                this.stack.push(String(result));

            } else if (terms[pointer] === "Γ" || terms[pointer] === "!" || terms[pointer] === "sin" ||
                terms[pointer] === "cos" || terms[pointer] === "tan" || terms[pointer] === "sec" ||
                terms[pointer] === "csc" || terms[pointer] === "cot" || terms[pointer] === "log" ||
                terms[pointer] === "ln" || terms[pointer] === "arcsin" || terms[pointer] === "arccos" ||
                terms[pointer] === "arctan") {

                let operand = this.stack.pop()
                let unary_op_result = this.calc_unary(terms[pointer], Number(operand));
                this.stack.push(String(unary_op_result))

            } else {
                this.stack.push(terms[pointer])
            }
            pointer -= 1
        }

        // should in case only operand with no operators are keyed as input
        if (this.stack.size() > 1) {
            while (!this.stack.isEmpty()) {
                final_result += this.stack.pop()
            }
            return Number(final_result)
        }
        else {
            return Number(this.stack.pop());
        }
    }
}

export default Eval_Prefix