export class LinkedListNode<T> {
	public next: LinkedListNode<T>;
	public previous?: LinkedListNode<T>;

	public constructor(public readonly value: T) {}
}

export default LinkedListNode;