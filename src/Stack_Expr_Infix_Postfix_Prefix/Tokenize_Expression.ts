class TokenizeExpression {

    public static tokenize(expression: string) {
        return expression.split(/([*\/\(\)\^]|\b\s*-|\b\s*\+)/g)
    }

    public static splitByWhiteSpaces(expression:string){
        return expression.split(/\s+/);
    }
}

export default TokenizeExpression