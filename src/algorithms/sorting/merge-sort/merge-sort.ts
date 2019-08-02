export function mergeSort<T>(values: T[] = []): T[] {
	if (values.length === 1) { return values; }

	const middle = values.length / 2;
	const left = values.slice(0, middle);
	const right = values.slice(middle);

	return merge(mergeSort(left), mergeSort(right));
}

function merge<T>(left: T[], right: T[]): T[] {
	let leftIndex = 0;
	let rightIndex = 0;
	const result: T[] = [];

	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] > right[rightIndex]) {
			result.push(right[rightIndex]);
			rightIndex++;
		} else {
			result.push(left[leftIndex]);
			leftIndex++;
		}
	}

	return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

export default mergeSort;