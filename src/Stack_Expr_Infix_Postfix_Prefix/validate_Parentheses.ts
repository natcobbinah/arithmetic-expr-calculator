import LinkedStack from "../Stack_ADT/LinkedStack"

const valid_parentheses = (statement: string[]) => {
    let stack = new LinkedStack<string>();
    const open_bracket = '('
    const closing_bracket = ')'
    let last_bracket_symbol = ''

    for (let ch of statement) {
        if (ch === open_bracket) {
            stack.push(ch)
        }

        if (ch === closing_bracket) {
            if (!stack.isEmpty()) {
                last_bracket_symbol = stack.pop()
            } else {
                return false
            }
        }

        if (last_bracket_symbol === '(' && ch === ')') {
            continue
        }
    }

    if (!stack.isEmpty()) {
        return false
    } else {
        return true
    }
}

export default valid_parentheses
