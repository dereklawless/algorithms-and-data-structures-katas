export interface IBinarySearchResult {
	iterations: number;
	position: number;
}

export function binarySearch<T>(values: T[] = [], target: T): IBinarySearchResult {
	let low = 0;
	let high = values.length - 1;
	let middle = Math.floor(high / 2);
	let iterations = 0;

	// Assumes a sorted array.
	while (values[middle] !== target && low < high) {
		if (target < values[middle]) {
			high = middle - 1;
		} else if (target > values[middle]) {
			low = middle + 1;
		}

		middle = Math.floor((high + low) / 2);
		iterations++;
	}

	return {
		iterations,
		position: (values[middle] === target) ? middle : -1,
	};
}

export default binarySearch;