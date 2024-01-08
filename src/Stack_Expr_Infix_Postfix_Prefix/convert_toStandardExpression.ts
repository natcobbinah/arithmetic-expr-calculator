class ConvertToStandard_Expression {

    public static standardized_Expression(math_expression: string) {
        let standard_expr = ""
        let i = 0

        while (i < math_expression.length) {
            if (math_expression[i] == "+" || math_expression[i] == "-") {
                if (i == 0 || math_expression[i - 1] == "(") {
                    standard_expr += '0'
                }
            }
            standard_expr += math_expression[i]
            i += 1
        }
        return standard_expr

    }

}

export default ConvertToStandard_Expression