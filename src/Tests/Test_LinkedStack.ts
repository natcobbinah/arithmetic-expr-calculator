import LinkedStack from "./LinkedStack";

const stack = new LinkedStack<String>();
stack.push("a")
stack.push("b")
stack.push("c")
stack.push("d")

console.log(stack.peek()) //d

console.log(stack.size()) //4

while(!stack.isEmpty()){
    console.log(stack.pop()) //dcba
}
