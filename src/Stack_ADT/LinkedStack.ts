import StackNode from "./StackNode";
import IStack from "./IStack";

class LinkedStack<T> implements IStack<T>{
    top: StackNode<T>;
    stackSize: number = 0;

    isEmpty(): boolean {
        return (this.stackSize == 0)
    }

    peek(): T {
        if (this.top != null) {
            return this.top.data;
        } else {
            return null;
        }
    }

    pop(): T {
        if (this.top != null) {
            const data = this.top.data;
            this.stackSize -= 1
            if (this.top.next != null) {
                this.top = this.top.next;
            } else {
                this.top = null;
            }
            return data;
        } else {
            return null;
        }
    }

    push(item: T): void {
        let node = new StackNode<T>(item);
        if (this.top != null) {
            node.next = this.top;
            this.top = node;
        } else {
           this.top = node;
        }
        this.stackSize += 1;

    }

    size(): number {
        return this.stackSize;
    }

}

export default LinkedStack