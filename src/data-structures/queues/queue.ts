export class Queue<T> {
	private elements: T[];

	public constructor() {
		this.elements = new Array<T>();
	}

	public dequeue(): T {
		if (this.elements.length > 0) {
			return this.elements.pop();
		}
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
}