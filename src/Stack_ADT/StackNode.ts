class StackNode<T>{
    data : T;
    next : StackNode<T>;

    constructor(data : T){
        this.data = data;
        this.next = null;
    }

}

export default StackNode