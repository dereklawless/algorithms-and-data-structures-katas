import { LinkedListNode } from "./linked-list-node";

export class DoublyLinkedList<T> {
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

		// Link the nodes.
		this.head.next = originalHeadNode;
		originalHeadNode.previous = this.head;

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
			// Link the nodes.
			this.tail.next = node;
			node.previous = this.tail;
		}
		// Set the new tail.
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
		let node = this.head;
		let i = 0;

		while (node && i++ < index) {
			node = node.next;
		}

		// Bounds checking.
		if (index >= i) { return; }

		if (!node.previous) {
			this.head = node.next;
		} else {
			node.previous.next = node.next;
			node.next.previous = node.previous.next;
		}
	}
}

export default DoublyLinkedList;