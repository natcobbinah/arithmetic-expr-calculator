import ConvertToStandard_Expression from "./convert_toStandardExpression";

let math_expr = "-1+2"
let cleanedExpression = ConvertToStandard_Expression
    .standardized_Expression(math_expr);

console.log(cleanedExpression) //0-1+2

let math_expr2 = "1-(-2)"
let cleanedExpression2 = ConvertToStandard_Expression
    .standardized_Expression(math_expr2);

console.log(cleanedExpression2) //1-(0-2)