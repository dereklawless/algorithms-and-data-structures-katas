export class Queue<T> {
	private elements: T[];

	public constructor() {
		this.elements = new Array<T>();
	}

	public dequeue(): T | undefined {
		if (this.elements.length > 0) {
			return this.elements.pop();
		}
		return undefined;
	}

	public enqueue(element: T): void {
		this.elements.unshift(element);
	}

	public isEmpty(): boolean {
		return this.elements.length < 1;
	}

	public length(): number {
		return this.elements.length;
	}

	public peek(): T | undefined {
		return !this.isEmpty() ?
			this.elements[this.elements.length - 1] :
			undefined;
	}
}