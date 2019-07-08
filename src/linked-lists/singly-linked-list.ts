import { LinkedListNode } from "./linked-list-node";

export class SinglyLinkedList<T> {
	public head: LinkedListNode<T> = null;
	public tail: LinkedListNode<T> = null;

	public constructor() {
	}

	public add(value: T) {
		this.addLast(value);
	}

	public addFirst(value: T): void {
		const node = new LinkedListNode(value);

		const originalHeadNode = this.head;
		this.head = node;
		this.head.next = originalHeadNode;

		if (!this.tail) {
			// There is one node in the list, set the tail node to the head.
			this.tail = this.head;
		}
	}

	public addLast(value: T): void {
		const node = new LinkedListNode(value);

		if (!this.head) {
			this.head = node;
		}
		if (this.tail) {
			this.tail.next = node;
		}
		this.tail = node;
	}

	public *iterator() {
		let node = this.head;
		while (node) {
			yield node.value;
			node = node.next;
		}
	}

	public removeAt(index: number): void {
		let previous: LinkedListNode<T> = null;
		let node = this.head;
		let i = 0;

		while (node && i++ < index) {
			previous = node;
			node = node.next;
		}

		// Bounds checking.
		if (index >= i) { return; }

		if (!previous) {
			this.head = node.next;
		} else {
			previous.next = node.next;
		}
	}
}

export default SinglyLinkedList;