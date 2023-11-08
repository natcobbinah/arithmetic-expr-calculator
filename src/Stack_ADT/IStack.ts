interface IStack<T>{
    isEmpty() : boolean;
    peek(): T;
    pop(): T;
    push(item : T) : void;
    size(): number;
}

export default IStack