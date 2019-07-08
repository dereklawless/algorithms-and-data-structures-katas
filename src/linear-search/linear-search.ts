export function linearSearch<T>(values: T[] = [], val: T): number {
	for (let i = 0; i < values.length; i++) {
		if (values[i] === val) { return i; }
	}
	return -1;
}

export default linearSearch;