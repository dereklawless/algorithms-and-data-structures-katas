export class Stack<T> {
	private elements: T[];

	public constructor() {
		this.elements = new Array<T>();
	}

	public isEmpty(): boolean {
		return this.elements.length < 1;
	}

	public length(): number {
		return this.elements.length;
	}

	public peek(): T {
		return this.elements[this.elements.length - 1];
	}

	public pop(): T {
		if (this.elements.length > 0) {
			return this.elements.pop();
		}
	}

	public push(item: T): void {
		this.elements.push(item);
	}
}