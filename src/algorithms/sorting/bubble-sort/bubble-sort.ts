// tslint:disable:prefer-for-of
export function bubbleSort<T>(values: T[] = []): T[] {
	const len = values.length;
	for (let i = 0; i < len; i++) {
		for (let j = 0; j < len; j++) {
			if (values[j] > values[j + 1]) {
				const tmp = values[j];
				values[j] = values[j + 1];
				values[j + 1] = tmp;
			}
		}
	}

	return values;
}

export function bubbleSortOptimal<T>(values: T[] = []): T[] {
	const len = values.length;
	let repeat: boolean;

	do {
		repeat = false;
		for (let i = 0; i < len; i++) {
			if (values[i] > values[i + 1]) {
				const tmp = values[i];
				values[i] = values[i + 1];
				values[i + 1] = tmp;
				repeat = true;
			}
		}
	} while (repeat);

	return values;
}

export default bubbleSort;