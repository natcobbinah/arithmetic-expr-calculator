class Math_Functions {

    static factorial(value: number): number {
        let memo: { [key: number]: number } = {
            0: 1,
            1: 1,
            2: 2,
            3: 6
        }

        if (value in memo)
            return memo[value]

        let result = value * this.factorial(value - 1)
        memo[result] = result
        return result
    }

    static combination(value1: number, value2: number): number {
        let factorial_of_value1 = this.factorial(value1)
        let factorial_of_value2 = this.factorial(value2)

        let upper_lower_difference = value1 - value2
        let upper_lower_difference_factorial = this.factorial(upper_lower_difference)

        let denominator_multiply = upper_lower_difference_factorial * factorial_of_value2

        return factorial_of_value1 / denominator_multiply
    }

    static permutation(value1_arg: number, value2_arg: number): number {
        let factorial_of_value1_arg = this.factorial(value1_arg)
        let value_args_difference = value1_arg - value2_arg

        let value_args_difference_factorial = this.factorial(value_args_difference)

        return factorial_of_value1_arg / value_args_difference_factorial
    }
}

export default Math_Functions