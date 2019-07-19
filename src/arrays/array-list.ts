export class ArrayList<T> {
	public length: number = 0;
	private _array: T[];

	public constructor(initialLength = 0) {
		this._array = new Array<T>(initialLength);
	}

	public add(value: T): void {
		if (this.length === this._array.length) {
			this._resize();
		}
		this._array[this.length++] = value;
	}

	// Function added purely for tests.
	public getCapacity(): number {
		return this._array.length;
	}

	private _resize(): void {
		const originalArray = this._array;
		this._array = new Array(this.length * 2);
		for (let i = 0; i < this.length; i++) {
			this._array[i] = originalArray[i];
		}
	}
}

export default ArrayList;