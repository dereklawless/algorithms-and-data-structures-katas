export function linearSearch<T>(values: T[] = [], target: T): number {
	for (let i = 0; i < values.length; i++) {
		if (values[i] === target) { return i; }
	}
	return -1;
}

export default linearSearch;