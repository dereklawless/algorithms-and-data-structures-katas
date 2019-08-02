export function quickSort<T>(values: T[] = []): T[] {
	const len = values.length;

	if (len <= 1) { return values; }

	const pivot = getMedianOfThree(values[0], values[Math.floor(len / 2)], values[len - 1]);

	const left: T[] = [];
	const equal: T[] = [];
	const right: T[] = [];

	for (let i = 0; i < len; i++) {
		if (values[i] < pivot) {
			left.push(values[i]);
		} else if (values[i] > pivot) {
			right.push(values[i]);
		} else {
			equal.push(values[i]);
		}
	}

	return concatenate(quickSort(left), equal, quickSort(right));
}

function concatenate<T>(left: T[], equal: T[], right: T[]): T[] {
	return left.concat(equal).concat(right);
}

function getMedianOfThree<T>(val1: T, val2: T, val3: T): T {
	if ((val1 < val2) && (val1 > val3)) {
		return val1;
	}
	return (val2 < val3) ? val2 : val3;
}

export default quickSort;