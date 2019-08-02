export function insertionSort<T>(values: T[] = []): T[] {
	let unsorted = 1;
	while (unsorted < values.length) {
		const hold = values[unsorted];

		let i = unsorted - 1;
		while (i >= 0 && hold < values[i]) {
			values[i + 1] = values[i];
			i--;
		}

		values[i + 1] = hold;
		unsorted++;
	}

	return values;
}

export default insertionSort;