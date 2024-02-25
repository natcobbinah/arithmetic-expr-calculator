class TokenizeExpression {

    public static tokenize(expression: string) {
        return expression.split(/([*\/\(\)\^\-\+\÷\x\!\C\P]|\b\s*-|\b\s*\+|M[a-z]+)/g)
    }

    public static splitByWhiteSpaces(expression: string) {
        return expression.split(/\s+/);
    }
}

export default TokenizeExpression